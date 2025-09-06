import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { usePlugin } from '../context/PluginContext';
import * as FiIcons from 'react-icons/fi';

const { FiKey, FiEye, FiEyeOff, FiCheck, FiAlertCircle, FiExternalLink, FiShield } = FiIcons;

function PluginConfiguration() {
  const { state, setCredentials, setConnectionStatus, setLoading, setError, clearError } = usePlugin();
  const [showApiKey, setShowApiKey] = useState(false);
  const [showToken, setShowToken] = useState(false);
  const [formData, setFormData] = useState({
    apiKey: state.credentials.apiKey,
    token: state.credentials.token
  });
  const [testingConnection, setTestingConnection] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    clearError();
  };

  const handleSaveCredentials = () => {
    if (!formData.apiKey.trim() || !formData.token.trim()) {
      setError('Please provide both API Key and Token');
      return;
    }

    setCredentials(formData);
    setError(null);
  };

  const handleTestConnection = async () => {
    if (!formData.apiKey.trim() || !formData.token.trim()) {
      setError('Please provide credentials before testing connection');
      return;
    }

    setTestingConnection(true);
    setLoading(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success
      setConnectionStatus(true);
      setCredentials(formData);
      setError(null);
    } catch (error) {
      setError('Failed to connect to Trello API. Please check your credentials.');
      setConnectionStatus(false);
    } finally {
      setTestingConnection(false);
      setLoading(false);
    }
  };

  const connectionStatus = state.isConnected ? 'connected' : 'disconnected';
  const statusColor = state.isConnected ? 'success-green' : 'error-red';

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-semibold text-dark-gray">Plugin Configuration</h2>
            <p className="text-neutral-gray mt-1">Set up your Trello API credentials to enable integration</p>
          </div>
          <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
            state.isConnected 
              ? 'bg-success-green/10 text-success-green' 
              : 'bg-error-red/10 text-error-red'
          }`}>
            <div className={`w-2 h-2 rounded-full bg-${statusColor}`}></div>
            <span className="capitalize">{connectionStatus}</span>
          </div>
        </div>

        {state.credentials.lastTested && (
          <div className="text-sm text-neutral-gray">
            Last tested: {new Date(state.credentials.lastTested).toLocaleString()}
          </div>
        )}
      </div>

      {/* Credentials Form */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center space-x-2 mb-4">
          <SafeIcon icon={FiShield} className="text-dify-blue text-lg" />
          <h3 className="text-lg font-semibold text-dark-gray">Trello API Credentials</h3>
        </div>

        <div className="space-y-4">
          {/* API Key */}
          <div>
            <label className="block text-sm font-medium text-dark-gray mb-2">
              API Key <span className="text-error-red">*</span>
            </label>
            <div className="relative">
              <input
                type={showApiKey ? 'text' : 'password'}
                value={formData.apiKey}
                onChange={(e) => handleInputChange('apiKey', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dify-blue focus:border-transparent transition-all duration-200 pr-12 font-mono text-sm"
                placeholder="Enter your Trello API key"
              />
              <button
                type="button"
                onClick={() => setShowApiKey(!showApiKey)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-gray hover:text-dark-gray transition-colors duration-200"
              >
                <SafeIcon icon={showApiKey ? FiEyeOff : FiEye} className="text-lg" />
              </button>
            </div>
          </div>

          {/* Token */}
          <div>
            <label className="block text-sm font-medium text-dark-gray mb-2">
              Token <span className="text-error-red">*</span>
            </label>
            <div className="relative">
              <input
                type={showToken ? 'text' : 'password'}
                value={formData.token}
                onChange={(e) => handleInputChange('token', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dify-blue focus:border-transparent transition-all duration-200 pr-12 font-mono text-sm"
                placeholder="Enter your Trello token"
              />
              <button
                type="button"
                onClick={() => setShowToken(!showToken)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-gray hover:text-dark-gray transition-colors duration-200"
              >
                <SafeIcon icon={showToken ? FiEyeOff : FiEye} className="text-lg" />
              </button>
            </div>
          </div>

          {/* Error Display */}
          {state.error && (
            <motion.div
              className="bg-error-red/10 border border-error-red/20 rounded-md p-3 flex items-start space-x-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <SafeIcon icon={FiAlertCircle} className="text-error-red text-lg mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-error-red font-medium text-sm">{state.error}</p>
              </div>
            </motion.div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-2">
            <button
              onClick={handleSaveCredentials}
              className="px-4 py-2 bg-dify-blue text-white rounded-md hover:bg-dify-blue/90 transition-colors duration-200 font-medium text-sm"
            >
              Save Credentials
            </button>
            
            <button
              onClick={handleTestConnection}
              disabled={testingConnection || !formData.apiKey || !formData.token}
              className="px-4 py-2 bg-success-green text-white rounded-md hover:bg-success-green/90 transition-colors duration-200 font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {testingConnection ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Testing...</span>
                </>
              ) : (
                <>
                  <SafeIcon icon={FiCheck} className="text-sm" />
                  <span>Test Connection</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Setup Instructions */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-dark-gray mb-4">Setup Instructions</h3>
        <div className="space-y-4 text-sm text-neutral-gray">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-dify-blue text-white rounded-full flex items-center justify-center text-xs font-semibold mt-0.5">1</div>
            <div>
              <p className="font-medium text-dark-gray">Get your API Key</p>
              <p>Visit the Trello Developer Portal and generate your API key.</p>
              <a
                href="https://trello.com/app-key"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-dify-blue hover:text-dify-blue/80 transition-colors duration-200 mt-1"
              >
                <span>Get API Key</span>
                <SafeIcon icon={FiExternalLink} className="text-xs" />
              </a>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-dify-blue text-white rounded-full flex items-center justify-center text-xs font-semibold mt-0.5">2</div>
            <div>
              <p className="font-medium text-dark-gray">Generate a Token</p>
              <p>Create a token with read and write permissions for your Trello boards.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-dify-blue text-white rounded-full flex items-center justify-center text-xs font-semibold mt-0.5">3</div>
            <div>
              <p className="font-medium text-dark-gray">Test Connection</p>
              <p>Use the test connection button to verify your credentials work correctly.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PluginConfiguration;