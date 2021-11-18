import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function HomeTabs() {
  return (
    <Tabs
      defaultActiveKey="first"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="first" title="First">
        Hello Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
        venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
        ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
        condimentum mattis rhoncus.{" "}
      </Tab>
      <Tab eventKey="second" title="Second">
        Hi Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
        venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
        ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
        condimentum mattis rhoncus.{" "}
      </Tab>
      <Tab eventKey="third" title="Third">
        You ! Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
        venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
        ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
        condimentum mattis rhoncus.{" "}
      </Tab>
    </Tabs>
  );
}

export default HomeTabs;
