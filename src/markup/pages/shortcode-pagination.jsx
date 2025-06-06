import React, { Component } from 'react';
// import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

var bnr4 = require('/images/banner/bnr4.jpg');

class shortPagination extends Component {

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

					<div class="bg-white">
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-6 col-md-12">
										<h4>Pagination Style</h4>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="active"><a href="javascript:void(0);">1</a></li>
													<li><a href="javascript:void(0);">2</a></li>
													<li><a href="javascript:void(0);">3</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx primary clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="active"><a href="javascript:void(0);">1</a></li>
													<li><a href="javascript:void(0);">2</a></li>
													<li><a href="javascript:void(0);">3</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx rounded-sm clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="active"><a href="javascript:void(0);">1</a></li>
													<li><a href="javascript:void(0);">2</a></li>
													<li><a href="javascript:void(0);">3</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx rounded-sm primary clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="active"><a href="javascript:void(0);">1</a></li>
													<li><a href="javascript:void(0);">2</a></li>
													<li><a href="javascript:void(0);">3</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx rounded clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="active"><a href="javascript:void(0);">1</a></li>
													<li><a href="javascript:void(0);">2</a></li>
													<li><a href="javascript:void(0);">3</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx rounded primary clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="active"><a href="javascript:void(0);">1</a></li>
													<li><a href="javascript:void(0);">2</a></li>
													<li><a href="javascript:void(0);">3</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i></a></li>
													<li class="active"><a href="javascript:void(0);">1</a></li>
													<li><a href="javascript:void(0);">2</a></li>
													<li><a href="javascript:void(0);">3</a></li>
													<li class="next"><a href="javascript:void(0);"><i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx primary clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i></a></li>
													<li class="active"><a href="javascript:void(0);">1</a></li>
													<li><a href="javascript:void(0);">2</a></li>
													<li><a href="javascript:void(0);">3</a></li>
													<li class="next"><a href="javascript:void(0);"><i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx rounded clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx rounded primary clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx primary clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx primary clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="next pull-right"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx gray clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="active"><a href="javascript:void(0);">1</a></li>
													<li><a href="javascript:void(0);">2</a></li>
													<li><a href="javascript:void(0);">3</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx gray clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
									</div>
									<div class="col-lg-6 col-md-12">
										<h4>Pagination Size</h4>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx pagination-sm clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="active"><a href="javascript:void(0);">1</a></li>
													<li><a href="javascript:void(0);">2</a></li>
													<li><a href="javascript:void(0);">3</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="active"><a href="javascript:void(0);">1</a></li>
													<li><a href="javascript:void(0);">2</a></li>
													<li><a href="javascript:void(0);">3</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx pagination-lg clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="active"><a href="javascript:void(0);">1</a></li>
													<li><a href="javascript:void(0);">2</a></li>
													<li><a href="javascript:void(0);">3</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx pagination-sm primary clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="active"><a href="javascript:void(0);">1</a></li>
													<li><a href="javascript:void(0);">2</a></li>
													<li><a href="javascript:void(0);">3</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx clearfix primary">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="active"><a href="javascript:void(0);">1</a></li>
													<li><a href="javascript:void(0);">2</a></li>
													<li><a href="javascript:void(0);">3</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx pagination-lg clearfix primary">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="active"><a href="javascript:void(0);">1</a></li>
													<li><a href="javascript:void(0);">2</a></li>
													<li><a href="javascript:void(0);">3</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx rounded pagination-sm clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="active"><a href="javascript:void(0);">1</a></li>
													<li><a href="javascript:void(0);">2</a></li>
													<li><a href="javascript:void(0);">3</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx rounded clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="active"><a href="javascript:void(0);">1</a></li>
													<li><a href="javascript:void(0);">2</a></li>
													<li><a href="javascript:void(0);">3</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx rounded pagination-lg clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="active"><a href="javascript:void(0);">1</a></li>
													<li><a href="javascript:void(0);">2</a></li>
													<li><a href="javascript:void(0);">3</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx rounded pagination-sm primary clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="active"><a href="javascript:void(0);">1</a></li>
													<li><a href="javascript:void(0);">2</a></li>
													<li><a href="javascript:void(0);">3</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx rounded clearfix primary">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="active"><a href="javascript:void(0);">1</a></li>
													<li><a href="javascript:void(0);">2</a></li>
													<li><a href="javascript:void(0);">3</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx rounded pagination-lg clearfix primary">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="active"><a href="javascript:void(0);">1</a></li>
													<li><a href="javascript:void(0);">2</a></li>
													<li><a href="javascript:void(0);">3</a></li>
													<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in pagination-sm m-b15">
											<div class="pagination-bx rounded-sm clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="next pull-right"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx primary rounded clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="next pull-right"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="section-content box-sort-in m-b15">
											<div class="pagination-bx rounded pagination-lg clearfix">
												<ul class="pagination">
													<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
													<li class="next pull-right"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
												</ul>
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

export default shortPagination;
