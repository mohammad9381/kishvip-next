import React, { Component } from 'react';
// import Link  from 'next/link';
import Counter from '../element/counter';
import Header from '../layout/header'
import Footer from '../layout/footer'

var bnr4 = require('/images/banner/bnr4.jpg');
var bg1 = require('/images/background/bg1.jpg');
var bg2 = require('/images/background/bg2.jpg');

class shortCounters extends Component {

    render() {
        return (
            <>
                <Header />

                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
								<h1 class="text-white">Pagination</h1>
								<div class="breadcrumb-row">
									<ul class="list-inline">
										<li><a href="/">Home</a></li>
										<li>Element</li>
										<li>Pagination</li>
									</ul>
								</div>
							</div>
                        </div>
                    </div>

					<div class="content">
						<div class="section-full content-inner bg-white bg-img-fix">
							<div class="container">
								<div class="section-content">
									<div class="row">
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="counter-style-1">
												<div class="">
													<Counter count={7652}/>
												</div>
												<span class="counter-text">Completed Projects</span>
											</div>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="counter-style-1">
												<div class="">
													<Counter count={4562}/>
												</div>
												<span class="counter-text">Happy Clients</span>
											</div>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="counter-style-1">
												<div class="">
													<Counter count={3569}/>
												</div>
												<span class="counter-text">Questions Answered</span>
											</div>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="counter-style-1">
												<div class="">
													<Counter count={2089}/>
												</div>
												<span class="counter-text">Ordered Coffee's</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner bg-gray">
							<div class="container">
								<div class="section-content">
									 <div class="row">
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="counter-style-1">
												<div class="">
													<i class="icon flaticon-factory text-primary"></i>
													<Counter class="counter" count={7652}/>
												</div>
												<span class="counter-text">Completed Projects</span>
											</div>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="counter-style-1">
												<div class="">
													<i class="icon flaticon-worker text-primary"></i>
													<Counter count={4562}/>
												</div>
												<span class="counter-text">Happy Clients</span>
											</div>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="counter-style-1">
												<div class="">
													<i class="icon flaticon-settings text-primary"></i>
													<Counter count={3569}/>
												</div>
												<span class="counter-text">Questions Answered</span>
											</div>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="counter-style-1">
												<div class="">
													<i class="icon flaticon-conveyor text-primary"></i>
													<Counter count={2089}/>
												</div>
												<span class="counter-text">Ordered Coffee's</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner bg-white bg-img-fix">
							<div class="container">
								<div class="section-content">
									<div class="row">
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="m-b30 dlab-box text-center counter-style-2">
												<div class="icon-lg "><i class="flaticon-factory"></i></div>
												<div class="text-primary"><Counter count={7652}/></div>
												<span class="counter-text">Completed Projects</span>
											</div>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="m-b30 dlab-box text-center counter-style-2">
												<div class="icon-lg "><i class="flaticon-worker"></i></div>
												<div class="text-primary"><Counter count={4562}/></div>
												<span class="counter-text">Happy Clients</span>
											</div>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="m-b30 dlab-box text-center counter-style-2">
												<div class="icon-lg "><i class="flaticon-settings"></i></div>
												<div class="text-primary"><Counter count={3569}/></div>
												<span class="counter-text">Questions Answered</span>
											</div>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="m-b10 dlab-box text-center counter-style-2">
												<div class="icon-lg"><i class="flaticon-conveyor"></i></div>
												<div class="text-primary"><Counter count={2089}/></div>
												<span class="counter-text">Ordered Coffee's</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full overlay-black-dark bg-img-fix text-white content-inner" style={{ backgroundImage: "url(" + bg1 + ")" }}>
							<div class="container">
								<div class="section-content">
									<div class="row">
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="m-b30 dlab-box text-center counter-style-2">
												<div class="icon-lg "><i class="flaticon-factory"></i></div>
												<div class="text-blue"><Counter count={7652}/></div>
												<span class="counter-text">Completed Projects</span>
											</div>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="m-b30 dlab-box text-center counter-style-2">
												<div class="icon-lg "><i class="flaticon-worker"></i></div>
												<div class="text-blue"><Counter count={4562}/></div>
												<span class="counter-text">Happy Clients</span>
											</div>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="m-b30 dlab-box text-center counter-style-2">
												<div class="icon-lg "><i class="flaticon-settings"></i></div>
												<div class="text-blue"><Counter count={3569}/></div>
												<span class="counter-text">Questions Answered</span>
											</div>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="m-b10 dlab-box text-center counter-style-2">
												<div class="icon-lg "><i class="flaticon-conveyor"></i></div>
												<div class="text-blue"><Counter count={2089}/></div>
												<span class="counter-text">Ordered Coffee's</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner bg-white bg-img-fix">
							<div class="container">
								<div class="section-content">
									<div class="row">
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="counter-style-1">
												<div class="text-blue">
													<Counter count={7652}/>
												</div>
												<span class="counter-text">Completed Projects</span>
											</div>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="counter-style-1">
												<div class="text-red">
													<Counter count={4562}/>
												</div>
												<span class="counter-text">Happy Clients</span>
											</div>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="counter-style-1">
												<div class="text-yellow">
													<Counter count={3569}/>
												</div>
												<span class="counter-text">Questions Answered</span>
											</div>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="counter-style-1">
												<div class="text-pink">
													<Counter count={2089}/>
												</div>
												<span class="counter-text">Ordered Coffee's</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full overlay-black-dark bg-img-fix text-white content-inner" style={{ backgroundImage: "url(" + bg2 + ")" }}>
							<div class="container">
								<div class="section-content">
									<div class="row">
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="dis-tbl m-auto ">
												<div class="m-b30 dis-tbl-cell dlab-box text-center counter-style-3 rounded text-blue">
													<div class="text-blue">
														<Counter count={652}/>
													</div>
													<span class="counter-text text-white">Projects</span>
												</div>
											</div>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="dis-tbl m-auto">
												<div class="m-b30 dis-tbl-cell dlab-box text-center counter-style-3 rounded text-red">
													<div class="text-red">
														<Counter count={562}/>
													</div>
													<span class="counter-text text-white">Clients</span>
												</div>
											</div>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="dis-tbl m-auto">
												<div class="m-b30 dis-tbl-cell dlab-box text-center counter-style-3 rounded text-yellow">
													<div class="text-red">
														<Counter count={569}/>
													</div>
													<span class="counter-text text-white">Faqs</span>
												</div>
											</div>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="dis-tbl m-auto">
												<div class="m-b30 dis-tbl-cell dlab-box text-center counter-style-3 rounded text-pink">
													<div class="text-red">
														<Counter count={289}/>
													</div>
													<span class="counter-text text-white">Ordered</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner bg-white bg-img-fix text-center">
							<div class="container">
								<div class="section-content">
									<div class="row">
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="counter-style-4">
												<div class="">
													<Counter count={7652}/>
												</div>
												<span class="counter-text">Completed Projects</span>
											</div>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="counter-style-4">
												<div class="">
													<Counter count={4562}/>
												</div>
												<span class="counter-text">Happy Clients</span>
											</div>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="counter-style-4">
												<div class="">
													<Counter count={3569}/>
												</div>
												<span class="counter-text">Questions Answered</span>
											</div>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div class="counter-style-4">
												<div class="">
													<Counter count={2089}/>
												</div>
												<span class="counter-text">Ordered Coffee's</span>
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

export default shortCounters;
