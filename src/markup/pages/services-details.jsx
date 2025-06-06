import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('/images/banner/bnr2.jpg')

class ServicesDetails extends Component {


    render() {
        return (
            <>
                <Header/>
                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Service Details</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link href="/">Home</Link></li>
                                        <li>Service</li>
                                        <li>Service Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content-block">
                        <div class="section-full content-inner">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-3 col-lg-4 col-md-5">
                                        <div class="widget sidebar-widget ext-sidebar-menu widget_nav_menu">
                                            <ul class="menu">
                                                <li><Link href="#">all services</Link> </li>
                                                <li class="active"><Link href="#">engine diagnostics</Link>  </li>
                                                <li><Link href="#">lube oil and filters</Link>  </li>
                                                <li><Link href="#">belts and hoses</Link>  </li>
                                                <li><Link href="#">air conditioning</Link> </li>
                                                <li><Link href="#">brake repair</Link> </li>
                                                <li><Link href="#">tire and wheel services</Link> </li>
                                            </ul>
                                        </div>
                                        <div class="widget">
                                            <div class="download-file">
                                                <h4 class="title">Get your brochures</h4>
                                                <ul>
                                                    <li>
                                                        <Link href="#" target="_blank">
                                                            <div class="text">Company Brochures</div>
                                                            <i class="fa fa-download"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" target="_blank">
                                                            <div class="text">Company Info</div>
                                                            <i class="fa fa-download"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-9 col-lg-8 col-md-7 m-b30">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-12 m-b30">
                                                <div class="dlab-box">
                                                    <div class="dlab-media"> <Link href="#"><img src={("/images/about/pic6.jpg")} alt=""/></Link> </div>
                                                    <div class="dlab-info m-t30 ">
                                                        <h4 class="dlab-title m-t0"><Link href="#">The Initial Planning </Link></h4>
                                                        <p>There are many variations of passages of Lorem Ipsum typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                                        <p>There are many variations of passages of Lorem Ipsum typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. </p>
                                                        <p>There are many variations of passages of Lorem Ipsum typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-12">
                                                <div class="dlab-box">
                                                    <div class="dlab-media m-b30 p-b5"> <Link href="#"><img src={("/images/our-services/pic2.jpg")} alt=""/></Link></div>
                                                    <div class="dlab-media"> <Link href="#"><img src={("/images/our-services/pic3.jpg")} alt=""/></Link></div>
                                                    <div class="dlab-info m-t30">
                                                        <h4 class="dlab-title m-t0"><Link href="#">From Start To finish</Link></h4>
                                                        <p>There are many variations of passages of Lorem Ipsum typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                                        <p>There are many variations of passages of Lorem Ipsum typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. </p>
                                                        <p>There are many variations of passages of Lorem Ipsum typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. </p>
                                                    </div>
                                                </div>
                                            </div>
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
export default ServicesDetails;
