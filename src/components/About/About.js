import React from 'react';
import Footer from '../Footer/Footer';
import './About.css';
import { BsFillCalendarEventFill, BsFillPeopleFill } from "react-icons/bs";
import { MdIntegrationInstructions } from "react-icons/md";
import { SiCoursera } from "react-icons/si";
const About = () => {
    return (
        <div className="top">
            <div className="top-text">
                <h2><i>About Us</i></h2>
            </div>
            <br /> <br /> 
            <h2>Know About Us</h2>
            <br/><br/>
            <div className="about-text">
                <p>We have started our journey very recently with a great moto. We believe that education is boundary less. As the wirld is facing a hard time like never before, so it's hight time to think different. We are providing 9 technical courses right now and planning for many more. Stay with AddToSkill and enrich your skill.</p>
            </div>  
            <br />
            <h2>More About Us</h2>
            <div className="card-container">
                <div className="card">
                    <h3><BsFillCalendarEventFill/> 100 Event</h3>
                </div>
                <div className="card">
                    <h3><MdIntegrationInstructions/> 10 Instructors</h3>
                </div>
                <div className="card">
                    <h3><BsFillPeopleFill/> 500 Students</h3>
                </div>
                <div className="card">
                    <h3><SiCoursera/> 9 Courses</h3>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;