import React from "react";
import Tabs from "react-bootstrap";
import Tab from "react-bootstrap";

function HomeTabs() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="First">
        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
        venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
        ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
        condimentum mattis rhoncus.{" "}
      </Tab>
      <Tab eventKey="profile" title="Second">
        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
        venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
        ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
        condimentum mattis rhoncus.{" "}
      </Tab>
      <Tab eventKey="contact" title="Third">
        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
        venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
        ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
        condimentum mattis rhoncus.{" "}
      </Tab>
    </Tabs>
  );
}

export default HomeTabs;
