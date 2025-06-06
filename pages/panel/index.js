import React from "react";
import Header from "components/layout/header7";
import { Container } from "react-bootstrap";
import Footer from "components/layout/footer7";
import PanelHome from "containers/panel/home";
import { isAuthenticaded } from "services/user.service";
import PanelDashboard from "containers/panel/home/dashboard";

export default function ContactPage(props) {
  return (
    <div>
      <Header />
      <hr />
      <Container>
        {isAuthenticaded() ? <PanelDashboard /> : <PanelHome />}
      </Container>
      <Footer />
    </div>
  );
}
