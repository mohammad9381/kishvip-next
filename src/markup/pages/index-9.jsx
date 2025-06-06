import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header9'
import Footer from '../layout/footer9'
import ProjectSlider3 from '../element/projectSlider3';
import ProjectSlider4 from '../element/projectSlider4';
import Testimonial7 from '../element/testimonial7';
import BlogSlider1 from '../../components/element/blogSlider1'
import {blogContent2} from '../element/SliderContent'
import ScrollToTop from '../../components/element/scrollToTop';
import Team11 from '../element/team11'

// import '../../css/skin/skin-7.min.css';

const bg = require('/images/main-slider/slide22.jpg')
const bg2 = require('/images/background/bg2.jpg')

class Index9 extends Component {


    render() {
        return (
            <>
            <Header/>
            <div class="page-content bg-white">
                <div class="dlab-bnr-inr overlay-black-middle bg-pt cargo-banner"style={{ backgroundImage: "url(" + bg + ")" }}>
                    <div class="container">
                        <div class="dlab-bnr-inr-entry text-white">
                            <h1 class="title">The Biggest Contribution <br/> Of Ship Industry To Humanity</h1>
                            <form class="banner-form">
                                <div class="row">
                                    <div class="col-lg-2 col-md-4 col-sm-4 col-6">
                                        <div class="form-group">
                                            <select>
                                                <option>Transport</option>
                                                <option>Air</option>
                                                <option>Ocean</option>
                                                <option>Road</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-4 col-sm-4 col-6">
                                        <div class="form-group">
                                            <select>
                                                <option>Country</option>
                                                <option>United State</option>
                                                <option>india</option>
                                                <option>Brazil</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div class="form-group">
                                            <select>
                                                <option>To Country</option>
                                                <option>india</option>
                                                <option>Brazil</option>
                                                <option>United State</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                                        <div class="form-group">
                                            <input type="date" class="form-control"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <button class="site-button btnhover17 btn-block radius-no">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="bottom-link"><h4><Link href="#" class="text-white">Welcome To ship industry</Link></h4></div>
                        </div>
                    </div>
                </div>

                <div class="content-block">
                    <div class="section-full bg-gray content-inner">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="icon-bx-wraper service-box style5 shadow fly-box">
                                        <div class="dlab-media dlab-img-effect zoom">
                                            <img src={("/images/our-services/ship/pic1.jpg")} alt=""/>
                                        </div>
                                        <div class="icon-content">
                                            <h2 class="dlab-tilte"><Link href="/services-details">Air Freight Forwarding</Link></h2>
                                            <Link href="/services-details" class="link-btn">+</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="icon-bx-wraper service-box style5 shadow fly-box">
                                        <div class="dlab-media dlab-img-effect zoom">
                                            <img src={("/images/our-services/ship/pic2.jpg")} alt=""/>
                                        </div>
                                        <div class="icon-content">
                                            <h2 class="dlab-tilte"><Link href="/services-details">Ocean Freight and Shipping </Link></h2>
                                            <Link href="/services-details" class="link-btn">+</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="icon-bx-wraper service-box style5 shadow fly-box">
                                        <div class="dlab-media dlab-img-effect zoom">
                                            <img src={("/images/our-services/ship/pic3.jpg")} alt=""/>
                                        </div>
                                        <div class="icon-content">
                                            <h2 class="dlab-tilte"><Link href="/services-details">Warehousing & Fulfillment</Link></h2>
                                            <Link href="/services-details" class="link-btn">+</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-full bg-white overflow-hidden">
                        <ProjectSlider3/>
                    </div>

                    <div class="section-full bg-gray about-carousel-ser content-inner">
                        <div class="container">
                            <ProjectSlider4/>
                        </div>
                    </div>

                    <div class="section-full content-inner-2 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s">
                        <div class="container">
                            <div class="section-head style2 text-center">
                                <h2 class="title">Clients Say About Us</h2>
                                <p>19+ years’ experience</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 wow fadeIn" data-wow-delay="0.2s"  data-wow-duration="2s">
                                    <Testimonial7/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-full bg-gray content-inner bg-img-fix overlay-black-dark" style={{ backgroundImage: "url(" + bg2 + ")" }}>
                        <div class="container">
                            <div class="section-head style2 text-white text-center">
                                <h2 class="title">Our Team</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <Team11 />
                        </div>
                    </div>

                    <div class="section-full call-action bg-primary wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-9 text-white">
                                    <h2 class="title">Amazing things happen to your business </h2>
                                    <p class="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div class="col-lg-3 d-flex">
                                    <Link href="/contact-2" class="site-button btnhover17 white align-self-center outline ml-auto outline-2">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-full content-inner bg-gray">
                        <div class="container">
                            <div class="section-head style2 text-center">
                                <h2 class="title">Latest blog post</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <BlogSlider1 data={blogContent2}
                            noDes
                            imgEffect="zoom"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <ScrollToTop className="style3"/>
            </>
        )
    }
}
export default Index9;
