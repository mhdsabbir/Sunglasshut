import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <Container fluid>
      <Row className="align-items-center justify-content-center banner">
        <Col md={6} className="p-md-5 order-2 order-md-1">
          <Fade left duration={2000} distance="40px">
            <h1
              style={{
                color: "#0077a3",
                textTransform: "uppercase",
                fontSize: "50px",
                margin: "20px",
              }}
            >
              The gift <br /> of the party
            </h1>
            <p
              style={{ color: "#0077a3", fontSize: "15px", margin: "30px" }}
              className="my-4 pr-md-5"
            >
              This season, get inspired by our curated selection of holiday
              gifts for you and your loved ones.
            </p>

            <NavLink to={"/dashboard/managproduct"}>
              <Button className="btn-main">Get Started</Button>
            </NavLink>
          </Fade>
        </Col>
        <Col md={6} className="order-1 order-md-2">
          <Fade right duration={2000} distance="40px">
            <Image
              src="https://media.sunglasshut.com/2021/RX/LP/D_step.png"
              style={{ height: "15rem" }}
            />
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
