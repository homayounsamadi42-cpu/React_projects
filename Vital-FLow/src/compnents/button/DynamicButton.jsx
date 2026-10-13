import React from 'react';

const DynamicButton = ({ 
  text = 'کلیک کنید', 
  bgColor = 'bg-blue-600 hover:bg-blue-700', 
  textColor = 'text-white', 
  onClick, 
  ...props 
}) => {
  return (
    <button 
      onClick={onClick}
      className={`px-5 py-2.5 rounded-lg font-semibold transition-colors duration-200 shadow-sm ${bgColor} ${textColor}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default DynamicButton;
