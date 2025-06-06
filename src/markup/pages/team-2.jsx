import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'
import TeamSlider3 from '../element/teamSlider3';

const bg = require('/images/banner/bnr3.jpg')
const bg2 = require('/images/background/bg4.jpg')

class Team2 extends Component {


    render() {
        return (
            <>
                <Header/>
                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Team 2</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link href="/">Home</Link></li>
                                        <li>Team 2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content-block">
                        <div class="section-full text-center bg-white content-inner">
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h2 class="title">Meet Our Team</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="dlab-box m-b30 dlab-team1">
                                            <div class="dlab-media">
                                                <Link href="#">
                                                    <img width="358" height="460" alt="" src={("/images/our-team/pic1.jpg")}/>
                                                </Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="dlab-title"><Link href="#">Nashid Martines</Link></h4>
                                                <span class="dlab-position">Director</span>
                                                <ul class="dlab-social-icon dez-border">
                                                    <li><Link class="fa fa-facebook" to="#"></Link></li>
                                                    <li><Link class="fa fa-twitter" to="#"></Link></li>
                                                    <li><Link class="fa fa-linkedin" to="#"></Link></li>
                                                    <li><Link class="fa fa-pinterest" to="#"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="dlab-box m-b30 dlab-team1">
                                            <div class="dlab-media">
                                                <Link href="#">
                                                    <img width="358" height="460" alt="" src={("/images/our-team/pic2.jpg")}/>
                                                </Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="dlab-title"><Link href="#">Konne Backfield</Link></h4>
                                                <span class="dlab-position">Designer</span>
                                                <ul class="dlab-social-icon dez-border">
                                                    <li><Link class="fa fa-facebook" to="#"></Link></li>
                                                    <li><Link class="fa fa-twitter" to="#"></Link></li>
                                                    <li><Link class="fa fa-linkedin" to="#"></Link></li>
                                                    <li><Link class="fa fa-pinterest" to="#"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="dlab-box m-b30 dlab-team1">
                                            <div class="dlab-media">
                                                <Link href="#">
                                                    <img width="358" height="460" alt="" src={("/images/our-team/pic3.jpg")}/>
                                                </Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="dlab-title"><Link href="#">Hackson Willingham</Link></h4>
                                                <span class="dlab-position">Developer</span>
                                                <ul class="dlab-social-icon dez-border">
                                                    <li><Link class="fa fa-facebook" to="#"></Link></li>
                                                    <li><Link class="fa fa-twitter" to="#"></Link></li>
                                                    <li><Link class="fa fa-linkedin" to="#"></Link></li>
                                                    <li><Link class="fa fa-pinterest" to="#"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="dlab-box m-b30 dlab-team1">
                                            <div class="dlab-media">
                                                <Link href="#">
                                                    <img width="358" height="460" alt="" src={("/images/our-team/pic4.jpg")}/>
                                                </Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="dlab-title"><Link href="#">Konne Backfield</Link></h4>
                                                <span class="dlab-position">Manager</span>
                                                <ul class="dlab-social-icon dez-border">
                                                    <li><Link class="fa fa-facebook" to="#"></Link></li>
                                                    <li><Link class="fa fa-twitter" to="#"></Link></li>
                                                    <li><Link class="fa fa-linkedin" to="#"></Link></li>
                                                    <li><Link class="fa fa-pinterest" to="#"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full overlay-black-dark bg-img-fix text-white content-inner" style={{ backgroundImage: "url(" + bg2 + ")" }}>
                            <div class="container">
                                <div class="section-content">
                                    <div class="row sp20">
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                            <div class="icon-bx-wraper center counter-style-5">
                                                <div class="icon-xl m-b20">
                                                    <span class="icon-cell"><i class="flaticon-worker"></i></span>
                                                </div>
                                                <div class="icon-content">
                                                    <div class="dlab-separator bg-primary"></div>
                                                    <h2 class="dlab-tilte counter">1226</h2>
                                                    <p>Happy Client</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                            <div class="icon-bx-wraper center counter-style-5">
                                                <div class="icon-xl m-b20">
                                                    <span class="icon-cell"><i class="flaticon-settings"></i></span>
                                                </div>
                                                <div class="icon-content">
                                                    <div class="dlab-separator bg-primary"></div>
                                                    <h2 class="dlab-tilte counter">1551</h2>
                                                    <p>Workers Hand</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                            <div class="icon-bx-wraper center counter-style-5">
                                                <div class="icon-xl m-b20">
                                                    <span class="icon-cell"><i class="flaticon-conveyor-1"></i></span>
                                                </div>
                                                <div class="icon-content">
                                                    <div class="dlab-separator bg-primary"></div>
                                                    <h2 class="dlab-tilte counter">1156</h2>
                                                    <p>Active Experts</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                            <div class="icon-bx-wraper center counter-style-5">
                                                <div class="icon-xl m-b20">
                                                    <span class="icon-cell"><i class="flaticon-analytics"></i></span>
                                                </div>
                                                <div class="icon-content">
                                                    <div class="dlab-separator bg-primary"></div>
                                                    <h2 class="dlab-tilte counter">1302</h2>
                                                    <p>Completed Projects</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full text-center bg-white content-inner-2">
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h2 class="title">Meet Our Team</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <TeamSlider3/>
                            </div>
                        </div>

                        <div class="section-full p-b80">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="text-center max-w600 m-auto ">
                                            <div class="m-b20"><i class="fa fa-quote-left font-45 text-primary"></i></div>
                                            <h4 class="text-uppercase font-weight-700 font-30">We would love to hear about start your new project?</h4>
                                            <Link href="#" class="site-button radius-xl outline outline-2"><span class="p-lr10">Start New Projects</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}
export default Team2;
