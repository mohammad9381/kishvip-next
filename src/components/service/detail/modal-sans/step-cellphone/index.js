import React from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import {
  ErrorToast,
  SuccessToast,
  WarningToast,
} from "hoc/ToastNotify/ToastNotify";

class StepCellphone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cellphone: null,
      name: null,
      loading1: false,
      loading2: false,
      sended: false,
      code: false,
    };

    this.sendCode = this.sendCode.bind(this);
    this.verifyCode = this.verifyCode.bind(this);
  }

  async sendCode() {
    const { name, cellphone } = this.state;
    if (name === "" || name == null) {
      WarningToast("نام را وارد نمایید");
      return;
    }

    if (cellphone === "" || cellphone == null) {
      WarningToast("شماره همراه را وارد نمایید");
      return;
    } else if (cellphone.length !== 11 && !Number.isInteger(cellphone)) {
      WarningToast("شماره همراه را صحیح وارد نمایید");
      return;
    }

    this.setState({
      loading1: true,
    });

    try {
      const res = await fetch(
        "/api/sendCode?cellphone=" + cellphone + "&name=" + name
      );
      const data = await res.json();
      if (data.status === "success") {
        SuccessToast("کد با موفقیت ارسال شد");
        this.setState({
          sended: true,
          loading1: false,
        });
      } else {
        ErrorToast("مشکل در ارسال کد");
        this.setState({
          loading1: false,
        });
      }
    } catch (e) {
      ErrorToast("مشکل در ارسال کد");
      this.setState({
        loading1: false,
      });
    }
  }

  async verifyCode() {
    const { name, cellphone, code } = this.state;

    if (code === "" || code == null) {
      WarningToast("کد را وارد نمایید");
      return;
    }

    this.setState({ loading2: true });

    try {
      const res = await fetch(
        "/api/verifyCode?cellphone=" +
          cellphone +
          "&name=" +
          name +
          "&code=" +
          code
      );
      const data = await res.json();
      if (data.status === "success") {
        this.props.selectUser(data.user, name);
        this.setState({ loading2: false });
      } else {
        ErrorToast("مشکل در بررسی کد");
        this.setState({ loading2: false });
      }
    } catch (e) {
      ErrorToast("مشکل در بررسی کد");

      this.setState({ loading2: false });
    }
  }

  render() {
    const { sans, jm, selectTicketType, number } = this.props;
    const { sended, loading1, loading2 } = this.state;
    const priceFInal =
      selectTicketType.priceAfterDiscount !== selectTicketType.price
        ? selectTicketType.priceAfterDiscount
        : selectTicketType.price;

    return (
      <div>
        <div>
          برای رزرو اطلاعات زیر را تکمیل نمایید
          {/*<br />*/}
          {/*<BoxDetailSans*/}
          {/*  priceFInal={priceFInal}*/}
          {/*  jm={jm}*/}
          {/*  sans={sans}*/}
          {/*  number={number}*/}
          {/*/>*/}
          <br />
          <br />
          <ListGroup>
            <ListGroup.Item>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>شماره همراه خود را وارد کنید</Form.Label>
                <Form.Control
                  disabled={sended || loading1}
                  type="text"
                  placeholder="09121112233"
                  onChange={(e) => {
                    this.setState({
                      cellphone: e.target.value,
                    });
                  }}
                />
                <Form.Text className="text-muted">
                  کد رهگیری به این شماره ارسال خواهد شد
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>نام و نام خانوادگی</Form.Label>
                <Form.Control
                  disabled={sended || loading1}
                  type="text"
                  placeholder="امیر هدایت"
                  onChange={(e) => {
                    this.setState({
                      name: e.target.value,
                    });
                  }}
                />
                <Form.Text className="text-muted">
                  نام شخص سفارش دهنده
                </Form.Text>
              </Form.Group>
              {sended ? (
                <div>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>کد دریافتی را وارد نمایید</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="123456"
                      onChange={(e) => {
                        this.setState({
                          code: e.target.value,
                        });
                      }}
                    />
                    <Form.Text className="text-muted">
                      کد حاوی 6 رقم می باشد
                    </Form.Text>
                  </Form.Group>
                  <Button
                    variant={"success"}
                    block={true}
                    onClick={this.verifyCode}
                    disabled={loading2}
                  >
                    {loading2 ? "در حال بررسی" : "بررسی کد"}
                  </Button>
                </div>
              ) : (
                <Button
                  variant={"info"}
                  block={true}
                  onClick={this.sendCode}
                  disabled={loading1}
                >
                  {loading1 ? "در حال ارسال" : "   ارسال کد تایید"}
                </Button>
              )}
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default StepCellphone;
