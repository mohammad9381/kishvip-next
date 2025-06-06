import React from "react";
import { Col, Row } from "react-bootstrap";
import Wrapper from "hoc/Wrapper/Wrapper";

class Mojavez extends React.Component {
  render() {
    try {
      return (
        <Wrapper>
          <Row className={"justify-content-center"}>
            <Col md={4} xs={0}></Col>
            <Col xs={6} md={4}>
              <div className={"samandehi img-thumbnail h-100"}>
                <img
                  referrerPolicy="origin"
                  id="nbqejzpefukzfukzfukzesgt"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    window.open(
                      "https://logo.samandehi.ir/Verify.aspx?id=276660&p=uiwkjyoegvkagvkagvkaobpd",
                      "Popup",
                      "toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30"
                    );
                  }}
                  alt="logo-samandehi"
                  src="https://logo.samandehi.ir/logo.aspx?id=276660&p=odrfyndtwlbqwlbqwlbqlyma"
                />
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div className={"enamad img-thumbnail h-100"}>
                <a
                  referrerPolicy="origin"
                  target="_blank"
                  href="https://trustseal.enamad.ir/?id=228771&amp;Code=JPyFJxKn7iwTo9Ycvgpl"
                  rel="noreferrer"
                >
                  <img
                    referrerPolicy="origin"
                    src="https://Trustseal.eNamad.ir/logo.aspx?id=228771&amp;Code=JPyFJxKn7iwTo9Ycvgpl"
                    alt=""
                    style={{ cursor: "pointer" }}
                    id="JPyFJxKn7iwTo9Ycvgpl"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Wrapper>
      );
    } catch (e) {
      console.log(e);
      return <div>Error</div>;
    }
  }
}

export default Mojavez;
