import React from "react";
import programmer from "../diana.jpg"


const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={programmer} alt="Diana Silvas"/>
                    </div>
                    
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                        Hello! I am Diana. I have been developing websites for over 3 years. I'm a front-emd web developer. Technologies I have used in
                        my websites are MongoDB, Express, ReactJS and NodeJS. 
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
