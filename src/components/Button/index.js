import React from 'react';
import './index.module.scss'

const Button = ({children}) => {
    return (
        <button>
            {children}
        </button>
    );
};

export default Button;