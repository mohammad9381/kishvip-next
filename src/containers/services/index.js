import React from "react";
import Header from "components/layout/header7";
import Footer from "components/layout/footer7";
import NavLink from "hoc/NavLink";
import ServiceBox from "components/service/box";

class Services extends React.Component {
  render() {
    const { data, title } = this.props;

    return (
      <div>
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(/images/kish_img.png)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">{title}</h1>
              </div>
            </div>
          </div>

          <div className="section-full content-inner">
            <div className="container">
              <div className="row">
                {data.map((p) => {
                  return <ServiceBox p={p} key={p.id} />;
                })}
              </div>
            </div>
          </div>

          <div className="section-full p-t50 p-b20 bg-primary text-white d-none">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-lg-4">
                  <div className="icon-bx-wraper left shop-service-info m-b30">
                    <div className="icon-md text-black radius">
                      <NavLink>
                        {" "}
                        <i className="fa fa-gift"></i>
                      </NavLink>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte">
                        Free shipping on orders $60+
                      </h5>
                      <p>
                        Order more than 60$ and you will get free shippining
                        Worldwide. More info.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="icon-bx-wraper left shop-service-info m-b30">
                    <div className="icon-md text-black radius">
                      <NavLink>
                        {" "}
                        <i className="fa fa-plane"></i>
                      </NavLink>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte">Worldwide delivery</h5>
                      <p>
                        We deliver to the following countries: USA, Canada,
                        Europe, Australia
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="icon-bx-wraper left shop-service-info m-b30">
                    <div className="icon-md text-black radius">
                      <NavLink>
                        {" "}
                        <i className="fa fa-history"></i>
                      </NavLink>
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte">
                        60 days money back guranty!
                      </h5>
                      <p>
                        Not happy with our product, feel free to return it, we
                        will refund 100% your money!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
