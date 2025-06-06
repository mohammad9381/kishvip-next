import React, { Component } from 'react';
// import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

var bnr4 = require('/images/banner/bnr4.jpg');

class shortAlertBox extends Component {


    render() {
        return (
            <>
                <Header />

                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
								<h1 class="text-white">Alert Box</h1>
								<div class="breadcrumb-row">
									<ul class="list-inline">
										<li><a href="index.html">Home</a></li>
										<li>Element</li>
										<li>Alert Box</li>
									</ul>
								</div>
							</div>
                        </div>
                    </div>
					<div class="bg-white alert-box-area">
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>Alert box</h4>
										</div>
										<div class="section-content box-sort-in m-b30">
											<div class="alert alert-success"> <strong>Success!</strong> Indicates a successful or positive action. </div>
											<div class="alert alert-info"> <strong>Info!</strong> Indicates a neutral informative change or action. </div>
											<div class="alert alert-warning"> <strong>Warning!</strong> Indicates a warning that might need attention. </div>
											<div class="alert alert-danger"> <strong>Danger!</strong> Indicates a dangerous or potentially negative action. </div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="dlab-divider bg-gray-dark"></div>
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>Alert box closable</h4>
										</div>
										<div class="section-content box-sort-in m-b30">
											<div class="alert alert-success"> <a href="javascript:void(0);" class="close ti-close" data-dismiss="alert" aria-label="close"></a> <strong>Success!</strong> This alert box could indicate a successful or positive action. </div>
											<div class="alert alert-info"> <a href="javascript:void(0);" class="close ti-close" data-dismiss="alert" aria-label="close"></a> <strong>Info!</strong> This alert box could indicate a neutral informative change or action. </div>
											<div class="alert alert-warning"> <a href="javascript:void(0);" class="close ti-close" data-dismiss="alert" aria-label="close"></a> <strong>Warning!</strong> This alert box could indicate a warning that might need attention. </div>
											<div class="alert alert-danger"> <a href="javascript:void(0);" class="close ti-close" data-dismiss="alert" aria-label="close"></a> <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action. </div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="dlab-divider bg-gray-dark"></div>
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>Alert box sizing</h4>
										</div>
										<div class="section-content box-sort-in m-b30">
											<div class="alert alert-success alert-sm"> <strong>Success!</strong> Indicates a successful or positive action. </div>
											<div class="alert alert-info"> <strong>Info!</strong> Indicates a neutral informative change or action. </div>
											<div class="alert alert-warning alert-lg"> <strong>Warning!</strong> Indicates a warning that might need attention. </div>
											<div class="alert alert-danger alert-xl"> <strong>Danger!</strong> Indicates a dangerous or potentially negative action. </div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="dlab-divider bg-gray-dark"></div>
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>Alert box with icon</h4>
										</div>
										<div class="section-content box-sort-in m-b30">
											<div class="alert alert-success"> <strong><i class="fa fa-thumbs-o-up"></i> Success!</strong> Indicates a successful or positive action. </div>
											<div class="alert alert-info"> <strong><i class="fa fa-info-circle"></i> Info!</strong> Indicates a neutral informative change or action. </div>
											<div class="alert alert-warning"> <strong><i class="fa fa-warning"></i> Warning!</strong> Indicates a warning that might need attention. </div>
											<div class="alert alert-danger"> <strong><i class="fa fa-remove"></i> Danger!</strong> Indicates a dangerous or potentially negative action. </div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="dlab-divider bg-gray-dark"></div>
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>Alert box no rounded</h4>
										</div>
										<div class="section-content box-sort-in m-b30">
											<div class="alert alert-success no-radius"> <strong>Success!</strong> Indicates a successful or positive action. </div>
											<div class="alert alert-info no-radius"> <strong>Info!</strong> Indicates a neutral informative change or action. </div>
											<div class="alert alert-warning no-radius"> <strong>Warning!</strong> Indicates a warning that might need attention. </div>
											<div class="alert alert-danger no-radius"> <strong>Danger!</strong> Indicates a dangerous or potentially negative action. </div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="dlab-divider bg-gray-dark"></div>
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>Alert box no background</h4>
										</div>
										<div class="section-content box-sort-in m-b30">
											<div class="alert alert-success no-bg"> <strong>Success!</strong> Indicates a successful or positive action. </div>
											<div class="alert alert-info no-bg"> <strong>Info!</strong> Indicates a neutral informative change or action. </div>
											<div class="alert alert-warning no-bg"> <strong>Warning!</strong> Indicates a warning that might need attention. </div>
											<div class="alert alert-danger no-bg"> <strong>Danger!</strong> Indicates a dangerous or potentially negative action. </div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="dlab-divider bg-gray-dark"></div>
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>Alert box with summery</h4>
										</div>
										<div class="section-content box-sort-in m-b30">
											<div class="alert alert-danger"> <strong><i class="fa fa-warning"></i>Danger!</strong> Indicates a dangerous or potentially negative action.
												<ul class="list-angle-right">
													<li>Please check your username.</li>
													<li>Please your password.</li>
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

export default shortAlertBox;
