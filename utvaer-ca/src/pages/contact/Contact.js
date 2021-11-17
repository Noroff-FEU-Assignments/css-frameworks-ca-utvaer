import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "../../components/ContactForm";
import ContactInformation from "../../components/ContactInformation";

function Contact() {
  return (
    <Container>
      <Row>
        <Col md={6} md={{ order: 2 }}>
          <ContactInformation />
        </Col>
        <Col md={6}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
