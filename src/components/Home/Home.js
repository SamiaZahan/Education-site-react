import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
import { SiGoogleclassroom } from "react-icons/si";
import { BsFillQuestionSquareFill} from "react-icons/bs";
import { GrDocumentText, GrCertificate} from "react-icons/gr";

import './Home.css'

const Home = () => {
    const [courses, setCourses]= useState([]);
    useEffect(() => {
        fetch('./fakeDb.JSON')
            .then (res => res.json())
            .then (data => setCourses(data))
    }, []);

    return (
        <div className="head">
           <div className="greeting-text">
                <h2><i>We Believe Education is Boundaryless And Skills make You Samrter. Be Smart With No Boundary</i></h2>
           </div>
           <br />
            <h2>Popular Courses</h2>
            <div  className="w-100 mx-auto p-5">
                <Row xs={1} md={4} className="g-4">
                    {
                        courses.slice(0,4).map(course => <Course key={course.id} course={course}></Course>)
                    }
                </Row>
            </div>
            <br/>
            <h2>Services We Provide</h2> <br/><br/>
            <div className="card-container">
                <div className="card">
                    <h3><SiGoogleclassroom/> Online Classes</h3>
                </div>
                <div className="card">
                    <h3><BsFillQuestionSquareFill/> Q/A Sessions</h3>
                </div>
                <div className="card">
                    <h3><GrDocumentText/> Course Material</h3>
                </div>
                <div className="card">
                    <h3><GrCertificate/> Certification</h3>
                </div>
            </div>
            <br/><br/>
            <Footer></Footer>
        </div>
    );
};

export default Home;