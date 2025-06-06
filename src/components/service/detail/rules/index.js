import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";

class ServiceDetailRules extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <Row>
          <Col>
            <h2 className={"mt-5 mb-4"}>قوانین {data.title}</h2>
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Col>{ReactHtmlParser(data.rules.replaceAll("*", "<br/>"))}</Col>
        </Row>
      </div>
    );
  }
}

export default ServiceDetailRules;
