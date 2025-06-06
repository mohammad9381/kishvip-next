import React, { Component } from 'react';
// import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

var bnr4 = require('/images/banner/bnr4.jpg');
var bg8 = require('/images/background/bg8.jpg');

class shortListGroup extends Component {


    render() {
        return (
            <>
                <Header />

                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
								<h1 class="text-white">List Groups</h1>
								<div class="breadcrumb-row">
									<ul class="list-inline">
										<li><a href="/">Home</a></li>
										<li>Element</li>
										<li>List Groups</li>
									</ul>
								</div>
							</div>
                        </div>
                    </div>

					<div class="bg-white">
						<div class="section-full bg-white content-inner bg-img-fix">
							<div class="container">
								<div class="row">
									<div class="col-md-12">
										<div class="sort-title clearfix text-center">
											<h4>Listing With Numbering &amp; Alfha </h4>
										</div>
										<div class="section-content box-sort-in m-b10 p-b0 button-example m-b30">
											<div class="row">
												<div class="col-md-4 col-lg-4">
													<ul class="list-star red list-box">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div class="col-md-4 col-lg-4 ">
													<ul class="list-cup primary list-box style1">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div class="col-md-4 col-lg-4">
													<ul class="list-heart primary list-box style2">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
											</div>
										</div>
										<div class="section-content box-sort-in m-b10 p-b0 button-example m-b30">
											<div class="row">
												<div class="col-md-4 col-lg-4">
													<ul class="list-star red rounded">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div class="col-md-4 col-lg-4">
													<ul class="list-cup primary reverse rounded">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div class="col-md-4 col-lg-4">
													<ul class="list-heart primary rounded border">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
											</div>
										</div>
										<div class="section-content box-sort-in m-b10 p-b0 button-example">
											<div class="max-w600 m-auto">
												<ul class="list-star reverse list-box ">
													<li>Create just what you need for your Perfect Website. </li>
													<li>Create just what you need for your Perfect Website. </li>
													<li>Create just what you need for your Perfect Website. </li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full bg-white content-inner overlay-black-dark bg-img-fix text-white" style={{ backgroundImage: "url(" + bg8 + ")" }}>
							<div class="container">
								<div class="row">
									<div class="col-md-12">
										<div class="sort-title clearfix text-center text-white">
											<h4>Listing With Numbering &amp; Alfha </h4>
										</div>
										<div class="section-content box-sort-in m-b10 p-b0 button-example m-b30 ">
											<div class="row">
												<div class="col-md-4 col-lg-4">
													<ul class="list-star red list-box">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div class="col-md-4 col-lg-4 ">
													<ul class="list-cup primary list-box style1">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div class="col-md-4 col-lg-4">
													<ul class="list-heart primary list-box style2">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
											</div>
										</div>
										<div class="section-content box-sort-in m-b10 p-b0 button-example m-b30">
											<div class="row">
												<div class="col-md-4 col-lg-4">
													<ul class="list-star red rounded">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div class="col-md-4 col-lg-4">
													<ul class="list-cup primary reverse rounded">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div class="col-md-4 col-lg-4">
													<ul class="list-heart primary rounded border">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
											</div>
										</div>
										<div class="section-content box-sort-in m-b10 p-b0 button-example">
											<div class="max-w600 m-auto">
												<ul class="list-star reverse list-box ">
													<li>Create just what you need for your Perfect Website. </li>
													<li>Create just what you need for your Perfect Website. </li>
													<li>Create just what you need for your Perfect Website. </li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-md-12">
										<div class="sort-title clearfix text-center">
											<h4>Listing with symbols</h4>
										</div>
										<div class="section-content box-sort-in m-b10 p-b0 button-example">
											<div class="row">
												<div class="col-md-4 col-lg-4 col-sm-6">
													<ul class="list-circle">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div class="col-md-4 col-lg-4 col-sm-6">
													<ul class="list-angle-right">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div class="col-md-4 col-lg-4 col-sm-6">
													<ul class="list-arrow">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<hr/>
												<div class="col-md-4 col-lg-4 col-sm-6">
													<ul  class="list-icon-box primary">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div class="col-md-4 col-lg-4 col-sm-6">
													<ul class="list-check secondry">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div class="col-md-4 col-lg-4 col-sm-6">
													<ul  class="list-checked black">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<hr/>
												<div class="col-md-4 col-lg-4 col-sm-6">
													<ul class="list-chevron-circle orange ">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div class="col-md-4 col-lg-4 col-sm-6">
													<ul class="list-hand-point green">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div class="col-md-4 col-lg-4 col-sm-6">
													<ul class="list-star red">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<hr/>
												<div class="col-md-4 col-lg-4 col-sm-6">
													<ul class="list-cup green">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div class="col-md-4 col-lg-4 col-sm-6">
													<ul class="list-pen red">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div class="col-md-4 col-lg-4 col-sm-6">
													<ul class="list-heart orange">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<hr/>
												<div class="col-lg-3 col-md-3 col-sm-6">
													<ol class="list-num-count no-round">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ol>
												</div>
												<div class="col-lg-3 col-md-3 col-sm-6">
													<ol class="list-num-count no-round upper-alpha">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ol>
												</div>
												<div class="col-lg-3 col-md-3 col-sm-6">
													<ol class="list-num-count no-round upper-roman">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ol>
												</div>
												<div class="col-lg-3 col-md-3 col-sm-6">
													<ol class="list-num-count no-round lower-alpha">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ol>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="dlab-divider bg-gray-dark"><i class="icon-dot c-square"></i></div>
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-md-12">
										<div class="sort-title clearfix text-center">
											<h4>Listing With Numbering &amp; Alfha </h4>
										</div>
										<div class="section-content box-sort-in m-b10 p-b0 button-example">
											<div class="row">
												<div class="col-md-4 col-lg-4 col-sm-6">
													<ol class="list-num-count">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ol>
												</div>
												<div class="col-md-4 col-lg-4 col-sm-6">
													<ol class="list-num-count upper-alpha">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ol>
												</div>
												<div class="col-md-4 col-lg-4 col-sm-6">
													<ol class="list-num-count lower-alpha">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ol>
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

export default shortListGroup;
