"use client";

import React from 'react';

/**
 * USAGE:
    // With both props
    <LogoButton 
      onClick={() => console.log('Logo clicked!')} 
      className="my-custom-class" --> className prop for additional css
    />

    // Or with just one prop
    <LogoButton onClick={() => navigate('/')} />

    // Or with no props
    <LogoButton />
 */
interface LogoButtonProps {
  onClick?: () => void;
  className?: string;
}

const LogoButton: React.FC<LogoButtonProps> = ({ onClick, className }) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Navigate to root page
        window.location.href = '/';
        
        // Also call the custom onClick handler if provided
        if (onClick) onClick();
    };
    
    return (
        <button
        onClick={handleClick}
        className={`logo-button ${className || ''}`}
        style={{
            backgroundColor: 'transparent',
            color: '#f3ab32',
            padding: '0px',
            border: 'none',
            fontSize: '35px',
            fontWeight: '700',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
        }}
        >
        Candid
        </button>
    );
};

export default LogoButton;