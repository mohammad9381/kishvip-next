import React from "react";
import Header from "components/layout/header7";
import { Container } from "react-bootstrap";
import Footer from "components/layout/footer7";
import PanelHome from "containers/panel/home";
import { isAuthenticaded } from "services/user.service";
import dynamic from "next/dynamic";
const PanelReserveList = dynamic(() =>
  import("containers/panel/home/reserve/list")
);
export default function ListReserve(props) {
  return (
    <div>
      <Header />
      <hr />
      <Container>
        {isAuthenticaded() ? <PanelReserveList /> : <PanelHome />}
      </Container>
      <Footer />
    </div>
  );
}
