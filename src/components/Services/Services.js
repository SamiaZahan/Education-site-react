import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

const Services = () => {
    const [courses, setCourses]= useState([]);
    useEffect(() => {
        fetch('./fakeDb.JSON')
            .then (res => res.json())
            .then (data => setCourses(data))
    }, []);

    return (
        <div className="top">
            <div className="top-text">
                <h2><i>Courses We Provide</i></h2>
            </div>
            <div  className="w-75 mx-auto p-5">
                <Row xs={1} md={3} className="g-4">
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;