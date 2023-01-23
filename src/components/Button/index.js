import React from 'react';
import './index.module.scss'

const Button = ({onClick, disabled,children}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;