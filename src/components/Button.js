import React from 'react';

const Button = ({
    onClick,
    children,
    additionalClassNames,
    isActive
}) => (
        <button
            className={`button ${additionalClassNames} ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    );

export default Button;

