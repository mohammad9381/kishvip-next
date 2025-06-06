import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import TrackOrder from "containers/track/order";
import TrackTicket from "containers/track/ticket";

class Track extends React.Component {
  render() {
    return (
      <Row className={"mt-4 mb-4"}>
        <Col md={6}>
          <Card>
            <Card.Body>
              <TrackOrder />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <TrackTicket />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Track;
