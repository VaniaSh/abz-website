import React from "react";
import styles from './index.module.scss'
import {Link} from "react-scroll";
import {Button, Header, UserRegister, UserSection} from "./components/index.js";


function App() {
    return (
        <>
            <Header/>
            <div className={styles.preview}>
                <div className={styles.imageContainer}>
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

            </div>
            <UserSection id={'get'}/>
            <UserRegister id={'post'}/>
        </>
    );
}

export default App;
