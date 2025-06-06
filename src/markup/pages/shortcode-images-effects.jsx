import React, { Component } from 'react';
// import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

var bnr4 = require('/images/banner/bnr4.jpg');

class shortImagesEffects extends Component {

    render() {
        return (
            <>
                <Header />

                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
								<h1 class="text-white">Images effects</h1>
								<div class="breadcrumb-row">
									<ul class="list-inline">
										<li><a href="/">Home</a></li>
										<li>Element</li>
										<li>Images effects</li>
									</ul>
								</div>
							</div>
                        </div>
                    </div>

					<div class="bg-white lightgallery" id="lightgallery">
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>Images overlay on hover</h4>
										</div>
										<div class="section-content box-sort-in button-example p-b0">
											<div class="row">
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay1"> <img src={("/images/our-work/pic1.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Effect 1</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay2"> <img src={("/images/our-work/pic2.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Effect 2</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay3"> <img src={("/images/our-work/pic3.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0 ">Effect 3</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay4"> <img src={("/images/our-work/pic4.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Effect 4</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay5"> <img src={("/images/our-work/pic5.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Effect 5</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay6"> <img src={("/images/our-work/pic6.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Effect 6</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay7"> <img src={("/images/our-work/pic7.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Effect 7</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay8"> <img src={("/images/our-work/pic8.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Effect 7</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay9"> <img src={("/images/our-work/pic1.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Effect 9</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay12"> <img src={("/images/our-work/pic2.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Effect 10</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay12 left"> <img src={("/images/our-work/pic3.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Effect 11</h4>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="dlab-divider bg-gray-dark tb10"></div>
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>Images effect on hover</h4>
										</div>
										<div class="section-content box-sort-in button-example p-b0">
											<div class="row">
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-effect opacity"> <img src={("/images/our-work/pic1.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Opacity low</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-effect zoom"> <img src={("/images/our-work/pic2.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Zoom</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-effect shrink"> <img src={("/images/our-work/pic3.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Shrink</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-effect side-pan"> <img src={("/images/our-work/pic4.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Left move</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-effect vertical-pan"> <img src={("/images/our-work/pic5.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Vertical move</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-effect fade-in"><img src={("/images/our-work/pic8.jpg")} alt=""/></div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Fade-in</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-effect fade-out"> <img src={("/images/our-work/pic7.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Fade out</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-effect rotate"> <img src={("/images/our-work/pic2.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Image rotate</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-effect blurr"> <img src={("/images/our-work/pic3.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Blurr</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-effect blurr-invert"> <img src={("/images/our-work/pic4.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Blurr invert</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-effect off-color "> <img src={("/images/our-work/pic8.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Off color hover</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-effect on-color "> <img src={("/images/our-work/pic2.jpg")} alt=""/> </div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">On color hover</h4>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="dlab-divider bg-gray-dark tb10"></div>
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>Images overlay & content on hover</h4>
										</div>
										<div class="section-content box-sort-in button-example">
											<div class="row">
												<div class="col-lg-4 col-md-6 col-sm-12 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay1 dlab-img-effect zoom"> <img src={("/images/our-work/pic1.jpg")} alt=""/>
															<div class="overlay-bx">
																<div class="overlay-icon">
																	<a href="javascript:void(0);"> <i class="fa fa-link icon-bx-xs"></i> </a>
																	<span data-exthumbimage="images/our-work/pic1.jpg" data-src="images/our-work/pic1.jpg" class="check-km" title="Image 1 Title will come here">
																		<i class="fa fa-picture-o icon-bx-xs"></i>
																	</span>
																</div>
															</div>
														</div>
														<div class="dlab-title-bx m-t10">
															<h4 class="margin-0">Effect 1</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-12 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay2 dlab-img-effect zoom"> <img src={("/images/our-work/pic4.jpg")} alt=""/>
															<div class="dlab-info-has p-a20">
																<div class="dlab-info-has-text">We have the expertise to create just the right web presence for you.</div>
																<ul class="dlab-social-icon border">
																	<li><a href="javascript:void(0);" class="fa fa-facebook"></a></li>
																	<li><a href="javascript:void(0);" class="fa fa-twitter"></a></li>
																	<li><a href="javascript:void(0);" class="fa fa-linkedin"></a></li>
																	<li><a href="javascript:void(0);" class="fa fa-rss"></a></li>
																</ul>
															</div>
														</div>
														<div class="dlab-title-bx m-t10">
															<h4 class="margin-0">Effect 2</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-12 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-effect zoom"> <img src={("/images/our-work/pic2.jpg")} alt=""/>
															<div class="dlab-info-has p-a20 bg-primary">
																<div class="dlab-info-has-text">We have the expertise to create just the right web presence for you.</div>
																<ul class="dlab-social-icon border">
																	<li><a href="javascript:void(0);" class="fa fa-facebook"></a></li>
																	<li><a href="javascript:void(0);" class="fa fa-twitter"></a></li>
																	<li><a href="javascript:void(0);" class="fa fa-linkedin"></a></li>
																	<li><a href="javascript:void(0);" class="fa fa-rss"></a></li>
																</ul>
															</div>
														</div>
														<div class="dlab-title-bx m-t10">
															<h4 class="margin-0">Effect 3</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-12 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-effect zoom"> <img src={("/images/our-work/pic7.jpg")} alt=""/>
															<div class="dlab-info-has p-a20 bg-black">
																<div class="dlab-info-has-text">We have the expertise to create just the right web presence for you.</div>
																<ul class="dlab-social-icon border">
																	<li><a href="javascript:void(0);" class="fa fa-facebook"></a></li>
																	<li><a href="javascript:void(0);" class="fa fa-twitter"></a></li>
																	<li><a href="javascript:void(0);" class="fa fa-linkedin"></a></li>
																	<li><a href="javascript:void(0);" class="fa fa-rss"></a></li>
																</ul>
															</div>
														</div>
														<div class="dlab-title-bx m-t10">
															<h4 class="margin-0">Effect 4</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-12 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-effect zoom"> <img src={("/images/our-work/pic8.jpg")} alt=""/>
															<div class="dlab-info-has p-a20 bg-white no-hover">
																<div class="dlab-info-has-text">We have the expertise to create just the right web presence for you.</div>
																<ul class="dlab-social-icon dark border">
																	<li><a href="javascript:void(0);" class="fa fa-facebook"></a></li>
																	<li><a href="javascript:void(0);" class="fa fa-twitter"></a></li>
																	<li><a href="javascript:void(0);" class="fa fa-linkedin"></a></li>
																	<li><a href="javascript:void(0);" class="fa fa-rss"></a></li>
																</ul>
															</div>
														</div>
														<div class="dlab-title-bx m-t10">
															<h4 class="margin-0">Effect 5</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-12 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-effect zoom"> <img src={("/images/our-work/pic5.jpg")} alt=""/>
															<div class="dlab-info-has skew-has p-a20 bg-primary">
																<p class="dlab-info-has-text">We have the expertise to create just the right web presence for you.</p>
																<ul class="dlab-social-icon border">
																	<li><a href="javascript:void(0);" class="fa fa-facebook"></a></li>
																	<li><a href="javascript:void(0);" class="fa fa-twitter"></a></li>
																	<li><a href="javascript:void(0);" class="fa fa-linkedin"></a></li>
																	<li><a href="javascript:void(0);" class="fa fa-rss"></a></li>
																</ul>
															</div>
														</div>
														<div class="dlab-title-bx m-t10">
															<h4 class="margin-0">Effect 6</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-12 m-b15">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay11 dlab-img-effect zoom"> <img src={("/images/our-work/pic1.jpg")} alt=""/>
															<div class="overlay-bx">
																<div class="overlay-icon">
																	<a href="javascript:void(0);"> <i class="fa fa-link icon-bx-xs"></i> </a>
																	<span data-exthumbimage="images/our-work/pic1.jpg" data-src="images/our-work/pic1.jpg" class="check-km" title="Image 2 Title will come here">
																		<i class="fa fa-picture-o icon-bx-xs"></i>
																	</span>
																</div>
															</div>
														</div>
														<div class="dlab-title-bx m-t10">
															<h4 class="margin-0">Effect 7</h4>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="dlab-divider bg-gray-dark tb10"></div>
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>Images content on hover Icon</h4>
										</div>
										<div class="section-content box-sort-in button-example">
											<div class="row">
												<div class="col-lg-4 col-md-4 col-sm-6 m-b30">
													<div class="dlab-box img-content-style-1 fly-box">
														<div class="dlab-media dlab-img-overlay1 dlab-img-effect"> <img src={("/images/our-work/pic1.jpg")} alt=""/>
															<div class="overlay-bx">
																<div class="overlay-icon">
																	<ul class="list-inline link-list">
																		<li><a href="javascript:void(0);"><i class="ti-link"></i></a></li>
																		<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
																		<li><span data-exthumbimage="images/our-work/pic1.jpg" data-src="images/our-work/pic1.jpg" class="check-km" title="Image 3 Title will come here"><i class="ti-fullscreen"></i></span></li>
																	</ul>
																</div>
															</div>
														</div>
														<div class="dlab-title-bx bg-white p-a20 text-center">
															<p class="font-16 text-secondry m-b5">Herbal Beauty Salon</p>
															<div class="dlab-divider margin-0 bg-black"></div>
															<p class="font-16 text-secondry m-a0"><small>Branding and Identity</small></p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-4 col-sm-6 m-b30">
													<div class="dlab-box img-content-style-2 fly-box">
														<div class="dlab-media dlab-img-overlay1 dlab-img-effect"> <img src={("/images/our-work/pic4.jpg")} alt=""/>
															<div class="overlay-bx">
																<ul class="list-inline link-list">
																	<li><a href="javascript:void(0);"><i class="ti-link"></i></a></li>
																	<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
																	<li><span data-exthumbimage="images/our-work/pic4.jpg" data-src="images/our-work/pic4.jpg" class="check-km" title="Image 3 Title will come here"><i class="ti-fullscreen"></i></span></li>
																</ul>
															</div>
														</div>
														<div class="dlab-title-bx bg-white p-a20 text-center">
															<p class="font-16 text-secondry m-b5">Herbal Beauty Salon</p>
															<div class="dlab-divider margin-0 bg-black"></div>
															<p class="font-16 text-secondry m-a0"><small>Branding and Identity</small></p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-4 col-sm-6 m-b30">
													<div class="dlab-box img-content-style-3 fly-box">
														<div class="dlab-media dlab-img-overlay1 dlab-img-effect"> <img src={("/images/our-work/pic2.jpg")} alt=""/>
															<div class="overlay-bx">
																<ul class="link-list">
																	<li><a href="javascript:void(0);"><i class="ti-link"></i></a></li>
																	<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
																	<li><span data-exthumbimage="images/our-work/pic1.jpg" data-src="images/our-work/pic2.jpg" class="check-km" title="Image 3 Title will come here"><i class="ti-fullscreen"></i></span></li>
																</ul>
															</div>
														</div>
														<div class="dlab-title-bx bg-white p-a20 text-center">
															<p class="font-16 text-secondry m-b5">Herbal Beauty Salon</p>
															<div class="dlab-divider margin-0 bg-black"></div>
															<p class="font-16 text-secondry m-a0"><small>Branding and Identity</small></p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="dlab-divider bg-gray-dark tb10"></div>
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>Images content on hover</h4>
										</div>
										<div class="section-content box-sort-in m-b15 button-example">
											<div class="row">
												<div class="col-lg-4 col-md-6 col-sm-6">
													<div class="dlab-box img-hvr-content-style-1">
														<div class="dlab-media dlab-img-overlay1 dlab-img-effect"> <img src={("/images/our-work/pic1.jpg")} alt=""/>
															<div class="overlay-bx">
																<div class="overlay-icon">
																	<div class="text-white">
																		<p class="font-16 m-b5">Herbal Beauty Salon</p>
																		<p class="font-16 m-b5"><small>Branding and Identity</small></p>
																	</div>
																</div>
																<ul class="list-inline link-list">
																	<li><a href="javascript:void(0);"><i class="ti-link"></i></a></li>
																	<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
																	<li><span data-exthumbimage="images/our-work/pic1.jpg" data-src="images/our-work/pic1.jpg" class="check-km" title="Image 3 Title will come here"><i class="ti-fullscreen"></i></span></li>
																</ul>
															</div>
														</div>
														<div class="dlab-title-bx m-t10">
															<h4 class="margin-0">Effect 1</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6">
													<div class="dlab-box img-hvr-content-style-2">
														<div class="dlab-media dlab-img-overlay1 dlab-img-effect"> <img src={("/images/our-work/pic4.jpg")} alt=""/>
															<div class="overlay-bx">
																<div class="dlab-info-has-text">
																	<div class="text-white">
																		<p class="font-16 m-b5">Herbal Beauty Salon</p>
																		<div class="dlab-divider margin-0 bg-gray-dark"></div>
																		<p class="font-16 m-b5"><small>Branding and Identity</small></p>
																	</div>
																</div>
																<ul class="list-inline link-list">
																	<li><a href="javascript:void(0);"><i class="ti-link"></i></a></li>
																	<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
																	<li><span data-exthumbimage="images/our-work/pic4.jpg" data-src="images/our-work/pic4.jpg" class="check-km" title="Image 3 Title will come here"><i class="ti-fullscreen"></i></span></li>
																</ul>
															</div>
														</div>
														<div class="dlab-title-bx m-t10">
															<h4 class="margin-0">Effect 2</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6">
													<div class="dlab-box img-hvr-content-style-3">
														<div class="dlab-media dlab-img-overlay1 dlab-img-effect"> <img src={("/images/our-work/pic2.jpg")} alt=""/>
															<div class="overlay-bx">
																<div class="dlab-info-has-text">
																	<div class="text-white">
																		<p class="font-16 m-b5">Herbal Beauty Salon</p>
																		<div class="dlab-divider margin-0 bg-gray-dark"></div>
																		<p class="font-16 m-b5"><small>Branding and Identity</small></p>
																	</div>
																</div>
																<ul class="list-inline link-list">
																	<li><a href="javascript:void(0);"><i class="ti-link"></i></a></li>
																	<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
																	<li><span data-exthumbimage="images/our-work/pic2.jpg" data-src="images/our-work/pic2.jpg" class="check-km" title="Image 3 Title will come here"><i class="ti-fullscreen"></i></span></li>
																</ul>
															</div>
														</div>
														<div class="dlab-title-bx m-t10">
															<h4 class="margin-0">Effect 3</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6">
													<div class="dlab-box img-hvr-content-style-4">
														<div class="dlab-media dlab-img-overlay1 dlab-img-effect"> <img src={("/images/our-work/pic7.jpg")} alt=""/>
															<div class="overlay-bx">
																<div class="dlab-info-has-text">
																	<div class="text-white">
																		<p class="font-16 m-b5">Herbal Beauty Salon</p>
																		<div class="dlab-divider margin-0 bg-gray-dark"></div>
																		<p class="font-16 m-b5"><small>Branding and Identity</small></p>
																	</div>
																</div>
																<ul class="list-inline link-list">
																	<li><a href="javascript:void(0);"><i class="ti-link"></i></a></li>
																	<li><a href="javascript:void(0);"><i class="ti-heart"></i></a></li>
																	<li><span data-exthumbimage="images/our-work/pic7.jpg" data-src="images/our-work/pic7.jpg" class="check-km" title="Image 3 Title will come here"><i class="ti-fullscreen"></i></span></li>
																</ul>
															</div>
														</div>
														<div class="dlab-title-bx m-t10">
															<h4 class="margin-0">Effect 4</h4>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="dlab-divider bg-gray-dark tb10"></div>
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>Images content on hover</h4>
										</div>
										<div class="section-content box-sort-in m-b15 button-example">
											<div class="row">
												<div class="col-lg-3 col-md-6 col-sm-6">
													<div class="dlab-box content-box-style style1">
														<div class="dlab-media dlab-img-overlay12">
															<img src={("/images/about/pic1.jpg")} alt=""/>
															<div class="overlay-bx no-hover">
																<div class="overlay-icon text-white">
																	<h4 class="text-white">Hover Box</h4>
																	<p class="p-lr10 box-visible">Lorem ipsum Nam libero tempore cum soluta nobis esteligen dioptio cumque nihil impedit</p>
																</div>
															</div>
														</div>
														<div class="dlab-title-bx m-t10">
															<h4 class="m-b0">Effect 1</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-3 col-md-6 col-sm-6">
													<div class="dlab-box content-box-style style1">
														<div class="dlab-media dlab-img-overlay12">
															<img src={("/images/about/pic2.jpg")} alt=""/>
															<div class="overlay-bx no-hover">
																<div class="align-m text-white">
																	<p class="m-b10">Manager</p>
																	<h4 class="text-white m-t0">Team Mamber</h4>
																	<div class="p-lr20 box-visible text-center">
																		<ul class="list-inline m-a0">
																			<li><a href="javascript:void(0);" class="site-button facebook sharp"><i class="fa fa-facebook"></i></a></li>
																			<li><a href="javascript:void(0);" class="site-button google-plus sharp"><i class="fa fa-google-plus"></i></a></li>
																			<li><a href="javascript:void(0);" class="site-button twitter sharp"><i class="fa fa-twitter"></i></a></li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
														<div class="dlab-title-bx m-t10">
															<h4 class="margin-0 ">Effect 2</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-3 col-md-6 col-sm-6">
													<div class="dlab-box content-box-style style1">
														<div class="dlab-media dlab-img-overlay12">
															<img src={("/images/about/pic1.jpg")} alt=""/>
															<div class="overlay-bx no-hover">
																<div class="align-m text-white">
																	<div class="text-center p-a10 box-visible">
																		<div class="icon-sm m-b20"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-headphone-alt"></i></a> </div>
																		<div class="icon-content">
																			<h5 class="dlab-tilte text-uppercase">Unique design</h5>
																			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
																			<a href="javascript:void(0);" class="site-button">Site Button</a>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div class="dlab-title-bx m-t10">
															<h4 class="margin-0 ">Effect 3</h4>
														</div>
													</div>
												</div>
												<div class="col-lg-3 col-md-6 col-sm-6">
													<div class="dlab-box content-box-style style1">
														<div class="dlab-media dlab-img-overlay12 left">
															<img src={("/images/about/pic2.jpg")} alt=""/>
															<div class="overlay-bx no-hover">
																<div class="align-m text-white text-left">
																	<div class="icon-bx-wraper p-a10 left box-visible">
																		<div class="icon-sm text-primary m-b20"> <a href="javascript:void(0);" class="icon-cell text-primary"><i class="ti-gift"></i></a> </div>
																		<div class="icon-content">
																			<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
																			<p>Lorem ipsum dolor sit elit nonummy dolor is euismod end..</p>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div class="dlab-title-bx m-t10">
															<h4 class="margin-0 ">Effect 4</h4>
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

                </div>

                <Footer />
            </>
        )
    }
}

export default shortImagesEffects;
