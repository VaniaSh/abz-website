import React from 'react';
import Button from "../../components/Button/index.js";
import Logo from "../../components/Logo/index.js";
import styles from './index.module.scss'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Logo/>
                <div className={styles.buttons}>
                    <Button>Users</Button>
                    <Button>Sign up</Button>
                </div>
            </div>
        </div>
    );
};

export default Header;