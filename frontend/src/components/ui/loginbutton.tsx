"use client";

import React from 'react';

/**
 * USAGE:
    // With both props
    <LoginButton 
      onClick={() => console.log('Login clicked!')} 
      className="my-custom-class" --> className prop for additional css
    />

    // Or with just one prop
    <LoginButton onClick={() => alert('Logging in!')} />

    // Or with no props
    <LoginButton />
 */
interface LoginButtonProps {
  onClick?: () => void;
  className?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`login-button ${className || ''}`}
      style={{
        backgroundColor: 'transparent',
        color: '#000000',
        padding: '10px 10px',
        borderRadius: '4px',
        border: '1px solid lightgray',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      Login
    </button>
  );
};

export default LoginButton;