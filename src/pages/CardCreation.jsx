import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { usePlugin } from '../context/PluginContext';
import * as FiIcons from 'react-icons/fi';

const { FiCreditCard, FiSend, FiAlertCircle, FiCheck, FiExternalLink, FiCalendar, FiTag, FiUser } = FiIcons;

function CardCreation() {
  const { state, addRecentCard, setError, clearError } = usePlugin();
  const [isCreating, setIsCreating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [createdCardUrl, setCreatedCardUrl] = useState('');

  const [formData, setFormData] = useState({
    title: 'Implement user authentication system',
    description: 'Create a comprehensive user authentication system with the following features:\n\n- User registration and login\n- Password hashing and security\n- JWT token management\n- Role-based access control\n- Password reset functionality\n- Email verification\n\nThis should integrate with our existing database structure and follow security best practices.',
    boardId: 'board_12345',
    listId: 'list_67890',
    labels: ['Backend', 'Security'],
    dueDate: '',
    assignee: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    clearError();
  };

  const handleCreateCard = async () => {
    if (!state.isConnected) {
      setError('Please configure your Trello credentials first');
      return;
    }

    if (!formData.title.trim() || !formData.boardId.trim() || !formData.listId.trim()) {
      setError('Please fill in all required fields');
      return;
    }

    setIsCreating(true);
    clearError();

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2500));

      // Simulate successful card creation
      const newCard = {
        id: `card_${Date.now()}`,
        title: formData.title,
        description: formData.description,
        boardId: formData.boardId,
        listId: formData.listId,
        labels: formData.labels,
        dueDate: formData.dueDate,
        assignee: formData.assignee,
        createdAt: new Date().toISOString(),
        url: `https://trello.com/c/example_${Date.now()}`
      };

      addRecentCard(newCard);
      setCreatedCardUrl(newCard.url);
      setShowSuccess(true);

      // Reset form
      setFormData(prev => ({
        ...prev,
        title: '',
        description: ''
      }));

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);

    } catch (error) {
      setError('Failed to create Trello card. Please try again.');
    } finally {
      setIsCreating(false);
    }
  };

  const characterCount = formData.description.length;
  const maxCharacters = state.settings.contentTruncationLength;
  const isNearLimit = characterCount > maxCharacters * 0.8;
  const isOverLimit = characterCount > maxCharacters;

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
            <h2 className="text-2xl font-semibold text-dark-gray">Create Trello Card</h2>
            <p className="text-neutral-gray mt-1">Convert AI-generated content into actionable Trello cards</p>
          </div>
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiCreditCard} className="text-trello-blue text-2xl" />
          </div>
        </div>
      </div>

      {/* Connection Warning */}
      {!state.isConnected && (
        <motion.div
          className="bg-warning-orange/10 border border-warning-orange/20 rounded-lg p-4 flex items-center space-x-3"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <SafeIcon icon={FiAlertCircle} className="text-warning-orange text-xl flex-shrink-0" />
          <div>
            <p className="text-warning-orange font-medium">Trello not connected</p>
            <p className="text-warning-orange/80 text-sm">Please configure your credentials in the Configuration tab before creating cards.</p>
          </div>
        </motion.div>
      )}

      {/* Success Message */}
      {showSuccess && (
        <motion.div
          className="bg-success-green/10 border border-success-green/20 rounded-lg p-4 flex items-center justify-between"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="flex items-center space-x-3">
            <SafeIcon icon={FiCheck} className="text-success-green text-xl" />
            <div>
              <p className="text-success-green font-medium">Card created successfully!</p>
              <p className="text-success-green/80 text-sm">Your Trello card has been created and is ready for action.</p>
            </div>
          </div>
          <a
            href={createdCardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-success-green hover:text-success-green/80 transition-colors duration-200 text-sm font-medium"
          >
            <span>View Card</span>
            <SafeIcon icon={FiExternalLink} className="text-xs" />
          </a>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form Section */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-dark-gray mb-4">Card Details</h3>
            
            <div className="space-y-4">
              {/* Card Title */}
              <div>
                <label className="block text-sm font-medium text-dark-gray mb-2">
                  Card Title <span className="text-error-red">*</span>
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dify-blue focus:border-transparent transition-all duration-200"
                  placeholder="Enter card title"
                />
              </div>

              {/* Card Description */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-dark-gray">
                    Description <span className="text-error-red">*</span>
                  </label>
                  <span className={`text-xs font-medium ${
                    isOverLimit ? 'text-error-red' : isNearLimit ? 'text-warning-orange' : 'text-neutral-gray'
                  }`}>
                    {characterCount.toLocaleString()} / {maxCharacters.toLocaleString()}
                  </span>
                </div>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={8}
                  className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-dify-blue focus:border-transparent transition-all duration-200 resize-none ${
                    isOverLimit ? 'border-error-red' : 'border-gray-300'
                  }`}
                  placeholder="Enter card description (AI-generated content will appear here)"
                />
                {isOverLimit && (
                  <p className="text-error-red text-xs mt-1">
                    Content will be automatically truncated to {maxCharacters.toLocaleString()} characters
                  </p>
                )}
              </div>

              {/* Board and List IDs */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">
                    Board ID <span className="text-error-red">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.boardId}
                    onChange={(e) => handleInputChange('boardId', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dify-blue focus:border-transparent transition-all duration-200 font-mono text-sm"
                    placeholder="board_id"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">
                    List ID <span className="text-error-red">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.listId}
                    onChange={(e) => handleInputChange('listId', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dify-blue focus:border-transparent transition-all duration-200 font-mono text-sm"
                    placeholder="list_id"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Optional Fields */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-dark-gray mb-4">Optional Settings</h3>
            
            <div className="space-y-4">
              {/* Labels */}
              <div>
                <label className="block text-sm font-medium text-dark-gray mb-2 flex items-center space-x-2">
                  <SafeIcon icon={FiTag} className="text-sm" />
                  <span>Labels</span>
                </label>
                <input
                  type="text"
                  value={formData.labels.join(', ')}
                  onChange={(e) => handleInputChange('labels', e.target.value.split(',').map(l => l.trim()).filter(l => l))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dify-blue focus:border-transparent transition-all duration-200"
                  placeholder="Backend, Frontend, Bug Fix (comma-separated)"
                />
              </div>

              {/* Due Date */}
              <div>
                <label className="block text-sm font-medium text-dark-gray mb-2 flex items-center space-x-2">
                  <SafeIcon icon={FiCalendar} className="text-sm" />
                  <span>Due Date</span>
                </label>
                <input
                  type="date"
                  value={formData.dueDate}
                  onChange={(e) => handleInputChange('dueDate', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dify-blue focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Assignee */}
              <div>
                <label className="block text-sm font-medium text-dark-gray mb-2 flex items-center space-x-2">
                  <SafeIcon icon={FiUser} className="text-sm" />
                  <span>Assignee</span>
                </label>
                <input
                  type="text"
                  value={formData.assignee}
                  onChange={(e) => handleInputChange('assignee', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dify-blue focus:border-transparent transition-all duration-200"
                  placeholder="Trello username or member ID"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-dark-gray mb-4">Card Preview</h3>
            
            <div className="border border-gray-200 rounded-lg p-4 bg-light-gray/50">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-dark-gray text-lg">
                    {formData.title || 'Card Title'}
                  </h4>
                </div>
                
                {formData.labels.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.labels.map((label, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-dify-blue/10 text-dify-blue text-xs rounded-full font-medium"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="text-sm text-neutral-gray">
                  <p className="whitespace-pre-wrap">
                    {formData.description || 'Card description will appear here...'}
                  </p>
                </div>
                
                {(formData.dueDate || formData.assignee) && (
                  <div className="flex items-center space-x-4 text-xs text-neutral-gray pt-2 border-t border-gray-200">
                    {formData.dueDate && (
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiCalendar} />
                        <span>Due: {new Date(formData.dueDate).toLocaleDateString()}</span>
                      </div>
                    )}
                    {formData.assignee && (
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiUser} />
                        <span>@{formData.assignee}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Error Display */}
          {state.error && (
            <motion.div
              className="bg-error-red/10 border border-error-red/20 rounded-lg p-4 flex items-start space-x-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <SafeIcon icon={FiAlertCircle} className="text-error-red text-lg mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-error-red font-medium text-sm">{state.error}</p>
              </div>
            </motion.div>
          )}

          {/* Create Button */}
          <motion.button
            onClick={handleCreateCard}
            disabled={isCreating || !state.isConnected}
            className="w-full px-6 py-4 bg-success-green text-white rounded-lg hover:bg-success-green/90 transition-all duration-200 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isCreating ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Creating Card...</span>
              </>
            ) : (
              <>
                <SafeIcon icon={FiSend} className="text-xl" />
                <span>Create Trello Card</span>
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default CardCreation;