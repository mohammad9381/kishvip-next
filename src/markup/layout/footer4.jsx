import React, { Component } from 'react';
import Link  from 'next/link';

const bg = require('/images/background/bg3.png')
// style="background-image:url(images/background/bg3.png); background-size: cover;"

class Footer4 extends Component {


    render() {
        return (
            <>
            <footer class="site-footer">
                <div class="footer-top" style={{ backgroundImage: "url(" + bg + ")" }}>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 col-5 col-xl-2 col-lg-2 col-sm-6 footer-col-4">
                                <div class="widget widget_services border-0">
                                    <h5 class="footer-title text-white">Company</h5>
                                    <ul>
                                        <li><Link href="/about-1">About Us</Link></li>
                                        <li><Link href="/blog-grid-2">Blog</Link></li>
                                        <li><Link href="/services-1">Services</Link></li>
                                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                        <li><Link href="/portfolio-details">Projects </Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3 col-7 col-xl-2 col-lg-3 col-sm-6 footer-col-4">
                                <div class="widget widget_services border-0">
                                    <h5 class="footer-title text-white">Useful Link</h5>
                                    <ul>
                                        <li><Link href="/help-desk">Help Desk </Link></li>
                                        <li><Link href="/shop">Shop</Link></li>
                                        <li><Link href="/contact-1">Contact</Link></li>
                                        <li><Link href="/portfolio-details">Portfolio</Link></li>
                                        <li><Link href="/team-1">Team</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-4 col-lg-3 col-sm-6 footer-col-4">
                                <div class="widget widget_getintuch">
                                    <h5 class="footer-title text-white">Contact us</h5>
                                    <ul>
                                        <li><i class="ti-location-pin"></i><strong>address</strong> demo address #8901 Marmora Road Chi Minh City, Vietnam </li>
                                        <li><i class="ti-mobile"></i><strong>phone</strong>0800-123456 (24/7 Support Line)</li>
                                        <li><i class="ti-email"></i><strong>email</strong>info@example.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-12 col-xl-4 col-lg-4 col-sm-6 footer-col-4 ">
                                <div class="widget">
                                    <h5 class="footer-title text-white">Subscribe To Our Newsletter</h5>
                                    <p class="text-capitalize m-b20">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the..</p>
                                    <div class="subscribe-form m-b20">
                                        <form class="dzSubscribe" action="script/mailchamp.php" method="post">
                                            <div class="dzSubscribeMsg"></div>
                                            <div class="input-group">
                                                <input name="dzEmail" required="required"  class="form-control" placeholder="Your Email Id" type="email"/>
                                                <span class="input-group-btn">
                                                    <button name="submit" value="Submit" type="submit" class="site-button radius-xl btnhover16">Subscribe</button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                    <ul class="list-inline m-a0">
                                        <li><Link href="#" class="site-button facebook circle "><i class="fa fa-facebook"></i></Link></li>
                                        <li><Link href="#" class="site-button google-plus circle "><i class="fa fa-google-plus"></i></Link></li>
                                        <li><Link href="#" class="site-button linkedin circle "><i class="fa fa-linkedin"></i></Link></li>
                                        <li><Link href="#" class="site-button instagram circle "><i class="fa fa-instagram"></i></Link></li>
                                        <li><Link href="#" class="site-button twitter circle "><i class="fa fa-twitter"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-sm-6 text-left "> <span>Copyright © 2021 DexignZone</span> </div>
                            <div class="col-md-6 col-sm-6 text-right ">
                                <div class="widget-link ">
                                    <ul>
                                        <li><Link href="/about-2"> About</Link></li>
                                        <li><Link href="/help-desk"> Help Desk</Link></li>
                                        <li><Link href="/privacy-policy"> Privacy Policy</Link></li>
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
export default Footer4;
