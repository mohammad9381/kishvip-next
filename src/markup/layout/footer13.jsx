import React, { Component } from 'react';
import Link  from 'next/link';



class Footer13 extends Component {


    render() {
        return (
            <>
            <footer class="site-footer footer-gray-1">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                                <div class="widget border-0">
                                    <h6 class="m-b20 text-white font-weight-300 text-uppercase">Quick Links</h6>
                                    <ul class="list-2">
                                        <li><Link href="/about-1">About Us</Link></li>
                                        <li><Link href="/blog-grid-2">Blog</Link></li>
                                        <li><Link href="/services-1">Services</Link></li>
                                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                        <li><Link href="/portfolio-details">Projects </Link></li>
                                        <li><Link href="/help-desk">Help Desk </Link></li>
                                        <li><Link href="/shop">Shop</Link></li>
                                        <li><Link href="/contact-1">Contact</Link></li>
                                        <li><Link href="/portfolio-details">Portfolio</Link></li>
                                        <li><Link href="/team-1">Team</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                <div class="widget">
                                    <h6 class="m-b20 text-white font-weight-300 text-uppercase">Newsletter</h6>
                                    <div class="subscribe-form m-b20 m-t30">
                                        <form class="dzSubscribe" action="script/mailchamp.php" method="post">
                                            <div class="dzSubscribeMsg"></div>
                                            <div class="input-group">
                                                <input name="dzEmail" required="required" class="form-control radius-no" placeholder="Your Email Id" type="email"/>
                                                <span class="input-group-btn">
                                                    <button name="submit" value="Submit" type="submit" class="site-button btnhover13 radius-no">SEND</button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                    <h6 class="m-b10 text-white font-weight-300 text-uppercase">Connect with us</h6>
                                    <ul class="list-inline m-a0">
                                        <li><Link href="#" class="site-button btnhover13 facebook sharp"><i class="fa fa-facebook"></i></Link></li>
                                        <li><Link href="#" class="site-button btnhover13 google-plus sharp"><i class="fa fa-google-plus"></i></Link></li>
                                        <li><Link href="#" class="site-button btnhover13 linkedin sharp"><i class="fa fa-linkedin"></i></Link></li>
                                        <li><Link href="#" class="site-button btnhover13 instagram sharp"><i class="fa fa-instagram"></i></Link></li>
                                        <li><Link href="#" class="site-button btnhover13 twitter sharp"><i class="fa fa-twitter"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-12 col-sm-12 wow fadeIn" data-wow-delay="0.6s">
                                <div class="icon-bx-wraper bx-style-1 m-b15 p-a30 radius-sm br-col-w1 bg-tpw1">
                                    <h5 class="text-white font-weight-300">Serving in 70+ countries for web, software and mobile app development</h5>
                                    <p>United States (USA), United Kingdom (UK), Singapore, Kenya, South Africa Germany, Canada, Australia, Netherlands, Norway, United Arab Emirates (UAE) , Finland etc. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-sm-6 text-left "> <span>Copyright © 2021 DexignZone. all rights reserved.</span> </div>
                            <div class="col-md-6 col-sm-6 text-right ">
                                <div class="widget-link ">
                                    <ul>
                                        <li><Link href="/help-desk"> Help Desk</Link></li>
                                        <li><Link href="/privacy-policy">  Refund Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            </>
        )
    }
}
export default Footer13;
