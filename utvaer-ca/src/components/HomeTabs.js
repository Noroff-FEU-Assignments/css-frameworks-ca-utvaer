import React from "react";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import tab1 from "../images/tab/tab1.jpeg";
import tab2 from "../images/tab/tab2.jpeg";
import tab3 from "../images/tab/tab3.jpeg";

function HomeTabs() {
  return (
    <Tabs
      defaultActiveKey="first"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="first" title="First">
        <Container>
          <Row className="tab">
            <Col>
              <img src={tab1} alt="First slide" fluid />
            </Col>
            <Col>
              <p className="tab__item">
                Hello - Morbi eget efficitur turpis. Vivamus pellentesque tortor
                massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                justo, a ullamcorper turpis. Cras vehicula pharetra lectus non
                maximus. Sed condimentum mattis rhoncus.{" "}
              </p>
              <div className="tab__item">
                <div className="social">
                  <span>SHARE</span>
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="second" title="Second">
        <Container>
          <Row className="tab">
            <Col>
              <img src={tab2} alt="First slide" fluid />
            </Col>
            <Col>
              <p className="tab__item">
                Yes, Morbi eget efficitur turpis. Vivamus pellentesque tortor
                massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                justo, a ullamcorper turpis. Cras vehicula pharetra lectus non
                maximus. Sed condimentum mattis rhoncus.{" "}
              </p>
              <div className="tab__item">
                <div className="social">
                  <span>SHARE</span>
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="third" title="Third">
        <Container>
          <Row className="tab">
            <Col>
              <img src={tab3} alt="First slide" fluid />
            </Col>
            <Col>
              <p className="tab__item">
                YOU ! Morbi eget efficitur turpis. Vivamus pellentesque tortor
                massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                justo, a ullamcorper turpis. Cras vehicula pharetra lectus non
                maximus. Sed condimentum mattis rhoncus.{" "}
              </p>
              <div className="tab__item">
                <div className="social">
                  <span>SHARE</span>
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Tab>
    </Tabs>
  );
}

export default HomeTabs;
