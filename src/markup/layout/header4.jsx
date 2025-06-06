import React, { Component } from 'react';
import Link  from 'next/link';
import Sticky from 'react-stickynode';



class Header4 extends Component {


    componentDidMount() {




        // sidebar open/close
        var btn = document.querySelector('.navicon');
        var nav = document.querySelector('.header-nav');

        function toggleFunc() {
            btn.classList.toggle("open");
            nav.classList.toggle("show");
        }

        btn.addEventListener('click', toggleFunc);


        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.header-nav > ul > li'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }

        function checkLi(current) {
            const active = current.classList.contains("open")
            navUl.forEach(el => el.classList.remove('open'));
            //current.classList.add('open');

            if(active){
                current.classList.remove('open')
                console.log("active")
            } else{
                current.classList.add('open');
                console.log("close")
            }
        }

    }

    render() {
        return (
            <>
             <Sticky innerZ={999} enabled={true}>
                <header class="site-header mo-left header navstyle2">
                    <div class="sticky-header main-bar-wraper header-curve navbar-expand-lg">
                        <div class="main-bar clearfix bg-primary">
                            <div class="container clearfix">
                                <div class="logo-header mostion">
                                    <Link href="/"><img src={("/images/logo.png")} alt=""/></Link>
                                </div>

                                <button class="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>

                                <div class="extra-nav">
                                    <div class="extra-cell">
                                        <button id="quik-search-btn" type="button" class="site-button-link"><i class="la la-search"></i></button>
                                    </div>
                                </div>

                                <div class="dlab-quik-search ">
                                    <form action="#">
                                        <input name="search" value="" type="text" class="form-control" placeholder="Type to search"/>
                                        <span id="quik-search-remove"><i class="ti-close"></i></span>
                                    </form>
                                </div>

                                <div class="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
                                    <div class="logo-header d-md-block d-lg-none">
                                        <Link href="/"><img src={("/images/logo.png")} alt=""/></Link>
                                    </div>
                                    <ul class="nav navbar-nav">
                                        <li class="active has-mega-menu homedemo"> <Link href="#">Home<i class="fa fa-chevron-down"></i></Link>
                                            <ul class="mega-menu">
                                                <li><Link href="/"><img src={require("../../assets/demo/pic1.jpg")} alt=""/><span>Home - Default</span></Link></li>
                                                <li><Link href="/index-2"><img src={require("../../assets/demo/pic2.jpg")} alt=""/><span>Home - Oil/Gas Plant</span></Link></li>
                                                <li><Link href="/index-3"><img src={require("../../assets/demo/pic3.jpg")} alt=""/><span>Home - Steel Plant</span></Link></li>
                                                <li><Link href="/index-4"><img src={require("../../assets/demo/pic4.jpg")} alt=""/><span>Home - Factory</span></Link></li>
                                                <li><Link href="/index-5"><img src={require("../../assets/demo/pic5.jpg")} alt=""/><span>Home - Construct</span></Link></li>
                                                <li><Link href="/index-6"><img src={require("../../assets/demo/pic6.jpg")} alt=""/><span>Home - Solar Plant</span></Link></li>
                                                <li><Link href="/index-7"><img src={require("../../assets/demo/pic7.jpg")} alt=""/><span>Home - Food Industry</span></Link></li>
                                                <li><Link href="/index-8"><img src={require("../../assets/demo/pic8.jpg")} alt=""/><span>Home - Agriculture</span></Link></li>
                                                <li><Link href="/index-9"><img src={require("../../assets/demo/pic9.jpg")} alt=""/><span>Home - Ship Industry</span></Link></li>
                                                <li><Link href="/index-10"><img src={require("../../assets/demo/pic10.jpg")} alt=""/><span>Home - Leather Industry</span></Link></li>
                                                <li><Link href="/index-11"><img src={require("../../assets/demo/pic11.jpg")} alt=""/><span>Home - Nuclear Plant</span></Link></li>
                                                <li><Link href="/index-12"><img src={require("../../assets/demo/pic12.jpg")} alt=""/><span>Home - Beer Factory</span></Link></li>
                                                <li><Link href="/index-13"><img src={require("../../assets/demo/pic13.jpg")} alt=""/><span>Home - Mining Industry</span></Link></li>
                                                <li><Link href="/index-14"><img src={require("../../assets/demo/pic14.jpg")} alt=""/><span>Home - Car Industry</span></Link></li>
                                                <li><Link href="/index-15"><img src={require("../../assets/demo/pic15.jpg")} alt=""/><span>Home - Plastic Industry</span></Link></li>
                                            </ul>
                                        </li>
                                        <li class="has-mega-menu"> <Link href={'#'}>Pages<i class="fa fa-chevron-down"></i></Link>
											<ul class="mega-menu">
												<li>
													<Link href={'#'}>Pages</Link>
													<ul>
														<li><Link href={'/about-1'}>About us 1</Link></li>
														<li><Link href={'/about-2'}>About us 2</Link></li>
														<li><Link href={'/services-1'}>Services 1</Link></li>
														<li><Link href={'/services-2'}>Services 2</Link></li>
														<li><Link href={'/services-details'}>Services Details</Link></li>
													</ul>
												</li>
												<li>
													<Link href={'#'}>Pages</Link>
													<ul>
														<li><Link href={'/team-1'}>Team 1</Link></li>
														<li><Link href={'/team-2'}>Team 2</Link></li>
														<li><Link href={'/faq-1'}>Faqs 1</Link></li>
														<li><Link href={'/faq-2'}>Faqs 2</Link></li>
														<li><Link href={'/portfolio-grid-2'}>portfolio Grid 2</Link></li>
													</ul>
												</li>
												<li>
													<Link href={'#'}>Pages</Link>
													<ul>
														<li><Link href={'/portfolio-grid-3'}>Portfolio Grid 3</Link></li>
														<li><Link href={'/portfolio-grid-4'}>Portfolio Grid 4</Link></li>
														<li><Link href={'/portfolio-details'}>Portfolio Details</Link></li>
														<li><Link href={'/error-403'}>Error 403</Link></li>
													</ul>
												</li>
												<li>
													<Link href={'#'}>Pages</Link>
													<ul>
														<li><Link href={'/error-404'}>Error 404</Link></li>
														<li><Link href={'/error-405'}>Error 405</Link></li>
														<li><Link href={'/help-desk'}>Help Desk</Link></li>
														<li><Link href={'/privacy-policy'}>Privacy Policy</Link></li>
													</ul>
												</li>
											</ul>
										</li>
                                        <li>
                                            <Link href="#">Shop<i class="fa fa-chevron-down"></i></Link>
                                            <ul class="sub-menu">
                                                <li><Link href="/shop">Shop</Link></li>
                                                <li><Link href="/shop-sidebar">Shop Sidebar</Link></li>
                                                <li><Link href="/shop-product-details">Product Details</Link></li>
                                                <li><Link href="/shop-cart">Cart</Link></li>
                                                <li><Link href="/shop-wishlist">Wishlist</Link></li>
                                                <li><Link href="/shop-checkout">Checkout</Link></li>
                                                <li><Link href="/shop-login">Login</Link></li>
                                                <li><Link href="/shop-register">Register</Link></li>
                                            </ul>
                                        </li>
                                        <li class="has-mega-menu">
											<Link href={'#'}>Blog<i class="fa fa-chevron-down"></i></Link>
											<ul class="mega-menu">
												<li> <Link href={'#'}>Blog</Link>
													<ul>
														<li><Link href={'/blog-half-img'}>Half image</Link></li>
														<li><Link href={'/blog-half-img-sidebar'}>Half image sidebar</Link></li>
														<li><Link href={'/blog-half-img-left-sidebar'}>Half image sidebar left</Link></li>
														<li><Link href={'/blog-large-img'}>Large image</Link></li>
													</ul>
												</li>
												<li> <Link href={'#'}>Blog</Link>
													<ul>
														<li><Link href={'blog-large-img-sidebar'}>Large image sidebar</Link></li>
														<li><Link href={'blog-large-img-left-sidebar'}>Large image sidebar left</Link></li>
														<li><Link href={'blog-grid-2'}>Grid 2</Link></li>
														<li><Link href={'blog-grid-2-sidebar'}>Grid 2 sidebar</Link></li>
													</ul>
												</li>
												<li> <Link href={'#'}>Blog</Link>
													<ul>
														<li><Link href={'blog-grid-2-sidebar-left'}>Grid 2 sidebar left</Link></li>
														<li><Link href={'blog-grid-3'}>Grid 3</Link></li>
														<li><Link href={'blog-grid-3-sidebar'}>Grid 3 sidebar</Link></li>
														<li><Link href={'blog-grid-3-sidebar-left'}>Grid 3 sidebar left</Link></li>
													</ul>
												</li>
												<li> <Link href={'#'}>Blog</Link>
													<ul>
														<li><Link href={'blog-grid-4'}>Grid 4</Link></li>
														<li><Link href={'blog-single'}>Single</Link></li>
														<li><Link href={'blog-single-sidebar'}>Single sidebar</Link></li>
														<li><Link href={'blog-single-left-sidebar'}>Single sidebar right</Link></li>
													</ul>
												</li>
											</ul>
										</li>
										<li class="has-mega-menu"> <Link href={'#'}>Element<i class="fa fa-chevron-down"></i></Link>
											<ul class="mega-menu">
												<li><Link href={'#'}>Element</Link>
													<ul>
														<li><Link href={'shortcode-buttons'}><i class="ti-mouse"></i> Buttons</Link></li>
														<li><Link href={'shortcode-icon-box-styles'}><i class="ti-layout-grid2"></i> Icon box styles</Link></li>
														<li><Link href={'shortcode-pricing-table'}><i class="ti-layout-grid2-thumb"></i> Pricing table</Link></li>
														<li><Link href={'shortcode-team'}><i class="ti-user"></i> Team</Link></li>
													</ul>
												</li>
												<li> <Link href={'#'}>Element</Link>
													<ul>
														<li><Link href={'shortcode-image-box-content'}><i class="ti-image"></i> Image box content</Link></li>
														<li><Link href={'shortcode-counters'}><i class="ti-timer"></i> Counters</Link></li>
														<li><Link href={'shortcode-shop-widgets'}><i class="ti-shopping-cart"></i> Shop Widgets</Link></li>
														<li><Link href={'shortcode-dividers'}><i class="ti-layout-list-post"></i> Dividers</Link></li>
													</ul>
												</li>
												<li> <Link href={'#'}>Element</Link>
													<ul>
														<li><Link href={'shortcode-images-effects'}><i class="ti-layout-media-overlay"></i> Images effects</Link></li>
														<li><Link href={'shortcode-testimonials'}><i class="ti-comments"></i> Testimonials</Link></li>
														<li><Link href={'shortcode-pagination'}><i class="ti-more"></i> Pagination</Link></li>
														<li><Link href={'shortcode-alert-box'}><i class="ti-alert"></i> Alert box</Link></li>
													</ul>
												</li>
												<li> <Link href={'#'}>Element</Link>
													<ul>
														<li><Link href={'shortcode-icon-box'}><i class="ti-layout-media-left-alt"></i> Icon Box</Link></li>
														<li><Link href={'shortcode-list-group'}><i class="ti-list"></i> List group</Link></li>
														<li><Link href={'shortcode-title-separators'}><i class="ti-layout-line-solid"></i> Title Separators</Link></li>
													</ul>
												</li>
											</ul>
										</li>
                                        <li>
                                            <Link href="#">Contact Us<i class="fa fa-chevron-down"></i></Link>
                                            <ul class="sub-menu right">
                                                <li><Link href="/contact-1">Contact us 1</Link></li>
                                                <li><Link href="/contact-2">Contact us 2</Link></li>
                                                <li><Link href="/contact-3">Contact us 3</Link></li>
                                                <li><Link href="/contact-4">Contact us 4</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div class="dlab-social-icon ind-social">
                                        <ul>
                                            <li><Link class="site-button-link facebook fa fa-facebook" to="#"></Link></li>
                                            <li><Link class="site-button-link twitter fa fa-twitter" to="#"></Link></li>
                                            <li><Link class="site-button-link linkedin fa fa-linkedin" to="#"></Link></li>
                                            <li><Link class="site-button-link instagram fa fa-instagram" to="#"></Link></li>
                                        </ul>
                                        <p>2019 Industry</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </Sticky>
            </>
        )
    }
}
export default Header4;
