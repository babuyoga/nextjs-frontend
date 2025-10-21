// components/Dialer.tsx
'use client'
import React, { useState } from 'react';
import { Phone, Plus, X, Star, Clock, User, Grid3x3, ChevronDown } from 'lucide-react';

// --- Type Definitions ---
interface KeypadKey {
  value: string;
  letters: string;
}

interface NavItem {
  icon: React.ElementType;
  label: string;
}

// --- Constants ---
const keypadLayout: KeypadKey[][] = [
  [{ value: '1', letters: '' }, { value: '2', letters: 'ABC' }, { value: '3', letters: 'DEF' }],
  [{ value: '4', letters: 'GHI' }, { value: '5', letters: 'JKL' }, { value: '6', letters: 'MNO' }],
  [{ value: '7', letters: 'PQRS' }, { value: '8', letters: 'TUV' }, { value: '9', letters: 'WXYZ' }],
  [{ value: '*', letters: '' }, { value: '0', letters: '+' }, { value: '#', letters: '' }],
];

const navItems: NavItem[] = [
  { icon: Star, label: 'Favorite' },
  { icon: Clock, label: 'History' },
  { icon: Grid3x3, label: 'Contacts' },
  { icon: User, label: 'Profile' },
];

// --- Sub-Components ---

// Keypad Button
const KeypadButton: React.FC<{ keyInfo: KeypadKey; onClick: (value: string) => void }> = ({ keyInfo, onClick }) => (
  <button
    className="flex flex-col items-center justify-center h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors duration-100 text-gray-800"
    onClick={() => onClick(keyInfo.value)}
  >
    <span className="text-3xl font-light leading-none">{keyInfo.value === '0' ? '0' : keyInfo.value}</span>
    {keyInfo.letters && <span className="text-xs font-medium tracking-widest mt-0.5">{keyInfo.letters}</span>}
    {keyInfo.value === '0' && <span className="text-xs font-medium tracking-widest mt-0.5">+</span>}
  </button>
);


// Nav Tab
const NavTab: React.FC<{ item: NavItem }> = ({ item }) => (
  <button className="flex flex-col items-center p-2 text-sm text-gray-500 hover:text-blue-600 transition-colors">
    <item.icon size={20} />
    <span className="mt-1">{item.label}</span>
  </button>
);


// --- Main Component ---
const Dialer: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('+1'); // Initial example number

  const handleKeyClick = (value: string) => {
    // Basic logic to simulate number entry
    setPhoneNumber(prev => prev + value);
    // You'd need more robust state management here (e.g., handling backspace, formatting)
  };

  const handleDelete = () => {
    setPhoneNumber(prev => prev.slice(0, -1));
  };

  const handleCall = () => {
    // Call initiation logic goes here
    console.log(`Calling: ${phoneNumber}`);
  };

  return (
    <div className="flex flex-col h-screen max-h-screen bg-white">
      {/* Top Bar/Status Bar Placeholder (Assuming this is handled by the device/app shell) */}

      {/* Header/Display Area */}
      <div className="flex-shrink-0 pt-8 pb-4 px-6 text-center">
        <div className="flex items-center justify-center mb-4">
          {/* Country/Flag Placeholder - using a simple div for structure */}
          <div className="flex items-center text-gray-800">
            <span className="mr-2 text-2xl">🇨🇦</span> {/* Canadian Flag emoji */}
            <ChevronDown size={14} className="text-gray-500" />
          </div>
          
          <h1 className="text-4xl font-light text-gray-900 ml-4">{phoneNumber}</h1>
        </div>
      
      </div>

      {/* Keypad Grid */}
      <div className="flex-grow flex items-start justify-center pt-6">
        <div className="grid grid-cols-3 gap-y-4 gap-x-8 max-w-sm w-full">
          {keypadLayout.flat().map((keyInfo) => (
            <div key={keyInfo.value} className="flex justify-center">
              <KeypadButton keyInfo={keyInfo} onClick={handleKeyClick} />
            </div>
          ))}

          {/* Call/Dialer Row - Centered below Keypad */}
          <div className="col-span-3 flex justify-center items-center mt-6">
            {/* Placeholder for the blue 3x3 dots button */}
            <div className="h-10 w-10"></div> 

            {/* Green Call Button */}
            <button
              className="mx-12 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-green-500 hover:bg-green-600 active:bg-green-700 transition-colors duration-100 flex items-center justify-center shadow-lg"
              onClick={handleCall}
            >
              <Phone size={28} className="text-white transform -scale-x-100" />
            </button>

            {/* Backspace/Delete Button - Only visible if number is present */}
            {phoneNumber.length > 0 && (
              <button
                className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors text-black"
                onClick={handleDelete}
                aria-label="Delete last digit"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Placeholder for the blue 3x3 dots button - Positioned as per image */}
   

      {/* Bottom Navigation Bar */}
      <div className="flex-shrink-0 border-t border-gray-200 pt-1 pb-4 flex justify-around bg-white">
        {navItems.map((item) => (
          <NavTab key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Dialer;