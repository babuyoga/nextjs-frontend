'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Phone, MicOff, X } from 'lucide-react';

const CallInfo: React.FC = () => {
  // --- Internal State ---
  const [phoneNumber, setPhoneNumber] = useState('+1'); // default number
  const [isCalling, setIsCalling] = useState(false);
  const [callDuration, setCallDuration] = useState(0); // in seconds
  const [muted, setMuted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // --- Call Timer ---
  useEffect(() => {
    if (isCalling) {
      intervalRef.current = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setCallDuration(0);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isCalling]);

  // --- Format time as MM:SS ---
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  // --- Handlers ---
  const startCall = useCallback(() => setIsCalling(true), []);
  const endCall = useCallback(() => setIsCalling(false), []);
  const toggleMute = useCallback(() => setMuted((prev) => !prev), []);
  const updatePhoneNumber = useCallback((newNumber: string) => setPhoneNumber(newNumber), []);

  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-2xl w-full max-w-md mx-auto h-fit m-auto bg-gray-50 text-black">
      <h2 className="text-xl font-semibold mb-2">Ongoing Call</h2>
      <p className="text-gray-600 mb-4">{isCalling ? 'Connected' : 'Idle'}</p>

      <div className="text-3xl font-mono mb-4">{phoneNumber}</div>
      {isCalling && <div className="text-gray-500 mb-6">{formatTime(callDuration)}</div>}

      <div className="flex gap-6 mb-4">
        <button
          className={`h-12 w-12 flex items-center justify-center rounded-full transition-colors ${
            muted ? 'bg-red-500 text-white' : 'bg-gray-300 text-black hover:bg-gray-400'
          }`}
          onClick={toggleMute}
        >
          <MicOff size={20} />
        </button>

        <button
          className="h-12 w-12 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
          onClick={endCall}
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default CallInfo;
