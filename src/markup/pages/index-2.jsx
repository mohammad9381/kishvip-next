import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header2'
import Footer from '../layout/footer2'
import HomeSlider from '../element/homeslider1'
import {homeSliderContent2} from '../element/SliderContent'
import ScrollToTop from '../../components/element/scrollToTop';

// import '../../css/skin/skin-2.css';


class Index2 extends Component {
    // componentDidMount = () => {
    //     var head = document.head;
    //     var link = document.createElement("link");

    //     link.type = "text/css";
    //     link.rel = "stylesheet";
    //     link.href = "/skin/skin-2.min.css";

    //     head.appendChild(link);
    // }

    render() {
        return (
            <div className="skin-2">
                <Header/>

                <HomeSlider
                data={homeSliderContent2}
                contentWrapperCls="sliderStyle2"
                btnText="Read More"
                />

                <div class="page-content bg-white">
                    <div class="content-block">
                        <div class="section-full">
                            <div class="row spno about-industry">
                                <div class="col-lg-8 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                    <div class="dlab-post-media dlab-img-effect zoom">
                                        <img src={("/images/our-work/oilgas/pic1.jpg")} alt="" class="img-cover"/>
                                    </div>
                                </div>
                                <div class="col-lg-4 bg-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                    <div class="service-box style2">
                                        <div>
                                            <h2 class="title text-black"><span>Mechanical</span> <br/>Works</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <Link href="/services-2" class="site-button outline outline-2 btnhover11">ABOUT US</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                                    <div class="dlab-post-media dlab-img-effect zoom">
                                        <img src={("/images/our-work/oilgas/pic2.jpg")} alt="" class="img-cover"/>
                                    </div>
                                </div>
                                <div class="col-lg-4 bg-secondry text-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
                                    <div class="service-box style2">
                                        <div>
                                            <h2 class="title"><span>Power &  </span> <br/>Energy.</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <Link href="/services-2" class="site-button outline white outline-2 btnhover11">ABOUT US</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                    <div class="dlab-post-media dlab-img-effect zoom">
                                        <img src={("/images/our-work/oilgas/pic3.jpg")} alt="" class="img-cover"/>
                                    </div>
                                </div>
                                <div class="col-lg-4 bg-primary text-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                    <div class="service-box style2">
                                        <div>
                                            <h2 class="title"><span>Petroleum  </span> <br/>Refinery.</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <Link href="/services-2" class="site-button outline white outline-2 btnhover11">ABOUT US</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                                    <div class="dlab-post-media dlab-img-effect zoom">
                                        <img src={("/images/our-work/oilgas/pic4.jpg")} alt="" class="img-cover"/>
                                    </div>
                                </div>
                                <div class="col-lg-4 bg-primary text-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
                                    <div class="service-box style2">
                                        <div>
                                            <h2 class="title text-black"><span>Oil & Gas  </span> <br/>Industry.</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <Link href="/services-2" class="site-button outline white outline-2 btnhover11">ABOUT US</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 bg-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                    <div class="service-box style2">
                                        <div>
                                            <h2 class="title text-black"><span>Automative  </span> <br/>Manufacturing.</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <Link href="/services-2" class="site-button outline outline-2 btnhover11">ABOUT US</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-8 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                    <div class="dlab-post-media dlab-img-effect zoom">
                                        <img src={("/images/our-work/oilgas/pic5.jpg")} alt="" class="img-cover"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
                <ScrollToTop className="style1 radius"/>
            </div>
        )
    }
}
export default Index2;
