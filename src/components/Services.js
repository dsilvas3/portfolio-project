import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faCode, faUserCircle, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                    <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon icon={faFileCode} size="2x"/>
                                </div>
                                <h3>Web Design</h3>
                                <p></p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon icon={faCode} size="2x"/>
                                </div>
                                <h3>Web Development</h3>
                                <p></p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon icon={faDesktop} size="2x"/> 
                                </div>
                                <h3>Informaion Technology</h3>
                                <p></p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon icon={faUserCircle} size="2x"/> 
                                </div>
                                <h3>Management</h3>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        
    )
}

export default Services;
