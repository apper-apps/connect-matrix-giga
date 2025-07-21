import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { AuthContext } from '@/App';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  const { user, isAuthenticated } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={logout}
      className="flex items-center space-x-2"
    >
      <ApperIcon name="LogOut" size={16} />
      <span>Logout</span>
    </Button>
  );
};

export default LogoutButton;