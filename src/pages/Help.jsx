import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHelpCircle, FiExternalLink, FiChevronDown, FiChevronRight, FiBook, FiAlertCircle, FiSettings, FiCreditCard } = FiIcons;

function Help() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: "How do I get my Trello API key and token?",
      answer: "Visit https://trello.com/app-key to get your API key. For the token, you'll need to generate it with the appropriate permissions. Click on the 'Token' link on the API key page and authorize the application with read/write access to your boards."
    },
    {
      id: 2,
      question: "Where can I find my Board ID and List ID?",
      answer: "You can find these IDs in the Trello board URL. For Board ID, look at the URL when viewing a board - it's the string after '/b/'. For List ID, you can use the Trello API or browser developer tools to inspect the list elements."
    },
    {
      id: 3,
      question: "What happens if my content exceeds the character limit?",
      answer: "Content that exceeds your configured truncation length will be automatically shortened. You'll see a warning indicator when approaching the limit, and the plugin will truncate content while preserving readability."
    },
    {
      id: 4,
      question: "Can I create multiple cards from one AI output?",
      answer: "Currently, the plugin creates one card per execution. For multiple cards, you'll need to run the tool multiple times. We're considering batch creation features for future updates."
    },
    {
      id: 5,
      question: "How do I handle rate limiting issues?",
      answer: "Trello allows 300 requests per 10 seconds. The plugin automatically handles rate limiting with exponential backoff. If you hit limits frequently, consider spacing out your card creation or contact support for enterprise options."
    },
    {
      id: 6,
      question: "My credentials test fails - what should I check?",
      answer: "Verify your API key and token are correct, ensure your token has proper permissions (read/write), check that your Trello account has access to the target board, and confirm your internet connection is stable."
    }
  ];

  const setupSteps = [
    {
      title: "Get API Credentials",
      description: "Visit the Trello Developer Portal to generate your API key and token",
      icon: FiSettings,
      link: "https://trello.com/app-key"
    },
    {
      title: "Configure Plugin",
      description: "Enter your credentials in the Configuration tab and test the connection",
      icon: FiSettings
    },
    {
      title: "Find Board & List IDs",
      description: "Locate the IDs for your target Trello board and list",
      icon: FiCreditCard
    },
    {
      title: "Create Your First Card",
      description: "Use the Card Creation tool to convert AI output into a Trello card",
      icon: FiCreditCard
    }
  ];

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
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
            <h2 className="text-2xl font-semibold text-dark-gray">Help & Documentation</h2>
            <p className="text-neutral-gray mt-1">Everything you need to know about the DIFY Trello Plugin</p>
          </div>
          <SafeIcon icon={FiHelpCircle} className="text-dify-blue text-2xl" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Setup Guide */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center space-x-2 mb-4">
            <SafeIcon icon={FiBook} className="text-dify-blue text-lg" />
            <h3 className="text-lg font-semibold text-dark-gray">Quick Setup Guide</h3>
          </div>

          <div className="space-y-4">
            {setupSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-light-gray/50 transition-colors duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <div className="w-8 h-8 bg-dify-blue text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <h4 className="font-medium text-dark-gray">{step.title}</h4>
                  <p className="text-sm text-neutral-gray mt-1">{step.description}</p>
                  {step.link && (
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-dify-blue hover:text-dify-blue/80 transition-colors duration-200 mt-2 text-sm"
                    >
                      <span>Visit Portal</span>
                      <SafeIcon icon={FiExternalLink} className="text-xs" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Important Information */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-dark-gray mb-4">Important Information</h3>
            
            <div className="space-y-4">
              <div className="bg-info-blue/10 border border-info-blue/20 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <SafeIcon icon={FiAlertCircle} className="text-info-blue text-lg mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-info-blue">Rate Limits</h4>
                    <p className="text-info-blue/80 text-sm mt-1">
                      Trello allows 300 API requests per 10 seconds. The plugin automatically handles this with intelligent retry logic.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-warning-orange/10 border border-warning-orange/20 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <SafeIcon icon={FiAlertCircle} className="text-warning-orange text-lg mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-warning-orange">Content Limits</h4>
                    <p className="text-warning-orange/80 text-sm mt-1">
                      Card descriptions are limited to 16,384 characters. Content exceeding your configured limit will be automatically truncated.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-success-green/10 border border-success-green/20 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <SafeIcon icon={FiAlertCircle} className="text-success-green text-lg mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-success-green">Security</h4>
                    <p className="text-success-green/80 text-sm mt-1">
                      Your API credentials are encrypted and stored securely using DIFY's credential management system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-dark-gray mb-4">Useful Links</h3>
            
            <div className="space-y-3">
              <a
                href="https://trello.com/app-key"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-light-gray/50 transition-colors duration-200"
              >
                <span className="text-dark-gray font-medium">Trello API Key Portal</span>
                <SafeIcon icon={FiExternalLink} className="text-neutral-gray" />
              </a>
              
              <a
                href="https://developer.atlassian.com/cloud/trello/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-light-gray/50 transition-colors duration-200"
              >
                <span className="text-dark-gray font-medium">Trello API Documentation</span>
                <SafeIcon icon={FiExternalLink} className="text-neutral-gray" />
              </a>
              
              <a
                href="https://help.trello.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-light-gray/50 transition-colors duration-200"
              >
                <span className="text-dark-gray font-medium">Trello Help Center</span>
                <SafeIcon icon={FiExternalLink} className="text-neutral-gray" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-dark-gray mb-4">Frequently Asked Questions</h3>
        
        <div className="space-y-3">
          {faqItems.map((item) => (
            <motion.div
              key={item.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: item.id * 0.05 }}
            >
              <button
                onClick={() => toggleFaq(item.id)}
                className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-light-gray/50 transition-colors duration-200"
              >
                <span className="font-medium text-dark-gray">{item.question}</span>
                <SafeIcon 
                  icon={expandedFaq === item.id ? FiChevronDown : FiChevronRight} 
                  className="text-neutral-gray" 
                />
              </button>
              
              {expandedFaq === item.id && (
                <motion.div
                  className="px-4 pb-3 border-t border-gray-200 bg-light-gray/30"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-neutral-gray text-sm pt-3">{item.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-dark-gray mb-4">Need More Help?</h3>
        
        <div className="text-center py-6">
          <p className="text-neutral-gray mb-4">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-2 bg-dify-blue text-white rounded-md hover:bg-dify-blue/90 transition-colors duration-200 font-medium">
              Contact Support
            </button>
            <button className="px-6 py-2 border border-gray-300 text-dark-gray rounded-md hover:bg-light-gray transition-colors duration-200 font-medium">
              Report Bug
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Help;