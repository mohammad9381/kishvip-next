import React from "react";
import { ErrorToast } from "hoc/ToastNotify/ToastNotify";
import { Button, Card, Container } from "react-bootstrap";
import { VARIABLES } from "constants/varibale";

class PaymentVerify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
    };
    this.checkZibal = this.checkZibal.bind(this);
  }

  componentDidMount() {
    console.log(this.props.query.id);
    this.setState({ loading: true });
    this.checkZibal(this.props.query.id);
  }

  async checkZibal(uniq_code) {
    try {
      const res = await fetch("/api/payment/getZibalStatus?id=" + uniq_code);
      const data = await res.json();

      this.setState({
        data,
        loading: false,
      });
      console.log(data);
    } catch (err) {
      console.log(err);
      ErrorToast("موفق به بررسی نشد دوباره اقدام کنید");
    }
  }

  render() {
    const { data, loading } = this.state;
    return (
      <Container>
        <Card className={"text-center mb-5 mt-5"}>
          <Card.Body>
            {loading ? (
              <div className={"p-5 mt-2 text-center"}>
                در حال بررسی بلیط منتظر باشید
              </div>
            ) : data.status === "success" ? (
              <div>
                <p className={"text-center"}>
                  <i
                    className={"fa fa-check-circle"}
                    style={{ fontSize: 50, color: "green" }}
                  />
                </p>
                <p>پرداخت شما باموفقیت انجام شد </p>
                <br />
                <a href={data.data.ticketsLink}>
                  <Button variant={"info"}>دریافت بلیط</Button>
                </a>
                <br />
                <p className={"text-center"}>
                  شماره بلیط
                  <br />
                  <Button variant={"outline-dark"}>
                    {data.data.tempBookingReference}
                  </Button>
                </p>
              </div>
            ) : (
              <div>
                <p className={"text-center"}>
                  <i
                    className={"fa fa-window-close-o"}
                    style={{ fontSize: 50, color: "red" }}
                  />
                </p>
                <p>متاسفانه در فرآیند بررسی پرداخت دچار مشکل شده است </p>
                <a href={"/track?code=" + this.props.query.id}>
                  {" "}
                  <Button variant={"info"}>
                    1 کد رهگیری : {this.props.query.id}
                  </Button>
                </a>
                <br />
                <br />
                <p>
                  برای بررسی بیشتر بر لینک زیر کلیک کنید با پشتیبانی در ارتباط
                  باشید
                </p>
                <a
                  href={
                    VARIABLES.whatsapp_url +
                    "بررسی سفارش " +
                    this.props.query.id
                  }
                >
                  ارتباط با واتساپ
                </a>
              </div>
            )}
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default PaymentVerify;
