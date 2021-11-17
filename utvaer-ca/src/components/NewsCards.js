import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import news1 from "../images/news/news1.jpeg";
import news2 from "../images/news/news2.jpeg";
import news3 from "../images/news/news3.jpeg";
import news4 from "../images/news/news4.jpeg";
import news5 from "../images/news/news5.jpeg";
import news6 from "../images/news/news6.jpeg";
import news7 from "../images/news/news7.jpeg";
import news8 from "../images/news/news8.jpeg";

function NewsCards() {
  return (
    <Container>
      <Row>
        <Col sm={12} md={6} lg={3}>
          <Card>
            <Card.Img variant="top" src={news1} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">MORE</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <Card>
            <Card.Img variant="top" src={news2} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">MORE</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <Card>
            <Card.Img variant="top" src={news3} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">MORE</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <Card>
            <Card.Img variant="top" src={news4} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">MORE</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="d-none d-md-block">
        <Row>
          <Col md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src={news5} />
              <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="primary">MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src={news6} />
              <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="primary">MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src={news7} />
              <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="primary">MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src={news8} />
              <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="primary">MORE</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default NewsCards;
