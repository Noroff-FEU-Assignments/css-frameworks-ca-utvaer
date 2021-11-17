import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContactInformation() {
  return (
    <Container>
      <Row>
        <Col>
          <i class="fas fa-envelope"></i>
        </Col>
        <Col>
          <p>hello@yay.com</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <i class="fas fa-phone"></i>
        </Col>
        <Col>
          <p>123 456 7890</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <i class="fas fa-map-marker-alt"></i>
        </Col>
        <Col>
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
