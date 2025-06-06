import React, { Component } from 'react';
// import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

var bnr4 = ('/images/banner/bnr4.jpg');

const work1 = ('/images/our-work/pic1.jpg' )
const work2 = ('/images/our-work/pic2.jpg' )
const work3 = ('/images/our-work/pic3.jpg' )
const work4 = ('/images/our-work/pic4.jpg' )

class shortIconBoxStyles extends Component {


    render() {
        return (
            <>
                <Header />

                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
								<h1 class="text-white">icon box styles</h1>
								<div class="breadcrumb-row">
									<ul class="list-inline">
										<li><a href="/">Home</a></li>
										<li>Element</li>
										<li>icon box styles</li>
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
											<h4>icon box style 1 aligh center</h4>
										</div>
										<div class="section-content box-sort-in button-example p-b0">
											<div class="row">
												<div class="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div class="icon-bx-wraper bx-style-1 p-a30 center">
														<div class="icon-bx-sm bg-primary m-b20"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-headphone-alt"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
														</div>
													</div>
												</div>
												<div class="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div class="icon-bx-wraper bx-style-1 p-a30 center">
														<div class="icon-bx-sm radius bg-primary m-b20"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-ruler-pencil"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
														</div>
													</div>
												</div>
												<div class="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div class="icon-bx-wraper bx-style-1 p-a30 center">
														<div class="icon-bx-sm text-primary bg-white radius border-1 m-b20"> <a href="javascript:void(0);" class="icon-cell text-primary"><i class="ti-desktop"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
														</div>
													</div>
												</div>
												<div class="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div class="icon-bx-wraper bx-style-1 p-a30 center">
														<div class="icon-lg text-primary m-b20"> <a href="javascript:void(0);" class="icon-cell text-primary"><i class="ti-face-smile"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
														</div>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-lg-4 col-md-4 col-sm-12 m-b30">
													<div class="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
														<div class="icon-sm m-b20"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-headphone-alt"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-uppercase">Unique design</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
															<a href="javascript:void(0);" class="site-button">Site Button</a>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-4 col-sm-12 m-b30">
													<div class="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
														<div class="icon-sm m-b20"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-ruler-pencil"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-uppercase">Make it Simple</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
															<a href="javascript:void(0);" class="site-button">Site Button</a>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-4 col-sm-12 m-b30">
													<div class="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
														<div class="icon-sm m-b20"> <a href="javascript:void(0);" class="icon-cell text-primary"><i class="ti-desktop"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-uppercase">Different Layout</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
															<a href="javascript:void(0);" class="site-button">Site Button</a>
														</div>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-lg-4 col-md-4 col-sm-12 m-b30">
													<div class="icon-bx-wraper bx-style-1 p-a30 center fly-box">
														<div class="icon-sm m-b20"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-headphone-alt"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-uppercase">Unique design</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
															<a href="javascript:void(0);" class="site-button">Site Button</a>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-4 col-sm-12 m-b30">
													<div class="icon-bx-wraper bx-style-1 p-a30 center fly-box">
														<div class="icon-sm m-b20"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-ruler-pencil"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-uppercase">Make it Simple</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
															<a href="javascript:void(0);" class="site-button">Site Button</a>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-4 col-sm-12 m-b30">
													<div class="icon-bx-wraper bx-style-1 p-a30 center fly-box">
														<div class="icon-sm m-b20"> <a href="javascript:void(0);" class="icon-cell text-primary"><i class="ti-desktop"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-uppercase">Different Layout</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
															<a href="javascript:void(0);" class="site-button">Site Button</a>
														</div>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-lg-3 col-md-6 col-sm-6">
													<div class="dlab-box-bg m-b30 box-hover style3" style={{ backgroundImage: "url(" + work1 + ")" }}>
														<div class="icon-bx-wraper center p-lr20 p-tb30">
															<div class="text-primary m-b30">
																<span class="icon-cell icon-sm"><i class="ti-ruler-pencil"></i></span>
															</div>
															<div class="icon-content">
																<h5 class="dlab-tilte">Unique design</h5>
																<p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
															</div>
														</div>
														<div class="icon-box-btn text-center">
															<a href="javascript:void(0);" class="site-button btn-block">Read More</a>
														</div>
													</div>
												</div>
												<div class="col-lg-3 col-md-6 col-sm-6">
													<div class="dlab-box-bg m-b30 box-hover style3" style={{ backgroundImage: "url(" + work2 + ")" }}>
														<div class="icon-bx-wraper center p-lr20 p-tb30">
															<div class="text-primary m-b30">
																<span class="icon-cell icon-sm"><i class="ti-heart"></i></span>
															</div>
															<div class="icon-content">
																<h5 class="dlab-tilte">Make it Simple</h5>
																<p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
															</div>
														</div>
														<div class="icon-box-btn text-center">
															<a href="javascript:void(0);" class="site-button btn-block">Read More</a>
														</div>
													</div>
												</div>
												<div class="col-lg-3 col-md-6 col-sm-6">
													<div class="dlab-box-bg m-b30 box-hover active style3" style={{ backgroundImage: "url(" + work3 + ")" }}>
														<div class="icon-bx-wraper center p-lr20 p-tb30">
															<div class="text-primary m-b30">
																<span class="icon-cell icon-sm"><i class="ti-brush-alt"></i></span>
															</div>
															<div class="icon-content">
																<h5 class="dlab-tilte text-white">Different Layout</h5>
																<p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
															</div>
														</div>
														<div class="icon-box-btn text-center">
															<a href="javascript:void(0);" class="site-button btn-block">Read More</a>
														</div>
													</div>
												</div>
												<div class="col-lg-3 col-md-6 col-sm-6">
													<div class="dlab-box-bg m-b30 box-hover style3" style={{ backgroundImage: "url(" + work4 + ")" }}>
														<div class="icon-bx-wraper center p-lr20 p-tb30">
															<div class="text-primary m-b30">
																<span class="icon-cell icon-sm"><i class="ti-mouse-alt"></i></span>
															</div>
															<div class="icon-content">
																<h5 class="dlab-tilte">True Responsiveness</h5>
																<p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
															</div>
														</div>
														<div class="icon-box-btn text-center">
															<a href="javascript:void(0);" class="site-button btn-block">Read More</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full bg-gray content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>icon box style 1 aligh left</h4>
										</div>
										<div class="section-content box-sort-in button-example p-b0">
											<div class="row">
												<div class="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div class="icon-bx-wraper bx-style-1 p-a20 left">
														<div class="icon-bx-xs bg-primary m-b20"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-alarm-clock"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit elit nonummy dolor is euismod end..</p>
														</div>
													</div>
												</div>
												<div class="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div class="icon-bx-wraper bx-style-1 p-a20 left">
														<div class="icon-bx-xs radius bg-primary"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-agenda"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit elit nonummy dolor is euismod end..</p>
														</div>
													</div>
												</div>
												<div class="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div class="icon-bx-wraper bx-style-1 p-a20 left">
														<div class="icon-bx-xs text-primary bg-white radius border-1 "> <a href="javascript:void(0);" class="icon-cell"><i class="ti-desktop"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit elit nonummy dolor is euismod end..</p>
														</div>
													</div>
												</div>
												<div class="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div class="icon-bx-wraper bx-style-1 p-a20 left">
														<div class="icon-sm text-primary m-b20"> <a href="javascript:void(0);" class="icon-cell text-primary"><i class="ti-world"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit elit nonummy dolor is euismod end..</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>icon box style 1 aligh right</h4>
										</div>
										<div class="section-content box-sort-in button-example p-b0">
											<div class="row">
												<div class="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div class="icon-bx-wraper bx-style-1 p-a20 right">
														<div class="icon-bx-xs bg-primary m-b20"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-ruler-pencil"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit elit nonummy dolor is euismod end..</p>
														</div>
													</div>
												</div>
												<div class="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div class="icon-bx-wraper bx-style-1 p-a20 right">
														<div class="icon-bx-xs radius bg-primary"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-desktop"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit elit nonummy dolor is euismod end..</p>
														</div>
													</div>
												</div>
												<div class="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div class="icon-bx-wraper bx-style-1 p-a20 right">
														<div class="icon-bx-xs text-primary bg-white radius border-1 "> <a href="javascript:void(0);" class="icon-cell"><i class="ti-palette"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit elit nonummy dolor is euismod end..</p>
														</div>
													</div>
												</div>
												<div class="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div class="icon-bx-wraper bx-style-1 p-a20 right">
														<div class="icon-sm text-primary m-b20"> <a href="javascript:void(0);" class="icon-cell text-primary"><i class="ti-gift"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit elit nonummy dolor is euismod end..</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full bg-gray content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>icon box style 2 aligh center</h4>
										</div>
										<div class="section-content box-sort-in button-example p-b0">
											<div class="row">
												<div class="col-lg-4 col-md-6 col-sms-6">
													<div class="icon-bx-wraper bx-style-2 m-t40 m-b30 p-a30 center">
														<div class="icon-bx-sm bg-primary m-b20"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-image"></i></a> </div>
														<div class="icon-content p-t40">
															<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6">
													<div class="icon-bx-wraper bx-style-2 m-t40 m-b30 p-a30 center">
														<div class="icon-bx-sm radius bg-primary m-b20"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-bar-chart"></i></a> </div>
														<div class="icon-content p-t40">
															<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-6">
													<div class="icon-bx-wraper bx-style-2 m-t40 m-b30 p-a30 center">
														<div class="icon-bx-sm text-primary bg-white radius border-1 m-b20"> <a href="javascript:void(0);" class="icon-cell text-primary"><i class="ti-face-smile"></i></a> </div>
														<div class="icon-content p-t40">
															<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>icon box style 2 aligh left</h4>
										</div>
										<div class="section-content box-sort-in button-example p-b0">
											<div class="row">
												<div class="col-lg-4 col-md-6 col-sm-12">
													<div class="icon-bx-wraper bx-style-2 m-l40 m-b30 p-a30 left">
														<div class="icon-bx-sm bg-primary m-b20"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-face-smile"></i></a> </div>
														<div class="icon-content p-l40">
															<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-12">
													<div class="icon-bx-wraper bx-style-2 m-l40 m-b30 p-a30 left">
														<div class="icon-bx-sm radius bg-primary"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-write"></i></a> </div>
														<div class="icon-content p-l40">
															<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-12">
													<div class="icon-bx-wraper bx-style-2 m-l40 m-b30 p-a30 left">
														<div class="icon-bx-sm text-primary bg-white radius border-1"> <a href="javascript:void(0);" class="icon-cell text-primary"><i class="ti-desktop"></i></a> </div>
														<div class="icon-content p-l40">
															<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full bg-gray content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>icon box style 2 aligh right</h4>
										</div>
										<div class="section-content box-sort-in p-a30 button-example p-b0">
											<div class="row">
												<div class="col-lg-4 col-md-6 col-sm-12">
													<div class="icon-bx-wraper bx-style-2 m-r40 m-b30 p-a30 right">
														<div class="icon-bx-sm bg-primary m-b20"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-face-smile"></i></a> </div>
														<div class="icon-content p-r40">
															<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-12">
													<div class="icon-bx-wraper bx-style-2 m-r40 m-b30 p-a30 right">
														<div class="icon-bx-sm radius bg-primary"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-calendar"></i></a> </div>
														<div class="icon-content p-r40">
															<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 col-sm-12">
													<div class="icon-bx-wraper bx-style-2 m-r40 m-b30 p-a30 right">
														<div class="icon-bx-sm text-primary bg-white radius border-1"> <a href="javascript:void(0);" class="icon-cell text-primary"><i class="ti-printer"></i></a> </div>
														<div class="icon-content p-r40">
															<h5 class="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
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

export default shortIconBoxStyles;
