import React from "react";
import Header from "components/layout/header7";
import { Container } from "react-bootstrap";
import Footer from "components/layout/footer7";
import PanelHome from "containers/panel/home";
import { isAuthenticaded } from "services/user.service";
import dynamic from "next/dynamic";
// import PanelReserveAdd from "containers/panel/home/reserve/add";
const DynamicComponent = dynamic(() =>
  import("containers/panel/home/reserve/add")
);

export default function AddReserve(props) {
  return (
    <div>
      <Header />
      <hr />
      <Container>
        {isAuthenticaded() ? <DynamicComponent /> : <PanelHome />}
      </Container>
      <Footer />
    </div>
  );
}
