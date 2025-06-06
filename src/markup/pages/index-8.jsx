import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header8'
import Footer from '../layout/footer8'
import MainSlider1 from '../element/mainSlider1';
import ProjectSlider2 from '../element/projectSlider2';
import TeamSlider1 from '../element/teamSlider1';
import Testimonial6 from '../element/testimonial6';
import ScrollToTop from '../../components/element/scrollToTop';
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';

// import '../../css/skin/skin-6.min.css';


class Index8 extends Component {

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
            <div class="page-content frame-box">
                <div class="content-block area-frame">
                    <div class="container">
                        <MainSlider1/>

                        <div class="section-full content-inner-1 about-bx">
                            <div class="row">
                                <div class="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="about-box">
                                        <div class="dlab-img-effect zoom">
                                            <img src={("/images/about/about3.jpg")} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 m-b30 align-self-center wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="m-b15">
                                        <h2 class="m-b0">About <span class="text-primary">Agriculture</span></h2>
                                        <div class="dlab-separator bg-primary m-b0"></div>
                                    </div>
                                    <p><strong class="text-primary">Agriculture</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.</p>
                                    <Link href="/about-1" class="site-button btnhover14">About Us</Link>
                                </div>
                            </div>
                        </div>

                        <div class="section-full content-inner-1 frame-project-area">
                            <div class="section-head text-center">
                                <h2 class="title">Project And Portfolio</h2>
                                <div class="dlab-separator bg-primary m-b0"></div>
                            </div>

                            <ProjectSlider2/>

                            <div class="m-t40 text-center">
                                <Link href="/portfolio-grid-2" class="site-button btnhover14">View All Portfolio</Link>
                            </div>
                        </div>

                        <div class="section-full content-inner-1 frame-sr-list-area">
                            <div class="section-head text-center">
                                <h2 class="title">Our Services</h2>
                                <div class="dlab-separator bg-primary m-b0"></div>
                            </div>
                            <div class="row align-items-center">
                                <div class="col-lg-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <ul class="service-list">
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</li>
                                        <li>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                                        <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</li>
                                        <li>it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
                                        <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</li>
                                    </ul>
                                </div>
                                <div class="col-lg-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                    <ul class="service-list">
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</li>
                                        <li>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                                        <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</li>
                                        <li>it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
                                        <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="m-t40 text-center">
                                <Link href="/services" class="site-button btnhover14">View All Services</Link>
                            </div>
                        </div>

                        <div class="section-full content-inner-1">
                            <div class="section-head text-center">
                                <h2 class="title">Our Team</h2>
                                <div class="dlab-separator bg-primary m-b0"></div>
                            </div>
                            <TeamSlider1/>
                        </div>

                        <ModalVideo
                        channel='youtube'
                        allowFullScreen
                        isOpen={this.state.isOpen}
                        videoId='_FRZVScwggM'
                        onClose={this.closeModal}
                        />

                        <div class="section-full content-inner-1">
                            <div class="row gallery-bx">
                                <div class="col-lg-6 m-b30">
                                    <div class="section-head">
                                        <h2 class="title">Video Gallery</h2>
                                        <div class="dlab-separator bg-primary m-b0"></div>
                                    </div>
                                    <div class="dlab-gallery-listing row sp15 gallery video-gallery">
                                        <div class="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.1s">
                                            <div class="dlab-box m-b15">
                                                <div class="dlab-img-overlay4 dlab-img-effect zoom">
                                                    <Link href="#">
                                                        <img src={("/images/gallery/agriculture/pic1.jpg")} alt=""/>
                                                    </Link>
                                                    <div class="overlay-bx">
                                                        <div class="overlay-icon">
                                                            <Link href="/#" onClick={this.openModal} class="popup-youtube video">
                                                                <i class="fa fa-play"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                                            <div class="dlab-box m-b15">
                                                <div class="dlab-img-overlay4 dlab-img-effect zoom">
                                                    <Link href="#">
                                                        <img src={("/images/gallery/agriculture/pic2.jpg")} alt=""/>
                                                    </Link>
                                                    <div class="overlay-bx">
                                                        <div class="overlay-icon">
                                                            <Link href="/#" onClick={this.openModal} class="popup-youtube video">
                                                                <i class="fa fa-play"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                            <div class="dlab-box m-b15">
                                                <div class="dlab-img-overlay4 dlab-img-effect zoom">
                                                    <Link href="#">
                                                        <img src={("/images/gallery/agriculture/pic3.jpg")} alt=""/>
                                                    </Link>
                                                    <div class="overlay-bx">
                                                        <div class="overlay-icon">
                                                            <Link href="/#" onClick={this.openModal} class="popup-youtube video">
                                                                <i class="fa fa-play"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                                            <div class="dlab-box m-b15">
                                                <div class="dlab-img-overlay4 dlab-img-effect zoom">
                                                    <Link href="#">
                                                        <img src={("/images/gallery/agriculture/pic4.jpg")} alt=""/>
                                                    </Link>
                                                    <div class="overlay-bx">
                                                        <div class="overlay-icon">
                                                            <Link href="/#" onClick={this.openModal} class="popup-youtube video">
                                                                <i class="fa fa-play"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                                            <div class="dlab-box m-b15">
                                                <div class="dlab-img-overlay4 dlab-img-effect zoom">
                                                    <Link href="#">
                                                        <img src={("/images/gallery/agriculture/pic5.jpg")} alt=""/>
                                                    </Link>
                                                    <div class="overlay-bx">
                                                        <div class="overlay-icon">
                                                            <Link href="/#" onClick={this.openModal} class="popup-youtube video">
                                                                <i class="fa fa-play"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                            <div class="dlab-box m-b15">
                                                <div class="dlab-img-overlay4 dlab-img-effect zoom">
                                                    <Link href="#">
                                                        <img src={("/images/gallery/agriculture/pic6.jpg")} alt=""/>
                                                    </Link>
                                                    <div class="overlay-bx">
                                                        <div class="overlay-icon">
                                                            <Link href="/#" onClick={this.openModal} class="popup-youtube video">
                                                                <i class="fa fa-play"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-t20">
                                        <Link href="/#" class="site-button btnhover14">View All Video</Link>
                                    </div>
                                </div>
                                <div class="col-lg-6 m-b30">
                                    <div class="section-head">
                                        <h2 class="title">Image Gallery</h2>
                                        <div class="dlab-separator bg-primary m-b0"></div>
                                    </div>
                                    <div id="lightgallery" class="dlab-gallery-listing row sp15 gallery">
                                        <div class="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.1s">
                                            <div class="dlab-box m-b15">
                                                <div class="dlab-img-overlay4 dlab-img-effect zoom">
                                                    <Link href="#">
                                                        <img src={("/images/gallery/agriculture/pic1.jpg")} alt=""/>
                                                    </Link>
                                                    <div class="overlay-bx">
                                                        <div class="overlay-icon">
                                                            <span data-exthumbimage="images/gallery/pic1.jpg" data-src="images/gallery/pic1.jpg" class="check-km" title="Image 1 Title will come here">
                                                                <i class="fa fa-search icon-bx-xs"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                                            <div class="dlab-box m-b15">
                                                <div class="dlab-img-overlay4 dlab-img-effect zoom">
                                                    <Link href="#">
                                                        <img src={("/images/gallery/agriculture/pic2.jpg")} alt=""/>
                                                    </Link>
                                                    <div class="overlay-bx">
                                                        <div class="overlay-icon">
                                                            <span class="check-km" data-exthumbimage="images/gallery/pic2.jpg" data-src="images/gallery/pic2.jpg" title="Image 2 Title will come here">
                                                                <i class="fa fa-search icon-bx-xs"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                            <div class="dlab-box m-b15">
                                                <div class="dlab-img-overlay4 dlab-img-effect zoom">
                                                    <Link href="#">
                                                        <img src={("/images/gallery/agriculture/pic3.jpg")} alt=""/>
                                                    </Link>
                                                    <div class="overlay-bx">
                                                        <div class="overlay-icon">
                                                            <span class="check-km" data-exthumbimage="images/gallery/pic3.jpg" data-src="images/gallery/pic3.jpg" title="Image 3 Title will come here">
                                                                <i class="fa fa-search icon-bx-xs"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                                            <div class="dlab-box m-b15">
                                                <div class="dlab-img-overlay4 dlab-img-effect zoom">
                                                    <Link href="#">
                                                        <img src={("/images/gallery/agriculture/pic4.jpg")} alt=""/>
                                                    </Link>
                                                    <div class="overlay-bx">
                                                        <div class="overlay-icon">
                                                            <span class="check-km" data-exthumbimage="images/gallery/pic4.jpg" data-src="images/gallery/pic4.jpg" title="Image 4 Title will come here">
                                                                <i class="fa fa-search icon-bx-xs"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                                            <div class="dlab-box m-b15">
                                                <div class="dlab-img-overlay4 dlab-img-effect zoom">
                                                    <Link href="#">
                                                        <img src={("/images/gallery/agriculture/pic5.jpg")} alt=""/>
                                                    </Link>
                                                    <div class="overlay-bx">
                                                        <div class="overlay-icon">
                                                            <span class="check-km" data-exthumbimage="images/gallery/pic5.jpg" data-src="images/gallery/pic5.jpg" title="Image 5 Title will come here">
                                                                <i class="fa fa-search icon-bx-xs"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                            <div class="dlab-box m-b15">
                                                <div class="dlab-img-overlay4 dlab-img-effect zoom">
                                                    <Link href="#">
                                                        <img src={("/images/gallery/agriculture/pic6.jpg")} alt=""/>
                                                    </Link>
                                                    <div class="overlay-bx">
                                                        <div class="overlay-icon">
                                                            <span class="check-km" data-exthumbimage="images/gallery/pic6.jpg" data-src="images/gallery/pic6.jpg" title="Image 6 Title will come here">
                                                                <i class="fa fa-search icon-bx-xs"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-t20">
                                        <Link href="/#" class="site-button btnhover14">View All Image</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full content-inner wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s">
                            <div class="section-head text-center">
                                <h2 class="title">Client Testimonial</h2>
                                <div class="dlab-separator bg-primary m-b0"></div>
                            </div>
                            <Testimonial6/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <ScrollToTop className="style3 radius"/>
            </>
        )
    }
}
export default Index8;
