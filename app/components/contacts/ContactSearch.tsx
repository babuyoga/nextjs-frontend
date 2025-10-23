'use client';
import React from 'react';
import { Search } from 'lucide-react';

const ContactSearch = () => {
  return (
    <div className="relative w-72">
      <input
        type="text"
        placeholder="Search for name, email or number"
        className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
      />
      <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
    </div>
  );
};

export default ContactSearch;
