import React, {useEffect, useState} from 'react';
import Card from "../Card/index.js";
import styles from './index.module.scss'
import Button from "../Button/index.js";

const UserSection = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6', {method: 'GET'})
            .then(res => res.json()).then(res => {
            if (res.success) {
                setData(res.users)
            } else {
                setData([])
            }
        })

    }, [])
    return (
        <div className={styles.userSectionContainer}>
            <h1 className={styles.title}>Working with GET request</h1>
            <div className={styles.cardsContainer}>
                {data && data.map((el, key) => (
                    <Card key={key} props={el}/>
                ))}
            </div>
            <Button>Show more</Button>
        </div>

);
};

export default UserSection;