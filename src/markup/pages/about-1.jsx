import React, { Component } from 'react';
// import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Testimonial1 from '../element/testimonial1';


var bnr3 = require('/images/banner/bnr3.jpg');
var bg1 = require('/images/background/bg-video.png');
var bg2 = require('/images/background/bg1.jpg');

class About1 extends Component {


    render() {
        return (
            <>
                <Header />

                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr3 + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry align-m text-center">
                                <h1 class="text-white">About us 1</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><a href="/">Home</a></li>
                                        <li>About us 1</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-block">
                        <div class="section-full content-inner bg-white video-section"  style={{ backgroundImage: "url(" + bg1 + ")" }}>
                            <div class="container">
                                <div class="section-content">
                                    <div class="row d-flex">
                                        <div class="col-lg-6 col-md-12 m-b30">
                                            <div class="video-bx">
                                                <img src={require('/images/about/pic5.jpg')} alt="Signature" />
                                                <div class="video-play-icon">
                                                    <a href="https://www.youtube.com/watch?v=_FRZVScwggM" class="popup-youtube video bg-primary"><i class="fa fa-play"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12 m-b30 align-self-center video-infobx">
                                            <div class="content-bx1">
                                                <h2 class="m-b15 title">A company involved in<br /><span class="text-primary"> service, maintenance</span></h2>
                                                <p class="m-b30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an.</p>
                                                <img src={require('/images/sign.png')} width="200" alt="" />
                                                <h4 class="m-b0">Jone Doe</h4>
                                                <span class="font-14">Company Director</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section-full content-inner overlay-black-dark bg-img-fix" style={{ backgroundImage: "url(" + bg2 + ")" }}>
                            <div class="container">
                                <div class="section-content text-center text-white">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                            <div class="counter-style-5">
                                                <div class="">
                                                    <span class="counter">6810</span>
                                                </div>
                                                <span class="counter-text">Passionate Employee</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                            <div class="counter-style-5">
                                                <div class="">
                                                    <span class="counter">4060</span>
                                                </div>
                                                <span class="counter-text">Modern Factory</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                            <div class="counter-style-5">
                                                <div class="">
                                                    <span class="counter">3164</span>
                                                </div>
                                                <span class="counter-text">Factory in Worldwide</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                            <div class="counter-style-5">
                                                <div class="">
                                                    <span class="counter">1852</span>
                                                </div>
                                                <span class="counter-text">International Awards</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section-full text-center bg-gray content-inner">
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h2 class="title">Meet Our Team</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="dlab-box m-b30 dlab-team1">
                                            <div class="dlab-media">
                                                <a href="javascript:;">
                                                    <img width="358" height="460" alt="" src={require('/images/our-team/pic1.jpg')} />
                                                </a>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="dlab-title"><a href="javascript:;">Nashid Martines</a></h4>
                                                <span class="dlab-position">Director</span>
                                                <ul class="dlab-social-icon dez-border">
                                                    <li><a class="fa fa-facebook" href="javascript:void(0);"></a></li>
                                                    <li><a class="fa fa-twitter" href="javascript:void(0);"></a></li>
                                                    <li><a class="fa fa-linkedin" href="javascript:void(0);"></a></li>
                                                    <li><a class="fa fa-pinterest" href="javascript:void(0);"></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="dlab-box m-b30 dlab-team1">
                                            <div class="dlab-media">
                                                <a href="javascript:;">
                                                    <img width="358" height="460" alt="" src={require('/images/our-team/pic2.jpg')} />
                                                </a>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="dlab-title"><a href="javascript:;">Konne Backfield</a></h4>
                                                <span class="dlab-position">Designer</span>
                                                <ul class="dlab-social-icon dez-border">
                                                    <li><a class="fa fa-facebook" href="javascript:void(0);"></a></li>
                                                    <li><a class="fa fa-twitter" href="javascript:void(0);"></a></li>
                                                    <li><a class="fa fa-linkedin" href="javascript:void(0);"></a></li>
                                                    <li><a class="fa fa-pinterest" href="javascript:void(0);"></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="dlab-box m-b30 dlab-team1">
                                            <div class="dlab-media">
                                                <a href="javascript:;">
                                                    <img width="358" height="460" alt="" src={require('/images/our-team/pic3.jpg')} />
                                                </a>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="dlab-title"><a href="javascript:;">Hackson Willingham</a></h4>
                                                <span class="dlab-position">Developer</span>
                                                <ul class="dlab-social-icon dez-border">
                                                    <li><a class="fa fa-facebook" href="javascript:void(0);"></a></li>
                                                    <li><a class="fa fa-twitter" href="javascript:void(0);"></a></li>
                                                    <li><a class="fa fa-linkedin" href="javascript:void(0);"></a></li>
                                                    <li><a class="fa fa-pinterest" href="javascript:void(0);"></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="dlab-box m-b30 dlab-team1">
                                            <div class="dlab-media">
                                                <a href="javascript:;">
                                                    <img width="358" height="460" alt="" src={require('/images/our-team/pic4.jpg')} />
                                                </a>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="dlab-title"><a href="javascript:;">Konne Backfield</a></h4>
                                                <span class="dlab-position">Manager</span>
                                                <ul class="dlab-social-icon dez-border">
                                                    <li><a class="fa fa-facebook" href="javascript:void(0);"></a></li>
                                                    <li><a class="fa fa-twitter" href="javascript:void(0);"></a></li>
                                                    <li><a class="fa fa-linkedin" href="javascript:void(0);"></a></li>
                                                    <li><a class="fa fa-pinterest" href="javascript:void(0);"></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full content-inner-2 bg-white">
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h2 class="title">Pricing Table</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div class="section-content box-sort-in button-example pricingtable-style2-area m-t80">
                                    <div class="pricingtable-row">
                                        <div class="row max-w1000 m-auto">
                                            <div class="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                <div class="pricingtable-wrapper style2 bg-white">
                                                    <div class="pricingtable-inner">
                                                        <div class="pricingtable-price">
                                                            <h4 class="font-weight-300 m-t10 m-b0">Basic</h4>
                                                            <div class="pricingtable-bx"><span>Free</span></div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
                                                        <div class="m-t20">
                                                            <a href="javascript:void(0);" class="site-button radius-xl"><span class="p-lr30">Sign Up</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                <div class="pricingtable-wrapper style2 bg-primary text-white active">
                                                    <div class="pricingtable-inner">
                                                        <div class="pricingtable-price">
                                                            <h4 class="font-weight-300 m-t10 m-b0">Professional</h4>
                                                            <div class="pricingtable-bx"> $ <span>29</span> /  Per Installation </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
                                                        <div class="m-t20">
                                                            <a href="javascript:void(0);" class="site-button white radius-xl"><span class="p-lr30">Sign Up</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                <div class="pricingtable-wrapper style2 bg-white">
                                                    <div class="pricingtable-inner">
                                                        <div class="pricingtable-price">
                                                            <h4 class="font-weight-300 m-t10 m-b0">Extended</h4>
                                                            <div class="pricingtable-bx"> $  <span>29</span> /  Per Installation </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
                                                        <div class="m-t20">
                                                            <a href="javascript:void(0);" class="site-button radius-xl"><span class="p-lr30">Sign Up</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full content-inner-2 bg-gray">
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h2 class="title">Happy Customers Said</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <Testimonial1/>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        )
    }
}

export default About1;
