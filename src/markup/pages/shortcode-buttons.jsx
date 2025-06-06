import React, { Component } from 'react';
// import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

var bnr4 = require('/images/banner/bnr4.jpg');
var bg1 = require('/images/background/bg1.jpg');
var bg2 = require('/images/background/bg2.jpg');
var bg3 = require('/images/background/bg3.jpg');

class shortButtons extends Component {


    render() {
        return (
            <>
                <Header />

                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry align-m text-center">
                                <h1 class="text-white">Buttons</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
										<li><a href="index">Home</a></li>
										<li>Element</li>
										<li>Buttons</li>
									</ul>
                                </div>
                            </div>
                        </div>
                    </div>
					<div class="text-center">
						<div class="section-full content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix">
											<h4>Basic Buttons</h4>
										</div>
										<div class="section-content box-sort-in  button-example m-b30">
											<button class="btn btn-secondary" type="button">Default</button>
											<button class="btn btn-primary" type="button">Primary</button>
											<button class="btn btn-success" type="button">Success</button>
											<button class="btn btn-info" type="button">Info</button>
											<button class="btn btn-warning" type="button">Warning</button>
											<button class="btn btn-danger" type="button">Danger</button>
											<button class="btn btn-link" type="button">Link</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner bg-black-light">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix text-white">
											<h4>Basic Buttons Outline</h4>
										</div>
										<div class="section-content box-sort-in  button-example m-b30">
											<button class="btn btn-outline-secondary" type="button">Default</button>
											<button class="btn btn-outline-primary" type="button">Primary</button>
											<button class="btn btn-outline-success" type="button">Success</button>
											<button class="btn btn-outline-info" type="button">Info</button>
											<button class="btn btn-outline-warning" type="button">Warning</button>
											<button class="btn btn-outline-danger" type="button">Danger</button>
											<button class="btn btn-outline-link" type="button">Link</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix">
											<h4>Basic Buttons Size</h4>

										</div>
										<div class="section-content box-sort-in  button-example m-b30">
											<button type="button" class="btn btn-primary btn-lg">Large button</button>
											<button type="button" class="btn btn-secondary btn-lg">Large button</button>
											<button type="button" class="btn btn-primary">Large button</button>
											<button type="button" class="btn btn-secondary">Large button</button>
											<button type="button" class="btn btn-primary btn-sm">Large button</button>
											<button type="button" class="btn btn-secondary btn-sm">Large button</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner bg-gray bg-img-fix overlay-black-dark" style={{ backgroundImage: "url(" + bg2 + ")" }}>
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix text-white">
											<h4>Basic Buttons Size</h4>

										</div>
										<div class="section-content box-sort-in  button-example m-b30">
											<button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
											<button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix ">
											<h4>Basic Buttons Radio </h4>

										</div>
										<div class="section-content box-sort-in m-b30 ">
											<div class="btn-group m-b10" data-toggle="buttons">
											  <label class="btn btn-primary active">
												<input type="radio" name="options"  checked/> Radio 1
											  </label>
											  <label class="btn btn-primary">
												<input type="radio" name="options" /> Radio 2
											  </label>
											  <label class="btn btn-primary">
												<input type="radio" name="options" /> Radio 3
											  </label>
											</div>
											<div class="btn-group  m-b10" data-toggle="buttons">
											  <label class="btn site-button red active">
												<input type="radio" name="options"  checked /> Radio 1
											  </label>
											  <label class="btn site-button red">
												<input type="radio" name="options"  /> Radio 2
											  </label>
											  <label class="btn site-button red">
												<input type="radio" name="options"  /> Radio 3
											  </label>
											</div>
											<div class="btn-group  m-b10" data-toggle="buttons">
											  <label class="btn site-button yellow active">
												<input type="radio" name="options"  checked /> Radio 1
											  </label>
											  <label class="btn site-button yellow">
												<input type="radio" name="options"  /> Radio 2
											  </label>
											  <label class="btn site-button yellow">
												<input type="radio" name="options"  /> Radio 3
											  </label>
											</div>
											<div class="btn-group m-b10" data-toggle="buttons">
											  <label class="btn site-button blue active">
												<input type="radio" name="options"  checked /> Radio 1
											  </label>
											  <label class="btn site-button blue">
												<input type="radio" name="options"  /> Radio 2
											  </label>
											  <label class="btn site-button blue">
												<input type="radio" name="options"  /> Radio 3
											  </label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner bg-black-light">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix text-white" >
											<h4>Basic Buttons Checkbox </h4>
										</div>
										<div class="section-content box-sort-in m-b30 ">
											<div class="btn-group flex-wrap m-b10" data-toggle="buttons">
												<label class="btn btn-primary active">
													<input type="checkbox" checked /> Checkbox 1
												</label>
												<label class="btn btn-primary">
													<input type="checkbox" /> Checkbox 2
												</label>
												<label class="btn btn-primary">
													<input type="checkbox" /> Checkbox 3
												</label>
											</div>

											<div class="btn-group flex-wrap m-b10" data-toggle="buttons">
												<label class="btn site-button red active">
													<input type="checkbox" checked /> Checkbox 1
												</label>
												<label class="btn site-button red">
													<input type="checkbox" /> Checkbox 2
												</label>
												<label class="btn site-button red">
													<input type="checkbox" /> Checkbox 3
												</label>
											</div>

											<div class="btn-group flex-wrap m-b10" data-toggle="buttons">
												<label class="btn site-button blue active">
													<input type="checkbox" checked /> Checkbox 1
												</label>
												<label class="btn site-button blue">
													<input type="checkbox" /> Checkbox 2
												</label>
												<label class="btn site-button blue">
													<input type="checkbox" /> Checkbox 3
												</label>
											</div>

											<div class="btn-group flex-wrap m-b10" data-toggle="buttons">
												<label class="btn site-button yellow active">
													<input type="checkbox" checked /> Checkbox 1
												</label>
												<label class="btn site-button yellow">
													<input type="checkbox" /> Checkbox 2
												</label>
												<label class="btn site-button yellow">
													<input type="checkbox" /> Checkbox 3
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix">
											<h4>Theme Button Pramary & Secondry</h4>

										</div>
										<div class="section-content box-sort-in  button-example m-b30">
											<button class="site-button m-r15" type="button">Site Button</button>
											<button class="site-button-secondry" type="button">Site Button secondry</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner bg-black-light">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix text-white">
											<h4>Theme Button Size</h4>

										</div>
										<div class="section-content box-sort-in  button-example m-b30">
											<button class="site-button button-xl m-r15" type="button">Button extra large</button>
											<button class="site-button button-lg m-r15" type="button">Button large</button>
											<button class="site-button m-r15" type="button">Button medium</button>
											<button class="site-button button-sm m-r15" type="button">Button samll</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix ">
											<h4>Theme Button Color</h4>
										</div>
										<div class="section-content box-sort-in  button-example m-b30">
											<button class="site-button black m-r15" type="button">Black</button>
											<button class="site-button gray m-r15" type="button">Gray</button>
											<button class="site-button pink m-r15" type="button">Pink</button>
											<button class="site-button blue m-r15" type="button">Blue</button>
											<button class="site-button green m-r15" type="button">Green</button>
											<button class="site-button orange m-r15" type="button">Orange</button>
											<button class="site-button red m-r15" type="button">Red</button>
											<button class="site-button brown m-r15" type="button">Brown</button>
											<button class="site-button yellow m-r15" type="button">Yellow</button>
											<button class="site-button purple m-r15" type="button">Purpal</button>
											<button class="site-button white m-r15" type="button">white</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner bg-gray bg-img-fix overlay-black-dark" style={{ backgroundImage: "url(" + bg3 + ")" }}>
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix text-white">
											<h4>Theme Buttons with rounded corner</h4>
										</div>
										<div class="section-content box-sort-in  button-example m-b30">
											<button class="site-button black radius-xl  m-r15" type="button">Black</button>
											<button class="site-button gray radius-xl  m-r15" type="button">Gray</button>
											<button class="site-button pink radius-xl  m-r15" type="button">Pink</button>
											<button class="site-button blue radius-xl  m-r15" type="button">Blue</button>
											<button class="site-button green radius-xl  m-r15" type="button">Green</button>
											<button class="site-button orange radius-xl  m-r15" type="button">Orange</button>
											<button class="site-button red radius-xl  m-r15" type="button">Red</button>
											<button class="site-button brown radius-xl  m-r15" type="button">Brown</button>
											<button class="site-button yellow radius-xl  m-r15" type="button">Yellow</button>
											<button class="site-button purple radius-xl  m-r15" type="button">Purpal</button>
											<button class="site-button white radius-xl m-r15" type="button">white</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix">
											<h4>Theme Buttons with Gradient</h4>

										</div>
										<div class="section-content box-sort-in  button-example m-b30">
											<button class="site-button black gradient m-r15" type="button">Black</button>
											<button class="site-button gray gradient m-r15" type="button">Gray</button>
											<button class="site-button pink gradient m-r15" type="button">Pink</button>
											<button class="site-button blue gradient m-r15" type="button">Blue</button>
											<button class="site-button green gradient m-r15" type="button">Green</button>
											<button class="site-button orange gradient m-r15" type="button">Orange</button>
											<button class="site-button red gradient m-r15" type="button">Red</button>
											<button class="site-button brown gradient m-r15" type="button">Brown</button>
											<button class="site-button yellow gradient m-r15" type="button">Yellow</button>
											<button class="site-button purple gradient m-r15" type="button">Purpal</button>
											<button class="site-button white gradient m-r15" type="button">white</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner bg-img-fix overlay-black-dark" style={{ backgroundImage: "url(" + bg1 + ")" }}>
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix text-white">
											<h4>Theme Buttons with sharp corner</h4>

										</div>
										<div class="section-content box-sort-in  button-example m-b30">
											<button class="site-button black radius-no  m-r15" type="button">Black</button>
											<button class="site-button gray radius-no  m-r15" type="button">Gray</button>
											<button class="site-button pink radius-no  m-r15" type="button">Pink</button>
											<button class="site-button blue radius-no  m-r15" type="button">Blue</button>
											<button class="site-button green radius-no  m-r15" type="button">Green</button>
											<button class="site-button orange radius-no  m-r15" type="button">Orange</button>
											<button class="site-button red radius-no  m-r15" type="button">Red</button>
											<button class="site-button brown radius-no  m-r15" type="button">Brown</button>
											<button class="site-button yellow radius-no  m-r15" type="button">Yellow</button>
											<button class="site-button purple radius-no  m-r15" type="button">Purpal</button>
											<button class="site-button white radius-no m-r15" type="button">white</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix">
											<h4>Theme Buttons with icons</h4>

										</div>
										<div class="section-content box-sort-in  button-example m-b30">
											<button class="site-button black m-r5" type="button"><span class="site-button-inr">Black <i class="fa fa-arrow-circle-o-right"></i></span></button>
											<button class="site-button gray m-r5" type="button"><span class="site-button-inr">Gray <i class="fa fa-dollar"></i></span></button>
											<button class="site-button pink m-r5" type="button"><span class="site-button-inr">Pink <i class="ti-email"></i></span></button>
											<button class="site-button blue m-r5" type="button"><span class="site-button-inr">Blue <i class="fa fa-gavel"></i></span></button>
											<button class="site-button green m-r5" type="button"><span class="site-button-inr">Green <i class="fa fa-joomla"></i></span></button>
											<button class="site-button orange m-r5" type="button"><span class="site-button-inr">Orange <i class="fa fa-key"></i></span></button>
											<button class="site-button red  m-r5" type="button"><span class="site-button-inr">Red <i class="fa fa-umbrella"></i></span></button>
											<button class="site-button brown m-r5" type="button"><span class="site-button-inr">Brown <i class="fa fa-random"></i></span></button>
											<button class="site-button yellow m-r5" type="button"><span class="site-button-inr">Yellow <i class="fa fa-image"></i></span></button>
											<button class="site-button white m-r5" type="button"><span class="site-button-inr">white <i class="ti-user"></i></span></button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner bg-black-light">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix text-white">
											<h4>Theme Buttons with Outline 1PX</h4>

										</div>
										<div class="section-content box-sort-in  button-example m-b30">
											<button class="site-button outline black m-r15" type="button">Black</button>
											<button class="site-button outline gray m-r15" type="button">Gray</button>
											<button class="site-button outline pink m-r15" type="button">Pink</button>
											<button class="site-button outline blue m-r15" type="button">Blue</button>
											<button class="site-button outline green m-r15" type="button">Green</button>
											<button class="site-button outline orange m-r15" type="button">Orange</button>
											<button class="site-button outline red m-r15" type="button">Red</button>
											<button class="site-button outline brown m-r15" type="button">Brown</button>
											<button class="site-button outline yellow m-r15" type="button">Yellow</button>
											<button class="site-button outline purple m-r15" type="button">Purpal</button>
											<button class="site-button outline white m-r15" type="button">white</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix">
											<h4>Theme Buttons with Outline 2PX</h4>

										</div>
										<div class="section-content box-sort-in  button-example m-b30">
											<button class="site-button outline outline-2 black m-r15" type="button">Black</button>
											<button class="site-button outline outline-2 gray m-r15" type="button">Gray</button>
											<button class="site-button outline outline-2 pink m-r15" type="button">Pink</button>
											<button class="site-button outline outline-2 blue m-r15" type="button">Blue</button>
											<button class="site-button outline outline-2 green m-r15" type="button">Green</button>
											<button class="site-button outline outline-2 orange m-r15" type="button">Orange</button>
											<button class="site-button outline outline-2 red m-r15" type="button">Red</button>
											<button class="site-button outline outline-2 brown m-r15" type="button">Brown</button>
											<button class="site-button outline outline-2 yellow m-r15" type="button">Yellow</button>
											<button class="site-button outline outline-2 purple m-r15" type="button">Purpal</button>
											<button class="site-button outline outline-2 white m-r15" type="button">white</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner bg-black-light">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix text-white">
											<h4>Theme Buttons with Outline Radius</h4>

										</div>
										<div class="section-content box-sort-in  button-example m-b30">
											<button class="site-button outline outline-2 black m-r15 radius-xl" type="button">Black</button>
											<button class="site-button outline outline-2 gray m-r15 radius-xl" type="button">Gray</button>
											<button class="site-button outline outline-2 pink m-r15 radius-xl" type="button">Pink</button>
											<button class="site-button outline outline-2 blue m-r15 radius-xl" type="button">Blue</button>
											<button class="site-button outline outline-2 green m-r15 radius-xl" type="button">Green</button>
											<button class="site-button outline outline-2 orange m-r15 radius-xl" type="button">Orange</button>
											<button class="site-button outline outline-2 red m-r15 radius-xl" type="button">Red</button>
											<button class="site-button outline outline-2 brown m-r15 radius-xl" type="button">Brown</button>
											<button class="site-button outline outline-2 yellow m-r15 radius-xl" type="button">Yellow</button>
											<button class="site-button outline outline-2 purple m-r15 radius-xl" type="button">Purpal</button>
											<button class="site-button outline outline-2 white m-r15 radius-xl" type="button">white</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix">
											<h4>Theme Buttons Link</h4>

										</div>
										<div class="section-content box-sort-in  button-example m-b30">
											<a href="javascript:void(0);" class="site-button-link white m-r15">White</a>
											<a href="javascript:void(0);" class="site-button-link black m-r15">Black</a>
											<a href="javascript:void(0);" class="site-button-link gray m-r15">Gray</a>
											<a href="javascript:void(0);" class="site-button-link pink m-r15">Pink</a>
											<a href="javascript:void(0);" class="site-button-link blue m-r15">Blue</a>
											<a href="javascript:void(0);" class="site-button-link green m-r15">Green</a>
											<a href="javascript:void(0);" class="site-button-link orange m-r15">Orange</a>
											<a href="javascript:void(0);" class="site-button-link red m-r15">Red</a>
											<a href="javascript:void(0);" class="site-button-link brown m-r15">Brown</a>
											<a href="javascript:void(0);" class="site-button-link yellow m-r15">Yellow</a>
											<a href="javascript:void(0);" class="site-button-link purple m-r15">Purple</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner bg-black-light">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix text-white">
											<h4>Theme Buttons Dropdown</h4>

										</div>
										<div class="section-content box-sort-in m-b30">
											<div class="btn-group m-t10 m-l10">
												<button type="button" class="site-button dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Primary <i class=""></i></button>
												<ul class="dropdown-menu">
													<li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
													<li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
													<li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
													<li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
												</ul>
											</div>
											<div class="btn-group m-t10 m-l10">
												<button type="button" class="site-button red dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Primary <i class=""></i></button>
												<ul class="dropdown-menu">
												  <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
												  <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
												  <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>

												  <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
												</ul>
											</div>
											<div class="btn-group m-t10 m-l10">
												<button type="button" class="site-button yellow dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Primary <i class=""></i></button>
												<ul class="dropdown-menu">
												  <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
												  <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
												  <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>

												  <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
												</ul>
											</div>
											<div class="btn-group m-t10 m-l10">
												<button type="button" class="site-button pink dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Primary <i class=""></i></button>
												<ul class="dropdown-menu">
												  <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
												  <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
												  <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>

												  <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
												</ul>
											</div>
											<div class="btn-group  m-t10 m-l10">
												<button type="button" class="btn btn-primary">Primary</button>
												<button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												  <i class=""></i>
												</button>
												<ul class="dropdown-menu">
												  <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
												  <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
												  <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>

												  <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
												</ul>
											 </div>
											 <div class="btn-group m-t10 m-l10">
												<button type="button" class="btn btn-secondary">Secondary</button>
												<button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												  <i class=""></i>
												</button>
												<ul class="dropdown-menu">
												  <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
												  <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
												  <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>

												  <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
												</ul>
											 </div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix">
											<h4>Theme Buttons Box Shadow</h4>

										</div>
										<div class="section-content box-sort-in  button-example m-b30">
											<button class="site-button outline outline-2 black m-r15 radius-xl box-shadow" type="button">Black</button>
											<button class="site-button outline outline-2 gray m-r15 radius-xl box-shadow" type="button">Gray</button>
											<button class="site-button outline outline-2 pink m-r15 radius-xl box-shadow" type="button">Pink</button>
											<button class="site-button outline outline-2 blue m-r15 radius-xl box-shadow" type="button">Blue</button>
											<button class="site-button outline outline-2 green m-r15 radius-xl box-shadow" type="button">Green</button>
											<button class="site-button outline outline-2 orange m-r15 radius-xl box-shadow" type="button">Orange</button>
											<button class="site-button outline outline-2 red m-r15 radius-xl box-shadow" type="button">Red</button>
											<button class="site-button outline outline-2 brown m-r15 radius-xl box-shadow" type="button">Brown</button>
											<button class="site-button outline outline-2 yellow m-r15 radius-xl box-shadow" type="button">Yellow</button>
											<button class="site-button outline outline-2 purple m-r15 radius-xl box-shadow" type="button">Purpal</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner bg-black-light">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix text-white">
											<h4>Theme Buttons Box Shadow</h4>

										</div>
										<div class="section-content box-sort-in  button-example m-b30">
											<button class="site-button black m-r15 radius-xl box-shadow" type="button">Black</button>
											<button class="site-button gray m-r15 radius-xl box-shadow" type="button">Gray</button>
											<button class="site-button pink m-r15 radius-xl box-shadow" type="button">Pink</button>
											<button class="site-button blue m-r15 radius-xl box-shadow" type="button">Blue</button>
											<button class="site-button green m-r15 radius-xl box-shadow" type="button">Green</button>
											<button class="site-button orange m-r15 radius-xl box-shadow" type="button">Orange</button>
											<button class="site-button red m-r15 radius-xl box-shadow" type="button">Red</button>
											<button class="site-button brown m-r15 radius-xl box-shadow" type="button">Brown</button>
											<button class="site-button yellow m-r15 radius-xl box-shadow" type="button">Yellow</button>
											<button class="site-button purple m-r15 radius-xl box-shadow" type="button">Purpal</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix">
											<h4>Theme Buttons Box Shadow</h4>

										</div>
										<div class="section-content box-sort-in  button-example m-b30">
											<button class="site-button black m-r15 box-shadow" type="button">Black</button>
											<button class="site-button gray m-r15 box-shadow" type="button">Gray</button>
											<button class="site-button pink m-r15 box-shadow" type="button">Pink</button>
											<button class="site-button blue m-r15 box-shadow" type="button">Blue</button>
											<button class="site-button green m-r15 box-shadow" type="button">Green</button>
											<button class="site-button orange m-r15 box-shadow" type="button">Orange</button>
											<button class="site-button red m-r15 box-shadow" type="button">Red</button>
											<button class="site-button brown m-r15 box-shadow" type="button">Brown</button>
											<button class="site-button yellow m-r15 box-shadow" type="button">Yellow</button>
											<button class="site-button purple m-r15 box-shadow" type="button">Purpal</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner bg-black-light">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix text-white">
											<h4>Theme Buttons Circle Small</h4>

										</div>
										<div class="section-content box-sort-in  button-example m-b30 ">
											<button class="site-button black m-r15 circle-sm box-shadow" type="button"><i class="fa fa-star-o"></i></button>
											<button class="site-button gray m-r15 circle-sm box-shadow" type="button"><i class="fa fa-bar-chart-o"></i></button>
											<button class="site-button pink m-r15 circle-sm box-shadow" type="button"><i class="fa fa-bars"></i></button>
											<button class="site-button blue m-r15 circle-sm box-shadow" type="button"><i class="fa fa-bell"></i></button>
											<button class="site-button green m-r15 circle-sm box-shadow" type="button"><i class="ti-comment-alt"></i></button>
											<button class="site-button orange m-r15 circle-sm box-shadow" type="button"><i class="fa fa-clock-o"></i></button>
											<button class="site-button red m-r15 circle-sm box-shadow" type="button"><i class="fa fa-cloud-download"></i></button>
											<button class="site-button brown m-r15 circle-sm box-shadow" type="button"><i class="fa fa-diamond"></i></button>
											<button class="site-button yellow m-r15 circle-sm box-shadow" type="button"><i class="fa fa-folder-open-o"></i></button>
											<button class="site-button purple m-r15 circle-sm box-shadow" type="button"><i class="fa fa-lightbulb-o"></i></button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix">
											<h4>Theme Buttons Circle Middle</h4>

										</div>
										<div class="section-content box-sort-in  button-example m-b30 ">
											<button class="site-button black m-r15 circle box-shadow" type="button"><i class="fa fa-star-o"></i></button>
											<button class="site-button gray m-r15 circle box-shadow" type="button"><i class="fa fa-bar-chart-o"></i></button>
											<button class="site-button pink m-r15 circle box-shadow" type="button"><i class="fa fa-bars"></i></button>
											<button class="site-button blue m-r15 circle box-shadow" type="button"><i class="fa fa-bell"></i></button>
											<button class="site-button green m-r15 circle box-shadow" type="button"><i class="ti-comment-alt"></i></button>
											<button class="site-button orange m-r15 circle box-shadow" type="button"><i class="fa fa-clock-o"></i></button>
											<button class="site-button red m-r15 circle box-shadow" type="button"><i class="fa fa-cloud-download"></i></button>
											<button class="site-button brown m-r15 circle box-shadow" type="button"><i class="fa fa-diamond"></i></button>
											<button class="site-button yellow m-r15 circle box-shadow" type="button"><i class="fa fa-folder-open-o"></i></button>
											<button class="site-button purple m-r15 circle box-shadow" type="button"><i class="fa fa-lightbulb-o"></i></button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner bg-black-light">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix text-white">
											<h4>Theme Buttons Circle Large</h4>

										</div>
										<div class="section-content box-sort-in  button-example m-b30 ">
											<button class="site-button black m-r15 circle-lg box-shadow" type="button"><i class="fa fa-star-o"></i></button>
											<button class="site-button gray m-r15 circle-lg box-shadow" type="button"><i class="fa fa-bar-chart-o"></i></button>
											<button class="site-button pink m-r15 circle-lg box-shadow" type="button"><i class="fa fa-bars"></i></button>
											<button class="site-button blue m-r15 circle-lg box-shadow" type="button"><i class="fa fa-bell"></i></button>
											<button class="site-button green m-r15 circle-lg box-shadow" type="button"><i class="ti-comment-alt"></i></button>
											<button class="site-button orange m-r15 circle-lg box-shadow" type="button"><i class="fa fa-clock-o"></i></button>
											<button class="site-button red m-r15 circle-lg box-shadow" type="button"><i class="fa fa-cloud-download"></i></button>
											<button class="site-button brown m-r15 circle-lg box-shadow" type="button"><i class="fa fa-diamond"></i></button>
											<button class="site-button yellow m-r15 circle-lg box-shadow" type="button"><i class="fa fa-folder-open-o"></i></button>
											<button class="site-button purple m-r15 circle-lg box-shadow" type="button"><i class="fa fa-lightbulb-o"></i></button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix">
											<h4>Theme Buttons Social</h4>

										</div>
										<div class="section-content box-sort-in  button-example m-b30 ">
											<button class="site-button-link facebook m-r15 hover" type="button"><i class="fa fa-facebook"></i></button>
											<button class="site-button-link google-plus m-r15 hover" type="button"><i class="fa fa-google-plus"></i></button>
											<button class="site-button-link linkedin m-r15 hover" type="button"><i class="fa fa-linkedin"></i></button>
											<button class="site-button-link instagram m-r15 hover" type="button"><i class="fa fa-instagram"></i></button>
											<button class="site-button-link twitter m-r15 hover" type="button"><i class="fa fa-twitter"></i></button>
											<button class="site-button-link youtube m-r15 hover" type="button"><i class="fa fa-youtube-play"></i></button>
											<button class="site-button-link whatsapp m-r15 hover" type="button"><i class="fa fa-whatsapp"></i></button>
										</div>
										<div class="section-content box-sort-in  button-example m-b30 ">
											<button class="site-button-link facebook m-r15 circle-sm outline" type="button"><i class="fa fa-facebook"></i></button>
											<button class="site-button-link google-plus m-r15 circle-sm outline" type="button"><i class="fa fa-google-plus"></i></button>
											<button class="site-button-link linkedin m-r15 circle-sm outline" type="button"><i class="fa fa-linkedin"></i></button>
											<button class="site-button-link instagram m-r15 circle-sm outline" type="button"><i class="fa fa-instagram"></i></button>
											<button class="site-button-link twitter m-r15 circle-sm outline" type="button"><i class="fa fa-twitter"></i></button>
											<button class="site-button-link youtube m-r15 circle-sm outline" type="button"><i class="fa fa-youtube-play"></i></button>
											<button class="site-button-link whatsapp m-r15 circle-sm outline" type="button"><i class="fa fa-whatsapp"></i></button>
										</div>
										<div class="section-content box-sort-in  button-example m-b30 ">
											<button class="site-button facebook m-r15 circle-sm" type="button"><i class="fa fa-facebook"></i></button>
											<button class="site-button google-plus m-r15 circle-sm" type="button"><i class="fa fa-google-plus"></i></button>
											<button class="site-button linkedin m-r15 circle-sm" type="button"><i class="fa fa-linkedin"></i></button>
											<button class="site-button instagram m-r15 circle-sm" type="button"><i class="fa fa-instagram"></i></button>
											<button class="site-button twitter m-r15 circle-sm" type="button"><i class="fa fa-twitter"></i></button>
											<button class="site-button youtube m-r15 circle-sm" type="button"><i class="fa fa-youtube-play"></i></button>
											<button class="site-button whatsapp m-r15 circle-sm" type="button"><i class="fa fa-whatsapp"></i></button>
										</div>
										<div class="section-content box-sort-in  button-example m-b30 ">
											<button class="site-button facebook m-r15 circle" type="button"><i class="fa fa-facebook"></i></button>
											<button class="site-button google-plus m-r15 circle" type="button"><i class="fa fa-google-plus"></i></button>
											<button class="site-button linkedin m-r15 circle" type="button"><i class="fa fa-linkedin"></i></button>
											<button class="site-button instagram m-r15 circle" type="button"><i class="fa fa-instagram"></i></button>
											<button class="site-button twitter m-r15 circle" type="button"><i class="fa fa-twitter"></i></button>
											<button class="site-button youtube m-r15 circle" type="button"><i class="fa fa-youtube-play"></i></button>
											<button class="site-button whatsapp m-r15 circle" type="button"><i class="fa fa-whatsapp"></i></button>
										</div>
										<div class="section-content box-sort-in  button-example m-b30 ">
											<button class="site-button facebook m-r15 circle-lg" type="button"><i class="fa fa-facebook"></i></button>
											<button class="site-button google-plus m-r15 circle-lg" type="button"><i class="fa fa-google-plus"></i></button>
											<button class="site-button linkedin m-r15 circle-lg" type="button"><i class="fa fa-linkedin"></i></button>
											<button class="site-button instagram m-r15 circle-lg" type="button"><i class="fa fa-instagram"></i></button>
											<button class="site-button twitter m-r15 circle-lg" type="button"><i class="fa fa-twitter"></i></button>
											<button class="site-button youtube m-r15 circle-lg" type="button"><i class="fa fa-youtube-play"></i></button>
											<button class="site-button whatsapp m-r15 circle-lg" type="button"><i class="fa fa-whatsapp"></i></button>
										</div>
										<div class="section-content box-sort-in  button-example m-b30 ">
											<button class="site-button facebook m-r15 button-sm" type="button"><i class="fa fa-facebook"></i> Facebook</button>
											<button class="site-button google-plus m-r15 button-sm" type="button"><i class="fa fa-google-plus"></i> Google Plus</button>
											<button class="site-button linkedin m-r15 button-sm" type="button"><i class="fa fa-linkedin"></i> Linkedin</button>
											<button class="site-button instagram m-r15 button-sm" type="button"><i class="fa fa-instagram"></i> Instagram</button>
											<button class="site-button twitter m-r15 button-sm" type="button"><i class="fa fa-twitter"></i> Twitter</button>
											<button class="site-button youtube m-r15 button-sm" type="button"><i class="fa fa-youtube-play"></i> Youtube</button>
											<button class="site-button whatsapp m-r15 button-sm" type="button"><i class="fa fa-whatsapp"></i> Whatsapp</button>
										</div>
										<div class="section-content box-sort-in  button-example m-b30 ">
											<button class="site-button facebook m-r15" type="button"><i class="fa fa-facebook"></i> Facebook</button>
											<button class="site-button google-plus m-r15" type="button"><i class="fa fa-google-plus"></i> Google Plus</button>
											<button class="site-button linkedin m-r15" type="button"><i class="fa fa-linkedin"></i> Linkedin</button>
											<button class="site-button instagram m-r15" type="button"><i class="fa fa-instagram"></i> Instagram</button>
											<button class="site-button twitter m-r15" type="button"><i class="fa fa-twitter"></i> Twitter</button>
											<button class="site-button youtube m-r15" type="button"><i class="fa fa-youtube-play"></i> Youtube</button>
											<button class="site-button whatsapp m-r15" type="button"><i class="fa fa-whatsapp"></i> Whatsapp</button>
										</div>
										<div class="section-content box-sort-in  button-example m-b30 ">
											<button class="site-button facebook m-r15 sharp-sm" type="button"><i class="fa fa-facebook"></i></button>
											<button class="site-button google-plus m-r15 sharp-sm" type="button"><i class="fa fa-google-plus"></i></button>
											<button class="site-button linkedin m-r15 sharp-sm" type="button"><i class="fa fa-linkedin"></i></button>
											<button class="site-button instagram m-r15 sharp-sm" type="button"><i class="fa fa-instagram"></i></button>
											<button class="site-button twitter m-r15 sharp-sm" type="button"><i class="fa fa-twitter"></i></button>
											<button class="site-button youtube m-r15 sharp-sm" type="button"><i class="fa fa-youtube-play"></i></button>
											<button class="site-button whatsapp m-r15 sharp-sm" type="button"><i class="fa fa-whatsapp"></i></button>
										</div>
										<div class="section-content box-sort-in  button-example m-b30 ">
											<button class="site-button facebook m-r15 sharp" type="button"><i class="fa fa-facebook"></i></button>
											<button class="site-button google-plus m-r15 sharp" type="button"><i class="fa fa-google-plus"></i></button>
											<button class="site-button linkedin m-r15 sharp" type="button"><i class="fa fa-linkedin"></i></button>
											<button class="site-button instagram m-r15 sharp" type="button"><i class="fa fa-instagram"></i></button>
											<button class="site-button twitter m-r15 sharp" type="button"><i class="fa fa-twitter"></i></button>
											<button class="site-button youtube m-r15 sharp" type="button"><i class="fa fa-youtube-play"></i></button>
											<button class="site-button whatsapp m-r15 sharp" type="button"><i class="fa fa-whatsapp"></i></button>
										</div>
										<div class="section-content box-sort-in  button-example m-b30 ">
											<button class="site-button facebook m-r15 sharp-lg" type="button"><i class="fa fa-facebook"></i></button>
											<button class="site-button google-plus m-r15 sharp-lg" type="button"><i class="fa fa-google-plus"></i></button>
											<button class="site-button linkedin m-r15 sharp-lg" type="button"><i class="fa fa-linkedin"></i></button>
											<button class="site-button instagram m-r15 sharp-lg" type="button"><i class="fa fa-instagram"></i></button>
											<button class="site-button twitter m-r15 sharp-lg" type="button"><i class="fa fa-twitter"></i></button>
											<button class="site-button youtube m-r15 sharp-lg" type="button"><i class="fa fa-youtube-play"></i></button>
											<button class="site-button whatsapp m-r15 sharp-lg" type="button"><i class="fa fa-whatsapp"></i></button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full content-inner bg-gray">
							<div class="container">
								<div class="row">
									<div class="col-lg-12 post card-container">
										<div class="sort-title clearfix">
											<h4>Theme Buttons Social Outline</h4>

										</div>
										<div class="section-content box-sort-in  button-example m-b30 ">
											<button class="site-button facebook m-r15 circle-sm outline" type="button"><i class="fa fa-facebook"></i></button>
											<button class="site-button google-plus m-r15 circle-sm outline" type="button"><i class="fa fa-google-plus"></i></button>
											<button class="site-button linkedin m-r15 circle-sm outline" type="button"><i class="fa fa-linkedin"></i></button>
											<button class="site-button instagram m-r15 circle-sm outline" type="button"><i class="fa fa-instagram"></i></button>
											<button class="site-button twitter m-r15 circle-sm outline" type="button"><i class="fa fa-twitter"></i></button>
											<button class="site-button youtube m-r15 circle-sm outline" type="button"><i class="fa fa-youtube-play"></i></button>
											<button class="site-button whatsapp m-r15 circle-sm outline" type="button"><i class="fa fa-whatsapp"></i></button>
										</div>
										<div class="section-content box-sort-in  button-example m-b30 ">
											<button class="site-button facebook m-r15 circle outline" type="button"><i class="fa fa-facebook"></i></button>
											<button class="site-button google-plus m-r15 circle outline" type="button"><i class="fa fa-google-plus"></i></button>
											<button class="site-button linkedin m-r15 circle outline" type="button"><i class="fa fa-linkedin"></i></button>
											<button class="site-button instagram m-r15 circle outline" type="button"><i class="fa fa-instagram"></i></button>
											<button class="site-button twitter m-r15 circle outline" type="button"><i class="fa fa-twitter"></i></button>
											<button class="site-button youtube m-r15 circle outline" type="button"><i class="fa fa-youtube-play"></i></button>
											<button class="site-button whatsapp m-r15 circle outline" type="button"><i class="fa fa-whatsapp"></i></button>
										</div>
										<div class="section-content box-sort-in  button-example m-b30 ">
											<button class="site-button facebook m-r15 circle-lg outline" type="button"><i class="fa fa-facebook"></i></button>
											<button class="site-button google-plus m-r15 circle-lg outline" type="button"><i class="fa fa-google-plus"></i></button>
											<button class="site-button linkedin m-r15 circle-lg outline" type="button"><i class="fa fa-linkedin"></i></button>
											<button class="site-button instagram m-r15 circle-lg outline" type="button"><i class="fa fa-instagram"></i></button>
											<button class="site-button twitter m-r15 circle-lg outline" type="button"><i class="fa fa-twitter"></i></button>
											<button class="site-button youtube m-r15 circle-lg outline" type="button"><i class="fa fa-youtube-play"></i></button>
											<button class="site-button whatsapp m-r15 circle-lg outline" type="button"><i class="fa fa-whatsapp"></i></button>
										</div>
										<div class="section-content box-sort-in  button-example m-b30 ">
											<button class="site-button facebook m-r15 outline button-sm" type="button"><i class="fa fa-facebook"></i> Facebook</button>
											<button class="site-button google-plus m-r15 outline  button-sm" type="button"><i class="fa fa-google-plus"></i> Google Plus</button>
											<button class="site-button linkedin m-r15 outline  button-sm" type="button"><i class="fa fa-linkedin"></i> Linkedin</button>
											<button class="site-button instagram m-r15 outline button-sm" type="button"><i class="fa fa-instagram"></i> Instagram</button>
											<button class="site-button twitter m-r15 outline button-sm" type="button"><i class="fa fa-twitter"></i> Twitter</button>
											<button class="site-button youtube m-r15 outline button-sm" type="button"><i class="fa fa-youtube-play"></i> Youtube</button>
											<button class="site-button whatsapp m-r15 outline button-sm" type="button"><i class="fa fa-whatsapp"></i> Whatsapp</button>
										</div>
										<div class="section-content box-sort-in  button-example m-b30 ">
											<button class="site-button facebook m-r15 outline" type="button"><i class="fa fa-facebook"></i> Facebook</button>
											<button class="site-button google-plus m-r15 outline" type="button"><i class="fa fa-google-plus"></i> Google Plus</button>
											<button class="site-button linkedin m-r15 outline" type="button"><i class="fa fa-linkedin"></i> Linkedin</button>
											<button class="site-button instagram m-r15 outline" type="button"><i class="fa fa-instagram"></i> Instagram</button>
											<button class="site-button twitter m-r15 outline" type="button"><i class="fa fa-twitter"></i> Twitter</button>
											<button class="site-button youtube m-r15 outline" type="button"><i class="fa fa-youtube-play"></i> Youtube</button>
											<button class="site-button whatsapp m-r15 outline" type="button"><i class="fa fa-whatsapp"></i> Whatsapp</button>
										</div>
										<div class="section-content box-sort-in  button-example m-b30 ">
											<button class="site-button facebook m-r15 sharp-sm outline" type="button"><i class="fa fa-facebook"></i></button>
											<button class="site-button google-plus m-r15 sharp-sm outline" type="button"><i class="fa fa-google-plus"></i></button>
											<button class="site-button linkedin m-r15 sharp-sm outline" type="button"><i class="fa fa-linkedin"></i></button>
											<button class="site-button instagram m-r15 sharp-sm outline" type="button"><i class="fa fa-instagram"></i></button>
											<button class="site-button twitter m-r15 sharp-sm outline" type="button"><i class="fa fa-twitter"></i></button>
											<button class="site-button youtube m-r15 sharp-sm  outline" type="button"><i class="fa fa-youtube-play"></i></button>
											<button class="site-button whatsapp m-r15 sharp-sm outline" type="button"><i class="fa fa-whatsapp"></i></button>
										</div>
										<div class="section-content box-sort-in  button-example m-b30 ">
											<button class="site-button facebook m-r15 sharp outline" type="button"><i class="fa fa-facebook"></i></button>
											<button class="site-button google-plus m-r15 sharp outline" type="button"><i class="fa fa-google-plus"></i></button>
											<button class="site-button linkedin m-r15 sharp outline" type="button"><i class="fa fa-linkedin"></i></button>
											<button class="site-button instagram m-r15 sharp outline" type="button"><i class="fa fa-instagram"></i></button>
											<button class="site-button twitter m-r15 sharp outline" type="button"><i class="fa fa-twitter"></i></button>
											<button class="site-button youtube m-r15 sharp outline" type="button"><i class="fa fa-youtube-play"></i></button>
											<button class="site-button whatsapp m-r15 sharp outline" type="button"><i class="fa fa-whatsapp"></i></button>
										</div>
										<div class="section-content box-sort-in  button-example m-b30 ">
											<button class="site-button facebook m-r15 sharp-lg  outline" type="button"><i class="fa fa-facebook"></i></button>
											<button class="site-button google-plus m-r15 sharp-lg outline" type="button"><i class="fa fa-google-plus"></i></button>
											<button class="site-button linkedin m-r15 sharp-lg outline" type="button"><i class="fa fa-linkedin"></i></button>
											<button class="site-button instagram m-r15 sharp-lg outline" type="button"><i class="fa fa-instagram"></i></button>
											<button class="site-button twitter m-r15 sharp-lg outline" type="button"><i class="fa fa-twitter"></i></button>
											<button class="site-button youtube m-r15 sharp-lg outline" type="button"><i class="fa fa-youtube-play"></i></button>
											<button class="site-button whatsapp m-r15 sharp-lg outline" type="button"><i class="fa fa-whatsapp"></i></button>
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

export default shortButtons;
