import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header6'
import Footer from '../layout/footer6'
import {projectContent2,servicesContent3,homeSliderContent6} from '../element/SliderContent'
import Testmonial4 from '../element/testmonial4';
import ProjectSlider1 from '../element/projectSlider1';
import ServicesSlider1 from '../element/servicesSlider1';
import ServicesSlider2 from '../element/servicesSlider2';
import HomeSlider from '../element/homeslider1'
import ScrollToTop from '../../components/element/scrollToTop';

// import '../../css/skin/skin-4.min.css';

const bg = require('/images/overlay/brilliant.png' )

class Index6 extends Component {


    render() {
        return (
            <>

            <HomeSlider
            data={homeSliderContent6}
			contentWrapperCls="sliderStyle4"
            btnCls="site-button"
            btnText="ABOUT US"
            btn2Text="SERVICES"
            show2Btn
            />

            <Header/>

            <div class="page-content bg-white">
                <div class="content-block">
                    <div class="section-full content-inner bg-white">
                        <div class="container">
                            <div class="section-head text-black text-center">
                                <h2 class="title">Quality With Dedication</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="dlab-box service-box-3">
                                        <div class="dlab-media radius-sm dlab-img-overlay1 zoom dlab-img-effect">
                                            <Link href="/services-details"><img src={("/images/our-work/solarplant/pic1.jpg")} alt=""/></Link>
                                        </div>
                                        <div class="dlab-info">
                                            <h4 class="title"><Link href="/services-details">Solar Panels</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.6s">
                                    <div class="dlab-box service-box-3">
                                        <div class="dlab-media radius-sm dlab-img-overlay1 zoom dlab-img-effect">
                                            <Link href="/services-details"><img src={("/images/our-work/solarplant/pic6.jpg")} alt=""/></Link>
                                        </div>
                                        <div class="dlab-info">
                                            <h4 class="title"><Link href="/services-details">Wind Turbines</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="dlab-box service-box-3">
                                        <div class="dlab-media radius-sm dlab-img-overlay1 zoom dlab-img-effect">
                                            <Link href="/services-details"><img src={("/images/our-work/solarplant/pic3.jpg")} alt=""/></Link>
                                        </div>
                                        <div class="dlab-info">
                                            <h4 class="title"><Link href="/services-details">Green Equipment</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="dlab-box service-box-3">
                                        <div class="dlab-media radius-sm dlab-img-overlay1 zoom dlab-img-effect">
                                            <Link href="/services-details"><img src={("/images/our-work/solarplant/pic4.jpg")} alt=""/></Link>
                                        </div>
                                        <div class="dlab-info">
                                            <h4 class="title"><Link href="/services-details">Installation</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                    <div class="dlab-box service-box-3">
                                        <div class="dlab-media radius-sm dlab-img-overlay1 zoom dlab-img-effect">
                                            <Link href="/services-details"><img src={("/images/our-work/solarplant/pic5.jpg")} alt=""/></Link>
                                        </div>
                                        <div class="dlab-info">
                                            <h4 class="title"><Link href="/services-details">Maintenance</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="dlab-box service-box-3">
                                        <div class="dlab-media radius-sm dlab-img-overlay1 zoom dlab-img-effect">
                                            <Link href="/services-details"><img src={("/images/our-work/solarplant/pic2.jpg")} alt=""/></Link>
                                        </div>
                                        <div class="dlab-info">
                                            <h4 class="title"><Link href="/services-details">Monitoring</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-full call-action bg-primary wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-9 text-white">
                                    <h2 class="title">Go Solar & Save 10-30%* on Your Energy Rate</h2>
                                    <p class="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div class="col-lg-3 d-flex">
                                    <Link href="/contact-1" class="site-button btnhover15 white align-self-center outline ml-auto radius-xl outline-2">Contact Us </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-full content-inner-2 bg-gray wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div class="container">
                            <div class="section-head text-black text-center">
                                <h2 class="title">Why Solar Energy is Best</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <ServicesSlider2/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-full bg-white content-inner">
                        <div class="container">
                            <div class="section-head text-center">
                                <h2 class="title">Our Crew Team</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-3 col-md-6 col-sm-6 wow fadeInLeftBig" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="our-team m-b30">
                                        <div class="dlab-media radius-sm  zoom dlab-img-effect">
                                            <img src={("/images/our-team/pic1.jpg")} alt=""/>
                                        </div>
                                        <div class="team-title-bx text-center">
                                            <h2 class="title"><Link href="/team-1">Philip Demarco</Link></h2>
                                            <span>founder of agency</span>
                                            <ul class="social-list">
                                                <li><Link href="#" class="site-button-link facebook fa fa-facebook"></Link></li>
                                                <li><Link href="#" class="site-button-link twitter fa fa-twitter"></Link></li>
                                                <li><Link href="#" class="site-button-link google-plus fa fa-google"></Link></li>
                                                <li><Link href="#" class="site-button-link youtube fa fa-youtube-play"></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-6 wow fadeInUpBig" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="our-team m-b30">
                                        <div class="dlab-media radius-sm zoom dlab-img-effect">
                                            <img src={("/images/our-team/pic2.jpg")} alt=""/>
                                        </div>
                                        <div class="team-title-bx text-center">
                                            <h2 class="title"><Link href="/team-1">Angelina Johnson</Link></h2>
                                            <span>founder of agency</span>
                                            <ul class="social-list">
                                                <li><Link href="#" class="site-button-link facebook fa fa-facebook"></Link></li>
                                                <li><Link href="#" class="site-button-link twitter fa fa-twitter"></Link></li>
                                                <li><Link href="#" class="site-button-link google-plus fa fa-google"></Link></li>
                                                <li><Link href="#" class="site-button-link youtube fa fa-youtube-play"></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-6 wow fadeInDownBig" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="our-team m-b30">
                                        <div class="dlab-media radius-sm zoom dlab-img-effect">
                                            <img src={("/images/our-team/pic3.jpg")} alt=""/>
                                        </div>
                                        <div class="team-title-bx text-center">
                                            <h2 class="title"><Link href="/team-1">Philip Demarco</Link></h2>
                                            <span>founder of agency</span>
                                            <ul class="social-list">
                                                <li><Link href="#" class="site-button-link facebook fa fa-facebook"></Link></li>
                                                <li><Link href="#" class="site-button-link twitter fa fa-twitter"></Link></li>
                                                <li><Link href="#" class="site-button-link google-plus fa fa-google"></Link></li>
                                                <li><Link href="#" class="site-button-link youtube fa fa-youtube-play"></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-6 wow fadeInRightBig" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="our-team m-b30">
                                        <div class="dlab-media radius-sm zoom dlab-img-effect">
                                            <img src={("/images/our-team/pic4.jpg")} alt=""/>
                                        </div>
                                        <div class="team-title-bx text-center">
                                            <h2 class="title"><Link href="/team-1">Philip Demarco</Link></h2>
                                            <span>founder of agency</span>
                                            <ul class="social-list">
                                                <li><Link href="#" class="site-button-link facebook fa fa-facebook"></Link></li>
                                                <li><Link href="#" class="site-button-link twitter fa fa-twitter"></Link></li>
                                                <li><Link href="#" class="site-button-link google-plus fa fa-google"></Link></li>
                                                <li><Link href="#" class="site-button-link youtube fa fa-youtube-play"></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-full bg-gray content-inner-2 about-carousel-ser">
                        <div class="container">
                            <div class="section-head text-center">
                                <h2 class="title">Our Services</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <ServicesSlider1 data={servicesContent3}/>
                        </div>
                    </div>

                    <div class="section-full content-inner-2 bg-white">
                        <div class="container">
                            <div class="section-head text-center">
                                <h2 class="title">Our Project</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <ProjectSlider1 data={projectContent2}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-full content-inner-2 bg-gray">
                        <div class="container">
                            <div class="section-head text-center">
                                <h2 class="title">Testimonials</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <Testmonial4/>
                        </div>
                    </div>

                    <div class="section-full content-inner bg-white">
                        <div class="container">
                            <div class="section-head text-black text-center">
                                <h2 class="title text-capitalize">latest from blog</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 col-md-6 wow bounceInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="blog-post blog-grid blog-rounded blog-effect1">
                                        <div class="dlab-post-media dlab-img-effect zoom">
                                            <Link href="/blog-single"><img src={("/images/blog/grid/pic1.jpg")} alt=""/></Link>
                                        </div>
                                        <div class="dlab-info p-a20 border-1 bg-white">
                                            <div class="dlab-post-meta">
                                                <ul>
                                                    <li class="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
                                                    <li class="post-author"> By <Link href="#">Jack</Link> </li>
                                                </ul>
                                            </div>
                                            <div class="dlab-post-title">
                                                <h4 class="post-title"><Link href="/blog-single">Seven Doubts You Should</Link></h4>
                                            </div>
                                            <div class="dlab-post-text">
                                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                            </div>
                                            <div class="dlab-post-readmore">
                                                <Link href="/blog-single" title="READ MORE" rel="bookmark" class="site-button btnhover15">READ MORE
                                                    <i class="ti-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="blog-post blog-grid blog-rounded blog-effect1">
                                        <div class="dlab-post-media dlab-img-effect zoom" >
                                            <Link href="/blog-single"><img src={("/images/blog/grid/pic2.jpg")} alt=""/></Link>
                                        </div>
                                        <div class="dlab-info p-a20 border-1 bg-white">
                                            <div class="dlab-post-meta ">
                                                <ul>
                                                    <li class="post-date"> <strong>11 Aug</strong> <span> 2016</span> </li>
                                                    <li class="post-author"> By <Link href="#">Zachary</Link> </li>
                                                </ul>
                                            </div>
                                            <div class="dlab-post-title">
                                                <h4 class="post-title"><Link href="/blog-single">The Shocking Revelation</Link></h4>
                                            </div>
                                            <div class="dlab-post-text">
                                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                            </div>
                                            <div class="dlab-post-readmore">
                                                <Link href="/blog-single" title="READ MORE" rel="bookmark" class="site-button btnhover15">READ MORE
                                                    <i class="ti-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="blog-post blog-grid blog-rounded blog-effect1">
                                        <div class="dlab-post-media dlab-img-effect zoom">
                                            <Link href="/blog-single"><img src={("/images/blog/grid/pic3.jpg")} alt=""/></Link>
                                        </div>
                                        <div class="dlab-info p-a20 border-1 bg-white">
                                            <div class="dlab-post-meta">
                                                <ul>
                                                    <li class="post-date"> <strong>12 Aug</strong> <span> 2016</span> </li>
                                                    <li class="post-author"> By <Link href="#">Charlotte</Link> </li>
                                                </ul>
                                            </div>
                                            <div class="dlab-post-title">
                                                <h4 class="post-title"><Link href="/blog-single">The Story Of Industry</Link></h4>
                                            </div>
                                            <div class="dlab-post-text">
                                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                            </div>
                                            <div class="dlab-post-readmore">
                                                <Link href="/blog-single" title="READ MORE" rel="bookmark" class="site-button btnhover15">READ MORE
                                                    <i class="ti-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <ScrollToTop className="style2 radius"/>
            </>
        )
    }
}
export default Index6;
