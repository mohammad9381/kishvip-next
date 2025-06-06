import React from "react";
import { Button, Form } from "react-bootstrap";
import { ErrorToast } from "hoc/ToastNotify/ToastNotify";
import Wrapper from "hoc/Wrapper/Wrapper";
import OrderDetail from "containers/track/order/detail";

class TrackOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cellphone: "",
      code: "",
      loading: false,
      data: null,
    };

    this.getOrder = this.getOrder.bind(this);
  }

  async getOrder() {
    const { cellphone, code } = this.state;

    if (cellphone === "" || cellphone === null || cellphone.length !== 11) {
      ErrorToast("لطفا شماره همراه را صحیح وارد نمایید");
      return;
    }

    if (code === "" || code === null || code.length !== 6) {
      ErrorToast("لطفا کد را صحیح وارد نمایید");
      return;
    }

    try {
      this.setState({
        loading: true,
      });

      const res = await fetch(
        "/api/track/order?cellphone=" + cellphone + "&code=" + code
      );
      const data = await res.json();

      if (data.status === "success") {
        this.setState({
          data: data.data,
          loading: false,
        });
      } else {
        this.setState({
          loading: false,
        });
        ErrorToast("رزروی با این مشخصات یافت نشد");
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
    const { loading, data } = this.state;
    return (
      <div>
        <div className={"text-center"}>
          <h5>پیگیری سفارش</h5>
          <hr />
        </div>
        {data ? (
          <div>
            <OrderDetail data={data} />
          </div>
        ) : (
          <Wrapper>
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>شماره همراه خود را وارد کنید</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    this.setState({
                      cellphone: e.target.value,
                    });
                  }}
                />
                <Form.Text className="text-muted">
                  شماره همراهی که درخواست با آن ثبت شده است
                </Form.Text>
              </Form.Group>
            </div>
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>کد رهگیری در انتهای سفارش</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  maxLength={6}
                  onChange={(e) => {
                    this.setState({
                      code: e.target.value,
                    });
                  }}
                />
                <Form.Text className="text-muted">
                  کد رهگیری مانند 845124 و 6 رقم عدد
                </Form.Text>
              </Form.Group>
            </div>
            <div>
              <Button
                block={true}
                variant={"info"}
                disabled={loading}
                onClick={(e) => this.getOrder()}
              >
                {loading ? "در حال بررسی" : "بررسی سفارش"}
              </Button>
            </div>
          </Wrapper>
        )}
      </div>
    );
  }
}

export default TrackOrder;
