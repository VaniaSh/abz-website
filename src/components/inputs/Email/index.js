import React, {useState} from 'react';

import defaultStyle from '../index.module.scss';

const Email = ({
                   label,
                   disabled,
                   onChange,
                   value,
                   readOnly,
                   error,
                   required,
               }) => {
        const [inputError, setInputError] = useState('');


        const isValidEmail = () => {
            const re =
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(value).toLowerCase());
        };

        const focusOut = () => {
            if (!isValidEmail()) {
                setInputError('Invalid Email');
            } else {
                setInputError('');
            }
        };

        return (
            <div className={defaultStyle.container}>
                <input
                    type='text'
                    readOnly={readOnly}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    disabled={disabled}
                    required={required}
                    onBlur={focusOut}
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
            </div>
        );
    }
;

export {Email};
