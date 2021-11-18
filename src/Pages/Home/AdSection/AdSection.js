import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./adSection.css";
import Fade from 'react-reveal/Fade';

const AdSection = () => {
  return (
    <>
      <Container fluid>
      <Fade bottom duration={2000} distance="40px">

        <Row className="h-100 align-items-center justify-content-center">
          <Col md={12} sm={12} className=" order-1 order-md-2 adsec">
            <Image style={{height: "100%", width: "100%"}} src="https://media.sunglasshut.com/2021/RX/LP/Hero_desk.png?impolicy=ContentImQuery&im=Resize,width=1500" />
            <h3 className="ad">Prescription Sunglasses are <br/> now available online on <br /> our top styles.</h3>
          </Col>
        </Row>
        </Fade>
      </Container>
    </>
  );
};

export default AdSection;
