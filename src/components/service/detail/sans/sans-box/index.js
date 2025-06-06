import React from "react";
import jmoment from "moment-jalaali";
import { Card, Col } from "react-bootstrap";
import { formatNumber, latinToPersian } from "utilsFolder/lastinToPersian";
import Wrapper from "hoc/Wrapper/Wrapper";

Array.prototype.max = function () {
  return Math.max.apply(null, this);
};

Array.prototype.min = function () {
  return Math.min.apply(null, this);
};

class ServiceDetailSansBox extends React.Component {
  render() {
    const { s } = this.props;

    const jm = jmoment(s.date, "jYYYY/jM/jD");

    let prices = [];

    s.ticketTypes.map((ss) => {
      if (ss.price !== ss.priceAfterDiscount) {
        prices.push(ss.priceAfterDiscount);
      } else {
        prices.push(ss.price);
      }
    });
    console.log(prices);
    let min = Math.min.apply(null, prices),
      max = Math.max.apply(null, prices);

    return (
      <Col md={2} key={Math.random()} className={"mb-2"}>
        <Card
          className={"box-sans"}
          onClick={(e) => {
            this.props.showModal(s);
          }}
        >
          <Card.Body>
            <div>
              <p className={"text-center pb-0 mb-0"}>
                {s.label}
                <br />
                {latinToPersian(s.start)}-{latinToPersian(s.end)}
                <br />
                ظرفیت {latinToPersian(s.remainingCapacity)} نفر
                <br />
                {min !== max ? (
                  <Wrapper>
                    {latinToPersian(formatNumber(min))} -{" "}
                    {latinToPersian(formatNumber(max))}
                  </Wrapper>
                ) : (
                  <Wrapper>{latinToPersian(formatNumber(min))}</Wrapper>
                )}
                <span className={"rial"}>ریال</span>
              </p>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className={"text-center btn-sans-res"}>رزرو کنید</div>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}

export default ServiceDetailSansBox;
