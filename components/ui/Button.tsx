'use client';
import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  className:string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ className,children, variant = 'primary', icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition',
        variant === 'primary'
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
      )}
    >
      {icon && <span className={className}>{icon}</span>}
      {children}
    </button>
  );
};
