import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ message, action, onAction, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col items-center justify-center p-12 text-center ${className}`}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4">
        <ApperIcon name="Search" size={32} className="text-gray-400" />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        No content found
      </h3>
      
      <p className="text-gray-600 mb-6 max-w-md">
        {message || "We couldn't find any content to display at the moment."}
      </p>
      
      {action && onAction && (
        <Button onClick={onAction} variant="primary">
          {action}
        </Button>
      )}
    </motion.div>
  );
};

export default Empty;