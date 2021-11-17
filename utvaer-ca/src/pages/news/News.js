import React from "react";
import Container from "react-bootstrap/Container";
import NewsCards from "../../components/NewsCards";
import NewsPagination from "../../components/NewsPagination";

function News() {
  return (
    <Container>
      <h1>News</h1>
      <NewsPagination />
      <NewsCards />
      <NewsPagination />
    </Container>
  );
}

export default News;
