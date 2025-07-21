import React from "react";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const InitiativeCard = ({ initiative, className }) => {
  return (
    <Card hover className={cn("p-6 text-center group", className)}>
      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <ApperIcon name={initiative.icon} size={32} className="text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {initiative.title}
      </h3>
      
      <p className="text-gray-600 mb-4">
        {initiative.description}
      </p>
      
      {initiative.link && (
        <a 
          href={initiative.link}
          className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
        >
          Learn more →
        </a>
      )}
    </Card>
  );
};

export default InitiativeCard;