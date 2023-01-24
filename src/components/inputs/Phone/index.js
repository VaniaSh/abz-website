import React from 'react';

import defaultStyle from '../index.module.scss';

const Phone = ({
                   label,
                   error,
                   setError,
                   disabled,
                   onChange,
                   value,
                   required,
                   readOnly,
                   placeholder,
               }) => {

    const blockInvalidChar = (e) =>
        ['e', 'E', '-'].includes(e.key) && e.preventDefault();
    const validation = (newValue) => {
        if (/\d|^$|\s/.test(newValue.slice(-1))) {
            onChange(newValue)
        } else {
            setError('Digits Only');
        }
    };

    const focusOut = () => {
        if (value && value.length < 13) {
            setError('Not enough digits')
        } else {
            setError('')
        }
    };

    return (
        <div className={defaultStyle.container}>
            <input
                className={`${error ? defaultStyle.error : ''} ${defaultStyle.input}`}
                type='tel'
                readOnly={readOnly}
                value={value}
                onChange={e => validation(e.target.value)}
                // onChange={e => onChange(e.target.value)}
                disabled={disabled}
                placeholder={placeholder}
                onKeyDown={blockInvalidChar}
                maxLength={13}
                required={required}
                onBlur={focusOut}
            />
            {label && (
                <label
                    className={`${error ? defaultStyle.error : ''} ${value && value.length > 0 ? defaultStyle.shrink : ''} ${
                        defaultStyle.label
                    }`}>
                    {label}
                </label>
            )}
            <div className={defaultStyle.parError}>{error}</div>
            <div className={defaultStyle.helperText}>
                {!error && value.length < 5 && '+38 (XXX) XXX - XX - XX'}
            </div>

        </div>
    );
};

export {Phone};
