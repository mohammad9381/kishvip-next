import React, { Component } from 'react';
// import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

var bnr4 = require('/images/banner/bnr4.jpg');
var bg8 = require('/images/background/bg8.jpg');

class shortImageBoxContent extends Component {


    render() {
        return (
            <>
                <Header />

                <div class="page-content bg-white">

					<div class="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
								<h1 class="text-white">Images box content</h1>
								<div class="breadcrumb-row">
									<ul class="list-inline">
										<li><a href="/">Home</a></li>
										<li>Element</li>
										<li>Images box content</li>
									</ul>
								</div>
							</div>
                        </div>
                    </div>

					<div class="bg-white">
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>Blog Content Box 1</h4>
										</div>
										<div class="section-content box-sort-in button-example p-b0">
											<div class="row">
												<div class="post card-container col-lg-4 col-md-6 col-sm-6">
													<div class="blog-post blog-grid blog-rounded blog-effect1">
														<div class="dlab-post-media dlab-img-effect">
															<a href="blog-single"><img src={("/images/blog/grid/pic1.jpg")} alt=""/></a>
														</div>
														<div class="dlab-info p-a20 border-1">
															<div class="dlab-post-meta">
																<ul>
																	<li class="post-date"><strong>August 4,</strong><span> 2020</span></li>
																	<li class="post-author">By <a href="javascript:void(0);">Jamie</a></li>
																</ul>
															</div>
															<div class="dlab-post-title">
																<h4 class="post-title"><a href="blog-single">Title of first blog post</a></h4>
															</div>
															<div class="dlab-post-text">
															   <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															</div>
															<div class="dlab-post-readmore">
																<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
																	<i class="ti-arrow-right"></i>
																</a>
															</div>
														</div>
													</div>
												</div>
												<div class="post card-container col-lg-4 col-md-6 col-sm-6">
													<div class="blog-post blog-grid blog-rounded blog-effect1">
														<div class="dlab-post-media dlab-img-effect">
															<a href="blog-single"><img src={("/images/blog/grid/pic2.jpg")} alt=""/></a>
														</div>
														<div class="dlab-info p-a20 border-1">
															<div class="dlab-post-meta">
																<ul>
																	<li class="post-date"> <strong>12 Aug</strong> <span> 2016</span> </li>
																	<li class="post-author"> By <a href="javascript:void(0);">Reuben</a> </li>
																</ul>
															</div>
															<div class="dlab-post-title">
																<h4 class="post-title"><a href="blog-single">Title of first blog post</a></h4>
															</div>
															<div class="dlab-post-text">
															   <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															</div>
															<div class="dlab-post-readmore">
																<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
																	<i class="ti-arrow-right"></i>
																</a>
															</div>
														</div>
													</div>
												</div>
												<div class="post card-container col-lg-4 col-md-6 col-sm-6">
													<div class="blog-post blog-grid blog-rounded blog-effect1">
														<div class="dlab-post-media dlab-img-effect">
															<a href="blog-single"><img src={("/images/blog/grid/pic3.jpg")} alt=""/></a>
														</div>
														<div class="dlab-info p-a20 border-1">
															<div class="dlab-post-meta">
																<ul>
																	<li class="post-date"> <strong>13 Aug</strong> <span> 2016</span> </li>
																	<li class="post-author"> By <a href="javascript:void(0);">Caroline</a> </li>
																</ul>
															</div>
															<div class="dlab-post-title">
																<h4 class="post-title"><a href="blog-single">Title of first blog post</a></h4>
															</div>
															<div class="dlab-post-text">
															   <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															</div>
															<div class="dlab-post-readmore">
																<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
																	<i class="ti-arrow-right"></i>
																</a>
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
						<div class="dlab-divider bg-gray-dark tb10"></div>
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>Blog Content Box 2</h4>
										</div>
										<div class="section-content p-b0">
											<div class="row">
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay1 dlab-img-effect on rotate no-hover"> <img src={("/images/blog/grid/pic1.jpg")} alt=""/>
															<div class="dlab-info-has p-a20 no-hover ">
																<a href="javascript:void(0);" class="site-button button-sm m-b10">Fashion</a>
																<div class="dlab-post-meta text-white">
																	<ul>
																		<li class="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
																		<li class="post-author"> By <a href="javascript:void(0);">demongo</a> </li>
																	</ul>
																</div>
																<div class="dlab-post-title">
																	<h5 class="post-title"><a href="blog-single">There are many variations.</a></h5>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay1 dlab-img-effect on rotate no-hover"> <img src={("/images/blog/grid/pic2.jpg")} alt=""/>
															<div class="dlab-info-has p-a20 no-hover ">
																<a href="javascript:void(0);" class="site-button button-sm red m-b10">Fashion</a>
																<div class="dlab-post-meta text-white">
																	<ul>
																		<li class="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
																		<li class="post-author"> By <a href="javascript:void(0);">demongo</a> </li>
																	</ul>
																</div>
																<div class="dlab-post-title">
																	<h5 class="post-title"><a href="blog-single">There are many variations.</a></h5>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay1 dlab-img-effect on rotate no-hover"> <img src={("/images/blog/grid/pic3.jpg")} alt=""/>
															<div class="dlab-info-has p-a20 no-hover">
																<a href="javascript:void(0);" class="site-button button-sm pink m-b10">Fashion</a>
																<div class="dlab-post-meta text-white">
																	<ul>
																		<li class="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
																		<li class="post-author"> By <a href="javascript:void(0);">demongo</a> </li>
																	</ul>
																</div>
																<div class="dlab-post-title">
																	<h5 class="post-title"><a href="blog-single">There are many variations.</a></h5>
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
						<div class="dlab-divider bg-gray-dark tb10"></div>
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>Images box with content demo 1</h4>
										</div>
										<div class="section-content p-b0">
											<div class="row">
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box fly-box">
														<div class="dlab-media">
															<a href="blog-single"><img src={("/images/our-work/pic6.jpg")} alt=""/></a>
														</div>
														<div class="dlab-info p-a20 text-center bg-white">
															<h4 class="m-a0 bg-primary content-box-head"><a href="blog-single" class="text-white">Title Come Here</a></h4>
															<p class="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box fly-box">
														<div class="dlab-media">
															<a href="blog-single"><img src={("/images/our-work/pic5.jpg")} alt=""/></a>
														</div>
														<div class="dlab-info p-a20 text-center bg-white">
															<h4 class="m-a0 bg-primary content-box-head"><a href="blog-single" class="text-white">Title Come Here</a></h4>
															<p class="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box fly-box">
														<div class="dlab-media">
															<a href="blog-single"><img src={("/images/our-work/pic4.jpg")} alt=""/></a>
														</div>
														<div class="dlab-info p-a20 text-center bg-white">
															<h4 class="m-a0 bg-primary content-box-head"><a href="blog-single" class="text-white">Title Come Here</a></h4>
															<p class="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
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
											<h4>Images box with content demo 2</h4>
										</div>
										<div class="section-content p-b0">
											<div class="row">
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box img-content-style-1 fly-box">
														<div class="dlab-media dlab-img-overlay1 dlab-img-effect">
															<img src={("/images/our-work/pic1.jpg")} alt=""/>
														</div>
														<div class="dlab-title-bx bg-white p-a20 text-center">
															<p class="font-16 text-secondry m-b5">Herbal Beauty Salon</p>
															<div class="dlab-divider margin-0 bg-black"></div>
															<p class="font-16 text-secondry m-a0"><small>Branding and Identity</small></p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box img-content-style-1 fly-box">
														<div class="dlab-media dlab-img-overlay1 dlab-img-effect">
															<img src={("/images/our-work/pic3.jpg")} alt=""/>
														</div>
														<div class="dlab-title-bx bg-white p-a20 text-center">
															<p class="font-16 text-secondry m-b5">Herbal Beauty Salon</p>
															<div class="dlab-divider margin-0 bg-black"></div>
															<p class="font-16 text-secondry m-a0"><small>Branding and Identity</small></p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box img-content-style-1 fly-box">
														<div class="dlab-media dlab-img-overlay1 dlab-img-effect">
															<img src={("/images/our-work/pic2.jpg")} alt=""/>
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
											<h4>Half Blog Images</h4>
										</div>
										<div class="section-content box-sort-in button-example p-b0">
											<div class="row">
												<div class="col-md-12 col-lg-12">
													<div class="blog-post blog-md clearfix border-1 br-col-b1 radius-sm">
														<div class="dlab-post-media dlab-img-effect zoom-slow">
															<a href="blog-single"><img src={("/images/blog/grid/pic1.jpg")} alt=""/></a>
														</div>
														<div class="dlab-post-info">
															<div class="dlab-post-meta">
																<ul>
																	<li class="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
																	<li class="post-author"> By <a href="javascript:void(0);">demongo</a> </li>
																</ul>
															</div>
															<div class="dlab-post-title">
																<h4 class="post-title"><a href="blog-single">Title of first blog post</a></h4>
															</div>
															<div class="dlab-post-text">
																<p class="p-r15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
															</div>
															<div class="dlab-post-readmore">
																<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
																	<i class="ti-arrow-right"></i>
																</a>
															</div>
														</div>
													</div>
												</div>
												<div class="col-md-12 col-lg-12">
													<div class="blog-post blog-md clearfix border-1 br-col-b1 radius-sm bg-primary text-white">
														<div class="dlab-post-media dlab-img-effect zoom-slow">
															<a href="blog-single"><img src={("/images/blog/grid/pic2.jpg")} alt=""/></a>
														</div>
														<div class="dlab-post-info">
															<div class="dlab-post-meta ">
																<ul>
																	<li class="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
																	<li class="post-author"> By <a href="javascript:void(0);">demongo</a> </li>
																</ul>
															</div>
															<div class="dlab-post-title">
																<h4 class="post-title"><a href="blog-single">Title of first blog post</a></h4>
															</div>
															<div class="dlab-post-text">
																<p class="p-r15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
															</div>
															<div class="dlab-post-readmore">
																<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button white">READ MORE
																	<i class="ti-arrow-right"></i>
																</a>
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
						<div class="dlab-divider bg-gray-dark tb10"></div>
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>Blog Content Box 1</h4>
										</div>
										<div class="section-content box-sort-in button-example p-b0">
											<div class="row">
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay4">
															<a href="blog-single"><img src={("/images/our-work/pic1.jpg")} alt=""/></a>
														</div>
														<div class="dlab-info">
															<h4 class="dlab-title m-t20"><a href="blog-single">Title Come Here</a></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<a href="blog-single" class="site-button">More</a>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay4">
															<a href="blog-single"><img src={("/images/our-work/pic2.jpg")} alt=""/></a>
														</div>
														<div class="dlab-info">
															<h4 class="dlab-title m-t20"><a href="blog-single">Title Come Here</a></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<a href="blog-single" class="site-button">More</a>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay4">
															<a href="blog-single"><img src={("/images/our-work/pic3.jpg")} alt=""/></a>
														</div>
														<div class="dlab-info">
															<h4 class="dlab-title m-t20"><a href="blog-single">Title Come Here</a></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<a href="blog-single" class="site-button">More</a>
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
											<h4>Fade Slide</h4>
										</div>
										<div class="section-content box-sort-in button-example p-b0">
											<div class="row">
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay5">
															<a href="blog-single"><img src={("/images/our-work/pic1.jpg")} alt=""/></a>
														</div>
														<div class="dlab-info p-a30 border-1">
															<h4 class="dlab-title m-t0"><a href="blog-single">Title Come Here</a></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<a href="blog-single" class="site-button">More</a>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay5">
															<a href="blog-single"><img src={("/images/our-work/pic2.jpg")} alt=""/></a>
														</div>
														<div class="dlab-info p-a30 border-1">
															<h4 class="dlab-title m-t0"><a href="blog-single">Title Come Here</a></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<a href="blog-single" class="site-button">More</a>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay5">
															<a href="blog-single"><img src={("/images/our-work/pic3.jpg")} alt=""/></a>
														</div>
														<div class="dlab-info p-a30 border-1">
															<h4 class="dlab-title m-t0"><a href="blog-single">Title Come Here</a></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<a href="blog-single" class="site-button">More</a>
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
											<h4>Images box with content demo 3</h4>
										</div>
										<div class="section-content box-sort-in button-example p-b0">
											<div class="row">
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay6">
															<a href="blog-single"><img src={("/images/our-work/pic1.jpg")} alt=""/></a>
														</div>
														<div class="dlab-info p-a30 bg-gray">
															<h4 class="dlab-title m-t0"><a href="blog-single">Title Come Here</a></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<a href="blog-single" class="site-button">More</a>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay6">
															<a href="blog-single"><img src={("/images/our-work/pic2.jpg")} alt=""/></a>
														</div>
														<div class="dlab-info p-a30 bg-gray">
															<h4 class="dlab-title m-t0"><a href="blog-single">Title Come Here</a></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<a href="blog-single" class="site-button">More</a>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box">
														<div class="dlab-media dlab-img-overlay6">
															<a href="blog-single"><img src={("/images/our-work/pic3.jpg")} alt=""/></a>
														</div>
														<div class="dlab-info p-a30 bg-gray">
															<h4 class="dlab-title m-t0"><a href="blog-single">Title Come Here</a></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<a href="blog-single" class="site-button">More</a>
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
											<h4>Images box with content demo 4</h4>
										</div>
										<div class="section-content">
											<div class="row">
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box p-a20 border-1">
														<div class="dlab-media dlab-img-overlay7">
															<a href="blog-single"><img src={("/images/our-work/pic1.jpg")} alt=""/></a>
														</div>
														<div class="dlab-info">
															<h4 class="dlab-title m-t20"><a href="blog-single">Title Come Here</a></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<a href="blog-single" class="site-button">More</a>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box p-a20 border-1">
														<div class="dlab-media dlab-img-overlay7">
															<a href="blog-single"><img src={("/images/our-work/pic2.jpg")} alt=""/></a>
														</div>
														<div class="dlab-info">
															<h4 class="dlab-title m-t20"><a href="blog-single">Title Come Here</a></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<a href="blog-single" class="site-button">More</a>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box p-a20 border-1">
														<div class="dlab-media dlab-img-overlay7">
															<a href="blog-single"><img src={("/images/our-work/pic3.jpg")} alt=""/></a>
														</div>
														<div class="dlab-info">
															<h4 class="dlab-title m-t20"><a href="blog-single">Title Come Here</a></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<a href="blog-single" class="site-button">More</a>
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
											<h4>Images box with content demo 5</h4>
										</div>
										<div class="section-content p-b0">
											<div class="row">
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box p-a20 border-1 bg-gray">
														<div class="dlab-media dlab-img-overlay8">
															<a href="blog-single"><img src={("/images/our-work/pic1.jpg")} alt=""/></a>
														</div>
														<div class="dlab-info">
															<h4 class="dlab-title m-t20"><a href="blog-single">Title Come Here</a></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<a href="blog-single" class="site-button">More</a>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box p-a20 border-1 bg-gray">
														<div class="dlab-media dlab-img-overlay8">
															<a href="blog-single"><img src={("/images/our-work/pic2.jpg")} alt=""/></a>
														</div>
														<div class="dlab-info">
															<h4 class="dlab-title m-t20"><a href="blog-single">Title Come Here</a></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<a href="blog-single" class="site-button">More</a>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div class="dlab-box p-a20 border-1 bg-gray">
														<div class="dlab-media dlab-img-overlay8">
															<a href="blog-single"><img src={("/images/our-work/pic3.jpg")} alt=""/></a>
														</div>
														<div class="dlab-info">
															<h4 class="dlab-title m-t20"><a href="blog-single">Title Come Here</a></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<a href="blog-single" class="site-button">More</a>
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

export default shortImageBoxContent;
