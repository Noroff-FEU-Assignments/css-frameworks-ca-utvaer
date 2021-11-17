import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <i class="fab fa-vimeo-v"></i>
            <i class="fab fa-youtube"></i>
          </Col>
          <Col>hello@yay.com</Col>
          <Col>Copyright {new Date().getFullYear()}</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
