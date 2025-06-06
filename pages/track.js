import React from "react";
import Header from "components/layout/header7";
import Footer from "components/layout/footer7";
import { Container } from "react-bootstrap";
import Track from "containers/track";

export default function TrackOrderPage(props) {
  return (
    <div>
      <Header />
      <hr />
      <Container>
        <Track />
      </Container>
      <Footer />
    </div>
  );
}
