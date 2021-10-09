import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Course.css';


const Course = (props) => {
    const {image, name, category, instructor, price} = props.course;
    console.log(image);
    return (
        <div>
            <Card style={{ width: '18rem' , borderRadius:'15px', }} className="course-card">
                <Card.Img variant="top" src={image} className="card-img"/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Category: {category}</ListGroupItem>
                    <ListGroupItem>Instructor: {instructor}</ListGroupItem>
                    <ListGroupItem>Price: ${price}</ListGroupItem>
                </ListGroup>
                <Card.Link href="#">Purchase Course</Card.Link>
            </Card>
        </div>
    );
};

export default Course;