import React from "react";
import { Button, Form } from "react-bootstrap";
import { ErrorToast } from "hoc/ToastNotify/ToastNotify";
import Wrapper from "hoc/Wrapper/Wrapper";

class TrackTicket extends React.Component {
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

    if (code === "" || code === null) {
      ErrorToast("لطفا کد را صحیح وارد نمایید");
      return;
    }

    try {
      this.setState({
        loading: true,
      });

      const res = await fetch(
        "/api/track/ticket?cellphone=" + cellphone + "&code=" + code
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
          <h5>دریافت مجدد بلیط</h5>
          <hr />
        </div>
        {data ? (
          <div>
            <a href={data.ticketsLink} target={"_blank"} rel="noreferrer">
              مشاهده بلیط
            </a>
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
                <Form.Label>کد بلیط اعلامی</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    this.setState({
                      code: e.target.value,
                    });
                  }}
                />
                <Form.Text className="text-muted">
                  کد بلیط مانند 15X2PNGR8GG37WZ بایستی وارد شود
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
                {loading ? "در حال بررسی" : "بررسی بلیط"}
              </Button>
            </div>
          </Wrapper>
        )}
      </div>
    );
  }
}

export default TrackTicket;
