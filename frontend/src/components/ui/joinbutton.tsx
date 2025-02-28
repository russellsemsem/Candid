"use client";

import React from 'react';

/**
 * USAGE:
    // With both props
    <JoinButton 
      onClick={() => console.log('Button clicked!')} 
      className="my-custom-class" --> className prop for additional css
    />

    // Or with just one prop
    <JoinButton onClick={() => alert('Joining!')} />

    // Or with no props
    <JoinButton />
 */
interface JoinButtonProps {
  onClick?: () => void;
  className?: string;
}

const JoinButton: React.FC<JoinButtonProps> = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`join-button ${className || ''}`}
      style={{
        backgroundColor: '#EEC05D',
        color: '#000000',
        padding: '10px 10px',
        borderRadius: '4px',
        border: 'none',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        transition: 'background-color 0.2s ease-in-out',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#E6B347';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#EEC05D';
      }}
    >
      Join now →
    </button>
  );
};

export default JoinButton;