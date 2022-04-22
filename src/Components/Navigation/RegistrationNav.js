import React from "react";
import { Link } from "react-router-dom";
import logo from '../../Images/logo.png';

const RegistrationNav = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light bg-color"
            style={{ paddingLeft: "10%", paddingRight: "10%" }}
        >
            <a
                className="navbar-brand text-light"
                style={{ fontSize: "30px", fontWeight: "bold",cursor:'default' }}
            >
                <img src={logo} alt="udukku" style={{ width: '90px' }} />
            </a>
        </nav>
    );
}

export default RegistrationNav;