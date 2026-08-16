import { useState } from 'react';

const useToggleNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, toggleNav };
};

export default useToggleNav;