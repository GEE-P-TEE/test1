import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { usePlugin } from '../context/PluginContext';
import * as FiIcons from 'react-icons/fi';

const { FiSettings, FiSave, FiRefreshCw, FiCheck, FiSliders } = FiIcons;

function Settings() {
  const { state, setSettings } = usePlugin();
  const [formData, setFormData] = useState(state.settings);
  const [hasChanges, setHasChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showSaved, setShowSaved] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setHasChanges(true);
  };

  const handleSaveSettings = async () => {
    setIsSaving(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSettings(formData);
    setHasChanges(false);
    setIsSaving(false);
    setShowSaved(true);
    
    // Hide saved message after 3 seconds
    setTimeout(() => setShowSaved(false), 3000);
  };

  const handleResetToDefaults = () => {
    const defaults = {
      defaultBoardId: '',
      defaultListId: '',
      contentTruncationLength: 10000,
      autoAddLabels: false,
      enableNotifications: true
    };
    
    setFormData(defaults);
    setHasChanges(true);
  };

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
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-dark-gray">Plugin Settings</h2>
            <p className="text-neutral-gray mt-1">Customize your DIFY Trello integration preferences</p>
          </div>
          <SafeIcon icon={FiSettings} className="text-dify-blue text-2xl" />
        </div>
      </div>

      {/* Success Message */}
      {showSaved && (
        <motion.div
          className="bg-success-green/10 border border-success-green/20 rounded-lg p-4 flex items-center space-x-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <SafeIcon icon={FiCheck} className="text-success-green text-xl" />
          <div>
            <p className="text-success-green font-medium">Settings saved successfully!</p>
            <p className="text-success-green/80 text-sm">Your preferences have been updated and will take effect immediately.</p>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Default Settings */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center space-x-2 mb-4">
            <SafeIcon icon={FiSliders} className="text-dify-blue text-lg" />
            <h3 className="text-lg font-semibold text-dark-gray">Default Values</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-dark-gray mb-2">
                Default Board ID
              </label>
              <input
                type="text"
                value={formData.defaultBoardId}
                onChange={(e) => handleInputChange('defaultBoardId', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dify-blue focus:border-transparent transition-all duration-200 font-mono text-sm"
                placeholder="board_12345"
              />
              <p className="text-xs text-neutral-gray mt-1">
                Pre-fill this board ID in the card creation form
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-gray mb-2">
                Default List ID
              </label>
              <input
                type="text"
                value={formData.defaultListId}
                onChange={(e) => handleInputChange('defaultListId', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dify-blue focus:border-transparent transition-all duration-200 font-mono text-sm"
                placeholder="list_67890"
              />
              <p className="text-xs text-neutral-gray mt-1">
                Pre-fill this list ID in the card creation form
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-gray mb-2">
                Content Truncation Length
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="1000"
                  max="16384"
                  step="1000"
                  value={formData.contentTruncationLength}
                  onChange={(e) => handleInputChange('contentTruncationLength', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-neutral-gray">
                  <span>1K</span>
                  <span className="font-semibold text-dify-blue">
                    {formData.contentTruncationLength.toLocaleString()} characters
                  </span>
                  <span>16K</span>
                </div>
              </div>
              <p className="text-xs text-neutral-gray mt-1">
                Maximum content length before automatic truncation
              </p>
            </div>
          </div>
        </div>

        {/* Behavior Settings */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-dark-gray mb-4">Behavior Settings</h3>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-dark-gray">Auto-add Labels</h4>
                <p className="text-xs text-neutral-gray">
                  Automatically suggest labels based on AI content analysis
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.autoAddLabels}
                  onChange={(e) => handleInputChange('autoAddLabels', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-dify-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-dify-blue"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-dark-gray">Enable Notifications</h4>
                <p className="text-xs text-neutral-gray">
                  Show success/error notifications for card creation
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.enableNotifications}
                  onChange={(e) => handleInputChange('enableNotifications', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-dify-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-dify-blue"></div>
              </label>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h4 className="text-sm font-medium text-dark-gray mb-3">Rate Limiting</h4>
              <div className="bg-light-gray rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-neutral-gray">API Calls per 10 seconds</span>
                  <span className="text-sm font-semibold text-dark-gray">300 / 300</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-success-green h-2 rounded-full w-0"></div>
                </div>
                <p className="text-xs text-neutral-gray mt-2">
                  Current usage is within Trello's rate limits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between">
          <button
            onClick={handleResetToDefaults}
            className="px-4 py-2 text-neutral-gray border border-gray-300 rounded-md hover:bg-light-gray transition-colors duration-200 font-medium text-sm flex items-center space-x-2"
          >
            <SafeIcon icon={FiRefreshCw} className="text-sm" />
            <span>Reset to Defaults</span>
          </button>

          <div className="flex space-x-3">
            <motion.button
              onClick={handleSaveSettings}
              disabled={!hasChanges || isSaving}
              className="px-6 py-2 bg-dify-blue text-white rounded-md hover:bg-dify-blue/90 transition-all duration-200 font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              whileHover={hasChanges && !isSaving ? { scale: 1.02 } : {}}
              whileTap={hasChanges && !isSaving ? { scale: 0.98 } : {}}
            >
              {isSaving ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <SafeIcon icon={FiSave} className="text-sm" />
                  <span>Save Settings</span>
                </>
              )}
            </motion.button>
          </div>
        </div>
        
        {hasChanges && (
          <p className="text-xs text-warning-orange mt-2">
            You have unsaved changes
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Settings;