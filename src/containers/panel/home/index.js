import React from "react";
import Wrapper from "hoc/Wrapper/Wrapper";
import { Button, Card, Form } from "react-bootstrap";
import { ErrorToast, SuccessToast } from "hoc/ToastNotify/ToastNotify";
import { setLogin } from "services/user.service";

class PanelHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cellphone: "",
      code: "",
      loading: false,
      data: null,
    };

    this.login = this.login.bind(this);
  }

  async login() {
    const { cellphone, code } = this.state;

    if (cellphone === "" || cellphone === null || cellphone.length !== 11) {
      ErrorToast("لطفا شماره همراه را صحیح وارد نمایید");
      return;
    }

    if (code === "" || code === null) {
      ErrorToast("لطفا کلمه عبور را صحیح وارد نمایید");
      return;
    }

    try {
      this.setState({
        loading: true,
      });

      const res = await fetch("/api/panel/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cellphone, password: code }),
      });
      const data = await res.json();

      if (data.status === "success") {
        setLogin(data.data);
        SuccessToast("با موفقیت وارد شدید");
        // redirect خودکار به داشبورد
        window.location.href = "/panel";
      } else {
        this.setState({
          loading: false,
        });
        ErrorToast("اطلاعات وارد شده صحیح نمی باشد");
      }
    } catch (err) {
      this.setState({
        loading: false,
      });
      console.log(err);
      ErrorToast("مشکل در انجام درخواست رخ داده است");
    }
  }

  render() {
    const { loading } = this.state;

    return (
      <div className={"d-flex justify-content-center"}>
        <Card style={{ maxWidth: 300 }}>
          <Card.Body>
            {" "}
            <div className={"text-center"}>
              <h5>ورود به پنل </h5>
              <hr />
            </div>
            <Wrapper>
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>شماره همراه خود را وارد کنید</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder=""
                    onChange={(e) => {
                      this.setState({
                        cellphone: e.target.value,
                      });
                    }}
                  />
                  <Form.Text className="text-muted">
                    شماره همراه خود را وارد نمایید
                  </Form.Text>
                </Form.Group>
              </div>
              <div>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>کلمه عبور را وارد نمایید</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder=""
                    onChange={(e) => {
                      this.setState({
                        code: e.target.value,
                      });
                    }}
                  />
                </Form.Group>
              </div>
              <div>
                <Button
                  block={true}
                  variant={"info"}
                  disabled={loading}
                  onClick={(e) => this.login()}
                >
                  {loading ? "در حال بررسی" : "ورود"}
                </Button>
              </div>
            </Wrapper>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default PanelHome;
