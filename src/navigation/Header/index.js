import React from 'react';
import Button from "../../components/Button/index.js";
import Logo from "../../components/Logo/index.js";

const Header = () => {
    return (
        <div>
            <Logo/>
            <Button>Users</Button>
            <Button>Sign up</Button>
        </div>
    );
};

export default Header;