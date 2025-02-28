"use client";

import React from 'react';

/**
 * USAGE:
    // With both props
    <RecruiterSignupButton 
      onClick={() => console.log('Recruiter signup clicked!')} 
      className="my-custom-class" --> className prop for additional css
    />

    // Or with just one prop
    <RecruiterSignupButton onClick={() => alert('Signing up as recruiter!')} />

    // Or with no props
    <RecruiterSignupButton />
 */
interface RecruiterSignupButtonProps {
  onClick?: () => void;
  className?: string;
}

const RecruiterSignupButton: React.FC<RecruiterSignupButtonProps> = ({ onClick, className }) => {
  return (
    <div style={{ display: 'inline-block', width: 'auto' }}>
      <button
        onClick={onClick}
        className={`recruiter-signup-button ${className || ''}`}
        style={{
          backgroundColor: 'white',
          color: '#000000',
          padding: '10px 20px',
          borderRadius: '4px',
          border: 'none',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          width: 'auto',
          whiteSpace: 'nowrap',
          display: 'inline-block',
          transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(238, 238, 238, 0.8)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'white';
        }}
      >
        Join as a Recruiter
      </button>
    </div>
  );
};

export default RecruiterSignupButton;