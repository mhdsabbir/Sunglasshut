import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    
    

    return (
        <footer id="dk-footer" className="dk-footer">
            
            <div className="copyright">
                <Container>
                    <Row>
                        <Col style={{textDecoration: "none"}} md={6} className="order-2 order-md-1">
                            <span>Copyright © {new Date().getFullYear()}, All Rights Reserved <Link to="/">SunglassHub</Link></span>
                        </Col>
                        <Col md={6} className="order-1 order-md-2">
                            <div className="copyright-menu">
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Terms</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
           
        </footer>
    );
};

export default Footer;