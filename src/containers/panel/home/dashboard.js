import React from "react";
import { getUserData } from "services/user.service";
import { Card, Col, Row } from "react-bootstrap";
import { latinToPersian } from "utilsFolder/lastinToPersian";
import NavLink from "hoc/NavLink";

const Menus = [
  { name: "ثبت رزرو", icon: "", link: "/panel/addReserve" },
  { name: "لیست رزروها", icon: "", link: "/panel/listReserve" },
];

class PanelDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: getUserData(),
    };
  }

  render() {
    const { user } = this.state;

    // guard: اگر کاربر لاگین نیست
    if (!user) {
      return (
        <div className={"m-4 text-center"}>
          <Card>
            <Card.Body>برای مشاهده پنل ابتدا وارد شوید.</Card.Body>
          </Card>
        </div>
      );
    }

    return (
      <div className={"m-4"}>
        <Row>
          <Col className={"text-center"}>
            <Card>
              <Card.Body>
                کاربر گرامی
                <strong className={"pl-1 pr-1"}>{user.name}</strong>
                با شماره همراه{" "}
                <strong className={"pl-1 pr-1"}>
                  {latinToPersian(user.cellphone)}
                </strong>{" "}
                خوش آمدید.
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className={"mt-2"}>
          {Menus.map((menu) => {
            return (
              <Col key={menu.name}>
                <NavLink href={menu.link}>
                  <Card>
                    <Card.Body className={"text-center"}>{menu.name}</Card.Body>
                  </Card>
                </NavLink>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default PanelDashboard;
