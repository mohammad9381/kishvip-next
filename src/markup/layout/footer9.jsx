import React, { Component } from 'react';
import Link  from 'next/link';



class Footer9 extends Component {


    render() {
        return (
            <>
            <footer class="site-footer map-footer">
                <div class="footer-top">
                    <div class="container-fluid">
                        <div class="row equal-wraper" >
                            <div class="col-md-4 col-lg-6 col-sm-12 p-a0 equal-col wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                <iframe class="" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14444.846145183914!2d75.84806889203723!3d25.16233421040968!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1517832215254" style={{"border":"0","width":"100%","minHeight":"300px","height":"100%","verticalAlign":"middle"}} allowfullscreen></iframe>
                            </div>
                            <div class="col-md-8 col-lg-6 col-sm-12 equal-col wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                <div class="p-tb60 p-lr15">
                                    <div class="max-w600">
                                        <div class="footer-logo m-b30">
                                            <img src={("/images/logo-white.png")} alt="" width="120"/>
                                        </div>
                                        <div class="m-b0">
                                            <h5 class="m-b10 text-white">Subscribe To Our Newsletter</h5>
                                            <p class="text-capitalize m-b20">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the..</p>
                                            <div class="subscribe-form m-b20">
                                                <form class="dzSubscribe" action="script/mailchamp.php" method="post">
                                                    <div class="dzSubscribeMsg"></div>
                                                    <div class="input-group">
                                                        <input name="dzEmail" required="required"  class="form-control" placeholder="Your Email Address" type="email"/>
                                                        <span class="input-group-btn">
                                                            <button name="submit" value="Submit" type="submit" class="site-button btnhover17 radius-xl">Subscribe</button>
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
                                <div class="footer-bottom text-left row">
                                    <div class="col-md-12 col-sm-12 text-left p-lr30">
                                        <span>Copyright &copy; 2021 DexignZone</span>
                                        <div class="widget-link m-t10 ">
                                            <ul>
                                                <li><Link href="/"> Home</Link></li>
                                                <li><Link href="/about-2"> About</Link></li>
                                                <li><Link href="/help-desk"> Help Desk</Link></li>
                                                <li><Link href="/privacy-policy"> Privacy Policy</Link></li>
                                                <li><Link href="/contact-1"> Contact Us</Link></li>
                                            </ul>
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
export default Footer9;
