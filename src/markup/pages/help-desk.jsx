import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('/images/banner/bnr1.jpg')

class HelpDesk extends Component {


    render() {
        return (
            <>
                <Header/>
                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Help Desk</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link href="/">Home</Link></li>
                                        <li>Help Desk</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content-block">
                        <div class="section-full content-inner bg-gray">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-8 col-md-7 col-sm-12 inner-text">
                                        <h2 class="title">Help Desk</h2>
                                        <p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</strong></p>
                                        <h4 class="title">Emergency Service</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is
                                            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        <h4 class="title">Tips </h4>
                                        <ul class="list-check primary">
                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</li>
                                            <li>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</li>
                                            <li>Printer took a galley of type and scrambled it to make a type specimen book. </li>
                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</li>
                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy book. </li>
                                            <li>Eorem ipsum dolor sit amete printing and typesetting industry. </li>
                                        </ul>
                                        <h4  class="title">Health Care</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply
                                            dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  when an
                                            unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                            the industry's standard dummy text ever since the  when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book. </p>
                                        <h4 class="title">Our Help </h4>
                                        <ul class="list-check primary">
                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</li>
                                            <li>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</li>
                                            <li>Printer took a galley of type and scrambled it to make a type specimen book. </li>
                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</li>
                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy book. </li>
                                            <li>Eorem ipsum dolor sit amete printing and typesetting industry. </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-4 col-md-5 col-sm-12 m-b30">
                                        <div class="icon-bx-wraper bx-style-1 p-a30 center fly-box m-b30 bg-white">
                                            <div class="icon-sm m-b20"> <Link href="#" class="icon-cell"><i class="ti-headphone-alt"></i></Link> </div>
                                            <div class="icon-content">
                                                <h5 class="dlab-tilte text-uppercase">Unique design</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
                                                <Link href="#" class="site-button">View More</Link>
                                            </div>
                                        </div>
                                        <div class="icon-bx-wraper bx-style-1 p-a30 center fly-box m-b30 bg-white">
                                            <div class="icon-sm m-b20"> <Link href="#" class="icon-cell"><i class="ti-ruler-pencil"></i></Link> </div>
                                            <div class="icon-content">
                                                <h5 class="dlab-tilte text-uppercase">Make it Simple</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
                                                <Link href="#" class="site-button">View More</Link>
                                            </div>
                                        </div>
                                        <div class="icon-bx-wraper bx-style-1 p-a30 center fly-box bg-white">
                                            <div class="icon-sm m-b20"> <Link href="#" class="icon-cell text-primary"><i class="ti-desktop"></i></Link> </div>
                                            <div class="icon-content">
                                                <h5 class="dlab-tilte text-uppercase">Different Layout</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
                                                <Link href="#" class="site-button">View More</Link>
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
export default HelpDesk;
