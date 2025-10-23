'use client';
import React from 'react';
import clsx from 'clsx';

export const Badge: React.FC<{ status: string }> = ({ status }) => {
  const isActive = status === 'Active';
  return (
    <span
      className={clsx(
        'px-3 py-1 rounded-full text-xs font-medium',
        isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
      )}
    >
      {status}
    </span>
  );
};
