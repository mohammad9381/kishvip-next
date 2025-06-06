import React, { Component } from 'react';
import Link  from 'next/link';



class Footer7 extends Component {


    render() {
        return (
            <>
            <footer class="site-footer footer-full text-white">
                <div class="p-tb60 bg-primary">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 text-md-left text-center footer-logo">
                                <img src={("/images/logo-light.png")} alt="" width="100"/>
                                <p class="m-b0 m-t10">Copyright &copy; 2021 DexignZone</p>
                            </div>
                            <div class="col-md-6 text-md-right text-center">
                                <div class="widget-link ">
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/about-2">About us</Link></li>
                                        <li><Link href="/help-desk">Help Desk</Link></li>
                                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                        <li><Link href="/contact-1">Contact Us</Link></li>
                                    </ul>
                                </div>
                                <ul class="list-inline m-b0 m-t10">
                                    <li><Link href="#" class="site-button-link facebook hover"><i class="fa fa-facebook"></i></Link></li>
                                    <li><Link href="#" class="site-button-link google-plus hover"><i class="fa fa-google-plus"></i></Link></li>
                                    <li><Link href="#" class="site-button-link linkedin hover"><i class="fa fa-linkedin"></i></Link></li>
                                    <li><Link href="#" class="site-button-link instagram hover"><i class="fa fa-instagram"></i></Link></li>
                                    <li><Link href="#" class="site-button-link twitter hover"><i class="fa fa-twitter"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            </>
        )
    }
}
export default Footer7;
