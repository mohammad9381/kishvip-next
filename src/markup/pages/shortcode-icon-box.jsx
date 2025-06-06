import React, { Component } from 'react';
// import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

var bnr4 = require('/images/banner/bnr4.jpg');

class shortIconBox extends Component {


    render() {
        return (
            <>
                <Header />

                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
								<h1 class="text-white">Icon box</h1>
								<div class="breadcrumb-row">
									<ul class="list-inline">
										<li><a href="/">Home</a></li>
										<li>Element</li>
										<li>Icon box</li>
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
											<h4>Icon box center aligh</h4>
										</div>
										<div class="section-content box-sort-in p-b0 button-example">
											<div class="row">
												<div class="col-md-4 col-lg-4 m-b30">
													<div class="icon-bx-wraper center">
														<div class="icon-bx-sm bg-primary m-b20"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-user"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Square Box Center</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-md-4 col-lg-4 m-b30">
													<div class="icon-bx-wraper center">
														<div class="icon-bx-sm radius bg-blue m-b20"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-ruler-pencil"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Circle Box Center</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-md-4 col-lg-4 m-b30">
													<div class="icon-bx-wraper center">
														<div class="icon-bx-sm radius text-red border-2 m-b20"> <a href="javascript:void(0);" class="icon-cell text-red"><i class="ti-brush-alt"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Outline Box Center</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
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
											<h4>Icon box right aligh</h4>
										</div>
										<div class="section-content box-sort-in p-b0 button-example">
											<div class="row">
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper right">
														<div class="icon-bx-sm bg-yellow"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-user"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Square Box Right</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper right">
														<div class="icon-bx-sm radius bg-pink"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-ruler-pencil"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Circle Box Right</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper right">
														<div class="icon-bx-sm radius text-primary border-2"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-brush-alt"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Outline Box Right</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
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
											<h4>Icon box Left aligh</h4>
										</div>
										<div class="section-content box-sort-in p-b0 button-example">
											<div class="row">
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-bx-sm bg-green"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-gift"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Box Square SM</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-bx-sm bg-orange radius"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-headphone"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Box Circle SM</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-bx-sm text-black radius border-2"> <a href="javascript:void(0);" class="icon-cell text-black"><i class="ti-settings"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Box Outline SM</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
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
											<h4>Icon box center aligh</h4>
										</div>
										<div class="section-content box-sort-in p-b0 button-example">
											<div class="row">
												<div class="col-md-4 col-lg-4 m-b30">
													<div class="icon-bx-wraper center">
														<div class="icon-bx-sm text-primary border-1 m-b20"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-user"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Square Box Center</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-md-4 col-lg-4 m-b30">
													<div class="icon-bx-wraper center">
														<div class="icon-bx-sm radius border-1 text-blue m-b20"> <a href="javascript:void(0);" class="icon-cell text-blue"><i class="ti-ruler-pencil"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Circle Box Center</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-md-4 col-lg-4 m-b30">
													<div class="icon-bx-wraper center">
														<div class="icon-bx-sm text-red border-1 m-b20"> <a href="javascript:void(0);" class="icon-cell text-red"><i class="ti-brush-alt"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Outline Box Center</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
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
											<h4>Icon box</h4>
										</div>
										<div class="section-content box-sort-in p-b0 button-example">
											<div class="row">
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-bx-xl bg-blue"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-gift"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Box Square Xl</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-bx-xl bg-yellow radius"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-headphone"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Box Circle Xl</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-bx-xl text-primary radius border-5"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-settings"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Box Outline Xl</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="section-content box-sort-in p-b0 button-example">
											<div class="row">
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-bx-lg bg-blue"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-gift"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Box Square LG</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-bx-lg bg-yellow radius"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-headphone"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Box Circle LG</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-bx-lg text-primary radius border-4"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-settings"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Box Outline LG</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="section-content box-sort-in p-b0 button-example">
											<div class="row">
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-bx-md bg-blue"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-gift"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Box Square MD</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-bx-md bg-yellow radius"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-headphone"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Box Circle MD</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-bx-md text-primary radius border-3"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-settings"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Box Outline MD</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="section-content box-sort-in p-b0 button-example">
											<div class="row">
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-bx-sm bg-blue"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-gift"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Box Square SM</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-bx-sm bg-yellow radius"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-headphone"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Box Circle SM</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-bx-sm text-primary radius border-2"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-settings"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Box Outline SM</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="section-content box-sort-in p-b0 button-example">
											<div class="row">
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-bx-xs bg-blue"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-gift"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Box Square XS</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-bx-xs bg-yellow radius"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-headphone"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Box Circle XS</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-bx-xs text-primary radius border-1"> <a href="javascript:void(0);" class="icon-cell"><i class="ti-settings"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Box Outline XS</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
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
											<h4>Icon box</h4>
										</div>
										<div class="section-content box-sort-in p-b0 button-example">
											<div class="row">
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-xl text-primary"> <a href="javascript:void(0);" class="icon-cell text-yellow"><i class="ti-apple"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Icon Box XL</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-lg text-primary radius"> <a href="javascript:void(0);" class="icon-cell text-blue"><i class="ti-twitter"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Icon Box LG</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-12 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-md text-primary radius"> <a href="javascript:void(0);" class="icon-cell text-pink"><i class="ti-control-play"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Icon Box MD</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="section-content box-sort-in p-b0 button-example">
											<div class="row">
												<div class="col-lg-6 col-md-6 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-sm text-primary radius"> <a href="javascript:void(0);" class="icon-cell text-red"><i class="ti-video-clapper"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Icon Box SM</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-6 col-md-6 col-sm-12 m-b30">
													<div class="icon-bx-wraper left">
														<div class="icon-xs text-primary radius"> <a href="javascript:void(0);" class="icon-cell text-orange"><i class="ti-gift"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Icon Box XS</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
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
											<h4>Icon box center and right aligh</h4>
										</div>
										<div class="section-content box-sort-in p-b0 button-example">
											<div class="row">
												<div class="col-lg-4 col-md-4 col-sm-12 m-b30">
													<div class="icon-bx-wraper center">
														<div class="icon-sm text-orange m-b20"> <a href="javascript:void(0);" class="icon-cell text-orange"><i class="ti-ruler-pencil"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Icon Box Center</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-4 col-sm-12 m-b30">
													<div class="icon-bx-wraper right">
														<div class="icon-sm text-blue"> <a href="javascript:void(0);" class="icon-cell text-blue"><i class="ti-brush-alt"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Icon Box Right</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-4 col-sm-12 m-b30">
													<div class="icon-bx-wraper center">
														<div class="icon-sm text-orange m-b20"> <a href="javascript:void(0);" class="icon-cell text-orange"><i class="ti-ruler-pencil"></i></a> </div>
														<div class="icon-content">
															<h5 class="dlab-tilte text-capitalize">Icon Box Center</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
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

export default shortIconBox;
