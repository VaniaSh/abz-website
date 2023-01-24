import React, {useEffect, useState} from 'react';
import styles from './index.module.scss'
import {alert} from "../../helpers/alerts.js";
import {Email, Phone, TextInput, Upload, RadioButton} from "../inputs/index.js";
import {Button} from "../index.js";

const UserRegister = ({id}) => {
    const [token, setToken] = useState('')
    const [errors, setErrors] = useState({})
    const [isDisabled, setIsDisabled] = useState(false)
    const [positions, setPositions] = useState([])
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: '+380',
        position_id: '',
        photo: {file: new Blob(), name: ''}
    })
    const setError = name => er => {
        setErrors({...errors, [name]: er})
    }
    useEffect(() => {
        setIsDisabled(Object.values(errors).reduce((acc, cur) => acc || !!cur, false))
    }, [errors])
    const handleChange = (key1, value1) => {
        setUserInfo({...userInfo, [key1]: value1});
    };
    useEffect(() => {
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
            .then(res => res.json())
            .then(res => setToken(res.token))
    }, [])
    useEffect(() => {
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions',)
            .then(res => res.json())
            .then(res => setPositions(res.positions))
    }, [])

    const valid = () => {
        return (
            isDisabled || (userInfo.name === '' ||
                userInfo.phone.length !== 13 ||
                userInfo.email === '' ||
                userInfo.photo.file.size === 0 ||
                userInfo.position_id === '')
        )
    }
    const userAuth = () => {
        let data = new FormData()
        Object.entries(userInfo).forEach(([key, value]) => {
            if (key === 'photo') {
                return
            }
            data.append(key, value)
        })
        data.append('photo', userInfo.photo.file)
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            method: 'POST',
            headers: {'Token': token},
            body: data,

        }).then(res => res.json()).then((res) => {
            if (res.success === false) {
                alert.error({text: res.message})
            } else {
                alert.image({text: 'User successfully registered'})
            }
            console.log(res)
        }).catch((er) => {
            console.log(er)
        })
    }
    console.log(userInfo, '<<info')

    return (
        <div id={id} className={styles.userRegisterContainer}>
            <h1 className={styles.title}>Working with POST request</h1>
            <div className={styles.formContainer}>
                <TextInput
                    label={'Your Name'}
                    onChange={(val => handleChange('name', val))}
                    value={userInfo.name}
                />
                <Email setError={setError('email')}
                       error={errors['email']}
                       label={'Email'}
                       onChange={(val => handleChange('email', val))}
                       value={userInfo.email}
                />
                <Phone setError={setError('phone')} error={errors['phone']} label={'Phone'}
                       onChange={(val => handleChange('phone', val))}
                       value={userInfo.phone}
                />
                <div className={styles.radioGroup}>
                    <p> Select your position</p>

                    {positions.map((el, key) => (
                        <RadioButton
                            name={'position'} onChange={() => handleChange('position_id', el.id)}
                            value={userInfo.position}
                            id={key} text={el.name}
                        />
                    ))}
                </div>
                <Upload onChange={(e) => setUserInfo({
                    ...userInfo,
                    'photo': {file: e.target.files[0], name: e.target.files[0].name}
                })}/>
                <Button disabled={valid()} onClick={userAuth

                }>Sign up</Button>
            </div>
        </div>
    );
};

export {UserRegister};