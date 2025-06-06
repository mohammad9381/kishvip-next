import React, { Component } from "react";
import Sticky from "react-stickynode";
import NavLink from "hoc/NavLink";
import {
  event_categories,
  getEvenetCategoruUrl,
} from "constants/event_categories.constant";

class Header7 extends Component {
  componentDidMount() {
    // sidebar open/close

    var btn = document.querySelector(".navicon");
    var nav = document.querySelector(".header-nav");

    function toggleFunc() {
      btn.classList.toggle("open");
      nav.classList.toggle("show");
    }

    btn.addEventListener("click", toggleFunc);

    // Sidenav li open close
    var navUl = [].slice.call(
      document.querySelectorAll(".header-nav > ul > li")
    );
    for (var y = 0; y < navUl.length; y++) {
      navUl[y].addEventListener("click", function () {
        checkLi(this);
      });
    }

    function checkLi(current) {
      const active = current.classList.contains("open");
      navUl.forEach((el) => el.classList.remove("open"));
      //current.classList.add('open');

      if (active) {
        current.classList.remove("open");
        console.log("active");
      } else {
        current.classList.add("open");
        console.log("close");
      }
    }
  }

  render() {
    return (
      <>
        <header className="site-header mo-left header ext-header navstyle3">
          <div className="middle-bar bg-white">
            <div className="container">
              <div className="middle-area">
                <div className="logo-header">
                  <NavLink href="/">
                    <img src={"/images/logo.png"} alt="" />
                  </NavLink>
                </div>
                <div className="service-list">
                  <ul>
                    <li>
                      <a
                        href={"https://wa.me/message/MK7IBP545KJWJ1"}
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <i className="la la-phone"></i>
                        <h4 className="title">933.769.9381(98+)</h4>
                        <span>شماره واتساپ</span>
                      </a>
                    </li>
                    {/*<li>*/}
                    {/*    <i class="la la-clock-o"></i>*/}
                    {/*    <h4 class="title">08:00 AM - 06:00 PM</h4>*/}
                    {/*    <span>Monday - Friday</span>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <i class="la la-map"></i>*/}
                    {/*    <h4 class="title">شادآباد،17شهریور،کرمی،کوچه سوم،پلاک12</h4>*/}
                    {/*    <span>ایران ، تهران</span>*/}
                    {/*</li>*/}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Sticky innerZ={999} enabled={true}>
            <div className="sticky-header main-bar-wraper navbar-expand-lg">
              <div className="main-bar clearfix ">
                <div className="container clearfix">
                  <div className="logo-header mostion">
                    <NavLink href="/">
                      <img src={"/images/logo.png"} alt="کیش VIP" />
                    </NavLink>
                  </div>

                  <button
                    className="navbar-toggler collapsed navicon justify-content-end"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>

                  {/*<div className="extra-nav">*/}
                  {/*  <div className="extra-cell">*/}
                  {/*    <button*/}
                  {/*      id="quik-search-btn"*/}
                  {/*      type="button"*/}
                  {/*      className="site-button-link"*/}
                  {/*    >*/}
                  {/*      <i className="la la-search"></i>*/}
                  {/*    </button>*/}
                  {/*  </div>*/}
                  {/*</div>*/}

                  <div className="dlab-quik-search ">
                    <form action="#">
                      <input
                        name="search"
                        value=""
                        type="text"
                        className="form-control"
                        placeholder="Type to search"
                      />
                      <span id="quik-search-remove">
                        <i className="ti-close"></i>
                      </span>
                    </form>
                  </div>

                  <div
                    className="header-nav navbar-collapse collapse justify-content-start"
                    id="navbarNavDropdown"
                  >
                    <div className="logo-header d-md-block d-lg-none">
                      <NavLink href="/">
                        <img src={"/images/logo-5.png"} alt="" />
                      </NavLink>
                    </div>
                    <ul className="nav navbar-nav">
                      <li className=" has-mega-menu homedemo">
                        <NavLink href="/">خانه</NavLink>
                      </li>

                      <li>
                        <a>
                          تفریحات کیش
                          <i className="fa fa-chevron-down" />
                        </a>
                        <ul className="sub-menu">
                          {event_categories.map((e) => {
                            return (
                              <li key={e.id}>
                                <NavLink href={getEvenetCategoruUrl(e.id)}>
                                  {e.title}
                                </NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                      <li className=" has-mega-menu homedemo">
                        <NavLink href="/track">پیگیری بلیط</NavLink>
                      </li>

                      <li>
                        <NavLink href="/rules">قوانین و مقرات</NavLink>
                      </li>
                      <li>
                        <NavLink href="#">مطالب خواندنی کیش</NavLink>
                      </li>
                      <li>
                        <NavLink href="/contact">تماس با ما</NavLink>
                      </li>
                    </ul>
                    <div className="dlab-social-icon ind-social">
                      <ul>
                        <li>
                          <NavLink
                            class="site-button-link facebook fa fa-facebook"
                            to="/javascript:void(0);"
                          ></NavLink>
                        </li>
                        <li>
                          <NavLink
                            class="site-button-link twitter fa fa-twitter"
                            to="/javascript:void(0);"
                          ></NavLink>
                        </li>
                        <li>
                          <NavLink
                            class="site-button-link linkedin fa fa-linkedin"
                            to="/javascript:void(0);"
                          ></NavLink>
                        </li>
                        <li>
                          <NavLink
                            class="site-button-link instagram fa fa-instagram"
                            to="/javascript:void(0);"
                          ></NavLink>
                        </li>
                      </ul>
                      <p>2021 KISHVIP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Sticky>
        </header>
      </>
    );
  }
}

export default Header7;
