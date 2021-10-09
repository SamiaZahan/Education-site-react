import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import img from '../images/edu-icon.jpg';
const Header = () => {
    const  activeStyle={
        fontWeight: "bold",
        color: "lightgray",
        borderBottom: "1px solid lightgray"
      }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home"><span><img src={img} className="icon-img"></img></span>AddToSkill</Navbar.Brand>
                <Nav className="me-left links">
                   <NavLink className="link" activeStyle={activeStyle} to="/Home">Home</NavLink>
                   <NavLink className="link" activeStyle={activeStyle} to="/Services">Services</NavLink>
                   <NavLink className="link" activeStyle={activeStyle} to="/About">About Us</NavLink>
                   <NavLink className="link" activeStyle={activeStyle} to="/Contact">Contact</NavLink>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;