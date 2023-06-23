import React from "react";
import { Container } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-overlay"></div>
      <Container>
        <h1 className="banner-title text-white">Computer Engineering</h1>
        <p className="banner-heading">1M Computer Engineer flow this</p>
      </Container>
    </div>
  );
};

export default Banner;
