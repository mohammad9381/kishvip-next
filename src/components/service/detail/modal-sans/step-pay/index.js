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
    if (this.state.loading) return;

    this.setState({
      loading: true,
    });
    try {
      const res = await fetch("/api/payment/zibal?id=" + invoice.id, {
        method: "POST",
      });
      const dataFetch = await res.json();
      if (dataFetch.status === "success") {
        if (dataFetch.data && dataFetch.data.paymentUrl) {
          document.location.href = dataFetch.data.paymentUrl;
        } else {
          ErrorToast("درگاه پرداخت در دسترس نیست. بعداً تلاش کنید");
          this.setState({ loading: false });
        }
      } else {
        ErrorToast("مشکلی در ارتباط با درگاه دوباره اقدام کنید");
        this.setState({ loading: false });
      }
    } catch (err) {
      ErrorToast("مشکلی در ارتباط با درگاه دوباره اقدام کنید");
      console.log("gateway error", err);
      this.setState({ loading: false });
    }
  }

  render() {
    const { invoice } = this.props;
    const { loading } = this.state;

    return (
      <div>
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
            onClick={() => this.sendGateway(invoice)}
          >
            {loading ? (
              "در حال انتقال به درگاه زیبال"
            ) : (
              <Wrapper>
                برای پرداخت فاکتور به مبلغ
                {"  " +
                  latinToPersian(formatNumber(invoice.total_price || 0)) +
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
