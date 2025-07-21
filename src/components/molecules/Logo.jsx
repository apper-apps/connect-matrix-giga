import React from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const Logo = ({ className, showText = true, size = "md" }) => {
  const sizes = {
    sm: { icon: 24, text: "text-lg" },
    md: { icon: 32, text: "text-xl" },
    lg: { icon: 40, text: "text-2xl" }
  };

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-lg">
          <ApperIcon name="Globe" size={sizes[size].icon} className="text-white" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center">
          <ApperIcon name="Leaf" size={10} className="text-white" />
        </div>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={cn("font-display font-bold text-gray-900 leading-none", sizes[size].text)}>
            IGD
          </span>
          <span className="text-xs text-gray-600 -mt-1">
            Institute for Global Development
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;