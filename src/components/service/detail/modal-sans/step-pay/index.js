import React from "react";
import { formatNumber, latinToPersian } from "utilsFolder/lastinToPersian";
import { Button } from "react-bootstrap";
import { ErrorToast } from "hoc/ToastNotify/ToastNotify";
import Wrapper from "hoc/Wrapper/Wrapper";

class StepPayment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };

    this.sendGateway = this.sendGateway.bind(this);
  }

  async sendGateway(invoice) {
    this.setState({
      loading: true,
    });
    try {
      const res = await fetch("/api/payment/zibal?id=" + invoice.id);
      const dataFetch = await res.json();
      console.log(dataFetch);
      if (dataFetch.status === "success") {
        // console.log();
        document.location.href = dataFetch.data.paymentUrl;
      } else {
        ErrorToast("مشکلی در ارتباط با درگاه دوباره اقدام کنید");
        this.setState({ loading: false });
      }
    } catch (err) {
      ErrorToast("مشکلی در ارتباط با درگاه دوباره اقدام کنید");
      console.log("try", err);
      this.setState({ loading: false });
    }
  }

  render() {
    const { invoice, data } = this.props;
    const { loading } = this.state;
    console.log(invoice);
    return (
      <div
        onClick={(e) => {
          if (!loading) this.sendGateway(invoice);
        }}
      >
        <div className={"d-flex justify-content-center"}>
          <div>
            <img src={"/images/zibal.png"} style={{ maxWidth: 300 }} />
          </div>
        </div>
        <div className={"text-center"}>
          <Button
            variant={"info"}
            className={"text-center mt-5"}
            disabled={loading}
          >
            {loading ? (
              "در حال انتقال به درگاه زیبال"
            ) : (
              <Wrapper>
                برای پرداخت فاکتور به مبلغ
                {"  " +
                  latinToPersian(formatNumber(invoice.total_price)) +
                  "  "}
                <span className={"rial"}>ریال</span>
              </Wrapper>
            )}
          </Button>
        </div>
      </div>
    );
  }
}

export default StepPayment;
