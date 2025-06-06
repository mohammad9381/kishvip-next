import React, { Component } from "react";
import Header from "components/layout/header7";
import Footer from "components/layout/footer7";
import {
  blogContent3,
  ExibitionContent1,
  homeSliderContent7,
} from "components/element/SliderContent";
import BlogSlider1 from "components/element/blogSlider1";
import Testmonial5 from "components/element/testmonial5";
import ExibitionSlider1 from "components/element/exibitionSlider1";
import HomeSlider from "components/element/homeSlider2";
import Gallery2 from "components/element/gallery2";
import ScrollToTop from "components/element/scrollToTop";
import Team4 from "components/element/team4";
import NavLink from "hoc/NavLink";
import LastBlog from "containers/home/last-blog";
import SixBox from "containers/home/six-box";
import OurTeam from "containers/home/our-team";

// import '../css/skin/skin-5.min.css';

const images = [
  {
    id: 1,
    name: "ساحل",
    title: "sahel",
    imgUrl: "/images/gallery/kish/sahel_1.jpg",
  },
  {
    id: 2,
    name: "ساحل",
    title: "sahel",
    imgUrl: "/images/gallery/kish/sahel_2.jpg",
  },
  {
    id: 3,
    name: "ساحل",
    title: "sahel",
    imgUrl: "/images/gallery/kish/sahel_3.jpg",
  },
  {
    id: 4,
    name: "ساحل",
    title: "sahel",
    imgUrl: "/images/gallery/kish/sahel_4.jpg",
  },
  {
    id: 5,
    name: "شهربازی",
    title: "shahr",
    imgUrl: "/images/gallery/kish/shahr_1.jpg",
  },
  {
    id: 6,
    name: "شهربازی",
    title: "shahr",
    imgUrl: "/images/gallery/kish/shahr_2.jpg",
  },
];

class HomePage extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="page-content bg-white home-slider-7">
          <SixBox />

          <div className="content-block">
            <div className="section-full call-action bg-primary">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9 text-white">
                    <h2 className="title">
                      در صورت نیاز به راهنمایی در رزرو تفریحات کیش و دریافت
                      تخفیف{" "}
                    </h2>
                    <p className="m-b0">با KISHVIP تماس بگیرید. </p>
                  </div>
                  <div className="col-lg-3 d-flex">
                    <a
                      href="https://wa.me/message/MK7IBP545KJWJ1"
                      target={"_blank"}
                      className="site-button btnhover10 white align-self-center outline ml-auto radius-xl outline-2"
                      rel="noreferrer"
                    >
                      با ما تماس بگیرید؟
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-full content-inner-2 exhibition-bx">
              <div className="container">
                <div className="row align-items-center">
                  <div
                    className="col-lg-6 wow fadeInLeft"
                    data-wow-duration="2s"
                    data-wow-delay="0.3s"
                  >
                    <ExibitionSlider1 data={ExibitionContent1} />
                  </div>
                  <div
                    className="col-lg-6 wow fadeInRight"
                    data-wow-duration="2s"
                    data-wow-delay="0.3s"
                  >
                    <div className="content-bx1">
                      <div className="section-head">
                        <h2 className="title">رستوران شاندیز صفدری کیش</h2>
                        <p>
                          شما می توانید رستوران شاندیز صفدری با موزیک زنده و
                          تخفیف ویژه در KISH VIP رزرو نمایید
                          <br />
                          توجه داشته باشید با رزرو از KISHVIP می توانید از تخفیف
                          ویژه رستوران بهره مند شوید.
                        </p>
                      </div>
                      <NavLink
                        href="/801-رستوران-شاندیز-صفدری-ساحلی"
                        className="site-button btnhover10 black m-r10 m-b10"
                      >
                        رزرو کنید
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*<div className="section-full">*/}
            {/*    <div className="row m-lr0">*/}
            {/*        <div className="col-xl-6 col-lg-12 p-lr0 wow bounceInLeft" data-wow-duration="2s"*/}
            {/*             data-wow-delay="0.3s">*/}
            {/*            <div className="row m-a0 lightgallery" id="lightgallery">*/}
            {/*                <div className="col-lg-12 col-md-12 col-sm-12 p-lr0">*/}
            {/*                    <div className="dlab-box overlay-gallery-bx1">*/}
            {/*                        <div*/}
            {/*                            className="dlab-thum dlab-img-overlay1 primary dlab-img-effect zoom">*/}
            {/*                            <NavLink href="#;"> <img className="img-cover"*/}
            {/*                                                     src={("/images/gallery/food/pic7.jpg")}*/}
            {/*                                                     alt=""/> </NavLink>*/}
            {/*                            <div className="overlay-bx">*/}
            {/*                                <div className="overlay-icon">*/}
            {/*                                    <NavLink href="#;"> <i*/}
            {/*                                        className="fa fa-play icon-bx-xs"></i> </NavLink>*/}
            {/*                                    <span data-exthumbimage="images/gallery/food/pic7.jpg"*/}
            {/*                                          data-src="images/gallery/food/pic7.jpg"*/}
            {/*                                          className="check-km" title="Cookies">*/}
            {/*                                    <i className="fa fa-search icon-bx-xs"></i>*/}
            {/*                                </span>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="col-lg-6 col-md-6 col-sm-6 p-lr0">*/}
            {/*                    <div className="dlab-box overlay-gallery-bx1">*/}
            {/*                        <div*/}
            {/*                            className="dlab-thum dlab-img-overlay1 primary dlab-img-effect zoom">*/}
            {/*                            <NavLink href="#;"> <img className="img-cover"*/}
            {/*                                                     src={("/images/gallery/food/pic5.jpg")}*/}
            {/*                                                     alt=""/> </NavLink>*/}
            {/*                            <div className="overlay-bx">*/}
            {/*                                <div className="overlay-icon">*/}
            {/*                                    <NavLink href="#;"> <i*/}
            {/*                                        className="fa fa-play icon-bx-xs"></i> </NavLink>*/}
            {/*                                    <span data-exthumbimage="images/gallery/food/pic5.jpg"*/}
            {/*                                          data-src="images/gallery/food/pic5.jpg"*/}
            {/*                                          className="check-km" title="Burger">*/}
            {/*                                    <i className="fa fa-search icon-bx-xs"></i>*/}
            {/*                                </span>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="col-lg-6 col-md-6 col-sm-6 p-lr0">*/}
            {/*                    <div className="dlab-box overlay-gallery-bx1">*/}
            {/*                        <div*/}
            {/*                            className="dlab-thum dlab-img-overlay1 primary dlab-img-effect zoom">*/}
            {/*                            <NavLink href="#;"> <img className="img-cover"*/}
            {/*                                                     src={("/images/gallery/food/pic6.jpg")}*/}
            {/*                                                     alt=""/> </NavLink>*/}
            {/*                            <div className="overlay-bx">*/}
            {/*                                <div className="overlay-icon">*/}
            {/*                                    <NavLink href="#;"> <i*/}
            {/*                                        className="fa fa-play icon-bx-xs"></i> </NavLink>*/}
            {/*                                    <span data-exthumbimage="images/gallery/food/pic6.jpg"*/}
            {/*                                          data-src="images/gallery/food/pic6.jpg"*/}
            {/*                                          className="check-km" title="Bear cup">*/}
            {/*                                    <i className="fa fa-search icon-bx-xs"></i>*/}
            {/*                                </span>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div*/}
            {/*            className="col-xl-6 col-lg-12 p-lr0 d-flex dis-tbl latest-project-info bg-primary wow bounceInRight"*/}
            {/*            data-wow-duration="2s" data-wow-delay="0.3s">*/}
            {/*            <div className="text-white align-self-center ">*/}
            {/*                <h2>خطوط کنسرو ماهی</h2>*/}
            {/*                <p>شرکت ظفر ماشین نزدیک به 20 سال در زمینه ساخت ماشین آلات صنعتی خصوصا خطوط کنسرو در ایران در حال فعالیت می باشد.*/}
            {/*                <br/>*/}
            {/*                نزدیک به 50 کارخانه کنسرو ماهی در ایران با ماشین آلات ظفر ماشین در حال فعالیت می باشد که می توان از جمله به کارخانه های شیلانه ، شیلتون ، طبیعت ، خوشگوار اصفهان ، ایلیکا ، تحفه و ... اشاره کرد.</p>*/}
            {/*                <NavLink href="/portfolio-details" className="site-button btnhover10 white">مشاهده کارخانه های کنسرو ماهی</NavLink>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <HomeSlider
              data={homeSliderContent7}
              contentWrapperCls="sliderStyle7"
              btnText="مشاهده تفریحات"
            />
            <div className="section-full bg-white content-inner-2">
              <div className="container">
                <div className="section-head text-center">
                  <h2 className="title">تصویر جزیره کیش</h2>
                  <p>
                    در قسمت پایین می توانید تصاویر زیبا از جزیره را مشاهده
                    نمایید
                  </p>
                </div>
                <Gallery2 images={images} />
              </div>
            </div>
            {/*<OurTeam/>*/}
            {/*  <div className="section-full content-inner-2 bg-primary wow fadeIn" data-wow-duration="2s"*/}
            {/*       data-wow-delay="0.3s">*/}
            {/*      <div className="container">*/}
            {/*          <div className="section-head style2 text-center text-white">*/}
            {/*              <h2 className="title">Testimonials</h2>*/}
            {/*              <p>There are many variations of passages of Lorem Ipsum typesetting industry has*/}
            {/*                  been the industry's standard dummy text ever since the been when an unknown*/}
            {/*                  printer.</p>*/}
            {/*          </div>*/}
            {/*          <div className="section-content">*/}
            {/*              <Testmonial5/>*/}
            {/*          </div>*/}
            {/*      </div>*/}
            {/*  </div>*/}

            {/*<LastBlog/>*/}
          </div>
        </div>
        <Footer />
        <ScrollToTop className="icon-up" />
      </>
    );
  }
}

export default HomePage;
