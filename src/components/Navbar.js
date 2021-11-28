import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-end">
            <div className="container">
            <a className="navbar-brand" href="#">Diana Silvas</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color:"darkslategray"}}/>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">about me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">experience</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact me</a>
                </li>
                
        </ul>
    </div>
    </div>
    </nav>
    )
}

export default Navbar
