import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import PluginConfiguration from './pages/PluginConfiguration';
import CardCreation from './pages/CardCreation';
import Settings from './pages/Settings';
import Help from './pages/Help';
import { PluginProvider } from './context/PluginContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate plugin initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-light-gray flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 border-4 border-dify-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-dark-gray mb-2">Initializing DIFY Trello Plugin</h2>
          <p className="text-neutral-gray">Connecting to your workflow...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <PluginProvider>
      <Router>
        <div className="min-h-screen bg-light-gray font-inter">
          <div className="max-w-4xl mx-auto">
            <Navigation />
            
            <main className="p-6">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Navigate to="/configuration" replace />} />
                  <Route path="/configuration" element={<PluginConfiguration />} />
                  <Route path="/create-card" element={<CardCreation />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/help" element={<Help />} />
                </Routes>
              </AnimatePresence>
            </main>
          </div>
        </div>
      </Router>
    </PluginProvider>
  );
}

export default App;