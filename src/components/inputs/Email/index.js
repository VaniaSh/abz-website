import React from 'react';

import defaultStyle from '../index.module.scss';

const Email = ({
                   label,
                   disabled,
                   onChange,
                   value,
                   readOnly,
                   error,
                   setError,
                   required,
               }) => {

        const isValidEmail = () => {
            let re;
            re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(value).toLowerCase());
        };

        const focusOut = () => {
            if (!isValidEmail()) {
                setError('Invalid Email');
            } else {
                setError('');
            }
        };

        return (
            <div className={defaultStyle.container}>
                <input
                    type='email'
                    readOnly={readOnly}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    disabled={disabled}
                    required={required}
                    onBlur={focusOut}
                    className={`${error ? defaultStyle.error : ''} ${defaultStyle.input}`}
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
            </div>
        );
    }
;

export {Email};
