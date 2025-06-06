import React, { Component } from 'react';
// import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

import Testmonial3 from '../element/testmonial3';
import Testmonial4 from '../element/testmonial4';
import Testmonial5 from '../../components/element/testmonial5'
import Testimonial1 from './../element/testimonial1';
import Testimonial2 from '../element/testmonial2';
import Testimonial6 from '../element/testimonial6';
import Testimonial8 from '../element/testimonial8'
import Testimonial9 from '../element/testimonial9'
import Testimonial10 from '../element/testimonial10'
import Testimonial11 from '../element/testimonial11';
import Testimonial12 from '../element/testimonial12';

var bnr4 = require('/images/banner/bnr4.jpg');
var bg1 = require('/images/background/bg1.jpg');
var bg2 = require('/images/background/bg2.jpg');
var bg3 = require('/images/background/bg3.jpg');

class shortTestimonials extends Component {

    render() {
        return (
            <>
                <Header />

                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
								<h1 class="text-white">Testimonials</h1>
								<div class="breadcrumb-row">
									<ul class="list-inline">
										<li><a href="/">Home</a></li>
										<li>Element</li>
										<li>Testimonials</li>
									</ul>
								</div>
							</div>
                        </div>
                    </div>

					<div class="bg-white">
						<div class="section-full bg-primary content-inner-2">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center text-white">
											<h4>What peolpe are saying style 1</h4>
										</div>
									</div>
								</div>
								<div class="section-content">
									<Testmonial5 />
								</div>
							</div>
						</div>
						<div class="section-full bg-gray content-inner-2">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>What peolpe are saying style 2</h4>
										</div>
									</div>
								</div>
								<div class="section-content">
									<Testimonial2 />
								</div>
							</div>
						</div>
						<div class="section-full bg-white content-inner-2">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>What peolpe are saying style 3</h4>
										</div>
									</div>
								</div>
								<div class="section-content">
									<Testmonial3 />
								</div>
							</div>
						</div>
						<div class="section-full bg-gray content-inner-2">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>What peolpe are saying style 4</h4>
										</div>
									</div>
								</div>
								<div class="section-content">
									<Testmonial4 />
								</div>
							</div>
						</div>
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>What peolpe are saying style 5</h4>
										</div>
									</div>
								</div>
								<div class="section-content">
									<Testimonial8 />
								</div>
							</div>
						</div>
						<div class="section-full bg-gray content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>What peolpe are saying style 6</h4>
										</div>
									</div>
								</div>
								<div class="section-content">
									<Testimonial1 />
								</div>
							</div>
						</div>
						<div class="section-full bg-black content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center text-white">
											<h4>What peolpe are saying style 7</h4>
										</div>
										<div class="section-content">
											<Testimonial12 />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full bg-gray content-inner-2">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>What peolpe are saying style 8</h4>
										</div>
									</div>
								</div>
								<div class="section-content">
									<Testimonial10 />
								</div>
							</div>
						</div>
						<div class="section-full bg-white content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>What peolpe are saying style 9</h4>
										</div>
									</div>
								</div>
								<div class="section-content">
									<Testimonial11 />
								</div>
							</div>
						</div>
						<div class="section-full bg-gray content-inner">
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title clearfix text-center">
											<h4>What peolpe are saying style 10</h4>
										</div>
										<div class="section-content">
											<Testimonial6 />
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
											<h4>What peolpe are saying style 11</h4>
										</div>
										<div class="section-content">
											<Testimonial9 />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="section-full overlay-black-middle bg-img-fix content-inner" style={{ backgroundImage: "url(" + bg3 + ")" }}>
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="sort-title text-white clearfix text-center">
											<h4>What peolpe are saying style 12</h4>
										</div>
										<div class="section-content">
											<Testimonial9 />
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

export default shortTestimonials;
