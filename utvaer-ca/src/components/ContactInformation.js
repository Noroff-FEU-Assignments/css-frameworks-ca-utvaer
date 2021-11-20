import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContactInformation() {
  return (
    <Container className="contact-info">
      <Row className="contact-info__item">
        <Col md={1}>
          <i class="fas fa-envelope"></i>
        </Col>
        <Col md={1}>
          <p>hello@yay.com</p>
        </Col>
      </Row>

      <Row className="contact-info__item">
        <Col md={1}>
          <i class="fas fa-phone"></i>
        </Col>
        <Col md={6}>
          <p>123 456 7890</p>
        </Col>
      </Row>

      <Row className="contact-info__item">
        <Col md={1}>
          <i class="fas fa-map-marker-alt"></i>
        </Col>
        <Col md={6}>
          <address>
            123 Some Street
            <br />
            Somewhere
            <br />
            Some City
            <br />
            10000
          </address>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactInformation;
