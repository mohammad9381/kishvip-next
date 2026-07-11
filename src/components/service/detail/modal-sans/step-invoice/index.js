import React from "react";
import { BoxDetailSans } from "components/service/detail/modal-sans/util";
import { latinToPersian } from "utilsFolder/lastinToPersian";
import { Button } from "react-bootstrap";
import { ErrorToast } from "hoc/ToastNotify/ToastNotify";
import Wrapper from "hoc/Wrapper/Wrapper";

class StepInvoice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start_check: false,
      exist_status: null,
      submit_reserve: null,
    };

    this.checkExist = this.checkExist.bind(this);
    this.submitReserve = this.submitReserve.bind(this);
  }

  async checkExist() {
    this.setState({
      start_check: true,
    });
    try {
      const { sans, selectTicketType, number, data } = this.props;

      // guard: اگر licences وجود نداشت
      if (!data.licences || !data.licences[0]) {
        ErrorToast("اطلاعات سرویس کامل نیست");
        return;
      }

      const res = await fetch(
        "/api/checkAvalibity?TicketTypeUniqueId=" +
          selectTicketType.ticketTypeUniqueId +
          "&SansUniqueId=" +
          sans.sansUniqueId +
          "&LicenseUniqueId=" +
          data.licences[0].licenceUniqueId +
          "&Number=" +
          number
      );
      const dataFetch = await res.json();
      if (dataFetch.status === "success") {
        if (dataFetch.data.isAvailable) {
          this.setState({
            exist_status: true,
            submit_reserve: "loading",
          });

          this.submitReserve();
        } else {
          ErrorToast("متاسفانه ظرفیت تکمیل شده با پشتیبانی تماس بگیرید");
        }
      } else {
        ErrorToast("مشکلی رخ داده است دوباره اقدام کنید");
      }
    } catch (err) {
      console.log("check exist error", err);
      ErrorToast("مشکل در ارتباط با سرور");
    }
  }

  async submitReserve() {
    try {
      const { sans, selectTicketType, number, data, user, name } = this.props;
      const priceFinal =
        selectTicketType.priceAfterDiscount !== selectTicketType.price
          ? selectTicketType.priceAfterDiscount
          : selectTicketType.price;

      const res = await fetch("/api/submitReserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ticketTypeUniqueId: selectTicketType.ticketTypeUniqueId,
          sansUniqueId: sans.sansUniqueId,
          licenseUniqueId: data.licences[0].licenceUniqueId,
          number: number,
          fullname: name,
          cellphone: user.cellphone,
          price: priceFinal,
          serviceUniqueId: data.serviceUniqueId,
        }),
      });
      const dataFetch = await res.json();
      if (dataFetch.status === "success") {
        if (dataFetch.data) {
          this.setState({
            exist_status: true,
            submit_reserve: true,
          });
          this.props.selectInvoice(dataFetch.data);
        } else {
          ErrorToast("متاسفانه ظرفیت تکمیل شده با پشتیبانی تماس بگیرید");
        }
      } else {
        ErrorToast("مشکلی رخ داده است دوباره اقدام کنید");
      }
    } catch (err) {
      console.log("submit reserve error", err);
      ErrorToast("مشکل در ارتباط با سرور");
    }
  }

  render() {
    const { sans, jm, selectTicketType, number, data, user, name } = this.props;
    const priceFinal =
      selectTicketType.priceAfterDiscount !== selectTicketType.price
        ? selectTicketType.priceAfterDiscount
        : selectTicketType.price;

    const { start_check, exist_status, submit_reserve } = this.state;
    return (
      <div>
        <div>
          کاربر گرامی {name} با شماره همراه {latinToPersian(user.cellphone)}
        </div>
        <div>
          <BoxDetailSans
            priceFinal={priceFinal}
            jm={jm}
            sans={sans}
            number={number}
            data={data}
          />
        </div>
        <div className={"pt-2 pb-2"}>لطفاً رزرو خود را تأیید کنید.</div>
        <div>
          {!start_check ? (
            <Button
              block
              variant={"info"}
              onClick={(e) => {
                this.checkExist();
              }}
            >
              رزرو نهایی و انتقال به درگاه بانک
            </Button>
          ) : (
            <Wrapper>
              <div>
                {exist_status ? (
                  <Button block variant={"success"}>
                    تعداد رزرو درخواستی موجود است
                  </Button>
                ) : exist_status === null ? (
                  <Button block variant={"outline-warning"}>
                    در حال بررسی موجودی
                  </Button>
                ) : (
                  <Button block variant={"outline-danger"}>
                    متاسفانه ظرفیت تکمیل است
                  </Button>
                )}
              </div>
              <div className={"mt-4"}>
                {submit_reserve === true ? (
                  <Button block variant={"success"}>
                    رزرو با موفقیت انجام شد
                  </Button>
                ) : submit_reserve === "loading" ? (
                  <Button block variant={"outline-warning"}>
                    در حال ثبت سفارش
                  </Button>
                ) : submit_reserve === null ? (
                  <Button block={true} variant={"outline-dark"}>
                    ثبت سفارش منتظر انجام
                  </Button>
                ) : (
                  "قادر به ثبت نمی باشد"
                )}
              </div>
              <div className={"mt-4"}>
                {submit_reserve === true && exist_status === true ? (
                  <Button variant={"success"} block={true}>
                    در حال انتقال به درگاه
                  </Button>
                ) : (
                  <Button>در حال انتظار</Button>
                )}
              </div>
            </Wrapper>
          )}
        </div>
      </div>
    );
  }
}

export default StepInvoice;
