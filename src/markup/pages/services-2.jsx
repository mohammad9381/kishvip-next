import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('/images/banner/bnr2.jpg')

class Services2 extends Component {


    render() {
        return (
            <>
                <Header/>
                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle bg-pt"  style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Services 2</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link href="/">Home</Link></li>
                                        <li>Services 2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content-block">
                        <div class="section-full content-inner-2 bg-primary overlay-primary-middle">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12 service-main-title text-white text-center">
                                        <h3 class="title max-w700 m-auto">To others what may appear the impossible, becomes possible with Uncode.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full">
                            <div class="row spno about-industry">
                                <div class="col-lg-8">
                                    <img src={("/images/our-work/oilgas/pic1.jpg")} alt="" class="img-cover"/>
                                </div>
                                <div class="col-lg-4 bg-white">
                                    <div class="service-box style2">
                                        <div>
                                            <h2 class="title text-black"><span>Mechanical</span> <br/>Works</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <Link href="#" class="site-button outline outline-2">ABOUT US</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <img src={("/images/our-work/oilgas/pic2.jpg")} alt="" class="img-cover"/>
                                </div>
                                <div class="col-lg-4 bg-secondry text-white">
                                    <div class="service-box style2">
                                        <div>
                                            <h2 class="title"><span>Power &  </span> <br/>Energy.</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <Link href="#" class="site-button outline white outline-2">ABOUT US</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <img src={("/images/our-work/oilgas/pic3.jpg")} alt="" class="img-cover"/>
                                </div>
                                <div class="col-lg-4 bg-primary text-white">
                                    <div class="service-box style2">
                                        <div>
                                            <h2 class="title"><span>Petroleum  </span> <br/>Refinery.</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <Link href="#" class="site-button outline white outline-2">ABOUT US</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <img src={("/images/our-work/oilgas/pic4.jpg")} alt="" class="img-cover"/>
                                </div>
                                <div class="col-lg-4 bg-primary text-white">
                                    <div class="service-box style2">
                                        <div>
                                            <h2 class="title text-black"><span>Oil & Gas  </span> <br/>Industry.</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <Link href="#" class="site-button outline white outline-2">ABOUT US</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 bg-white">
                                    <div class="service-box style2">
                                        <div>
                                            <h2 class="title text-black"><span>Automative  </span> <br/>Manufacturing.</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <Link href="#" class="site-button outline outline-2">ABOUT US</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-8">
                                    <img src={("/images/our-work/oilgas/pic5.jpg")} alt="" class="img-cover"/>
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
export default Services2;
