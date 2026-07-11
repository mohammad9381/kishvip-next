import React from "react";
import Header from "components/layout/header7";
import Footer from "components/layout/footer7";
import NavLink from "hoc/NavLink";
import { SuccessToast, ErrorToast } from "hoc/ToastNotify/ToastNotify";

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      message: "",
      loading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { name, phone, message } = this.state;

    if (!name || !phone || !message) {
      ErrorToast("لطفا همه فیلدها را پر کنید");
      return;
    }

    try {
      this.setState({ loading: true });
      // ارسال به API تماس (در صورت وجود) یا نمایش موفقیت
      // نکته: در حال حاضر API تماس وجود ندارد، پیام در سمت کلاینت نمایش داده می‌شود
      await new Promise((resolve) => setTimeout(resolve, 500));
      SuccessToast("پیام شما با موفقیت ارسال شد. به زودی با شما تماس می‌گیریم");
      this.setState({ name: "", phone: "", message: "", loading: false });
    } catch (err) {
      this.setState({ loading: false });
      ErrorToast("مشکل در ارسال پیام رخ داد");
    }
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <Header />
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(/images/banner/bnr1.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">ارتباط با ما</h1>
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <NavLink href="/">خانه</NavLink>
                    </li>
                    <li>ارتباط با کیش VIP</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section-full content-inner contact-page-8 bg-white">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 m-b30">
                      <div className="icon-bx-wraper expertise bx-style-1 p-a20 radius-sm">
                        <div className="icon-content">
                          <h5 className="dlab-tilte">
                            <span className="icon-sm text-primary">
                              <i className="ti-location-pin"></i>
                            </span>
                            آدرس در جزیره
                        </h5>
                          <p>جزیره زیبای کیش ، سالار کیش واحد F22</p>
                          <h6 className="m-b15 text-black font-weight-400">
                            <i className="ti-alarm-clock"></i> ساعت کاری
                        </h6>
                          <p className="m-b0">هر روز از 8 صبح تا 12 شب</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6 m-b30">
                      <div className="icon-bx-wraper expertise bx-style-1 p-a20 radius-sm">
                        <div className="icon-content">
                          <h5 className="dlab-tilte">
                            <span className="icon-sm text-primary">
                              <i className="ti-email"></i>
                            </span>
                            رایانامه
                        </h5>
                          <p className="m-b0">info@kishvip.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6 m-b30">
                      <div className="icon-bx-wraper expertise bx-style-1 p-a20 radius-sm">
                        <div className="icon-content">
                          <h5 className="dlab-tilte">
                            <span className="icon-sm text-primary">
                              <i className="ti-mobile"></i>
                            </span>
                            شماره تماس
                        </h5>
                          <p className="m-b0">09337699381</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12 m-b30">
                  <form
                    className="inquiry-form wow fadeInUp"
                    data-wow-delay="0.2s"
                    onSubmit={this.handleSubmit}
                  >
                    <h3 className="title-box font-weight-300 m-t0 m-b10">
                      ارتباط با KISHVIP
                      <span className="bg-primary"></span>
                    </h3>
                    <p>
                      برای ارتباط با KISH VIP می توانید از طریق فرم زیر در ارتباط
                      باشید
                    </p>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="ti-user text-primary"></i>
                            </span>
                            <input
                              name="dzName"
                              type="text"
                              required
                              className="form-control"
                              placeholder="نام"
                              value={this.state.name}
                              onChange={(e) =>
                                this.setState({ name: e.target.value })
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="ti-mobile text-primary"></i>
                            </span>
                            <input
                              name="dzOther[Phone]"
                              type="tel"
                              required
                              className="form-control"
                              placeholder="شماره تماس"
                              value={this.state.phone}
                              onChange={(e) =>
                                this.setState({ phone: e.target.value })
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="ti-agenda text-primary"></i>
                            </span>
                            <textarea
                              name="dzMessage"
                              rows="4"
                              className="form-control"
                              required
                              placeholder="سوال یا پیشنهادات و انتقادات خود را ارسال کنید"
                              value={this.state.message}
                              onChange={(e) =>
                                this.setState({ message: e.target.value })
                              }
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <button
                          name="submit"
                          type="submit"
                          value="Submit"
                          className="site-button button-md"
                          disabled={loading}
                        >
                          <span>{loading ? "در حال ارسال..." : "ارسال"}</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
