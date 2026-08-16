import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl p-6 rounded-xl bg-black/90 border border-omni/30 shadow-glow-lg grid-bg">
        <button onClick={onClose} className="absolute p-2 text-emerald-100/60 top-4 right-4 hover:text-omni transition-colors rounded-lg hover:bg-omni/10">
          <X className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
