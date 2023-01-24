import React from "react";
import Header from "./navigation/Header/index.js";
import background from './assets/pexels-alexandr-podvalny-1227513.jpeg'
import styles from './index.module.scss'
import Button from "./components/Button/index.js";
import UserSection from "./components/userSection/index.js";
import UserRegister from "./components/userRegister/index.js";
import {Link} from "react-scroll";


function App() {
    return (
        <div className={styles.main}>
            <Header/>
            <div className={styles.prewie}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={background} alt="background"/>
                    <div className={styles.centeredText}>
                        <h1>Test assignment for front-end developer</h1>
                        <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS
                            with a
                            vast understanding of User design thinking as they'll be building web interfaces with
                            accessibility in mind. They should also be excited to learn, as the world of Front-End
                            Development keeps evolving.</p>
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
                <UserSection id={'get'}/>
                <UserRegister id={'post'}/>
            </div>
        </div>
    );
}

export default App;
