import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header3'
import Footer from '../layout/footer3';
// Sliders
import Testimonial1 from './../element/testimonial1';
import BlogSlider1 from '../../components/element/blogSlider1'
import {blogContent3,projectContent1,homeSliderContent3} from '../element/SliderContent'
import ProjectSlider1 from '../element/projectSlider1'
import HomeSlider from '../element/homeslider1'
import ScrollToTop from '../../components/element/scrollToTop';

// import '../../css/skin/skin-2.min.css';

const bg = require('/images/background/map-bg.png')

class Index3 extends Component {


    render() {
        return (
            <>
                <Header />

                <HomeSlider
                data={homeSliderContent3}
                contentWrapperCls="sliderStyle3"
                hideBtn
                />

                <div class="page-content bg-white">
                    <div class="content-block">
                        <div class="section-full content-inner bg-gray">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="dlab-box service-box-2">
                                            <div class="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect rotate">
                                                <Link href="/services-details"><img src={("/images/our-work/steelplant/pic1.jpg")} alt="" /></Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="title"><Link href="/services-details">Machine Welding</Link></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <Link href="/services-details" class="site-button btnhover14">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                        <div class="dlab-box service-box-2">
                                            <div class="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect rotate">
                                                <Link href="/services-details"><img src={("/images/our-work/steelplant/pic2.jpg")} alt="" /></Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="title"><Link href="/services-details">Flanging & Advanced</Link></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <Link href="/services-details" class="site-button btnhover14">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">
                                        <div class="dlab-box service-box-2">
                                            <div class="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect rotate">
                                                <Link href="/services-details"><img src={("/images/our-work/steelplant/pic3.jpg")} alt="" /></Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="title"><Link href="/services-details">Metal Sheet Cutting</Link></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <Link href="/services-details" class="site-button btnhover14">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="dlab-box service-box-2">
                                            <div class="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect rotate">
                                                <Link href="/services-details"><img src={("/images/our-work/steelplant/pic4.jpg")} alt="" /></Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="title"><Link href="/services-details">Structural Steel</Link></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <Link href="/services-details" class="site-button btnhover14">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                        <div class="dlab-box service-box-2">
                                            <div class="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect rotate">
                                                <Link href="/services-details"><img src={("/images/our-work/steelplant/pic5.jpg")} alt="" /></Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="title"><Link href="/services-details">Pipe & Pipeline</Link></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <Link href="/services-details" class="site-button btnhover14">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">
                                        <div class="dlab-box service-box-2">
                                            <div class="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect rotate">
                                                <Link href="/services-details"><img src={("/images/our-work/steelplant/pic6.jpg")} alt="" /></Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="title"><Link href="/services-details">Structural Fabrication</Link></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <Link href="/services-details" class="site-button btnhover14">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full content-inner-2 bg-primary wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s" style={{ backgroundImage: "url(" + bg + ")" }}>
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12 text-center service-info">
                                        <h2 class="title text-white">Amazing things happen to your business when we connect those dots of utility and value.</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full content-inner bg-white">
                            <div class="container">
                                <div class="row align-items-center">
                                    <div class="col-lg-6 col-md-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="our-story">
                                            <span>OUR STORY</span>
                                            <h2 class="title">Commited to High <br /> Quality <span class="text-primary">  Service </span></h2>
                                            <h4 class="title">Amazing things happen to your business when we connect those dots of utility and value.</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting Factory. Lorem Ipsum has been the Factory's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting Factory.</p>
                                            <Link href="/about-2" class="site-button btnhover14">Read More</Link>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                        <img src={("/images/about/pic6.jpg")} class="radius-sm" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full call-action style1 bg-primary wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-9 text-white">
                                        <h2 class="title">Amazing things happen to your business </h2>
                                    </div>
                                    <div class="col-lg-3 d-flex">
                                        <Link href="/contact-1" class="site-button black align-self-center ml-auto btnhover14">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full content-inner-2 bg-gray wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h2 class="title">Our Project</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12 col-md-12">
                                        <ProjectSlider1 data={projectContent1}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full bg-white content-inner">
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h2 class="title">Our team</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div class="row dlab-team10-area">
                                    <div class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                                        <div class="dlab-box m-b30 dlab-team10">
                                            <div class="dlab-media">
                                                <Link href="/team-1">
                                                    <img alt="" src={("/images/our-team/pic1.jpg")} />
                                                </Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="dlab-title"><Link href="/team-1">Nashid Martines</Link></h4>
                                                <span class="dlab-position">Director</span>
                                                <ul class="dlab-social-icon">
                                                    <li><Link class="site-button fa fa-facebook facebook" to="#"></Link></li>
                                                    <li><Link class="site-button fa fa-twitter twitter" to="#"></Link></li>
                                                    <li><Link class="site-button fa fa-linkedin linkedin" to="#"></Link></li>
                                                    <li><Link class="site-button fa fa-pinterest pinterest" to="#"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                                        <div class="dlab-box m-b30 dlab-team10">
                                            <div class="dlab-media">
                                                <Link href="/team-1">
                                                    <img alt="" src={("/images/our-team/pic2.jpg")} />
                                                </Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="dlab-title"><Link href="/team-1">Konne Backfield</Link></h4>
                                                <span class="dlab-position">Designer</span>
                                                <ul class="dlab-social-icon">
                                                    <li><Link class="site-button fa fa-facebook facebook" to="#"></Link></li>
                                                    <li><Link class="site-button fa fa-twitter twitter" to="#"></Link></li>
                                                    <li><Link class="site-button fa fa-linkedin linkedin" to="#"></Link></li>
                                                    <li><Link class="site-button fa fa-pinterest pinterest" to="#"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                        <div class="dlab-box m-b30 dlab-team10">
                                            <div class="dlab-media">
                                                <Link href="/team-1">
                                                    <img alt="" src={("/images/our-team/pic3.jpg")} />
                                                </Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="dlab-title"><Link href="/team-1">Hackson Willingham</Link></h4>
                                                <span class="dlab-position">Developer</span>
                                                <ul class="dlab-social-icon">
                                                    <li><Link class="site-button fa fa-facebook facebook" to="#"></Link></li>
                                                    <li><Link class="site-button fa fa-twitter twitter" to="#"></Link></li>
                                                    <li><Link class="site-button fa fa-linkedin linkedin" to="#"></Link></li>
                                                    <li><Link class="site-button fa fa-pinterest pinterest" to="#"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
                                        <div class="dlab-box m-b30 dlab-team10">
                                            <div class="dlab-media">
                                                <Link href="/team-1">
                                                    <img alt="" src={("/images/our-team/pic4.jpg")} />
                                                </Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="dlab-title"><Link href="/team-1">Konne Backfield</Link></h4>
                                                <span class="dlab-position">Manager</span>
                                                <ul class="dlab-social-icon">
                                                    <li><Link class="site-button fa fa-facebook facebook" to="#"></Link></li>
                                                    <li><Link class="site-button fa fa-twitter twitter" to="#"></Link></li>
                                                    <li><Link class="site-button fa fa-linkedin linkedin" to="#"></Link></li>
                                                    <li><Link class="site-button fa fa-pinterest pinterest" to="#"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full content-inner-2 bg-gray wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s">
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h2 class="title">Happy Customers Said</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <Testimonial1 />
                            </div>
                        </div>

                        <div class="section-full content-inner bg-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h2 class="title">Industry News</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <BlogSlider1
                                        data={blogContent3}
                                        imgEffect="rotate"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full call-action bg-primary wow fadeIn" data-wow-duration="2s" data-wow-delay="0.9s">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-9 text-white">
                                        <h2 class="title">Amazing things happen to your business </h2>
                                        <p class="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                    <div class="col-lg-3 d-flex">
                                        <Link href="/contact-2" class="site-button white align-self-center outline ml-auto outline-2 btnhover14">Get In Touch</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                <ScrollToTop className="style1 radius white"/>
            </>
        )
    }
}
export default Index3;
