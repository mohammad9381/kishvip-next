import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header4'
import Footer from '../layout/footer4'
import {projectContent1,serviceContent2,homeSliderContent4} from '../element/SliderContent'
import Testimonial2 from '../element/testmonial2';
import ClientSlider1 from '../element/clientSlider1';
import ProjectSlider1 from '../element/projectSlider1';
import ServicesSlider3 from '../element/servicesSlider3';
import HomeSlider from '../element/homeslider1'
import DualSlider from '../element/dualSlider';
import ScrollToTop from '../../components/element/scrollToTop';
import Team9 from '../element/team9'

// import '../../css/skin/skin-2.min.css';

const bg = require('/images/background/cs.jpg')

class Index4 extends Component {


    render() {
        return (
            <>
                <Header/>

                <HomeSlider
                data={homeSliderContent4}
				contentWrapperCls="sliderStyle4"
                btnCls="site-button"
                btnText="ABOUT US"
                btn2Text="OUR SERVICES"
                show2Btn
                />

                <div class="page-content bg-white">
                    <div class="content-block">
                        <div class="section-full call-action bg-primary wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-9 text-white">
                                        <h2 class="title">Amazing things happen to your business </h2>
                                        <p class="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                    <div class="col-lg-3 d-flex">
                                        <Link href="/about-2" class="site-button white align-self-center outline ml-auto radius-xl outline-2 btnhover16 btnhover16">MARKET SECTORS </Link>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="section-full content-inner bg-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                            <div class="container">
                                <div class="on-show-slider">

                                    <DualSlider/>

                                </div>
                            </div>
                        </div>

                        <div class="section-full content-inner bg-gray wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h2 class="title">Our Services</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <ServicesSlider3
                                        data={serviceContent2}
                                        iconWrapperCls="icon-xl m-b20 text-primary radius"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full content-inner-2 bg-img-fix overlay-black-dark wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s" style={{ backgroundImage: "url(" + bg + ")" }}>
                            <div class="container">
                                <div class="section-head text-white text-center">
                                    <h2 class="title">Our Project</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div class="row icon-white">
                                    <div class="col-lg-12 col-md-12">
                                        <ProjectSlider1 data={projectContent1}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full bg-white content-inner">
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h2 class="title text-capitalize">Meet The Team</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <Team9 />
                            </div>
                        </div>

                        <div class="section-full content-inner-2 bg-gray wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s">
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h2 class="title">Testimonials</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <Testimonial2/>
                            </div>
                        </div>

                        <div class="section-full content-inner bg-white">
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h2 class="title text-capitalize">latest blog</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="blog-post blog-grid blog-rounded blog-effect1 fly-box">
                                            <div class="dlab-post-media dlab-img-effect">
                                                <Link href="/blog-single"><img src={("/images/blog/grid/pic1.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info p-a20 border-1 bg-white">
                                                <div class="dlab-post-meta">
                                                    <ul>
                                                        <li class="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
                                                        <li class="post-author"> By <Link href="#">Jack</Link></li>
                                                    </ul>
                                                </div>
                                                <div class="dlab-post-title">
                                                    <h4 class="post-title"><Link href="/blog-single">Seven Doubts You Should</Link></h4>
                                                </div>
                                                <div class="dlab-post-text">
                                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                                </div>
                                                <div class="dlab-post-readmore">
                                                    <Link href="/blog-single" title="READ MORE" rel="bookmark" class="site-button btnhover16">READ MORE
                                                        <i class="ti-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                        <div class="blog-post blog-grid blog-rounded blog-effect1 fly-box">
                                            <div class="dlab-post-media dlab-img-effect">
                                                <Link href="/blog-single"><img src={("/images/blog/grid/pic2.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info p-a20 border-1 bg-white">
                                                <div class="dlab-post-meta ">
                                                    <ul>
                                                        <li class="post-date"> <strong>11 Aug</strong> <span> 2016</span> </li>
                                                        <li class="post-author"> By <Link href="#">Zachary</Link></li>
                                                    </ul>
                                                </div>
                                                <div class="dlab-post-title">
                                                    <h4 class="post-title"><Link href="/blog-single">The Shocking Revelation</Link></h4>
                                                </div>
                                                <div class="dlab-post-text">
                                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                                </div>
                                                <div class="dlab-post-readmore">
                                                    <Link href="/blog-single" title="READ MORE" rel="bookmark" class="site-button btnhover16">READ MORE
                                                        <i class="ti-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">
                                        <div class="blog-post blog-grid blog-rounded blog-effect1 fly-box">
                                            <div class="dlab-post-media dlab-img-effect">
                                                <Link href="/blog-single"><img src={("/images/blog/grid/pic3.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info p-a20 border-1 bg-white">
                                                <div class="dlab-post-meta">
                                                    <ul>
                                                        <li class="post-date"> <strong>12 Aug</strong> <span> 2016</span> </li>
                                                        <li class="post-author"> By <Link href="#">Charlotte</Link></li>
                                                    </ul>
                                                </div>
                                                <div class="dlab-post-title">
                                                    <h4 class="post-title"><Link href="/blog-single">The Story Of Industry</Link></h4>
                                                </div>
                                                <div class="dlab-post-text">
                                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                                </div>
                                                <div class="dlab-post-readmore">
                                                    <Link href="/blog-single" title="READ MORE" rel="bookmark" class="site-button btnhover16">READ MORE
                                                        <i class="ti-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full content-inner-2 bg-gray wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h2 class="title text-capitalize">We work with our partners to provide project perfection,<br/><span class="text-primary">join with our parnership.</span></h2>
                                </div>
                                <ClientSlider1/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
                <ScrollToTop className="style1 white icon-up"/>
            </>
        )
    }
}
export default Index4;
