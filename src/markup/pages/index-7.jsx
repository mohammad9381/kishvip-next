import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header7'
import Footer from '../layout/footer7'
import {blogContent3,ExibitionContent1,homeSliderContent7} from '../element/SliderContent'
import BlogSlider1 from '../../components/element/blogSlider1'
import Testmonial5 from '../../components/element/testmonial5';
import ExibitionSlider1 from '../../components/element/exibitionSlider1';
 import HomeSlider from '../../components/element/homeSlider2'
import Gallery2 from '../../components/element/gallery2';
import ScrollToTop from '../../components/element/scrollToTop';
import Team4 from '../../components/element/team4'

// import '../../css/skin/skin-5.min.css';

const images = [
    {
      id: 1,
      name: "healthy food",
      title:"cookies",
      imgUrl: ("/images/gallery/food/pic1.jpg")
    },
    {
      id: 2,
      name: "food",
      title:"ice cream",
      imgUrl: ("/images/gallery/food/pic2.jpg")
    },
    {
      id: 3,
      name: "organic",
      title:"bear cup",
      imgUrl: ("/images/gallery/food/pic3.jpg")
    },
    {
      id: 4,
      name: "organic",
      title:"burger",
      imgUrl: ("/images/gallery/food/pic4.jpg")
    },

  ];

class Index7 extends Component {


    render() {
        return (
            <>
            <Header/>

            <div class="page-content bg-white home-slider-7">

                <HomeSlider
                data={homeSliderContent7}
                contentWrapperCls="sliderStyle7"
                btnText="VIEW PORTFOLIO"
                />

                <div class="content-block">
                    <div class="section-full call-action bg-primary">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-9 text-white">
                                    <h2 class="title">Amazing things happen to your business </h2>
                                    <p class="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div class="col-lg-3 d-flex">
                                    <Link href="/contact-1" class="site-button btnhover10 white align-self-center outline ml-auto radius-xl outline-2">Contact Us </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-full content-inner-2 exhibition-bx">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <ExibitionSlider1 data={ExibitionContent1}/>
                                </div>
                                <div class="col-lg-6 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="content-bx1">
                                        <div class="section-head">
                                            <h2 class="title">Quality Products <br/>With Sweet eggs a breads </h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie nec nisl eget scelerisque. Quisque placerat suscipit eros, eu tincidunt tellus blandit vel. Donec pellentesque dapibus interdum. Mauris et tellus congue, rutrum neque a, varius felis.</p>
                                        </div>
                                        <Link href="/contact-2" class="site-button btnhover10 black m-r10 m-b10">Contact us</Link>
                                        <Link href="/portfolio-details" class="site-button btnhover10 black m-b10">View portfolio</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-full">
                        <div class="row m-lr0">
                            <div class="col-xl-6 col-lg-12 p-lr0 wow bounceInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                <div class="row m-a0 lightgallery" id="lightgallery">
                                    <div class="col-lg-12 col-md-12 col-sm-12 p-lr0">
                                        <div class="dlab-box overlay-gallery-bx1">
                                            <div class="dlab-thum dlab-img-overlay1 primary dlab-img-effect zoom">
                                                <Link href="#;"> <img class="img-cover" src={("/images/gallery/food/pic7.jpg")} alt=""/> </Link>
                                                <div class="overlay-bx">
                                                    <div class="overlay-icon">
                                                        <Link href="#;"> <i class="fa fa-play icon-bx-xs"></i> </Link>
                                                        <span data-exthumbimage="images/gallery/food/pic7.jpg" data-src="images/gallery/food/pic7.jpg" class="check-km" title="Cookies">
                                                            <i class="fa fa-search icon-bx-xs"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 p-lr0">
                                        <div class="dlab-box overlay-gallery-bx1">
                                            <div class="dlab-thum dlab-img-overlay1 primary dlab-img-effect zoom">
                                                <Link href="#;"> <img class="img-cover" src={("/images/gallery/food/pic5.jpg")} alt=""/> </Link>
                                                <div class="overlay-bx">
                                                    <div class="overlay-icon">
                                                        <Link href="#;"> <i class="fa fa-play icon-bx-xs"></i> </Link>
                                                        <span data-exthumbimage="images/gallery/food/pic5.jpg" data-src="images/gallery/food/pic5.jpg" class="check-km" title="Burger">
                                                            <i class="fa fa-search icon-bx-xs"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 p-lr0">
                                        <div class="dlab-box overlay-gallery-bx1">
                                            <div class="dlab-thum dlab-img-overlay1 primary dlab-img-effect zoom">
                                                <Link href="#;"> <img class="img-cover" src={("/images/gallery/food/pic6.jpg")} alt=""/> </Link>
                                                <div class="overlay-bx">
                                                    <div class="overlay-icon">
                                                        <Link href="#;"> <i class="fa fa-play icon-bx-xs"></i> </Link>
                                                        <span data-exthumbimage="images/gallery/food/pic6.jpg" data-src="images/gallery/food/pic6.jpg" class="check-km" title="Bear cup">
                                                            <i class="fa fa-search icon-bx-xs"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-12 p-lr0 d-flex dis-tbl latest-project-info bg-primary wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                <div class="text-white align-self-center ">
                                    <h2>Our Latest Item Food Industry</h2>
                                    <p>Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare. Suspendisse ullamcorper <span class="text-white">metus in erat viverra</span>, vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus malesuada vel. Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare. Suspendisse ullamcorper <span class="text-white">metus in erat viverra</span>, vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus malesuada vel.</p>
                                    <Link href="/portfolio-details" class="site-button btnhover10 white">View Project</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-full bg-white content-inner-2">
                        <div class="container">
                            <div class="section-head text-center">
                                <h2 class="title">Our Gallery</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <Gallery2 images={images}/>
                        </div>
                    </div>

                    <div class="section-full bg-primary content-inner">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-sm-6 m-b30 wow bounceInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="icon-bx-wraper sr-iconbox1">
                                        <div class="icon-lg m-b20 icon-up">
                                            <Link href="#" class="icon-cell"><img src={("/images/icon/food/icon1.png")} alt=""/></Link>
                                        </div>
                                        <div class="icon-content">
                                            <h4 class="dlab-tilte">Cookies</h4>
                                            <p>I have worked with many companies offering supplemental industrial services, and out of all those companies </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 m-b30 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="icon-bx-wraper sr-iconbox1">
                                        <div class="icon-lg m-b20 icon-up">
                                            <Link href="#" class="icon-cell"><img src={("/images/icon/food/icon2.png")} alt=""/></Link>
                                        </div>
                                        <div class="icon-content">
                                            <h4 class="dlab-tilte">Pizza</h4>
                                            <p>I have worked with many companies offering supplemental industrial services, and out of all those companies </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 m-b30 wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="icon-bx-wraper sr-iconbox1">
                                        <div class="icon-lg m-b20 icon-up">
                                            <Link href="#" class="icon-cell"><img src={("/images/icon/food/icon3.png")} alt=""/></Link>
                                        </div>
                                        <div class="icon-content">
                                            <h4 class="dlab-tilte">Ice cream</h4>
                                            <p>I have worked with many companies offering supplemental industrial services, and out of all those companies </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 m-b30 wow bounceInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="icon-bx-wraper sr-iconbox1">
                                        <div class="icon-lg m-b20 icon-up">
                                            <Link href="#" class="icon-cell"><img src={("/images/icon/food/icon4.png")} alt=""/></Link>
                                        </div>
                                        <div class="icon-content">
                                            <h4 class="dlab-tilte">Bear cup</h4>
                                            <p>I have worked with many companies offering supplemental industrial services, and out of all those companies </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 m-b30 wow bounceInDown" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="icon-bx-wraper sr-iconbox1">
                                        <div class="icon-lg m-b20 icon-up">
                                            <Link href="#" class="icon-cell"><img src={("/images/icon/food/icon5.png")} alt=""/></Link>
                                        </div>
                                        <div class="icon-content">
                                            <h4 class="dlab-tilte">Chikan</h4>
                                            <p>I have worked with many companies offering supplemental industrial services, and out of all those companies </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 m-b30 wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="icon-bx-wraper sr-iconbox1">
                                        <div class="icon-lg m-b20 icon-up">
                                            <Link href="#" class="icon-cell"><img src={("/images/icon/food/icon6.png")} alt=""/></Link>
                                        </div>
                                        <div class="icon-content">
                                            <h4 class="dlab-tilte">Burger</h4>
                                            <p>I have worked with many companies offering supplemental industrial services, and out of all those companies </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-full bg-white content-inner">
                        <div class="container">
                            <div class="section-head text-center">
                                <h2 class="title">Our Team</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <Team4 />
                        </div>
                    </div>

                    <div class="section-full content-inner-2 bg-primary wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s">
                        <div class="container">
                            <div class="section-head style2 text-center text-white">
                                <h2 class="title">Testimonials</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <div class="section-content">
                                <Testmonial5/>
                            </div>
                        </div>
                    </div>

                    <div class="section-full content-inner bg-gray">
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
            <ScrollToTop className="icon-up"/>
            </>
        )
    }
}
export default Index7;
