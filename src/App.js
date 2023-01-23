import React from "react";
import Header from "./navigation/Header/index.js";
import background from './assets/pexels-alexandr-podvalny-1227513.jpeg'
import styles from './index.module.scss'
import Button from "./components/Button/index.js";
import UserSection from "./components/userSection/index.js";
import UserRegister from "./components/userRegister/index.js";

function App() {
    return (
        <>
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
                        <Button>Sign Up</Button>
                    </div>
                </div>
                <UserSection/>
                <UserRegister/>
            </div>
        </>
    );
}

export default App;
