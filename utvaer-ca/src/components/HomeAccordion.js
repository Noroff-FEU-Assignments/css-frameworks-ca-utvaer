import React from "react";
import Accordion from "react-bootstrap/Accordion";
import tab1 from "../images/tab/tab1.jpeg";
import tab2 from "../images/tab/tab2.jpeg";
import tab3 from "../images/tab/tab3.jpeg";

function HomeAccordion() {
  return (
    <Accordion defaultActiveKey="0" className="d-md-none">
      <Accordion.Item eventKey="0">
        <Accordion.Header>First</Accordion.Header>
        <Accordion.Body>
          <div className="accordion__item">
            <p>
              You bet, Morbi eget efficitur turpis. Vivamus pellentesque tortor
              massa, venenatis pharetra leo laoreet a. Nullam non eleifend
              justo, a ullamcorper turpis. Cras vehicula pharetra lectus non
              maximus. Sed condimentum mattis rhoncus.
            </p>
          </div>
          <div className="accordion__item">
            <img src={tab1} alt="First slide" fluid />
          </div>
          <div className="accordion__item">
            <div className="social">
              <span>SHARE</span>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Second</Accordion.Header>
        <Accordion.Body>
          <div className="accordion__item">
            <p>
              It.. Morbi eget efficitur turpis. Vivamus pellentesque tortor
              massa, venenatis pharetra leo laoreet a. Nullam non eleifend
              justo, a ullamcorper turpis. Cras vehicula pharetra lectus non
              maximus. Sed condimentum mattis rhoncus.
            </p>
          </div>
          <div className="accordion__item">
            <img src={tab2} alt="First slide" fluid />
          </div>
          <div className="accordion__item">
            <div className="social">
              <span>SHARE</span>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Third</Accordion.Header>
        <Accordion.Body>
          <div className="accordion__item">
            <p>
              Never ends? Morbi eget efficitur turpis. Vivamus pellentesque
              tortor massa, venenatis pharetra leo laoreet a. Nullam non
              eleifend justo, a ullamcorper turpis. Cras vehicula pharetra
              lectus non maximus. Sed condimentum mattis rhoncus.
            </p>
          </div>
          <div className="accordion__item">
            <img src={tab3} alt="First slide" fluid />
          </div>
          <div className="accordion__item">
            <div className="social">
              <span>SHARE</span>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default HomeAccordion;
