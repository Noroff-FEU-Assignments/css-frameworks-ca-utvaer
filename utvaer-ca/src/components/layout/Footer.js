import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="footer">
          <Col sm={12} md={4} className="footer__item">
            <div className="icon">
              <i class="fab fa-vimeo-v"></i>
              <i class="fab fa-youtube"></i>
            </div>
          </Col>
          <Col className="footer__item">hello@yay.com</Col>
          <Col className="footer__item">
            Copyright {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
