import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ClientSlider1 from '../element/clientSlider1';

const bg = require('/images/banner/bnr4.jpg')

class Team1 extends Component {


    render() {
        return (
            <>
                <Header/>
                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle bg-pt"  style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Team</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link href="/">Home</Link></li>
                                        <li>Team</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content-block">
                        <div class="section-full content-inner">
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
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="dlab-box m-b30 dlab-team1">
                                            <div class="dlab-media">
                                                <Link href="#">
                                                    <img width="358" height="460" alt="" src={("/images/our-team/pic5.jpg")}/>
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
                                                    <img width="358" height="460" alt="" src={("/images/our-team/pic6.jpg")}/>
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
                                                    <img width="358" height="460" alt="" src={("/images/our-team/pic7.jpg")}/>
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
                                                    <img width="358" height="460" alt="" src={("/images/our-team/pic8.jpg")}/>
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

                        <div class="section-full content-inner bg-gray">
                            <div class="container">
                                <ClientSlider1
                                hideBorder
                                allowPadding
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}
export default Team1;
