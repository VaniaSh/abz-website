import React, {useEffect, useState} from 'react';
import styles from './index.module.scss'
import {Card, Button} from "../index.js";


const UserSection = ({id}) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`, {method: 'GET'})
            .then(res => res.json()).then(res => {
            if (res.success) {
                setData(res.users)
            } else {
                setData([])
            }
        })

    }, [page])
    return (
        <div id={id} className={styles.userSectionContainer}>
            <h1 className={styles.title}>Working with GET request</h1>
            <div className={styles.cardsContainer}>
                {data && data.map((el, key) => (
                    <Card key={key} props={el}/>
                ))}
            </div>
            {
                data.length < 6 ? (<Button onClick={() => setPage(1)}>To first page</Button>) : (
                    <Button onClick={() => setPage((prevState) => prevState + 1)}>Show more</Button>
                )
            }
        </div>

    );
};

export {UserSection};