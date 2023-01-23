import React from 'react';
import styles from './index.module.scss'
import TextInput from "../inputs/Text/index.js";
import {Email} from "../inputs/Email/index.js";
import Radio from "../inputs/Radio/index.js";

const UserRegister = () => {
    return (
        <div className={styles.userRegisterContainer}>
            <h1 className={styles.title}>Working with POST request</h1>

            <div className={styles.formContainer}>
                <TextInput label={'Your Name'}/>
                <Email label={'Email'}/>
                <TextInput label={'Phone'}/>
                <div className={styles.radioGroup}>
                    <p> Select your position</p>
                    <Radio name={'position'} id={1} text='Frontend developer'/>
                    <Radio name={'position'} id={2} text='Backend developer'/>
                    <Radio name={'position'} id={3} text='Designer'/>
                    <Radio name={'position'} id={4} text='QA'/>
                </div>
                </div>
        </div>
    );
};

export default UserRegister;