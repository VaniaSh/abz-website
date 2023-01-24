import React from 'react';
import Button from "../../components/Button/index.js";
import Logo from "../../components/Logo/index.js";
import styles from './index.module.scss'
import {Link} from "react-scroll";

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Logo/>
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

export default Header;