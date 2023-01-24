import React from 'react';
import styles from './index.module.scss'
import {ReactComponent as Person} from "../../assets/photo-cover.svg";

const Card = ({props}) => {
    const {photo, name, position, phone, email} = props
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                {photo ? <img src={photo} alt="user"/> : <Person/>}
                <div className={styles.userInfo}>
                    <div className={styles.userName}>
                        {name || 'Vania Shepetko'}
                    </div>
                    <div className={styles.userPosition}>
                        {position || 'Frontend developer'}
                    </div>
                    <div className={styles.userEmail}>
                        <div className={styles.tooltip}>{email.length > 32 ? email.slice(0, 32) : email}
                            <p className={styles.tooltipText}>{email}</p>
                        </div>

                    </div>
                    <div className={styles.userPhone}>
                        {phone || '+380988834232'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Card};