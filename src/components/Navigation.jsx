import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSettings, FiCreditCard, FiHelpCircle, FiGrid } = FiIcons;

function Navigation() {
  const navItems = [
    { path: '/configuration', label: 'Configuration', icon: FiSettings },
    { path: '/create-card', label: 'Create Card', icon: FiCreditCard },
    { path: '/settings', label: 'Settings', icon: FiGrid },
    { path: '/help', label: 'Help', icon: FiHelpCircle }
  ];

  return (
    <motion.nav
      className="bg-white border-b border-gray-200 shadow-sm"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <motion.div
            className="flex items-center space-x-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-dify-blue to-trello-blue rounded-lg flex items-center justify-center">
              <SafeIcon icon={FiCreditCard} className="text-white text-lg" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-dark-gray">DIFY Trello Plugin</h1>
              <p className="text-sm text-neutral-gray">AI to Trello Integration</p>
            </div>
          </motion.div>
        </div>

        <div className="flex space-x-1 bg-light-gray rounded-lg p-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-dify-blue shadow-sm'
                      : 'text-neutral-gray hover:text-dark-gray hover:bg-white/50'
                  }`
                }
              >
                <SafeIcon icon={item.icon} className="text-base" />
                <span>{item.label}</span>
              </NavLink>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

export default Navigation;