import React from 'react';
import styles from './index.module.scss'

const Upload = () => {
    return (
        <div className={styles.container}>
            <label htmlFor="fileUpload" className={styles.labelUpload}>Upload</label>
            <input type="file" accept="image/*" id='fileUpload' className={styles.input} placeholder='Hell'>

        </input>
        </div>
    );
};

export default Upload;