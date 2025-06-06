import React, { Component } from 'react';
// import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

var bnr4 = require('/images/banner/bnr4.jpg');

class shortPricingTable extends Component {


    render() {
        return (
            <>
                <Header />

                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
								<h1 class="text-white">Pricing Table</h1>
								<div class="breadcrumb-row">
									<ul class="list-inline">
										<li><a href="/">Home</a></li>
										<li>Element</li>
										<li>Pricing Table</li>
									</ul>
								</div>
							</div>
                        </div>
                    </div>
					<div class="bg-white pricing-table-box-area">
						<div class="section-full bg-white content-inner-2">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>Pricing table-1 Columns 3 with gap</h4>
										</div>
										<div class="section-content box-sort-in button-example m-t80">
											<div class="pricingtable-row">
												<div class="row max-w1000 m-auto">
													<div class="col-sm-12 col-md-4 col-lg-4 p-lr0">
														<div class="pricingtable-wrapper style2 bg-white">
															<div class="pricingtable-inner">
																<div class="pricingtable-price">
																	<h4 class="font-weight-300 m-t10 m-b0">Basic</h4>
																	<div class="pricingtable-bx"><span>Free</span></div>
																</div>
																<p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
																<div class="m-t20">
																	<a href="javascript:void(0);" class="site-button radius-xl"><span class="p-lr30">Sign Up</span></a>
																</div>
															</div>
														</div>
													</div>
													<div class="col-sm-12 col-md-4 col-lg-4 p-lr0">
														<div class="pricingtable-wrapper style2 bg-primary text-white active">
															<div class="pricingtable-inner">
																<div class="pricingtable-price">
																	<h4 class="font-weight-300 m-t10 m-b0">Professional</h4>
																	<div class="pricingtable-bx"> $ <span>29</span> /  Per Installation </div>
																</div>
																<p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
																<div class="m-t20">
																	<a href="javascript:void(0);" class="site-button white radius-xl"><span class="p-lr30">Sign Up</span></a>
																</div>
															</div>
														</div>
													</div>
													<div class="col-sm-12 col-md-4 col-lg-4 p-lr0">
														<div class="pricingtable-wrapper style2 bg-white">
															<div class="pricingtable-inner">
																<div class="pricingtable-price">
																	<h4 class="font-weight-300 m-t10 m-b0">Extended</h4>
																	<div class="pricingtable-bx"> $  <span>29</span> /  Per Installation </div>
																</div>
																<p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
																<div class="m-t20">
																	<a href="javascript:void(0);" class="site-button radius-xl"><span class="p-lr30">Sign Up</span></a>
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
						<div class="dlab-divider bg-gray-dark tb10"><i class="icon-dot c-square"></i></div>
						<div class="section-full bg-white content-inner-2">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>Pricing table-1 Columns 3 with gap</h4>
										</div>
										<div class="section-content box-sort-in button-example">
											<div class="pricingtable-row">
												<div class="row max-w1000 m-auto">
													<div class="col-sm-12 col-md-4 col-lg-4 p-lr0">
														<div class="pricingtable-wrapper style1">
															<div class="pricingtable-inner">
																<div class="pricingtable-price">
																	<div class="pricingtable-icon"><i class="flaticon-factory"></i></div>
																	<h4 class="font-weight-300 m-t10 m-b0">Starter</h4>
																	<span class="pricingtable-bx text-primary">$25</span> <span class="pricingtable-type">Par Month</span>
																</div>
																<ul class="pricingtable-features">
																	<li><i class="fa fa-check text-primary"></i> Full Responsive </li>
																	<li><i class="fa fa-check text-primary"></i> Multi color theme</li>
																	<li><i class="fa fa-check text-primary"></i> With Bootstrap</li>
																	<li><i class="fa fa-check text-primary"></i> Easy to customize</li>
																	<li><i class="fa fa-check text-primary"></i> Many Sortcodes</li>
																</ul>
																<div class="m-t20">
																	<a href="javascript:void(0);" class="site-button outline outline-2 button-md">Sign Up</a>
																</div>
															</div>
														</div>
													</div>
													<div class="col-sm-12 col-md-4 col-lg-4 p-lr0">
														<div class="pricingtable-wrapper style1">
															<div class="pricingtable-inner">
																<div class="pricingtable-price">
																	<div class="pricingtable-icon"><i class="flaticon-engineer"></i></div>
																	<h4 class="font-weight-300 m-t10 m-b0">Professional</h4>
																	<span class="pricingtable-bx text-primary">$50</span> <span class="pricingtable-type">Par Month</span>
																</div>
																<ul class="pricingtable-features">
																	<li><i class="fa fa-check text-primary"></i> Full Responsive </li>
																	<li><i class="fa fa-check text-primary"></i> Multi color theme</li>
																	<li><i class="fa fa-check text-primary"></i> With Bootstrap</li>
																	<li><i class="fa fa-check text-primary"></i> Easy to customize</li>
																	<li><i class="fa fa-check text-primary"></i> Many Sortcodes</li>
																</ul>
																<div class="m-t20 m-b5">
																	<a href="javascript:void(0);" class="site-button button-md">Sign Up</a>
																</div>
															</div>
														</div>
													</div>
													<div class="col-sm-12 col-md-4 col-lg-4 p-lr0">
														<div class="pricingtable-wrapper style1">
															<div class="pricingtable-inner">
																<div class="pricingtable-price">
																	<div class="pricingtable-icon"><i class="flaticon-factory-2"></i></div>
																	<h4 class="font-weight-300 m-t10 m-b0">Enterprise</h4>
																	<span class="pricingtable-bx text-primary">$75</span> <span class="pricingtable-type">Par Month</span>
																</div>
																<ul class="pricingtable-features">
																	<li><i class="fa fa-check text-primary"></i> Full Responsive </li>
																	<li><i class="fa fa-check text-primary"></i> Multi color theme</li>
																	<li><i class="fa fa-check text-primary"></i> With Bootstrap</li>
																	<li><i class="fa fa-check text-primary"></i> Easy to customize</li>
																	<li><i class="fa fa-check text-primary"></i> Many Sortcodes</li>
																</ul>
																<div class="m-t20">
																	<a href="javascript:void(0);" class="site-button outline outline-2 button-md">Sign Up</a>
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
						<div class="dlab-divider bg-gray-dark tb10"><i class="icon-dot c-square"></i></div>

						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix  text-center">
											<h4>Pricing table-1 Columns 3 with gap</h4>
										</div>
										<div class="section-content box-sort-in button-example p-tb50">
											<div class="pricingtable-row">
												<div class="row">
													<div class="col-sm-12 col-md-4 col-lg-4">
														<div class="pricingtable-wrapper">
															<div class="pricingtable-inner">
																<div class="pricingtable-price"> <span class="pricingtable-bx">$10</span> <span class="pricingtable-type">Month</span> </div>
																<div class="pricingtable-title bg-primary">
																	<h2>Basic</h2>
																</div>
																<ul class="pricingtable-features">
																	<li><i class="fa fa-check"></i> Full Responsive </li>
																	<li><i class="fa fa-check"></i> Multi color theme</li>
																	<li><i class="fa fa-check"></i> With Bootstrap</li>
																	<li><i class="fa fa-check"></i> Easy to customize</li>
																	<li><i class="fa fa-check"></i> Many Sortcodes</li>
																</ul>
																<div class="pricingtable-footer"> <a href="javascript:void(0);" class="site-button ">Sign Up</a> </div>
															</div>
														</div>
													</div>
													<div class="col-sm-12 col-md-4 col-lg-4">
														<div class="pricingtable-wrapper">
															<div class="pricingtable-inner pricingtable-highlight">
																<div class="pricingtable-price"> <span class="pricingtable-bx">$12</span> <span class="pricingtable-type">Month</span> </div>
																<div class="pricingtable-title bg-primary">
																	<h2>Basic</h2>
																</div>
																<ul class="pricingtable-features">
																	<li><i class="fa fa-check"></i> Full Responsive </li>
																	<li><i class="fa fa-check"></i> Multi color theme</li>
																	<li><i class="fa fa-check"></i> With Bootstrap</li>
																	<li><i class="fa fa-check"></i> Easy to customize</li>
																	<li><i class="fa fa-check"></i> Many Sortcodes</li>
																</ul>
																<div class="pricingtable-footer"> <a href="javascript:void(0);" class="site-button ">Sign Up</a> </div>
															</div>
														</div>
													</div>
													<div class="col-sm-12 col-md-4 col-lg-4">
														<div class="pricingtable-wrapper">
															<div class="pricingtable-inner">
																<div class="pricingtable-price"> <span class="pricingtable-bx">$18</span> <span class="pricingtable-type">Month</span> </div>
																<div class="pricingtable-title bg-primary">
																	<h2>Basic</h2>
																</div>
																<ul class="pricingtable-features">
																	<li><i class="fa fa-check"></i> Full Responsive </li>
																	<li><i class="fa fa-check"></i> Multi color theme</li>
																	<li><i class="fa fa-check"></i> With Bootstrap</li>
																	<li><i class="fa fa-check"></i> Easy to customize</li>
																	<li><i class="fa fa-check"></i> Many Sortcodes</li>
																</ul>
																<div class="pricingtable-footer"> <a href="javascript:void(0);" class="site-button">Sign Up</a> </div>
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
						<div class="dlab-divider bg-gray-dark tb10"><i class="icon-dot c-square"></i></div>
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix pricing-table-title text-center">
											<h4>Pricing table-1 Columns 3 with no gap</h4>
										</div>
										<div class="section-content box-sort-in button-example m-b10 p-t50">
											<div class="pricingtable-row m-b30 p-lr15 no-col-gap">
												<div class="row">
													<div class="col-sm-12 col-md-4 col-lg-4">
														<div class="pricingtable-wrapper">
															<div class="pricingtable-inner">
																<div class="pricingtable-price"> <span class="pricingtable-bx">$10</span> <span class="pricingtable-type">Month</span> </div>
																<div class="pricingtable-title bg-primary">
																	<h2>Basic</h2>
																</div>
																<ul class="pricingtable-features">
																	<li><i class="fa fa-check"></i> Full Responsive </li>
																	<li><i class="fa fa-check"></i> Multi color theme</li>
																	<li><i class="fa fa-check"></i> With Bootstrap</li>
																	<li><i class="fa fa-check"></i> Easy to customize</li>
																	<li><i class="fa fa-check"></i> Many Sortcodes</li>
																</ul>
																<div class="pricingtable-footer"> <a href="javascript:void(0);" class="site-button ">Sign Up</a> </div>
															</div>
														</div>
													</div>
													<div class="col-sm-12 col-md-4 col-lg-4">
														<div class="pricingtable-wrapper">
															<div class="pricingtable-inner pricingtable-highlight">
																<div class="pricingtable-price"> <span class="pricingtable-bx">$12</span> <span class="pricingtable-type">Month</span> </div>
																<div class="pricingtable-title bg-primary">
																	<h2>Basic</h2>
																</div>
																<ul class="pricingtable-features">
																	<li><i class="fa fa-check"></i> Full Responsive </li>
																	<li><i class="fa fa-check"></i> Multi color theme</li>
																	<li><i class="fa fa-check"></i> With Bootstrap</li>
																	<li><i class="fa fa-check"></i> Easy to customize</li>
																	<li><i class="fa fa-check"></i> Many Sortcodes</li>
																</ul>
																<div class="pricingtable-footer"> <a href="javascript:void(0);" class="site-button ">Sign Up</a> </div>
															</div>
														</div>
													</div>
													<div class="col-sm-12 col-md-4 col-lg-4">
														<div class="pricingtable-wrapper">
															<div class="pricingtable-inner">
																<div class="pricingtable-price"> <span class="pricingtable-bx">$18</span> <span class="pricingtable-type">Month</span> </div>
																<div class="pricingtable-title bg-primary">
																	<h2>Basic</h2>
																</div>
																<ul class="pricingtable-features">
																	<li><i class="fa fa-check"></i> Full Responsive </li>
																	<li><i class="fa fa-check"></i> Multi color theme</li>
																	<li><i class="fa fa-check"></i> With Bootstrap</li>
																	<li><i class="fa fa-check"></i> Easy to customize</li>
																	<li><i class="fa fa-check"></i> Many Sortcodes</li>
																</ul>
																<div class="pricingtable-footer"> <a href="javascript:void(0);" class="site-button ">Sign Up</a> </div>
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
					   <div class="dlab-divider bg-gray-dark tb10"><i class="icon-dot c-square"></i></div>
					   <div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title pricing-table-title clearfix text-center">
											<h4>Pricing table-1 Columns 4 with gap</h4>
										</div>
										<div class="section-content box-sort-in button-example p-tb30 pricing-table-col-gap">
											<div class="pricingtable-row m-b30">
												<div class="row">
													<div class="col-sm-6 col-md-6 col-lg-3 m-t30">
														<div class="pricingtable-wrapper">
															<div class="pricingtable-inner">
																<div class="pricingtable-price"> <span class="pricingtable-bx">$10</span> <span class="pricingtable-type">Month</span> </div>
																<div class="pricingtable-title bg-primary">
																	<h2>Basic</h2>
																</div>
																<ul class="pricingtable-features">
																	<li><i class="fa fa-check"></i> Full Responsive </li>
																	<li><i class="fa fa-check"></i> Multi color theme</li>
																	<li><i class="fa fa-check"></i> With Bootstrap</li>
																	<li><i class="fa fa-check"></i> Easy to customize</li>
																	<li><i class="fa fa-check"></i> Many Sortcodes</li>
																</ul>
																<div class="pricingtable-footer"> <a href="javascript:void(0);" class="site-button ">Sign Up</a> </div>
															</div>
														</div>
													</div>
													<div class="col-sm-6 col-md-6 col-lg-3 m-t30">
														<div class="pricingtable-wrapper">
															<div class="pricingtable-inner pricingtable-highlight">
																<div class="pricingtable-price"> <span class="pricingtable-bx">$12</span> <span class="pricingtable-type">Month</span> </div>
																<div class="pricingtable-title bg-primary">
																	<h2>Basic</h2>
																</div>
																<ul class="pricingtable-features">
																	<li><i class="fa fa-check"></i> Full Responsive </li>
																	<li><i class="fa fa-check"></i> Multi color theme</li>
																	<li><i class="fa fa-check"></i> With Bootstrap</li>
																	<li><i class="fa fa-check"></i> Easy to customize</li>
																	<li><i class="fa fa-check"></i> Many Sortcodes</li>
																</ul>
																<div class="pricingtable-footer"> <a href="javascript:void(0);" class="site-button ">Sign Up</a> </div>
															</div>
														</div>
													</div>
													<div class="col-sm-6 col-md-6 col-lg-3 m-t30">
														<div class="pricingtable-wrapper">
															<div class="pricingtable-inner">
																<div class="pricingtable-price"> <span class="pricingtable-bx">$18</span> <span class="pricingtable-type">Month</span> </div>
																<div class="pricingtable-title bg-primary">
																	<h2>Basic</h2>
																</div>
																<ul class="pricingtable-features">
																	<li><i class="fa fa-check"></i> Full Responsive </li>
																	<li><i class="fa fa-check"></i> Multi color theme</li>
																	<li><i class="fa fa-check"></i> With Bootstrap</li>
																	<li><i class="fa fa-check"></i> Easy to customize</li>
																	<li><i class="fa fa-check"></i> Many Sortcodes</li>
																</ul>
																<div class="pricingtable-footer"> <a href="javascript:void(0);" class="site-button ">Sign Up</a> </div>
															</div>
														</div>
													</div>
													<div class="col-sm-6 col-md-6 col-lg-3 m-t30">
														<div class="pricingtable-wrapper">
															<div class="pricingtable-inner">
																<div class="pricingtable-price"> <span class="pricingtable-bx">$23</span> <span class="pricingtable-type">Month</span> </div>
																<div class="pricingtable-title bg-primary">
																	<h2>Basic</h2>
																</div>
																<ul class="pricingtable-features">
																	<li><i class="fa fa-check"></i> Full Responsive </li>
																	<li><i class="fa fa-check"></i> Multi color theme</li>
																	<li><i class="fa fa-check"></i> With Bootstrap</li>
																	<li><i class="fa fa-check"></i> Easy to customize</li>
																	<li><i class="fa fa-check"></i> Many Sortcodes</li>
																</ul>
																<div class="pricingtable-footer"> <a href="javascript:void(0);" class="site-button ">Sign Up</a> </div>
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
					   <div class="dlab-divider bg-gray-dark tb10"><i class="icon-dot c-square"></i></div>
					   <div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title   clearfix text-center">
											<h4>Pricing table-1 Columns 4 with no gap</h4>
										</div>
										<div class="section-content box-sort-in button-example p-tb30">
											<div class="pricingtable-row m-b30 p-lr15 no-col-gap">
												<div class="row">
													<div class="col-sm-6 col-md-3 col-lg-3">
														<div class="pricingtable-wrapper">
															<div class="pricingtable-inner">
																<div class="pricingtable-price"> <span class="pricingtable-bx">$10</span> <span class="pricingtable-type">Month</span> </div>
																<div class="pricingtable-title bg-primary">
																	<h2>Basic</h2>
																</div>
																<ul class="pricingtable-features">
																	<li><i class="fa fa-check"></i> Full Responsive </li>
																	<li><i class="fa fa-check"></i> Multi color theme</li>
																	<li><i class="fa fa-check"></i> With Bootstrap</li>
																	<li><i class="fa fa-check"></i> Easy to customize</li>
																	<li><i class="fa fa-check"></i> Many Sortcodes</li>
																</ul>
																<div class="pricingtable-footer"> <a href="javascript:void(0);" class="site-button ">Sign Up</a> </div>
															</div>
														</div>
													</div>
													<div class="col-sm-6 col-md-3 col-lg-3">
														<div class="pricingtable-wrapper">
															<div class="pricingtable-inner pricingtable-highlight">
																<div class="pricingtable-price"> <span class="pricingtable-bx">$12</span> <span class="pricingtable-type">Month</span> </div>
																<div class="pricingtable-title bg-primary">
																	<h2>Basic</h2>
																</div>
																<ul class="pricingtable-features">
																	<li><i class="fa fa-check"></i> Full Responsive </li>
																	<li><i class="fa fa-check"></i> Multi color theme</li>
																	<li><i class="fa fa-check"></i> With Bootstrap</li>
																	<li><i class="fa fa-check"></i> Easy to customize</li>
																	<li><i class="fa fa-check"></i> Many Sortcodes</li>
																</ul>
																<div class="pricingtable-footer"> <a href="javascript:void(0);" class="site-button ">Sign Up</a> </div>
															</div>
														</div>
													</div>
													<div class="col-sm-6 col-md-3 col-lg-3">
														<div class="pricingtable-wrapper">
															<div class="pricingtable-inner">
																<div class="pricingtable-price"> <span class="pricingtable-bx">$18</span> <span class="pricingtable-type">Month</span> </div>
																<div class="pricingtable-title bg-primary">
																	<h2>Basic</h2>
																</div>
																<ul class="pricingtable-features">
																	<li><i class="fa fa-check"></i> Full Responsive </li>
																	<li><i class="fa fa-check"></i> Multi color theme</li>
																	<li><i class="fa fa-check"></i> With Bootstrap</li>
																	<li><i class="fa fa-check"></i> Easy to customize</li>
																	<li><i class="fa fa-check"></i> Many Sortcodes</li>
																</ul>
																<div class="pricingtable-footer"> <a href="javascript:void(0);" class="site-button ">Sign Up</a> </div>
															</div>
														</div>
													</div>
													<div class="col-sm-6 col-md-3 col-lg-3">
														<div class="pricingtable-wrapper">
															<div class="pricingtable-inner">
																<div class="pricingtable-price"> <span class="pricingtable-bx">$23</span> <span class="pricingtable-type">Month</span> </div>
																<div class="pricingtable-title bg-primary">
																	<h2>Basic</h2>
																</div>
																<ul class="pricingtable-features">
																	<li><i class="fa fa-check"></i> Full Responsive </li>
																	<li><i class="fa fa-check"></i> Multi color theme</li>
																	<li><i class="fa fa-check"></i> With Bootstrap</li>
																	<li><i class="fa fa-check"></i> Easy to customize</li>
																	<li><i class="fa fa-check"></i> Many Sortcodes</li>
																</ul>
																<div class="pricingtable-footer"> <a href="javascript:void(0);" class="site-button ">Sign Up</a> </div>
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

                </div>

                <Footer />
            </>
        )
    }
}

export default shortPricingTable;
