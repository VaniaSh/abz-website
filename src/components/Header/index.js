import React from 'react';
import styles from './index.module.scss'
import {Link} from "react-scroll";
import {Button, Logo} from "../index.js";

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div style={{paddingRight: '15px'}}>
                    <Logo/>
                </div>
                <div className={styles.buttons}>
                    <Link
                        activeClass="active"
                        to="get"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    > <Button>Users</Button>
                    </Link>
                    <Link
                        activeClass="active"
                        to="post"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    > <Button>Sign Up</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export {Header} ;