import React from 'react';
import styles from './index.module.scss'

const Button = ({onClick, disabled, children}) => {
    return (
        <button
            className={`${disabled ? styles.disabled: styles.button}`}
                disabled={disabled}
                onClick={onClick}
                >
            {children}
                </button>
                );
            };

export default Button;