import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header5'
import Footer from '../layout/footer5'
import Testmonial3 from '../element/testmonial3';
import {blogContent3,homeSliderContent5} from '../element/SliderContent'
import BlogSlider1 from '../../components/element/blogSlider1';
import ProjectSlider5 from '../element/projectSlider5';
import ProjectSlider7 from '../element/projectSlider7';
import HomeSlider from '../element/homeslider1'
import Gallery3 from '../element/gallery3';
import ScrollToTop from '../../components/element/scrollToTop';
import Team5 from '../element/team5'

// import '../../css/skin/skin-3.min.css';

const bg = require('/images/background/bg11.jpg' )
const bg2 = require('/images/background/bg9.jpg' )
const bg3 = require('/images/background/map-bg1.png' )


const images = [
    {
      id: 1,
      name: "Construction",
      icon:"flaticon-worker",
      title:"Solid Wastes",
      title2:"Westwood Child Center",
      imgUrl: ("/images/portfolio/construct/image_1.jpg")
    },
    {
        id: 1,
        name: "Construction",
        icon:"flaticon-worker",
        title:"Solid Wastes",
        title2:"Westwood Child Center",
        imgUrl: ("/images/portfolio/construct/image_2.jpg")
    },
    {
        id: 1,
        name: "Construction",
        icon:"flaticon-worker",
        title:"Solid Wastes",
        title2:"Westwood Child Center",
        imgUrl: ("/images/portfolio/construct/image_3.jpg")
    },
    {
        id: 1,
        name: "Construction",
        icon:"flaticon-worker",
        title:"Solid Wastes",
        title2:"Westwood Child Center",
        imgUrl: ("/images/portfolio/construct/image_4.jpg")
    },
    {
        id: 1,
        name: "Construction",
        icon:"flaticon-worker",
        title:"Solid Wastes",
        title2:"Westwood Child Center",
        imgUrl: ("/images/portfolio/construct/image_5.jpg")
    },
    {
        id: 1,
        name: "Construction",
        icon:"flaticon-worker",
        title:"Solid Wastes",
        title2:"Westwood Child Center",
        imgUrl: ("/images/portfolio/construct/image_6.jpg")
    },
    {
      id: 2,
      name: "Architecture",
      icon:"flaticon-crane",
      title:"Leather Products",
      imgUrl: ("/images/portfolio/construct/image_2.jpg")
    },
    {
        id: 2,
        name: "Architecture",
        icon:"flaticon-crane",
        title:"Leather Products",
        imgUrl: ("/images/portfolio/construct/image_4.jpg")
    },
    {
        id: 2,
        name: "Architecture",
        icon:"flaticon-crane",
        title:"Leather Products",
        imgUrl: ("/images/portfolio/construct/image_2.jpg")
    },
    {
      id: 3,
      name: "Consulting",
      icon:"flaticon-analytics",
      title:"Leather processing",
      imgUrl: ("/images/portfolio/construct/image_3.jpg")
    },
    {
        id: 3,
        name: "Consulting",
        icon:"flaticon-analytics",
        title:"Leather processing",
        imgUrl: ("/images/portfolio/construct/image_5.jpg")
    },
    {
      id: 4,
      name: "Mechanical",
      icon:"flaticon-optimization",
      title:"Industrial Apartment",
      imgUrl: ("/images/portfolio/construct/image_4.jpg")
    },

];


class Index5 extends Component {


    render() {
        return (
            <>
            <Header/>

            <div class="page-content bg-white home-slider-5">

                <HomeSlider
                data={homeSliderContent5}
				contentWrapperCls="sliderStyle5"
                btnCls="site-button"
                btnText="ABOUT US"
                btn2Text="SERVICES"
                show2Btn
                />

                <div class="content-block">
                    <div class="section-full content-inner const-about">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="radius-sm m-b30 img-ho1">
                                        <img src={("/images/about/pic11.jpg")} alt=""/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.6s">
                                    <div class="content-bx1">
                                        <div class="about-year">
                                            <span>26</span>
                                            <p>Years<br/>Experience<br/>Working</p>
                                        </div>
                                        <div class="section-head style2">
                                            <h2 class="title">Architecure is a visual art,<br/> and The Building</h2>
                                            <p>Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare. Suspendisse ullamcorper metus in erat viverra, vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus malesuada vel. Praesent pharetra orci odio, ut mattis tellus</p>
                                        </div>
                                        <Link href="/portfolio-details" class="site-button m-r10 m-b10 btnhover20">View Portfolio</Link>
                                        <Link href="/about-1" class="site-button black m-b10 btnhover20">About Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-full bg-white content-inner-2 project-slider" style={{"backgroundImage":"url(" + bg + ")","backgroundRepeat":"no-repeat","backgroundPosition":"right bottom"}}>
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-6 p-lr0">
                                    <ProjectSlider5/>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="about-content wow fadeIn" data-wow-delay="0.2s"  data-wow-duration="2s">
                                        <div class="section-head style2">
                                            <h2 class="title">Our Latest Project Industrial <br/>Style Apartment</h2>
                                            <p>Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare. Suspendisse ullamcorper metus in erat viverra, vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus malesuada </p>
                                        </div>
                                        <div class="m-b30">
                                            <ul class="list-details">
                                                <li>
                                                    <strong>Clients:</strong>
                                                    <span>Ethan Hunt</span>
                                                </li>
                                                <li>
                                                    <strong>Completion:</strong>
                                                    <span>February 5th, 2017</span>
                                                </li>
                                                <li>
                                                    <strong>Project Type:</strong>
                                                    <span>Villa, Residence</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="">
                                            <Link href="/portfolio-details" class="site-button btnhover20">View Portfolio</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-full bg-white content-inner-2 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                        <div class="container">
                            <div class="section-head style2 text-center">
                                <h2 class="title m-b10">Design Projects</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <div class="row p-l0 sp10">
                                <div class="col-lg-12">
                                    <Gallery3 images={images}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-full bg-white content-inner-1 project-area project-style-1  bg-img-fix" style={{"backgroundImage":"url(" + bg2 + ")","backgroundSize":"cover"}}>
                        <div class="container">
                            <div class="section-head text-white style2 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.6s">
                                <h2 class="title m-b10">The Luxury Residence In Forest</h2>
                                <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache <br/>fanny pack nostrud. Photo booth anim 8-bit hella, </p>
                                <Link href="/contact-1" class="site-button btnhover20 m-r10 m-b10">Contact Us</Link>
                                <Link href="/portfolio-details" class="site-button btnhover20 m-b10">View Portfolio</Link>
                            </div>
                            <ProjectSlider7/>

                        </div>
                    </div>
                    <div class="section-full bg-white content-inner-2">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="icon-bx-wraper sr-iconbox style2">
                                        <div class="icon-lg m-b10">
                                            <Link href="#" class="icon-cell"><i class="flaticon-worker"></i></Link>
                                        </div>
                                        <div class="icon-content">
                                            <h4 class="dlab-tilte">Interior design</h4>
                                            <p>I have worked with many companies offering supplemental industrial services, and out of all those companies </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                    <div class="icon-bx-wraper sr-iconbox style2">
                                        <div class="icon-lg m-b10">
                                            <Link href="#" class="icon-cell"><i class="flaticon-factory-1"></i></Link>
                                        </div>
                                        <div class="icon-content">
                                            <h4 class="dlab-tilte">Architecture</h4>
                                            <p>I have worked with many companies offering supplemental industrial services, and out of all those companies </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">
                                    <div class="icon-bx-wraper sr-iconbox style2">
                                        <div class="icon-lg m-b10">
                                            <Link href="#" class="icon-cell"><i class="flaticon-design-tools"></i></Link>
                                        </div>
                                        <div class="icon-content">
                                            <h4 class="dlab-tilte">Product design</h4>
                                            <p>I have worked with many companies offering supplemental industrial services, and out of all those companies </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="icon-bx-wraper sr-iconbox style2">
                                        <div class="icon-lg m-b10">
                                            <Link href="#" class="icon-cell"><i class="flaticon-settings"></i></Link>
                                        </div>
                                        <div class="icon-content">
                                            <h4 class="dlab-tilte">Accreditation</h4>
                                            <p>I have worked with many companies offering supplemental industrial services, and out of all those companies </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                    <div class="icon-bx-wraper sr-iconbox style2">
                                        <div class="icon-lg m-b10">
                                            <Link href="#" class="icon-cell"><i class="flaticon-worker"></i></Link>
                                        </div>
                                        <div class="icon-content">
                                            <h4 class="dlab-tilte">Foundations</h4>
                                            <p>I have worked with many companies offering supplemental industrial services, and out of all those companies </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">
                                    <div class="icon-bx-wraper sr-iconbox style2">
                                        <div class="icon-lg m-b10">
                                            <Link href="#" class="icon-cell"><i class="flaticon-factory-2"></i></Link>
                                        </div>
                                        <div class="icon-content">
                                            <h4 class="dlab-tilte">Enrollment</h4>
                                            <p>I have worked with many companies offering supplemental industrial services, and out of all those companies </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-full bg-gray content-inner">
                        <div class="container">
                            <div class="section-head style2 text-center">
                                <h2 class="title">Our Team</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <Team5 />
                        </div>
                    </div>

                    <div class="section-full content-inner-2 bg-white wow fadeIn" style={{ backgroundImage: "url(" + bg3 + ")" }} data-wow-duration="2s" data-wow-delay="0.6s">
                        <div class="container">
                            <div class="section-head style2 text-center">
                                <h2 class="title">Clients Say About Us</h2>
                                <p>19+ years’ experience</p>
                            </div>
                            <Testmonial3/>
                        </div>
                    </div>

                    <div class="section-full content-inner bg-gray wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">
                        <div class="container">
                            <div class="section-head style2 text-center">
                                <h2 class="title">Latest blog post</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>

                            <BlogSlider1
                            data={blogContent3}
                            imgEffect="zoom"
                            blogPostCls="post-style-2"
                            noDes
                            />

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
export default Index5;
