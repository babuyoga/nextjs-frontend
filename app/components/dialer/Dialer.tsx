'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Phone, Delete, X, ChevronRight, Asterisk } from 'lucide-react';

interface KeypadKey {
  value: string;
  letters?: string;
}

const keypadLayout: KeypadKey[][] = [
  [{ value: '1' }, { value: '2', letters: 'ABC' }, { value: '3', letters: 'DEF' }],
  [{ value: '4', letters: 'GHI' }, { value: '5', letters: 'JKL' }, { value: '6', letters: 'MNO' }],
  [{ value: '7', letters: 'PQRS' }, { value: '8', letters: 'TUV' }, { value: '9', letters: 'WXYZ' }],
  [{ value: '*' }, { value: '0', letters: '+' }, { value: '#' }],
];

const KeypadButton: React.FC<{
  keyInfo: KeypadKey;
  onClick: (value: string) => void;
  onLongPress?: () => void;
}> = ({ keyInfo, onClick, onLongPress }) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const longPressTriggered = useRef(false);

  const handleMouseDown = () => {
    if (onLongPress) {
      longPressTriggered.current = false;
      timeoutRef.current = setTimeout(() => {
        onLongPress();
        longPressTriggered.current = true;
      }, 600); // hold for 600ms to trigger +
    }
  };

  const handleMouseUp = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleClick = () => {
    if (!longPressTriggered.current) {
      onClick(keyInfo.value);
    }
  };

  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onClick={handleClick}
      className="flex flex-col items-center justify-center h-20 w-20 rounded-full bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700 transition-all shadow-md select-none"
    >
      {keyInfo.value !== '*' && <span className="text-2xl font-semibold">{keyInfo.value}</span>}
      {keyInfo.value === '*' && <span className="text-2xl font-semibold"><Asterisk /></span>}
      {keyInfo.letters && <span className="text-xs text-gray-400 mt-1">{keyInfo.letters}</span>}
    </button>
  );
};

const Dialer: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('+1');
  const [isOverflowing, setIsOverflowing] = useState(false);
  const scrollRef = useRef<HTMLHeadingElement>(null);

  // --- Memoized Handlers ---
  const handleKeyClick = useCallback((value: string) => {
    setPhoneNumber((prev) => (prev.length < 13 ? prev + value : prev));
  }, []);

  const handleLongPress = useCallback(() => {
    setPhoneNumber((prev) => (prev.length < 13 ? prev + '+' : prev));
  }, []);

  const handleDelete = useCallback(() => {
    setPhoneNumber((prev) => (prev.length > 2 ? prev.slice(0, -1) : prev)); // keep +1
  }, []);

  const handleCall = useCallback(() => {
    console.log(`Calling: ${phoneNumber}`);
  }, [phoneNumber]);

  // --- Keyboard Input ---
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const { key } = event;
      if (/^[0-9*#+]$/.test(key)) {
        setPhoneNumber((prev) => (prev.length < 13 ? prev + key : prev));
      } else if (key === 'Backspace') {
        setPhoneNumber((prev) => (prev.length > 2 ? prev.slice(0, -1) : prev));
      } else if (key === 'Enter') {
        handleCall();
      } else if (key === '+') {
        setPhoneNumber((prev) => (prev.length < 13 ? prev + '+' : prev));
      }
    },
    [handleCall]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // --- Scroll Behavior ---
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
    setIsOverflowing(el.scrollWidth > el.clientWidth + 4);
  }, [phoneNumber]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    if (el.scrollWidth <= el.clientWidth + 4) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
      setIsOverflowing(false);
    }
  }, [phoneNumber]);

  return (
    <div className="flex flex-col items-center h-fit my-auto justify-center p-8  rounded-2xl shadow-2xl w-full max-w-md mx-auto text-black">
      {/* Number Display */}
      <div className="relative flex items-center justify-center w-full m-6 border-b border-gray-700 pb-3">
        <span className="mr-3 text-3xl">🇨🇦</span>

        <h1
          ref={scrollRef}
          id="numberDisplay"
          className="text-4xl font-light tracking-widest overflow-x-auto scrollbar-hide whitespace-nowrap w-full text-center scroll-smooth"
        >
          {phoneNumber}
        </h1>

        <ChevronRight
          size={20}
          className={`absolute -right-5 text-gray-400 transition-opacity duration-300 ${
            isOverflowing ? 'opacity-70 animate-pulse' : 'opacity-0'
          }`}
        />
      </div>

      {/* Keypad */}
      <div className="grid grid-cols-3 gap-6 mt-4">
        {keypadLayout.flat().map((keyInfo, i) => (
          <KeypadButton
            key={i}
            keyInfo={keyInfo}
            onClick={handleKeyClick}
            onLongPress={keyInfo.value === '0' ? handleLongPress : undefined}
          />
        ))}
      </div>

      {/* Bottom Row */}
      <div className="flex justify-center items-center gap-10 mt-8">
        <button
          className="h-12 w-12 flex items-center justify-center rounded-full text-white bg-gray-800 hover:bg-gray-700 transition-colors"
          onClick={handleDelete}
        >
          <Delete size={22} />
        </button>

        <button
          className="h-16 w-16 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 active:bg-green-700 transition-colors shadow-lg"
          onClick={handleCall}
        >
          <Phone size={28} className="text-white transform -scale-x-100" />
        </button>

        <button
          className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
          onClick={() => setPhoneNumber('+1')}
        >
          <X size={22} />
        </button>
      </div>

      <p className="mt-6 text-gray-500 text-sm">Type numbers or use the keypad</p>
    </div>
  );
};

export default Dialer;
