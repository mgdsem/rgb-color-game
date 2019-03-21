import React from 'react';

const Button = ({
    onClick,
    children,
    additionalClassNames
}) => (
        <button
            className={`button ${additionalClassNames}`}
            onClick={onClick}
        >
            {children}
        </button>
    );

export default Button;

