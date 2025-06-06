import React, { Component } from 'react';
// import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

var bnr4 = require('/images/banner/bnr4.jpg');

class shopWidgets extends Component {

    render() {
        return (
            <>
                <Header />

                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
								<h1 class="text-white">Shop Widgets</h1>
								<div class="breadcrumb-row">
									<ul class="list-inline">
										<li><a href="/">Home</a></li>
										<li>Element</li>
										<li>Shop Widgets</li>
									</ul>
								</div>
							</div>
                        </div>
                    </div>

					<div class="section-full bg-white content-inner">
						<div class="container">
							<div class="row">
								<div class="col-lg-3 col-md-6 col-sm-6">
									<div class="item-box m-b30">
										<div class="item-img">
											<img src={("/images/product/item1.jpg")} alt=""/>
											<div class="item-info-in">
												<ul>
													<li><a href="javascript:void(0);"><i class="ti-shopping-cart"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-eye"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="item-info text-center text-black p-a10">
											<h6 class="item-title text-uppercase font-weight-500"><a href="javascript:void(0);">Product Title</a></h6>
											<ul class="item-review">
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star-half-o"></i></li>
												<li><i class="fa fa-star-o"></i></li>
											</ul>
											<h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-6">
									<div class="item-box m-b30 item-style-1">
										<div class="item-img">
											<img src={("/images/product/item2.jpg")} alt=""/>
											<div class="item-info-in">
												<ul>
													<li><a href="javascript:void(0);"><i class="ti-shopping-cart"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-eye"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="item-info text-center text-black p-a10">
											<h6 class="item-title text-uppercase font-weight-500"><a href="javascript:void(0);">Product Title</a></h6>
											<ul class="item-review">
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star-half-o"></i></li>
												<li><i class="fa fa-star-o"></i></li>
											</ul>
											<h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-6">
									<div class="item-box m-b30">
										<div class="item-img">
											<img src={("/images/product/item3.jpg")} alt=""/>
											<div class="item-info-in">
												<ul>
													<li><a href="javascript:void(0);"><i class="ti-shopping-cart"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-eye"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="item-info text-center text-black p-a10">
											<h6 class="item-title text-uppercase font-weight-500"><a href="javascript:void(0);">Product Title</a></h6>
											<ul class="item-review">
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star-half-o"></i></li>
												<li><i class="fa fa-star-o"></i></li>
											</ul>
											<h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-6">
									<div class="item-box m-b30">
										<div class="item-img">
											<img src={("/images/product/item4.jpg")} alt=""/>
											<div class="item-info-in">
												<ul>
													<li><a href="javascript:void(0);"><i class="ti-shopping-cart"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-eye"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="item-info text-center text-black p-a10">
											<h6 class="item-title text-uppercase font-weight-500"><a href="javascript:void(0);">Product Title</a></h6>
											<ul class="item-review">
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star-half-o"></i></li>
												<li><i class="fa fa-star-o"></i></li>
											</ul>
											<h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="section-full bg-gray content-inner">
						<div class="container">
							<div class="row">
								<div class="col-lg-3 col-md-6 col-sm-6">
									<div class="item-box m-b30">
										<div class="item-img">
											<img src={("/images/product/item5.jpg")} alt=""/>
											<div class="item-info-in">
												<ul>
													<li><a href="javascript:void(0);"><i class="ti-shopping-cart"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-eye"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="item-info text-center text-black p-a20 bg-white">
											<h6 class="item-title text-uppercase font-weight-500"><a href="javascript:void(0);">Product Title</a></h6>
											<h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-6">
									<div class="item-box m-b30 item-style-1">
										<div class="item-img">
											<img src={("/images/product/item6.jpg")} alt=""/>
											<div class="item-info-in">
												<ul>
													<li><a href="javascript:void(0);"><i class="ti-shopping-cart"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-eye"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="item-info text-center text-black p-a20 bg-white">
											<h6 class="item-title text-uppercase font-weight-500"><a href="javascript:void(0);">Product Title</a></h6>
											<h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-6">
									<div class="item-box m-b30">
										<div class="item-img">
											<img src={("/images/product/item7.jpg")} alt=""/>
											<div class="item-info-in">
												<ul>
													<li><a href="javascript:void(0);"><i class="ti-shopping-cart"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-eye"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="item-info text-center text-black p-a20 bg-white">
											<h6 class="item-title text-uppercase font-weight-500"><a href="javascript:void(0);">Product Title</a></h6>
											<h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-6">
									<div class="item-box m-b30">
										<div class="item-img">
											<img src={("/images/product/item8.jpg")} alt=""/>
											<div class="item-info-in">
												<ul>
													<li><a href="javascript:void(0);"><i class="ti-shopping-cart"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-eye"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="item-info text-center text-black p-a20 bg-white">
											<h6 class="item-title text-uppercase font-weight-500"><a href="javascript:void(0);">Product Title</a></h6>
											<h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="section-full bg-white content-inner">
						<div class="container">
							<div class="row">
								<div class="col-lg-4 col-md-4 col-sm-12">
									<div class="dlab-box m-b30">
										<div class="dlab-media dlab-img-overlay2 dlab-img-effect on rotate"> <img src={("/images/product/item1.jpg")} alt=""/>
											<div class="dlab-info-has p-a20 no-hover ">
												<a href="javascript:void(0);" class="site-button button-sm m-b10">Fashion</a>
												<h5>There are many variations.</h5>
												<div class="dlab-post-meta text-white">
													<ul>
														<li class="post-date"> <i class="ti-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
														<li class="post-author"><i class="ti-user"></i>By <a href="javascript:void(0);">demongo</a> </li>
														<li class="post-comment"><i class="ti-comment-alt"></i> <a href="javascript:void(0);">0</a> </li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-12">
									<div class="dlab-box m-b30">
										<div class="dlab-media dlab-img-overlay2 dlab-img-effect on rotate"> <img src={("/images/product/item2.jpg")} alt=""/>
											<div class="dlab-info-has p-a20 no-hover ">
												<a href="javascript:void(0);" class="site-button button-sm red m-b10">Fashion</a>
												<h5>There are many variations.</h5>
												<div class="dlab-post-meta text-white">
													<ul>
														<li class="post-date"> <i class="ti-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
														<li class="post-author"><i class="ti-user"></i>By <a href="javascript:void(0);">demongo</a> </li>
														<li class="post-comment"><i class="ti-comment-alt"></i> <a href="javascript:void(0);">0</a> </li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-12">
									<div class="dlab-box m-b30">
										<div class="dlab-media dlab-img-overlay2 dlab-img-effect on rotate"> <img src={("/images/product/item3.jpg")} alt=""/>
											<div class="dlab-info-has p-a20 no-hover ">
												<a href="javascript:void(0);" class="site-button button-sm pink m-b10">Fashion</a>
												<h5>There are many variations.</h5>
												<div class="dlab-post-meta text-white">
													<ul>
														<li class="post-date"> <i class="ti-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
														<li class="post-author"><i class="ti-user"></i>By <a href="javascript:void(0);">demongo</a> </li>
														<li class="post-comment"><i class="ti-comment-alt"></i> <a href="javascript:void(0);">0</a> </li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="section-full bg-gray">
						<div class="container-fluid">
							<div class="row">
								<div class="col-lg-4 col-md-4 col-sm-12 p-lr0">
									<div class="dlab-box">
										<div class="dlab-media dlab-img-overlay2 dlab-img-effect on rotate"> <img src={("/images/product/item12.jpg")} alt=""/>
											<div class="dlab-info-has p-a20 no-hover ">
												<a href="javascript:void(0);" class="site-button button-sm m-b10">Fashion</a>
												<h5>There are many variations.</h5>
												<div class="dlab-post-meta text-white">
													<ul>
														<li class="post-date"> <i class="ti-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
														<li class="post-author"><i class="ti-user"></i>By <a href="javascript:void(0);">demongo</a> </li>
														<li class="post-comment"><i class="ti-comment-alt"></i> <a href="javascript:void(0);">0</a> </li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-12 p-lr0">
									<div class="dlab-box">
										<div class="dlab-media dlab-img-overlay2 dlab-img-effect on rotate"> <img src={("/images/product/item11.jpg")} alt=""/>
											<div class="dlab-info-has p-a20 no-hover ">
												<a href="javascript:void(0);" class="site-button button-sm red m-b10">Fashion</a>
												<h5>There are many variations.</h5>
												<div class="dlab-post-meta text-white">
													<ul>
														<li class="post-date"> <i class="ti-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
														<li class="post-author"><i class="ti-user"></i>By <a href="javascript:void(0);">demongo</a> </li>
														<li class="post-comment"><i class="ti-comment-alt"></i> <a href="javascript:void(0);">0</a> </li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-12 p-lr0">
									<div class="dlab-box">
										<div class="dlab-media dlab-img-overlay2 dlab-img-effect on rotate"> <img src={("/images/product/item10.jpg")} alt=""/>
											<div class="dlab-info-has p-a20 no-hover ">
												<a href="javascript:void(0);" class="site-button button-sm pink m-b10">Fashion</a>
												<h5>There are many variations.</h5>
												<div class="dlab-post-meta text-white">
													<ul>
														<li class="post-date"> <i class="ti-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
														<li class="post-author"><i class="ti-user"></i>By <a href="javascript:void(0);">demongo</a> </li>
														<li class="post-comment"><i class="ti-comment-alt"></i> <a href="javascript:void(0);">0</a> </li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="section-full bg-white content-inner-2">
						<div class="container">
							<div class="row">
								<div class="col-lg-3 col-md-6 col-sm-6 m-b30">
									<h4>Top Rated</h4>
									<div class="dlab-separator bg-primary"></div>
									<div class="item-widgets-box">
										<div class="item-widgets-left">
											<img src={("/images/product/thumb/item1.jpg")} alt=""/>
										</div>
										<div class="item-widgets-body text-black">
											<h6 class="item-title text-uppercase font-weight-500 m-t0"><a href="javascript:void(0);">Product Title</a></h6>
											<ul class="item-review text-yellow-light">
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star-half-o"></i></li>
												<li><i class="fa fa-star-o"></i></li>
											</ul>
											<h6 class="item-price m-b0"><del>$232</del> <span class="text-primary">$192</span></h6>
										</div>
									</div>
									<div class="item-widgets-box">
										<div class="item-widgets-left">
											<img src={("/images/product/thumb/item2.jpg")} alt=""/>
										</div>
										<div class="item-widgets-body text-black">
											<h6 class="item-title text-uppercase font-weight-500 m-t0"><a href="javascript:void(0);">Product Title</a></h6>
											<ul class="item-review text-yellow-light">
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star-half-o"></i></li>
												<li><i class="fa fa-star-o"></i></li>
											</ul>
											<h6 class="item-price m-b0"><del>$232</del> <span class="text-primary">$192</span></h6>
										</div>
									</div>
									<div class="item-widgets-box">
										<div class="item-widgets-left">
											<img src={("/images/product/thumb/item3.jpg")} alt=""/>
										</div>
										<div class="item-widgets-body text-black">
											<h6 class="item-title text-uppercase font-weight-500 m-t0"><a href="javascript:void(0);">Product Title</a></h6>
											<ul class="item-review text-yellow-light">
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star-half-o"></i></li>
												<li><i class="fa fa-star-o"></i></li>
											</ul>
											<h6 class="item-price m-b0"><del>$232</del> <span class="text-primary">$192</span></h6>
										</div>
									</div>
									<div class="item-widgets-box">
										<div class="item-widgets-left">
											<img src={("/images/product/thumb/item4.jpg")} alt=""/>
										</div>
										<div class="item-widgets-body text-black">
											<h6 class="item-title text-uppercase font-weight-500 m-t0"><a href="javascript:void(0);">Product Title</a></h6>
											<ul class="item-review text-yellow-light">
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star-half-o"></i></li>
												<li><i class="fa fa-star-o"></i></li>
											</ul>
											<h6 class="item-price m-b0"><del>$232</del> <span class="text-primary">$192</span></h6>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-6 m-b30">
									<h4>Recent Item</h4>
									<div class="dlab-separator bg-primary"></div>
									<div class="item-widgets-box">
										<div class="item-widgets-left">
											<img src={("/images/product/thumb/item5.jpg")} alt=""/>
										</div>
										<div class="item-widgets-body text-black">
											<h6 class="item-title text-uppercase font-weight-500 m-t0"><a href="javascript:void(0);">Product Title</a></h6>
											<ul class="item-review text-yellow-light">
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star-half-o"></i></li>
												<li><i class="fa fa-star-o"></i></li>
											</ul>
											<h6 class="item-price m-b0"><del>$232</del> <span class="text-primary">$192</span></h6>
										</div>
									</div>
									<div class="item-widgets-box">
										<div class="item-widgets-left">
											<img src={("/images/product/thumb/item1.jpg")} alt=""/>
										</div>
										<div class="item-widgets-body text-black">
											<h6 class="item-title text-uppercase font-weight-500 m-t0"><a href="javascript:void(0);">Product Title</a></h6>
											<ul class="item-review text-yellow-light">
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star-half-o"></i></li>
												<li><i class="fa fa-star-o"></i></li>
											</ul>
											<h6 class="item-price m-b0"><del>$232</del> <span class="text-primary">$192</span></h6>
										</div>
									</div>
									<div class="item-widgets-box">
										<div class="item-widgets-left">
											<img src={("/images/product/thumb/item2.jpg")} alt=""/>
										</div>
										<div class="item-widgets-body text-black">
											<h6 class="item-title text-uppercase font-weight-500 m-t0"><a href="javascript:void(0);">Product Title</a></h6>
											<ul class="item-review text-yellow-light">
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star-half-o"></i></li>
												<li><i class="fa fa-star-o"></i></li>
											</ul>
											<h6 class="item-price m-b0"><del>$232</del> <span class="text-primary">$192</span></h6>
										</div>
									</div>
									<div class="item-widgets-box">
										<div class="item-widgets-left">
											<img src={("/images/product/thumb/item3.jpg")} alt=""/>
										</div>
										<div class="item-widgets-body text-black">
											<h6 class="item-title text-uppercase font-weight-500 m-t0"><a href="javascript:void(0);">Product Title</a></h6>
											<ul class="item-review text-yellow-light">
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star-half-o"></i></li>
												<li><i class="fa fa-star-o"></i></li>
											</ul>
											<h6 class="item-price m-b0"><del>$232</del> <span class="text-primary">$192</span></h6>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-6 m-b30">
									<h4>Popular Item</h4>
									<div class="dlab-separator bg-primary"></div>
									<div class="item-widgets-box">
										<div class="item-widgets-left">
											<img src={("/images/product/thumb/item4.jpg")} alt=""/>
										</div>
										<div class="item-widgets-body text-black">
											<h6 class="item-title text-uppercase font-weight-500 m-t0"><a href="javascript:void(0);">Product Title</a></h6>
											<ul class="item-review text-yellow-light">
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star-half-o"></i></li>
												<li><i class="fa fa-star-o"></i></li>
											</ul>
											<h6 class="item-price m-b0"><del>$232</del> <span class="text-primary">$192</span></h6>
										</div>
									</div>
									<div class="item-widgets-box">
										<div class="item-widgets-left">
											<img src={("/images/product/thumb/item5.jpg")} alt=""/>
										</div>
										<div class="item-widgets-body text-black">
											<h6 class="item-title text-uppercase font-weight-500 m-t0"><a href="javascript:void(0);">Product Title</a></h6>
											<ul class="item-review text-yellow-light">
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star-half-o"></i></li>
												<li><i class="fa fa-star-o"></i></li>
											</ul>
											<h6 class="item-price m-b0"><del>$232</del> <span class="text-primary">$192</span></h6>
										</div>
									</div>
									<div class="item-widgets-box">
										<div class="item-widgets-left">
											<img src={("/images/product/thumb/item1.jpg")} alt=""/>
										</div>
										<div class="item-widgets-body text-black">
											<h6 class="item-title text-uppercase font-weight-500 m-t0"><a href="javascript:void(0);">Product Title</a></h6>
											<ul class="item-review text-yellow-light">
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star-half-o"></i></li>
												<li><i class="fa fa-star-o"></i></li>
											</ul>
											<h6 class="item-price m-b0"><del>$232</del> <span class="text-primary">$192</span></h6>
										</div>
									</div>
									<div class="item-widgets-box">
										<div class="item-widgets-left">
											<img src={("/images/product/thumb/item2.jpg")} alt=""/>
										</div>
										<div class="item-widgets-body text-black">
											<h6 class="item-title text-uppercase font-weight-500 m-t0"><a href="javascript:void(0);">Product Title</a></h6>
											<ul class="item-review text-yellow-light">
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star-half-o"></i></li>
												<li><i class="fa fa-star-o"></i></li>
											</ul>
											<h6 class="item-price m-b0"><del>$232</del> <span class="text-primary">$192</span></h6>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-6 m-b30">
									<h4>New Item</h4>
									<div class="dlab-separator bg-primary"></div>
									<div class="item-widgets-box">
										<div class="item-widgets-left">
											<img src={("/images/product/thumb/item3.jpg")} alt=""/>
										</div>
										<div class="item-widgets-body text-black">
											<h6 class="item-title text-uppercase font-weight-500 m-t0"><a href="javascript:void(0);">Product Title</a></h6>
											<ul class="item-review text-yellow-light">
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star-half-o"></i></li>
												<li><i class="fa fa-star-o"></i></li>
											</ul>
											<h6 class="item-price m-b0"><del>$232</del> <span class="text-primary">$192</span></h6>
										</div>
									</div>
									<div class="item-widgets-box">
										<div class="item-widgets-left">
											<img src={("/images/product/thumb/item4.jpg")} alt=""/>
										</div>
										<div class="item-widgets-body text-black">
											<h6 class="item-title text-uppercase font-weight-500 m-t0"><a href="javascript:void(0);">Product Title</a></h6>
											<ul class="item-review text-yellow-light">
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star-half-o"></i></li>
												<li><i class="fa fa-star-o"></i></li>
											</ul>
											<h6 class="item-price m-b0"><del>$232</del> <span class="text-primary">$192</span></h6>
										</div>
									</div>
									<div class="item-widgets-box">
										<div class="item-widgets-left">
											<img src={("/images/product/thumb/item5.jpg")} alt=""/>
										</div>
										<div class="item-widgets-body text-black">
											<h6 class="item-title text-uppercase font-weight-500 m-t0"><a href="javascript:void(0);">Product Title</a></h6>
											<ul class="item-review text-yellow-light">
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star-half-o"></i></li>
												<li><i class="fa fa-star-o"></i></li>
											</ul>
											<h6 class="item-price m-b0"><del>$232</del> <span class="text-primary">$192</span></h6>
										</div>
									</div>
									<div class="item-widgets-box">
										<div class="item-widgets-left">
											<img src={("/images/product/thumb/item1.jpg")} alt=""/>
										</div>
										<div class="item-widgets-body text-black">
											<h6 class="item-title text-uppercase font-weight-500 m-t0"><a href="javascript:void(0);">Product Title</a></h6>
											<ul class="item-review text-yellow-light">
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star"></i></li>
												<li><i class="fa fa-star-half-o"></i></li>
												<li><i class="fa fa-star-o"></i></li>
											</ul>
											<h6 class="item-price m-b0"><del>$232</del> <span class="text-primary">$192</span></h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="section-full bg-gray content-inner text-center">
						<div class="container">
							<div class="row">
								<div class="col-lg-6 col-md-12 m-b30">
									<div class="item-add text-white">
										<img src={("/images/product/item12.jpg")} alt=""/>
										<div class="add-box">
											<div class="dis-block">
												<h5>SUMMER SALE</h5>
												<h2>UP TO 50% OFF</h2>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-12 m-b30">
									<div class="item-add text-white">
										<img src={("/images/product/item11.jpg")} alt=""/>
										<div class="add-box">
											<div class="dis-block">
												<h5>SUMMER SALE</h5>
												<h2>UP TO 50% OFF</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="section-full bg-white content-inner text-center">
						<div class="container">
							<div class="row">
								<div class="col-lg-6 col-md-12 m-b30">
									<div class="item-add text-black add-style-2 bg-gray">
										<img src={("/images/product/item12.jpg")} alt=""/>
										<div class="add-box">
											<div class="dis-block">
												<h5>SUMMER SALE</h5>
												<h2>UP TO 50% OFF</h2>
												<a class="site-button radius-xl outline outline-2 black" href="javascript:void(0);">View More</a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-12 m-b30">
									<div class="item-add text-black add-style-2 bg-gray">
										<img src={("/images/product/item11.jpg")} alt=""/>
										<div class="add-box">
											<div class="dis-block">
												<h5>SUMMER SALE</h5>
												<h2>UP TO 50% OFF</h2>
												<a class="site-button radius-xl outline outline-2 black" href="javascript:void(0);">View More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="section-full p-t50 p-b20 bg-white">
						<div class="container">
							<div class="row">
								<div class="col-lg-4 col-md-4 col-sm-12">
									<div class="icon-bx-wraper left shop-service-info m-b30">
										<div class="icon-md text-black radius">
											<a href="javascript:void(0);" class="icon-cell text-black"><i class="fa fa-gift"></i></a>
										</div>
										<div class="icon-content">
											<h5 class="dlab-tilte">Free shipping on orders $60+</h5>
											<p>Order more than 60$ and you will get free shippining Worldwide. More info.</p>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-12">
									<div class="icon-bx-wraper left shop-service-info m-b30">
										<div class="icon-md text-black radius">
											<a href="javascript:void(0);" class="icon-cell text-black"><i class="fa fa-plane"></i></a>
										</div>
										<div class="icon-content">
											<h5 class="dlab-tilte">Worldwide delivery</h5>
											<p>We deliver to the following countries: USA, Canada, Europe, Australia</p>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-12">
									<div class="icon-bx-wraper left shop-service-info m-b30">
										<div class="icon-md text-black radius">
											<a href="javascript:void(0);" class="icon-cell text-black"><i class="fa fa-history"></i></a>
										</div>
										<div class="icon-content">
											<h5 class="dlab-tilte">60 days money back guranty!</h5>
											<p>Not happy with our product, feel free to return it, we will refund 100% your money!</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="section-full bg-gray content-inner text-center">
						<div class="container">
							<div class="row">
								<div class="col-lg-4 col-md-4 col-sm-12 m-b20">
									<div class="item-box">
										<div class="item-img outline-hv">
											<img src={("/images/product/item9.jpg")} alt=""/>
										</div>
										<div class="item-info text-left text-black p-tb10">
											<h4 class="item-title font-weight-500 m-b10"><a href="javascript:void(0);">The Best Shop Was Created </a></h4>
											<div class="dlab-post-meta text-gray">
												<ul>
													<li class="post-date"> <i class="ti-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
													<li class="post-author"><i class="ti-user"></i>By <a href="javascript:void(0);">demongo</a> </li>
													<li class="post-comment"><i class="ti-comment-alt"></i> <a href="javascript:void(0);">0</a> </li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-12 m-b20">
									<div class="item-box">
										<div class="item-img outline-hv">
											<img src={("/images/product/item4.jpg")} alt=""/>
										</div>
										<div class="item-info text-left text-black p-tb10">
											<h4 class="item-title font-weight-500 m-b10"><a href="javascript:void(0);">The Best Shop Was Created </a></h4>
											<div class="dlab-post-meta text-gray">
												<ul>
													<li class="post-date"> <i class="ti-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
													<li class="post-author"><i class="ti-user"></i>By <a href="javascript:void(0);">demongo</a> </li>
													<li class="post-comment"><i class="ti-comment-alt"></i> <a href="javascript:void(0);">0</a> </li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-12 m-b20">
									<div class="item-box">
										<div class="item-img outline-hv">
											<img src={("/images/product/item2.jpg")} alt=""/>
										</div>
										<div class="item-info text-left text-black p-tb10">
											<h4 class="item-title font-weight-500 m-b10"><a href="javascript:void(0);">The Best Shop Was Created </a></h4>
											<div class="dlab-post-meta text-gray">
												<ul>
													<li class="post-date"> <i class="ti-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
													<li class="post-author"><i class="ti-user"></i>By <a href="javascript:void(0);">demongo</a> </li>
													<li class="post-comment"><i class="ti-comment-alt"></i> <a href="javascript:void(0);">0</a> </li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="section-full p-t50 p-b20 bg-black-light text-white">
						<div class="container">
							<div class="row">
								<div class="col-lg-4 col-md-4 col-sm-12">
									<div class="icon-bx-wraper left shop-service-info m-b30">
										<div class="icon-md text-white radius">
											<a href="javascript:void(0);" class="icon-cell text-white"><i class="fa fa-gift"></i></a>
										</div>
										<div class="icon-content">
											<h5 class="dlab-tilte">Free shipping on orders $60+</h5>
											<p>Order more than 60$ and you will get free shippining Worldwide. More info.</p>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-12">
									<div class="icon-bx-wraper left shop-service-info m-b30">
										<div class="icon-md text-white radius">
											<a href="javascript:void(0);" class="icon-cell text-white"><i class="fa fa-plane"></i></a>
										</div>
										<div class="icon-content">
											<h5 class="dlab-tilte">Worldwide delivery</h5>
											<p>We deliver to the following countries: USA, Canada, Europe, Australia</p>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-12">
									<div class="icon-bx-wraper left shop-service-info m-b30">
										<div class="icon-md text-white radius">
											<a href="javascript:void(0);" class="icon-cell text-white"><i class="fa fa-history"></i></a>
										</div>
										<div class="icon-content">
											<h5 class="dlab-tilte">60 days money back guranty!</h5>
											<p>Not happy with our product, feel free to return it, we will refund 100% your money!</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="section-full bg-gray content-inner-1">
						<div class="container">
							<div class="row">
								<div class="col-lg-3 col-md-6 col-sm-6">
									<div class="item-box m-b30">
										<div class="item-img">
											<img src={("/images/product/item1.jpg")} alt=""/>
											<div class="item-info-in no-bg tb left">
												<ul>
													<li><a href="javascript:void(0);"><i class="ti-shopping-cart"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-eye"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="item-info text-left text-black p-a20 bg-white">
											<h6 class="item-title text-uppercase font-weight-500"><a href="javascript:void(0);">Product Title</a></h6>
											<h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-6">
									<div class="item-box m-b30 item-style-1">
										<div class="item-img">
											<img src={("/images/product/item2.jpg")} alt=""/>
											<div class="item-info-in no-bg tb top right">
												<ul>
													<li><a href="javascript:void(0);"><i class="ti-shopping-cart"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-eye"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="item-info text-center text-black p-a20 bg-white">
											<h6 class="item-title text-uppercase font-weight-500"><a href="javascript:void(0);">Product Title</a></h6>
											<h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-6">
									<div class="item-box m-b30">
										<div class="item-img">
											<img src={("/images/product/item3.jpg")} alt=""/>
											<div class="item-info-in no-bg tb right">
												<ul>
													<li><a href="javascript:void(0);"><i class="ti-shopping-cart"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-eye"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="item-info text-center text-black p-a20 bg-white">
											<h6 class="item-title text-uppercase font-weight-500"><a href="javascript:void(0);">Product Title</a></h6>
											<h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-6">
									<div class="item-box m-b30">
										<div class="item-img">
											<img src={("/images/product/item4.jpg")} alt=""/>
											<div class="item-info-in no-bg tb top">
												<ul>
													<li><a href="javascript:void(0);"><i class="ti-shopping-cart"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-eye"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="item-info text-center text-black p-a20 bg-white">
											<h6 class="item-title text-uppercase font-weight-500"><a href="javascript:void(0);">Product Title</a></h6>
											<h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-3 col-md-6 col-sm-6">
									<div class="item-box m-b30">
										<div class="item-img">
											<img src={("/images/product/item8.jpg")} alt=""/>
											<div class="item-info-in left">
												<ul>
													<li><a href="javascript:void(0);"><i class="ti-shopping-cart"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-eye"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="item-info text-left text-black p-a20 bg-white">
											<h6 class="item-title text-uppercase font-weight-500"><a href="javascript:void(0);">Product Title</a></h6>
											<h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-6">
									<div class="item-box m-b30 item-style-1">
										<div class="item-img">
											<img src={("/images/product/item7.jpg")} alt=""/>
											<div class="item-info-in top right">
												<ul>
													<li><a href="javascript:void(0);"><i class="ti-shopping-cart"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-eye"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="item-info text-center text-black p-a20 bg-white">
											<h6 class="item-title text-uppercase font-weight-500"><a href="javascript:void(0);">Product Title</a></h6>
											<h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-6">
									<div class="item-box m-b30">
										<div class="item-img">
											<img src={("/images/product/item6.jpg")} alt=""/>
											<div class="item-info-in right">
												<ul>
													<li><a href="javascript:void(0);"><i class="ti-shopping-cart"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-eye"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="item-info text-center text-black p-a20 bg-white">
											<h6 class="item-title text-uppercase font-weight-500"><a href="javascript:void(0);">Product Title</a></h6>
											<h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-6">
									<div class="item-box m-b30">
										<div class="item-img">
											<img src={("/images/product/item5.jpg")} alt=""/>
											<div class="item-info-in top">
												<ul>
													<li><a href="javascript:void(0);"><i class="ti-shopping-cart"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-eye"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="item-info text-center text-black p-a20 bg-white">
											<h6 class="item-title text-uppercase font-weight-500"><a href="javascript:void(0);">Product Title</a></h6>
											<h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-3 col-md-6 col-sm-6">
									<div class="item-box m-b30">
										<div class="item-img">
											<img src={("/images/product/item8.jpg")} alt=""/>
											<div class="item-info-in center">
												<ul>
													<li><a href="javascript:void(0);"><i class="ti-shopping-cart"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-eye"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="item-info text-left text-black p-a20 bg-white">
											<h6 class="item-title text-uppercase font-weight-500"><a href="javascript:void(0);">Product Title</a></h6>
											<h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-6">
									<div class="item-box m-b30 item-style-1">
										<div class="item-img">
											<img src={("/images/product/item7.jpg")} alt=""/>
											<div class="item-info-in full no-bg">
												<div class="center p-lr40">
													<a href="javascript:void(0);" class="site-button radius-xl m-b10 btn-block"><i class="ti-shopping-cart"></i> Add To Cart</a>
													<a href="javascript:void(0);" class="site-button radius-xl btn-block"><i class="ti-heart"></i> Wishlist</a>
												</div>
											</div>
										</div>
										<div class="item-info text-center text-black p-a20 bg-white">
											<h6 class="item-title text-uppercase font-weight-500"><a href="javascript:void(0);">Product Title</a></h6>
											<h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-6">
									<div class="item-box m-b30">
										<div class="item-img">
											<img src={("/images/product/item6.jpg")} alt=""/>
											<div class="item-info-in full">
												<div class="center p-lr40">
													<a href="javascript:void(0);" class="site-button radius-xl m-b10 btn-block"><i class="ti-shopping-cart"></i> Add To Cart</a>
													<a href="javascript:void(0);" class="site-button radius-xl btn-block"><i class="ti-heart"></i> Wishlist</a>
												</div>
											</div>
										</div>
										<div class="item-info text-center text-black p-a20 bg-white">
											<h6 class="item-title text-uppercase font-weight-500"><a href="javascript:void(0);">Product Title</a></h6>
											<h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-6">
									<div class="item-box m-b30">
										<div class="item-img">
											<img src={("/images/product/item5.jpg")} alt=""/>
											<div class="item-info-in">
												<ul>
													<li><a href="javascript:void(0);"><i class="ti-shopping-cart"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-eye"></i></a></li>
													<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="item-info text-center text-black p-a20 bg-white">
											<h6 class="item-title text-uppercase font-weight-500"><a href="javascript:void(0);">Product Title</a></h6>
											<h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="section-full bg-white content-inner">
						<div class="container">
							<div class="row">
								<div class="col-lg-6 col-md-12 m-b30">
									<div class="item-add add-style-3">
										<img src={("/images/product/item11.jpg")} alt=""/>
										<div class="add-box">
											<div class="m-auto add-box-in text-black">
												<h5>CLEARANCE SALES</h5>
												<h2>GET UP TO 20% OFF</h2>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-12 m-b30">
									<div class="item-add add-style-3">
										<img src={("/images/product/item10.jpg")} alt=""/>
										<div class="add-box ">
											<div class="m-auto add-box-in black text-white">
												<h5>CLEARANCE SALES</h5>
												<h2>GET UP TO 20% OFF</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

                </div>

                <Footer />
            </>
        )
    }
}

export default shopWidgets;
