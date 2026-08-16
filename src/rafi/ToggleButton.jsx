import React from 'react';

const ToggleButton = ({ toggleNav }) => {
  return (
    <button onClick={toggleNav} className="absolute p-2 text-white bg-gray-700 rounded top-4 right-4 ">
      Toggle
    </button>
  );
};

export default ToggleButton;