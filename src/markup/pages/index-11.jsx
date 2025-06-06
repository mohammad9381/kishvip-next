import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header11'
import Footer from '../layout/footer11'
import {blogContent5,homeSliderContent9} from '../element/SliderContent'
import BlogSlider1 from '../../components/element/blogSlider1'
import Testimonial9 from '../element/testimonial9'
import HomeSlider from '../../components/element/homeSlider2'
import { Parallax } from 'react-parallax';
import ScrollToTop from '../../components/element/scrollToTop';

// import '../../css/skin/skin-4.min.css';

const bg = require('/images/background/map-bg.png' )
const bg2 = require('/images/main-slider/slide23.jpg' )

class Index11 extends Component {


    render() {
        return (
            <>
                <Header/>

                {/* <HomeSlider
                data={homeSliderContent9}
                btnText="OUR SERVICES"
                /> */}

                <Parallax bgImage={bg2} strength={400} >
                    <div className="hero-section overlay2 relative home-slider-11" >
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="content-wrapper height-70">
                                        <div className="hero-content text-center content-center">
                                            <div className="subtitle style3">Building up vision leading future</div>
                                            <h1 className="title text-center style3">Nuclear <br/> Power Plants</h1>
                                            <div className="subtitle fs-16">Great Lessons You Can Learn From Nuclear Plant</div>
                                            <a href="" className="site-button">our services</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax>


                <div class="page-content bg-white">
                    <div class="content-block">
                        <div class="section-full call-action bg-primary wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-9 text-white">
                                        <h2 class="title">Amazing things happen to your business </h2>
                                        <p class="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                    <div class="col-lg-3 d-flex">
                                        <Link href="/contact-1" class="site-button btnhover15 white align-self-center outline ml-auto radius-xl outline-2">Contact Us </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full content-inner bg-white">
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h2 class="title">Quality With Dedication</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="dlab-box service-box-5">
                                            <div class="dlab-media radius-sm dlab-img-overlay1">
                                                <Link href="/services-details"><img src={("/images/our-work/nuclear/pic1.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info">
                                                <div class="icon-bx-sm icon-bx bg-primary icon-up">
                                                    <Link href="/services-details" class="icon-cell"><i class="flaticon-worker"></i></Link>
                                                </div>
                                                <h4 class="title"><Link href="/services-details">Solar Panels</Link></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="dlab-box service-box-5">
                                            <div class="dlab-media radius-sm dlab-img-overlay1">
                                                <Link href="/services-details"><img src={("/images/our-work/nuclear/pic6.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info">
                                                <div class="icon-bx-sm icon-bx bg-primary icon-up">
                                                    <Link href="/services-details" class="icon-cell"><i class="flaticon-settings"></i></Link>
                                                </div>
                                                <h4 class="title"><Link href="/services-details">Wind Turbines</Link></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="dlab-box service-box-5">
                                            <div class="dlab-media radius-sm dlab-img-overlay1">
                                                <Link href="/services-details"><img src={("/images/our-work/nuclear/pic3.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info">
                                                <div class="icon-bx-sm icon-bx bg-primary icon-up">
                                                    <Link href="/services-details" class="icon-cell"><i class="flaticon-engineer-1"></i></Link>
                                                </div>
                                                <h4 class="title"><Link href="/services-details">Green Equipment</Link></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="dlab-box service-box-5">
                                            <div class="dlab-media radius-sm dlab-img-overlay1">
                                                <Link href="/services-details"><img src={("/images/our-work/nuclear/pic4.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info">
                                                <div class="icon-bx-sm icon-bx bg-primary icon-up">
                                                    <Link href="/services-details" class="icon-cell"><i class="flaticon-factory-1"></i></Link>
                                                </div>
                                                <h4 class="title"><Link href="/services-details">Installation</Link></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="dlab-box service-box-5">
                                            <div class="dlab-media radius-sm dlab-img-overlay1">
                                                <Link href="/services-details"><img src={("/images/our-work/nuclear/pic5.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info">
                                                <div class="icon-bx-sm icon-bx bg-primary icon-up">
                                                    <Link href="/services-details" class="icon-cell"><i class="flaticon-worker"></i></Link>
                                                </div>
                                                <h4 class="title"><Link href="/services-details">Maintenance</Link></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="dlab-box service-box-5">
                                            <div class="dlab-media radius-sm dlab-img-overlay1">
                                                <Link href="/services-details"><img src={("/images/our-work/nuclear/pic2.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info">
                                                <div class="icon-bx-sm icon-bx bg-primary icon-up">
                                                    <Link href="/services-details" class="icon-cell"><i class="flaticon-settings"></i></Link>
                                                </div>
                                                <h4 class="title"><Link href="/services-details">Monitoring</Link></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full">
                            <div class="row m-lr0">
                                <div class="col-xl-6 col-lg-12 p-lr0 d-flex dis-tbl latest-project-info bg-primary wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="text-white align-self-center">
                                        <h2>Our Latest Service Nuclear Power Plants</h2>
                                        <p>Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare. Suspendisse ullamcorper <span class="text-white">metus in erat viverra</span>, vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus malesuada vel. Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare. Suspendisse ullamcorper <span class="text-white">metus in erat viverra</span>, vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus malesuada vel.</p>
                                        <Link href="/portfolio-details" class="site-button btnhover15 white">View Project</Link>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-12 p-lr0 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="row m-a0 lightgallery">
                                        <div class="col-lg-12 col-md-12 col-sm-12 p-lr0">
                                            <div class="dlab-box overlay-gallery-bx1">
                                                <div class="dlab-thum dlab-img-overlay1 primary">
                                                    <Link href="#"> <img class="img-cover" src={("/images/gallery/nuclear/pic7.jpg")} alt=""/> </Link>
                                                    <div class="overlay-bx">
                                                        <div class="overlay-icon">
                                                            <Link href="#"> <i class="fa fa-play icon-bx-xs"></i> </Link>
                                                            <span data-exthumbimage="images/gallery/nuclear/pic7.jpg" data-src="images/gallery/nuclear/pic7.jpg" class="check-km" title="Solar Panels">		<i class="fa fa-search icon-bx-xs"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 p-lr0">
                                            <div class="dlab-box overlay-gallery-bx1">
                                                <div class="dlab-thum dlab-img-overlay1 primary">
                                                    <Link href="#"> <img class="img-cover" src={("/images/gallery/nuclear/pic5.jpg")} alt=""/> </Link>
                                                    <div class="overlay-bx">
                                                        <div class="overlay-icon">
                                                            <Link href="#"> <i class="fa fa-play icon-bx-xs"></i> </Link>
                                                            <span data-exthumbimage="images/gallery/nuclear/pic5.jpg" data-src="images/gallery/nuclear/pic5.jpg" class="check-km" title="Green Equipment">
                                                                <i class="fa fa-search icon-bx-xs"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 p-lr0">
                                            <div class="dlab-box overlay-gallery-bx1">
                                                <div class="dlab-thum dlab-img-overlay1 primary">
                                                    <Link href="#"> <img class="img-cover" src={("/images/gallery/nuclear/pic6.jpg")} alt=""/> </Link>
                                                    <div class="overlay-bx">
                                                        <div class="overlay-icon">
                                                            <Link href="#"> <i class="fa fa-play icon-bx-xs"></i> </Link>
                                                            <span data-exthumbimage="images/gallery/nuclear/pic6.jpg" data-src="images/gallery/nuclear/pic6.jpg" class="check-km" title="Wind Turbines">
                                                                <i class="fa fa-search icon-bx-xs"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full content-inner const-about">
                            <div class="container">
                                <div class="row align-items-center">
                                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 wow bounceInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="radius-sm m-b30">
                                            <img src={("/images/about/pic12.jpg")} alt=""/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 m-b15 wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="content-bx1">
                                            <div class="about-year">
                                                <span>26</span>
                                                <p>Years<br/>Experience<br/>Working</p>
                                            </div>
                                            <div class="section-head style2">
                                                <h2 class="title">Great Lessons You Can Learn From Nuclear Plant</h2>
                                                <p>Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare. Suspendisse ullamcorper metus in erat viverra, vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus malesuada vel. Praesent pharetra orci odio, ut mattis tellus</p>
                                            </div>
                                            <Link href="/portfolio-details" class="site-button btnhover15 m-r10 m-b10">View Portfolio</Link>
                                            <Link href="/about-1" class="site-button btnhover15 black m-b10">About Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full content-inner-2 bg-primary wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s" style={{ backgroundImage: "url(" + bg + ")" }} >
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12 text-center call-action style2">
                                        <i class="fa fa-comment call-icon"></i>
                                        <h2 class="title text-white">1-800-505-5500</h2>
                                        <h3 class="text-white font-weight-600">Important Facts That You Should Know About</h3>
                                        <p class="m-b0">( All Call Are Toll Free )</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full content-inner bg-white">
                            <div class="container">
                                <div class="section-head style2 text-center">
                                    <h2 class="title">Meet Our Team</h2>
                                    <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="dlab-box fly-box dlab-img-effect off-color ">
                                            <div class="dlab-media">
                                                <Link href="/team-1"><img src={("/images/our-team/pic1.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info p-a20 p-t40 border-1">
                                                <h5 class="dlab-title m-tb0"><Link href="/team-1">Marco Datella</Link></h5>
                                                <div class="bg-primary skew-content-box">
                                                    <ul class="dlab-social-icon">
                                                        <li><Link class="fa fa-facebook" to="#"></Link></li>
                                                        <li><Link class="fa fa-twitter" to="#"></Link></li>
                                                        <li><Link class="fa fa-linkedin" to="#"></Link></li>
                                                        <li><Link class="fa fa-google-plus" to="#"></Link></li>
                                                    </ul>
                                                </div>
                                                <span>Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="dlab-box fly-box dlab-img-effect off-color ">
                                            <div class="dlab-media">
                                                <Link href="/team-1"><img src={("/images/our-team/pic2.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info p-a20 p-t40 border-1">
                                                <h5 class="dlab-title m-tb0"><Link href="/team-1">Konne Backfield</Link></h5>
                                                <div class="bg-primary skew-content-box">
                                                    <ul class="dlab-social-icon">
                                                        <li><Link class="fa fa-facebook" to="#"></Link></li>
                                                        <li><Link class="fa fa-twitter" to="#"></Link></li>
                                                        <li><Link class="fa fa-linkedin" to="#"></Link></li>
                                                        <li><Link class="fa fa-google-plus" to="#"></Link></li>
                                                    </ul>
                                                </div>
                                                <span>Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="dlab-box fly-box dlab-img-effect off-color">
                                            <div class="dlab-media off-color">
                                                <Link href="/team-1"><img src={("/images/our-team/pic3.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info p-a20 p-t40 border-1">
                                                <h5 class="dlab-title m-tb0"><Link href="/team-1">Jimmy Morris</Link></h5>
                                                <div class="bg-primary skew-content-box">
                                                    <ul class="dlab-social-icon">
                                                        <li><Link class="fa fa-facebook" to="#"></Link></li>
                                                        <li><Link class="fa fa-twitter" to="#"></Link></li>
                                                        <li><Link class="fa fa-linkedin" to="#"></Link></li>
                                                        <li><Link class="fa fa-google-plus" to="#"></Link></li>
                                                    </ul>
                                                </div>
                                                <span>Director</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="dlab-box fly-box dlab-img-effect off-color">
                                            <div class="dlab-media off-color">
                                                <Link href="/team-1"><img src={("/images/our-team/pic4.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info p-a20 p-t40 border-1">
                                                <h5 class="dlab-title m-tb0"><Link href="/team-1">Jimmy Morris</Link></h5>
                                                <div class="bg-primary skew-content-box">
                                                    <ul class="dlab-social-icon">
                                                        <li><Link class="fa fa-facebook" to="#"></Link></li>
                                                        <li><Link class="fa fa-twitter" to="#"></Link></li>
                                                        <li><Link class="fa fa-linkedin" to="#"></Link></li>
                                                        <li><Link class="fa fa-google-plus" to="#"></Link></li>
                                                    </ul>
                                                </div>
                                                <span>Director</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full content-inner bg-gray">
                            <div class="container">
                                <div class="section-head style2 text-center">
                                    <h2 class="title">Testimonials</h2>
                                    <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <Testimonial9/>
                            </div>
                        </div>

                        <div class="section-full content-inner bg-white">
                            <div class="container">
                                <div class="section-head style2 text-center">
                                    <h2 class="title">Latest blog post</h2>
                                    <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>

                                <BlogSlider1
                                data={blogContent5}
                                blogPostCls="post-style-2"
                                noDes
                                />

                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
                <ScrollToTop className="style1 icon-up"/>
            </>
        )
    }
}
export default Index11;
