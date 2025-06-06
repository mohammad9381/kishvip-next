import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header13'
import Footer from '../layout/footer13'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';

import {blogContent8} from '../element/SliderContent'
import BlogSlider1 from '../../components/element/blogSlider1'
import Testimonial2 from '../element/testmonial2';
import ServicesSlider4 from '../element/servicesSlider4';
import CounterSection2 from '../element/counterSection2';
import ScrollToTop from '../../components/element/scrollToTop';
import Team9 from '../element/team9'

// import '../../css/skin/skin-2.min.css';


const bg = require('/images/background/bg11.jpg' )
const bg2 = require('/images/background/bg17.jpg' )
const bg3 = require('/images/main-slider/slide27.jpg' )
const boxBg1 = require('/images/main-slider/box-bg1.png' )
const boxBg2 = require('/images/main-slider/box-bg2.png' )

class Index13 extends Component {

    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
    }


    openModal = (event) => {
        event.preventDefault()
        this.setState({isOpen: true})
    }

    closeModal = () => {
        this.setState({isOpen: false})
    }

    render() {
        return (
            <>
                <Header/>

                <div className="hero-section relative home-slider-13" style={{ backgroundImage: "url(" + bg3 + ")" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content-wrapper full-height">
                                    <div className="hero-content text-center ">
                                        <img src={boxBg1} className="worker-pic bottom" alt=""/>
                                        <img src={boxBg2} className="worker-frame bottom" alt=""/>
                                        <h2 className="big-text bottom">Mining</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="page-content bg-white">
                    <div class="content-block">
                        <div class="section-full bg-white content-inner-2" id="about-us" style={{ backgroundImage: "url(" + bg + ")" }}>
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h2 class="title">Simple Cost-Efficient Mining Solutions</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                                </div>
                                <ServicesSlider4/>
                                <div class="text-center">
                                    <Link href="/services-1" class="site-button btnhover13 button-md">See all Services</Link>
                                </div>
                            </div>
                        </div>

                        <div class="section-full content-inner bg-gray">
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h2 class="title">Quality With Dedication</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="dlab-box service-box-3">
                                            <div class="dlab-media radius-sm dlab-img-overlay1">
                                                <Link href="/services-details"><img src={("/images/our-work/mining/pic1.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="title"><Link href="/services-details">Mining Engineering</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="dlab-box service-box-3">
                                            <div class="dlab-media radius-sm dlab-img-overlay1">
                                                <Link href="/services-details"><img src={("/images/our-work/mining/pic6.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="title"><Link href="/services-details">Exploration Management</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="dlab-box service-box-3">
                                            <div class="dlab-media radius-sm dlab-img-overlay1">
                                                <Link href="/services-details"><img src={("/images/our-work/mining/pic3.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="title"><Link href="/services-details">Engineering Services</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="dlab-box service-box-3">
                                            <div class="dlab-media radius-sm dlab-img-overlay1">
                                                <Link href="/services-details"><img src={("/images/our-work/mining/pic4.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="title"><Link href="/services-details">Maintenance & Repair</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="dlab-box service-box-3">
                                            <div class="dlab-media radius-sm dlab-img-overlay1">
                                                <Link href="/services-details"><img src={("/images/our-work/mining/pic5.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="title"><Link href="/services-details">Engineering Services</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div class="dlab-box service-box-3">
                                            <div class="dlab-media radius-sm dlab-img-overlay1">
                                                <Link href="/services-details"><img src={("/images/our-work/mining/pic2.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="title"><Link href="/services-details">Maintenance & Repair</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full">
                            <div class="row m-lr0">
                                <div class="col-xl-6 col-lg-12 p-lr0 d-flex dis-tbl latest-project-info bg-primary wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="text-white align-self-center ">
                                        <h2>Talk to us about solving your mining problems</h2>
                                        <p>Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare. Suspendisse ullamcorper <span class="text-white">metus in erat viverra</span>, vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus malesuada vel. Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare. Suspendisse ullamcorper <span class="text-white">metus in erat viverra</span>, vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus malesuada vel.</p>
                                        <Link href="/portfolio-details" class="site-button btnhover13 white">View Project</Link>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-12 p-lr0 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="dlab-box overlay-gallery-bx1 lightgallery">
                                        <div class="dlab-thum dlab-img-overlay1 primary">
                                            <Link href="#"> <img class="img-cover" src={("/images/gallery/pic10.jpg")} alt=""/> </Link>
                                            <div class="overlay-bx">
                                                <div class="overlay-icon">
                                                    <Link href="#"  onClick={this.openModal}>
                                                        <i class="fa fa-play icon-bx-xs"></i>
                                                    </Link>
                                                    <span data-exthumbimage="images/gallery/pic10.jpg" data-src="images/gallery/pic10.jpg" class="check-km" title="Solar Panels">
                                                        <i class="fa fa-search icon-bx-xs"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ModalVideo
                        channel='youtube'
                        allowFullScreen
                        isOpen={this.state.isOpen}
                        videoId='_FRZVScwggM'
                        onClose={this.closeModal}
                        />

                        <div class="section-full bg-gray content-inner">
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h2 class="title">Our Team</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <Team9 />
                            </div>
                        </div>

                        <CounterSection2 backgroundImage={bg2}/>

                        <div class="section-full content-inner bg-gray">
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
                                    <h2 class="title">Latest News</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>

                                <BlogSlider1
                                data={blogContent8}
                                />

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
                                        <Link href="/contact-1" class="site-button btnhover13 white align-self-center outline ml-auto outline-2">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
                <ScrollToTop className="style1 radius"/>
            </>
        )
    }
}
export default Index13;
