import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>ICONS</Col>
          <Col>hello@email.com</Col>
          <Col>Copyright {new Date().getFullYear()}</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
