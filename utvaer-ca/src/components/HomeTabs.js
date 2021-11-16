import React from "react";
import Tab from "react-bootstrap";
import Tabs from "react-bootstrap";

function HomeTabs() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home"></Tab>
      <Tab eventKey="profile" title="Profile"></Tab>
      <Tab eventKey="contact" title="Contact" disabled></Tab>
    </Tabs>
  );
}

export default HomeTabs;
