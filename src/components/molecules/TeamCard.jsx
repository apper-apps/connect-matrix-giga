import React from "react";
import Card from "@/components/atoms/Card";
import { cn } from "@/utils/cn";

const TeamCard = ({ member, className }) => {
  return (
    <Card hover className={cn("overflow-hidden text-center", className)}>
      <div className="p-6">
        <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
          {member.imageUrl ? (
            <img 
              src={member.imageUrl} 
              alt={member.name}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <span className="text-2xl font-bold text-primary-600">
              {member.name.charAt(0)}
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          {member.name}
        </h3>
        
        <p className="text-primary-600 font-medium mb-3">
          {member.role}
        </p>
        
        <p className="text-gray-600 text-sm">
          {member.bio}
        </p>
      </div>
    </Card>
  );
};

export default TeamCard;