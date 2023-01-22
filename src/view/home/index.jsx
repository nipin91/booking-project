import React from "react";
import RegistrationForm from "../../shared/registration-form";
import Testimonials from "../carousel/testimonials-carousel";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./style.scss";

const HomeComponent = () => {
  return (
    <Container fluid className="home-page-container">
      <Row style={{width: '100%'}}>
        <Col lg="6" xl="7">
          <Testimonials />
        </Col>
        <Col lg="6" xl="5">
          <RegistrationForm />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeComponent;
