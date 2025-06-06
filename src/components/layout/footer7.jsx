import React, { Component } from "react";
import NavLink from "hoc/NavLink";
import json from "../../../package.json";
import Mojavez from "components/layout/mojavez";

class Footer7 extends Component {
  render() {
    return (
      <>
        <footer className="site-footer footer-full text-white">
          <div className="p-tb60 bg-primary">
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-md-right text-center">
                  <div className="widget-link ">
                    <ul>
                      <li>
                        <NavLink href="/">خانه</NavLink>
                      </li>
                      <li>
                        <NavLink href="/services">تفریحات کیش</NavLink>
                      </li>
                      <li>
                        <NavLink href="/rules">قوانین</NavLink>
                      </li>
                      <li>
                        <NavLink href="/contact">ارتباط با ما</NavLink>
                      </li>
                    </ul>
                  </div>
                  <ul className="list-inline m-b0 m-t10">
                    <li>
                      <NavLink
                        href="#"
                        className="site-button-link facebook hover"
                      >
                        <i className="fa fa-facebook" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        href="#"
                        className="site-button-link google-plus hover"
                      >
                        <i className="fa fa-google-plus" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        href="#"
                        className="site-button-link linkedin hover"
                      >
                        <i className="fa fa-linkedin" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        href="#"
                        className="site-button-link instagram hover"
                      >
                        <i className="fa fa-instagram" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        href="#"
                        className="site-button-link twitter hover"
                      >
                        <i className="fa fa-twitter" />
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div className="col-md-6 text-md-left text-center footer-logo">
                  {/*<img src={"/images/logo-light.png"} alt="" width="100" />*/}
                  <div>
                    <Mojavez />
                  </div>
                  <p className="m-b0 m-t10">
                    Copyright &copy; 2021 KishVip {json.version}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer7;
