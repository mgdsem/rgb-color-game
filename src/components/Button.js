import React from 'react';

const Button = ({
    onClick,
    children,
    additionalClassNames,
    currentMode
}) => (
        <button
            className={`button ${additionalClassNames} ${currentMode === children ? 'active' : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    );

export default Button;

