import React from 'react';
import styles from './index.module.scss'

const Upload = ({onChange}) => {
    return (
        <div className={styles.container}>
            <label htmlFor="fileUpload" className={styles.labelUpload}>Upload</label>
            <input type="file" accept="image/*" id='fileUpload' className={styles.input} placeholder='Hell' onChange={onChange}>

        </input>
        </div>
    );
};

export default Upload;