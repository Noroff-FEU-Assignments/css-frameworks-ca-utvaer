import React from "react";
import ImageCarousel from "../../components/ImageCarousel";
import HomeTabs from "../../components/HomeTabs";
import Container from "react-bootstrap/Container";
import HomeAccordion from "../../components/HomeAccordion";

function Home() {
  return (
    <>
      <ImageCarousel />
      <Container>
        <h1>We do YAY things</h1>
        <p>
          Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a
          rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend
          finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet,
          consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa
          euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus
          a, varius eget massa.
        </p>
      </Container>
      <Container>
        <HomeAccordion />
        <div className="d-none d-md-block">
          <HomeTabs />
        </div>
      </Container>
    </>
  );
}

export default Home;
