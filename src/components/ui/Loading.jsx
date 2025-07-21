import React from "react";
import { motion } from "framer-motion";

const Loading = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center p-12 ${className}`}>
      <div className="text-center">
        <motion.div
          className="inline-flex items-center space-x-2 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;