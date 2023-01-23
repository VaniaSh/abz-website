import React, {useState} from 'react';
import styles from './index.module.scss'
import TextInput from "../inputs/Text/index.js";
import {Email} from "../inputs/Email/index.js";
import Radio from "../inputs/Radio/index.js";
import Upload from "../inputs/Upload/index.js";

const UserRegister = () => {
    const [userInfo, setUserInfo] = useState({name: '', email: '', phone: '', position: '', photo: ''})
    console.log(userInfo, '<< user')

    const handleChange = (key, value) => {
        setUserInfo({...userInfo, [key]: value});
    };
    console.log(userInfo, '<< user')
    return (
        <div className={styles.userRegisterContainer}>
            <h1 className={styles.title}>Working with POST request</h1>
            <div className={styles.formContainer}>
                <TextInput label={'Your Name'} onChange={(val => handleChange('name', val))} value={userInfo.name}/>
                <Email label={'Email'} onChange={(val => handleChange('email', val))} value={userInfo.email}/>
                <TextInput label={'Phone'} onChange={(val => handleChange('phone', val))} value={userInfo.phone}/>
                <div className={styles.radioGroup}>
                    <p> Select your position</p>
                    <Radio name={'position'} onChange={() => handleChange('position', '1')} value={userInfo.position}
                           id={1} text='Frontend developer'/>
                    <Radio name={'position'} onChange={() => handleChange('position', '2')} value={userInfo.position}
                           id={2} text='Backend developer'/>
                    <Radio name={'position'} onChange={() => handleChange('position', '3')} value={userInfo.position}
                           id={3} text='Designer'/>
                    <Radio name={'position'} onChange={() => handleChange('position', '4')} value={userInfo.position}
                           id={4} text='QA'/>
                </div>
                <Upload/>

            </div>
        </div>
    );
};

export default UserRegister;