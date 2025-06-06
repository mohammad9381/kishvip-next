import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ClientSlider1 from '../element/clientSlider1';
import BlogSlider1 from '../../components/element/blogSlider1'
import {blogContent3,servicesContent4} from '../element/SliderContent'
import ServicesSlider1 from '../element/servicesSlider1';
import Testimonial12 from '../element/testimonial12';
import HomeSlider from '../element/homeslider1'
import { Parallax } from 'react-parallax';
import CounterSection from '../element/counterSection';
import Team1 from '../element/team1'

import '../../assets/css/plugins.css';
import '../../assets/css/style.css';
import '../../assets/css/skin/skin-1.css';
import '../../assets/css/templete.min.css';
import ScrollToTop from '../../components/element/scrollToTop';



const bg = require('/images/background/bg2.jpg' )
const bg2 = require('/images/background/bg4.jpg' )
const bg3 = require('/images/background/map-bg.png' )
const bg4 = require('/images/main-slider/slide8.jpg' )


class Index extends Component {



    // componentDidMount = () => {
    //     var head = document.head;
    //     var link = document.createElement("link");

    //     link.type = "text/css";
    //     link.rel = "stylesheet";
    //     link.href = "/skin/skin-1.min.css";

    //     head.appendChild(link);
    // }

    render() {
        return (
            <div className="skin-1">
                <Header/>

                <Parallax bgImage={bg4} strength={200} >
                    <div className="hero-section pt-50 home-bnr1">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-content">
                                        <h1 className="title">we are industry factory solution</h1>
                                        <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</div>
                                        <div className="buttons">
                                            <a href="">Read More</a>
                                            <a href="">About Us</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <img src={("/images/main-slider/slide7.png")} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax>



                <div class="page-content bg-white">
                    <div class="content-block">
                        <div class="section-full bg-gray content-inner about-carousel-ser">
                            <div class="container">
                                <div class="section-head text-center">
                                    <h2 class="title">Why Customer Love To  <br/><span class="text-primary">Choose Us</span></h2>
                                    <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>

                                <ServicesSlider1
                                slidesToShow={3}
                                data={servicesContent4} />

                            </div>
                        </div>

                        <div class="section-full bg-img-fix content-inner-2 overlay-black-dark contact-action style2" style={{ backgroundImage: "url(" + bg + ")" }}>
                            <div class="container">
                                <div class="row relative">
                                    <div class="col-md-12 col-lg-8 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                                        <div class="contact-no-area">
                                            <h2 class="title">A company involved in service, maintenance</h2>
                                            <div class="contact-no">
                                                <div class="contact-left">
                                                    <h3 class="no"><i class="sl-call-in"></i>123-456-7890</h3>
                                                </div>
                                                <div class="contact-right">
                                                    <Link href="/contact-4" class="site-button appointment-btn btnhover13">Get Appointment</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-4 contact-img-bx wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                                        <img src={("/images/pic1.png")} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div class="section-full bg-gray content-inner">
                            <div class="container">
                                <div class="section-head text-center">
                                    <h2 class="title"> Our Services</h2>
                                    <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div class="section-content row">
                                    <div class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                                        <div class="icon-bx-wraper" data-name="01">
                                            <div class="icon-lg">
                                                <Link href="#" class="icon-cell"><i class="flaticon-robot-arm"></i></Link>
                                            </div>
                                            <div class="icon-content">
                                                <h2 class="dlab-tilte">Mechanical Works</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                                        <div class="icon-bx-wraper" data-name="02">
                                            <div class="icon-lg">
                                                <Link href="#" class="icon-cell"><i class="flaticon-factory-1"></i></Link>
                                            </div>
                                            <div class="icon-content">
                                                <h2 class="dlab-tilte">Power & Energy</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                        <div class="icon-bx-wraper" data-name="03">
                                            <div class="icon-lg">
                                                <Link href="#" class="icon-cell"><i class="flaticon-fuel-station"></i></Link>
                                            </div>
                                            <div class="icon-content">
                                                <h2 class="dlab-tilte">Petroleum Refinery</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
                                        <div class="icon-bx-wraper" data-name="04">
                                            <div class="icon-lg">
                                                <Link href="#" class="icon-cell"><i class="flaticon-fuel-truck"></i></Link>
                                            </div>
                                            <div class="icon-content">
                                                <h2 class="dlab-tilte">Oil & Gas Industry</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                                        <div class="icon-bx-wraper" data-name="05">
                                            <div class="icon-lg">
                                                <Link href="#" class="icon-cell"><i class="flaticon-conveyor-1"></i></Link>
                                            </div>
                                            <div class="icon-content">
                                                <h2 class="dlab-tilte">Automative Manufacturing</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                                        <div class="icon-bx-wraper" data-name="06">
                                            <div class="icon-lg">
                                                <Link href="#" class="icon-cell"><i class="flaticon-engineer-1"></i></Link>
                                            </div>
                                            <div class="icon-content">
                                                <h2 class="dlab-tilte">Chemical Research</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <CounterSection backgroundImage={bg2}/>

                        <div class="section-full bg-gray content-inner">
                            <div class="container">
                                <div class="section-head text-center ">
                                    <h2 class="title"> Meet The Team</h2>
                                    <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <Team1 />

                            </div>
                        </div>

                        <div class="section-full overlay-black-middle bg-secondry content-inner-2 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s" style={{ backgroundImage: "url(" + bg3 + ")" }}>
                            <div class="container">
                                <div class="section-head text-white text-center">
                                    <h2 class="title">What People Are Saying</h2>
                                    <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div class="section-content">

                                    <Testimonial12/>

                                </div>

                            </div>
                        </div>

                        <div class="section-full content-inner bg-gray wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                            <div class="container">
                                <div class="section-head text-center">
                                    <h2 class="title">Latest blog post</h2>
                                    <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>

                                <BlogSlider1
                                data={blogContent3}
                                blogPostCls="post-style-1"
                                imgEffect="rotate"
                                noDes
                                />

                            </div>
                        </div>

                        <div class="section-full dlab-we-find bg-img-fix p-t20 p-b20 bg-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                            <div class="container">
                                <div class="section-content">
                                    <ClientSlider1 hideBorder/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer hideContactInfo displayNewsLetter />
                <ScrollToTop className="icon-up"/>
            </div>
        )
    }
}
export default Index;

