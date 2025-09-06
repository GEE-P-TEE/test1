import React, { createContext, useContext, useReducer } from 'react';

const PluginContext = createContext();

const initialState = {
  credentials: {
    apiKey: '',
    token: '',
    isValid: false,
    lastTested: null
  },
  settings: {
    defaultBoardId: '',
    defaultListId: '',
    contentTruncationLength: 10000,
    autoAddLabels: false,
    enableNotifications: true
  },
  recentCards: [],
  isConnected: false,
  loading: false,
  error: null
};

function pluginReducer(state, action) {
  switch (action.type) {
    case 'SET_CREDENTIALS':
      return {
        ...state,
        credentials: {
          ...state.credentials,
          ...action.payload
        }
      };
    
    case 'SET_CONNECTION_STATUS':
      return {
        ...state,
        isConnected: action.payload,
        credentials: {
          ...state.credentials,
          isValid: action.payload,
          lastTested: action.payload ? new Date().toISOString() : null
        }
      };
    
    case 'SET_SETTINGS':
      return {
        ...state,
        settings: {
          ...state.settings,
          ...action.payload
        }
      };
    
    case 'ADD_RECENT_CARD':
      return {
        ...state,
        recentCards: [action.payload, ...state.recentCards.slice(0, 9)]
      };
    
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null
      };
    
    default:
      return state;
  }
}

export function PluginProvider({ children }) {
  const [state, dispatch] = useReducer(pluginReducer, initialState);

  const value = {
    state,
    dispatch,
    // Helper functions
    setCredentials: (credentials) => dispatch({ type: 'SET_CREDENTIALS', payload: credentials }),
    setConnectionStatus: (status) => dispatch({ type: 'SET_CONNECTION_STATUS', payload: status }),
    setSettings: (settings) => dispatch({ type: 'SET_SETTINGS', payload: settings }),
    addRecentCard: (card) => dispatch({ type: 'ADD_RECENT_CARD', payload: card }),
    setLoading: (loading) => dispatch({ type: 'SET_LOADING', payload: loading }),
    setError: (error) => dispatch({ type: 'SET_ERROR', payload: error }),
    clearError: () => dispatch({ type: 'CLEAR_ERROR' })
  };

  return (
    <PluginContext.Provider value={value}>
      {children}
    </PluginContext.Provider>
  );
}

export function usePlugin() {
  const context = useContext(PluginContext);
  if (!context) {
    throw new Error('usePlugin must be used within a PluginProvider');
  }
  return context;
}