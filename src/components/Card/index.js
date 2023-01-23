import React from 'react';
import styles from './index.module.scss'
import {ReactComponent as Person} from "../../assets/photo-cover.svg";

const Card = ({props}) => {
    const {photo, name, position, phone, email} = props
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                {photo ? <img src={photo} alt="user"/> : <Person/>}
                <div className={styles.userName}>
                    {name || 'Vania Shepetko'}
                </div>
                <div className={styles.userPosition}>
                    {position || 'Frontend developer'}
                </div>
                <div className={styles.userEmail}>
                    {email || 'vania.shepetko@gmail.com'}
                </div>
                <div className={styles.userPhone}>
                    {phone || '+380988834232'}
                </div>
            </div>
        </div>
    );
};

export default Card;