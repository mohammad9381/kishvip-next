import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header12'
import Footer from '../layout/footer12'
import {blogContent6,homeSliderContent9} from '../element/SliderContent'
import BlogSlider1 from '../../components/element/blogSlider1'
import Testimonial10 from '../element/testimonial10'
import TeamSlider2 from '../element/teamSlider2';
import HomeSlider from '../element/homeslider1'
import Gallery4 from '../element/gallery4';
import ScrollToTop from '../../components/element/scrollToTop';

// import '../../css/skin/skin-9.min.css';

const images = [
    {
      id: 1,
      name: "beer keg",
      title:"beer keg",
      imgUrl: ("/images/gallery/beer/pic1.jpg")
    },
    {
      id: 2,
      name: "brweing",
      title:"brweing beer",
      imgUrl: ("/images/gallery/beer/pic2.jpg")
    },
    {
      id: 3,
      name: "bear cup",
      title:"brweing beer",
      imgUrl: ("/images/gallery/beer/pic3.jpg")
    },
    {
      id: 4,
      name: "beer keg",
      title:"malt",
      imgUrl: ("/images/gallery/beer/pic4.jpg")
    },
];

const bg = require('/images/background/bg15.jpg' );
const bgVideo = require('../../assets/video/video3.mp4')
const beerIcon = require('/images/icon/beer.png')

class Index12 extends Component {


    render() {
        return (
            <>
            <Header/>

            {/* <HomeSlider
            data={homeSliderContent9}
            show2Btn
            btnText="CONTACT US"
            btn2Text="OUR SERVICES"
            /> */}

            <div className="hero-section relative full-height video-section overlay3 home-slider-12">
                <video src={bgVideo} loop muted autoPlay className="beer-video"></video>

                <div className="hero-content text-center content-center">
                    <img src={beerIcon} alt=""  className="beer-icon"/>
                    <span className="seperator"></span>
                    <h1 className="title text-center style4">BEER FACTORY</h1>
                    <div className="description ">The concept of a traditional restaurant reimagined in a modern way. </div>
                    <a href="" className="site-button"><i class="la la-phone icon" ></i>contact us</a>
                    <a href="" className="site-button"><i class="la la-file-text icon"></i>our services</a>
                </div>

                <ul className="social-icons">
                    <li><a href=""><i class="fa fa-facebook"></i></a></li>
                    <li><a href=""><i class="fa fa-twitter"></i></a></li>
                    <li><a href=""><i class="fa fa-instagram"></i></a></li>
                </ul>
            </div>




            <div class="page-content bg-white">
                <div class="content-block">
                    <div class="section-full content-inner bg-white">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="our-story">
                                        <span>OUR STORY</span>
                                        <h2 class="title">Running a <br/>successful business <br/><span class="text-primary">since 1955</span></h2>
                                        <h4 class="title">Industrial engineering is a branch of engineering which deals with the optimization.</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting Factory. Lorem Ipsum has been the Factory's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting Factory.</p>
                                        <Link href="/about-2" class="site-button btnhover20">About Us</Link>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12 m-b30 our-story-thum wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <img src={("/images/about/pic13.jpg")} class="radius-sm" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-full bg-secondry darkBlue content-inner">
                        <div class="container">
                            <div class="section-head text-center text-white">
                                <h2 class="title">Our Services</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <div class="section-content row text-black">
                                <div class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="icon-bx-wraper" data-name="01">
                                        <div class="icon-lg">
                                            <Link href="#" class="icon-cell"><i class="flaticon-boiler"></i></Link>
                                        </div>
                                        <div class="icon-content">
                                            <h2 class="dlab-tilte">Beer Boiler</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="icon-bx-wraper" data-name="02">
                                        <div class="icon-lg">
                                            <Link href="#" class="icon-cell"><i class="flaticon-pint-of-beer"></i></Link>
                                        </div>
                                        <div class="icon-content">
                                            <h2 class="dlab-tilte">Pint Of Beer</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="icon-bx-wraper" data-name="03">
                                        <div class="icon-lg">
                                            <Link href="#" class="icon-cell"><i class="flaticon-beer-keg"></i></Link>
                                        </div>
                                        <div class="icon-content">
                                            <h2 class="dlab-tilte">Beer Keg</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="icon-bx-wraper" data-name="04">
                                        <div class="icon-lg">
                                            <Link href="#" class="icon-cell"><i class="flaticon-brewing"></i></Link>
                                        </div>
                                        <div class="icon-content">
                                            <h2 class="dlab-tilte">Brewing</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="icon-bx-wraper" data-name="05">
                                        <div class="icon-lg">
                                            <Link href="#" class="icon-cell"><i class="flaticon-grinder"></i></Link>
                                        </div>
                                        <div class="icon-content">
                                            <h2 class="dlab-tilte">Beer Grinder</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="icon-bx-wraper" data-name="06">
                                        <div class="icon-lg">
                                            <Link href="#" class="icon-cell"><i class="flaticon-barrels-1"></i></Link>
                                        </div>
                                        <div class="icon-content">
                                            <h2 class="dlab-tilte">Barrels Beer</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-full bg-white content-inner">
                        <div class="container">
                            <div class="section-head text-center">
                                <h2 class="title">Our Gallery</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <Gallery4 images={images}/>
                        </div>
                    </div>

                    <div class="section-full content-inner bg-gray">
                        <div class="container">
                            <div class="section-head style2 text-center">
                                <h2 class="title">Our Team</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>

                            <TeamSlider2/>

                        </div>
                    </div>

                    <div class="section-full content-inner overlay-black-middle bg-img-fix" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div class="container">
                            <div class="section-head style2 text-center text-white">
                                <h2 class="title">Latest blog post</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>

                            <BlogSlider1 data={blogContent6} />

                        </div>
                    </div>

                    <div class="section-full content-inner-2 bg-gray">
                        <div class="container">
                            <div class="section-head style2 text-center">
                                <h2 class="title">Our Client</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>

                            <Testimonial10/>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <ScrollToTop className="scroltop style2 radius"/>
            </>
        )
    }
}
export default Index12;
