import React from 'react';
import styles from './index.module.scss'

const RadioButton = ({name, id, value, onChange, checked, text}) => {
    return (
        <label htmlFor={id} className={styles.radioLabel}>
            <input
                className={styles.radioInput}
                type="radio"
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                checked={checked}
            />
            <span className={styles.customRadio}/>
            {text}
        </label>
    )
}

export default RadioButton