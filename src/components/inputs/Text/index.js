import React from 'react';

import defaultStyle from '../index.module.scss';


const TextInput = ({
                       label,
                       disabled,
                       onChange,
                       value,
                       readOnly,
                       error,
                       required,
                   }) => {
    return (
        <div className={defaultStyle.container}>
            <input
                type='text'
                readOnly={readOnly}
                value={value}
                onChange={e => onChange(e.target.value)}
                disabled={disabled}
                required={required}
                className={defaultStyle.input}
            />
            {label && (
                <label
                    className={`${value && value.length > 0 ? defaultStyle.shrink : ''} ${
                        defaultStyle.label
                    }`}>
                    {label}
                </label>
            )}
            <div className={defaultStyle.parError}>{error}</div>

        </div>
    );
};

export {TextInput};
