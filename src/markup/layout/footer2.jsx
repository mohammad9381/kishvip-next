import React, { Component } from 'react';
import Link  from 'next/link';



class Footer2 extends Component {


    render() {
        return (
            <>
            <footer class="site-footer style2">
                <div class="section-full p-t50 p-b20 bg-primary text-white overlay-primary-dark footer-info-bar wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-6 m-b30">
                                <div class="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                                    <div class="icon-content">
                                        <h5 class="dlab-tilte">
                                            <span class="icon-sm"><i class="ti-location-pin"></i></span>
                                            Company Address
                                        </h5>
                                        <p class="op7">Demo address #8901 Marmora Road Chi Minh City, Vietnam</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 m-b30">
                                <div class="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                                    <div class="icon-content">
                                        <h5 class="dlab-tilte">
                                            <span class="icon-sm"><i class="ti-email"></i></span>
                                            E-mail
                                        </h5>
                                        <p class="m-b0 op7">info@example.com</p>
                                        <p class="op7">company@example.com</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 m-b30">
                                <div class="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                                    <div class="icon-content">
                                        <h5 class="dlab-tilte">
                                            <span class="icon-sm"><i class="ti-mobile"></i></span>
                                            Phone Numbers
                                        </h5>
                                        <p class="m-b0 op7">Mobile : +00 234 678 9012</p>
                                        <p class="op7">Phone : +0 1234 5678 90</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 m-b30">
                                <div class="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                                    <div class="icon-content">
                                        <h5 class="dlab-tilte">
                                            <span class="icon-sm"><i class="ti-alarm-clock"></i></span>
                                            Office Hours
                                        </h5>
                                        <p class="m-b0 op7">Mon To Sat - 08.00-18.00</p>
                                        <p class="op7">Sunday - Close</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-top">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-4 col-md-12 col-sm-12">
                                <div class="widget widget_about">
                                    <div class="footer-logo">
                                        <Link href="/"><img src={("/images/logo.png")} alt=""/></Link>
                                    </div>
                                    <p>Industry Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.</p>
                                    <div class="widget widget_getintuch">
                                        <ul>
                                            <li><i class="ti-location-pin"></i> demo address #8901 Marmora Road Chi Minh City, Vietnam </li>
                                            <li><i class="ti-mobile"></i> 0800-123456 (24/7 Support Line)</li>
                                            <li><i class="ti-email"></i> info@example.com</li>
                                        </ul>
                                    </div>
                                    <ul class="list-inline m-a0">
                                        <li><Link href="#" class="site-button-link facebook button-md"><i class="fa fa-facebook"></i></Link></li>
                                        <li><Link href="#" class="site-button-link google-plus button-md"><i class="fa fa-google-plus"></i></Link></li>
                                        <li><Link href="#" class="site-button-link linkedin button-md"><i class="fa fa-linkedin"></i></Link></li>
                                        <li><Link href="#" class="site-button-link instagram button-md"><i class="fa fa-instagram"></i></Link></li>
                                        <li><Link href="#" class="site-button-link twitter button-md"><i class="fa fa-twitter"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="widget">
                                    <h4 class="footer-title">Usefull Link</h4>
                                    <ul class="list-2">
                                        <li><Link href="/about-1">About Us</Link></li>
                                        <li><Link href="/blog-grid-2">Blog</Link></li>
                                        <li><Link href="/services-1">Services</Link></li>
                                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                        <li><Link href="/portfolio-details">Projects </Link></li>
                                        <li><Link href="/help-desk">Help Desk </Link></li>
                                        <li><Link href="/shop">Shop</Link></li>
                                        <li><Link href="/contact-1">Contact</Link></li>
                                    </ul>
                                </div>
                                <div class="widget">
                                    <h4 class="footer-title mb-2">Newsletter</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div class="subscribe-form m-b20 m-t30">
                                        <form class="dzSubscribe" action="script/mailchamp.php" method="post">
                                            <div class="dzSubscribeMsg"></div>
                                            <div class="input-group">
                                                <input name="dzEmail" required="required" class="form-control radius-no" placeholder="Your Email Address" type="email"/>
                                                <span class="input-group-btn">
                                                    <button name="submit" value="Submit" type="submit" class="site-button radius-no">SEND</button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="widget recent-posts-entry">
                                    <h4 class="footer-title">Recent Post</h4>
                                    <div class="widget-post-bx">
                                        <div class="widget-post clearfix">
                                            <div class="dlab-post-media">
                                                <img src={("/images/blog/recent-blog/pic1.jpg")} width="200" height="143" alt=""/>
                                            </div>
                                            <div class="dlab-post-info">
                                                <div class="dlab-post-meta">
                                                    <ul>
                                                        <li class="post-date"> <strong>13 Aug</strong> </li>
                                                        <li class="post-author"> By <Link href="#">Jack </Link> </li>
                                                    </ul>
                                                </div>
                                                <div class="dlab-post-header">
                                                    <h6 class="post-title"><Link href="/blog-single-left-sidebar">How To Get People To Like Industry</Link></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="widget-post clearfix">
                                            <div class="dlab-post-media">
                                                <img src={("/images/blog/recent-blog/pic2.jpg")} width="200" height="160" alt=""/>
                                            </div>
                                            <div class="dlab-post-info">
                                                <div class="dlab-post-meta">
                                                    <ul>
                                                        <li class="post-date"> <strong>13 Aug</strong> </li>
                                                        <li class="post-author"> By <Link href="#">Jamie </Link> </li>
                                                    </ul>
                                                </div>
                                                <div class="dlab-post-header">
                                                    <h6 class="post-title"><Link href="/blog-single-left-sidebar">Seven Doubts You Should Clarify About</Link></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="widget-post clearfix">
                                            <div class="dlab-post-media">
                                                <img src={("/images/blog/recent-blog/pic3.jpg")} width="200" height="160" alt=""/>
                                            </div>
                                            <div class="dlab-post-info">
                                                <div class="dlab-post-meta">
                                                    <ul>
                                                        <li class="post-date"> <strong>13 Aug</strong> </li>
                                                        <li class="post-author"> By <Link href="#">Winnie </Link> </li>
                                                    </ul>
                                                </div>
                                                <div class="dlab-post-header">
                                                    <h6 class="post-title"><Link href="/blog-single-left-sidebar">Why You Should Not Go To Industry</Link></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
export default Footer2;
