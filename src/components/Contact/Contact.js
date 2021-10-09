import React from 'react';
import Footer from '../Footer/Footer';
import { faMobile, faHome} from "@fortawesome/free-solid-svg-icons";
import { AiTwotoneMail } from "react-icons/ai";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Contact.css'

const Contact = () => {
    return (
        <div className="top">
            <div className="top-text">
                <h2><i>Contact Us</i></h2>
            </div>
                <div>
                     <br/><br/>
                    <h3><FontAwesomeIcon icon={faHome} /> Address</h3>
                    <p>Street-18, Sector-10, Uttara, Dhaka, Bangladesh</p>
                    <h3><FontAwesomeIcon icon={faMobile} /> Phone</h3>
                    <p>+880 168*******</p>
                    <h3><AiTwotoneMail /> Email</h3>
                    <p>addtoskill@gmail.com</p>
                </div>
                <br/><br/>
                <h2>Send Message Directly</h2>
                <div className="message">
                    <input type="text" placeholder="Enter Name" />
                    <input type="text" placeholder="Subject" />
                    <input type="text" placeholder="Enter Email" />
                    <input type="text" placeholder="Enter Email" />
                    <input type="text" placeholder="Message" />
                    <button>Send</button>
                </div>
           
                <Footer></Footer>
        </div>
    );
};

export default Contact;