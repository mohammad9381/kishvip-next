import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('/images/banner/bnr1.jpg')

class BlogGrid4 extends Component {


    render() {
        return (
            <>
                <Header/>
                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Blog grid 4</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link href="/">Home</Link></li>
                                        <li>Blog grid 4</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-area">
						<div class="container">
							<div class="row">
								<div id="masonry" class="dlab-blog-grid-3 col-lg-12">
									<div class="row">
										<div class="post card-container col-xl-3 col-lg-4 col-md-6 col-sm-6">
											<div class="blog-post blog-grid blog-rounded blog-effect1">
												<div class="dlab-post-media dlab-img-effect">
													<a href="blog-single"><img src={("/images/blog/grid/pic1.jpg")} alt=""/></a>
												</div>
												<div class="dlab-info p-a20 border-1">
													<div class="dlab-post-meta">
														<ul>
															<li class="post-date"> <strong>17 Aug</strong> <span> 2016</span> </li>
															<li class="post-author"> By <a href="javascript:void(0);">Aaron</a> </li>
														</ul>
													</div>
													<div class="dlab-post-title ">
														<h5 class="post-title"><a href="blog-single">Why Are Children So Obsessed</a></h5>
													</div>
													<div class="dlab-post-text">
														<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
													</div>
													<div class="dlab-post-readmore">
														<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
															<i class="ti-arrow-right"></i>
														</a>
													</div>
												</div>
											</div>
										</div>
										<div class="post card-container col-xl-3 col-lg-4 col-md-6 col-sm-6">
											<div class="blog-post blog-grid blog-rounded blog-effect1">
												<div class="dlab-post-media dlab-img-effect">
													<a href="blog-single"><img src={("/images/blog/grid/pic2.jpg")} alt=""/></a>
												</div>
												<div class="dlab-info p-a20 border-1">
													<div class="dlab-post-meta">
														<ul>
															<li class="post-date"> <strong>16 Aug</strong> <span> 2016</span> </li>
															<li class="post-author"> By <a href="javascript:void(0);">Jamie</a> </li>
														</ul>
													</div>
													<div class="dlab-post-title ">
														<h5 class="post-title"><a href="blog-single">How To Get People To Like Industry</a></h5>
													</div>
													<div class="dlab-post-text">
														 <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
													</div>
													<div class="dlab-post-readmore">
														<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
															<i class="ti-arrow-right"></i>
														</a>
													</div>
												</div>
											</div>
										</div>
										<div class="post card-container col-xl-3 col-lg-4 col-md-6 col-sm-6">
										   <div class="blog-post blog-grid blog-rounded blog-effect1">
												<div class="dlab-post-media dlab-img-effect">
													<a href="blog-single"><img src={("/images/blog/grid/pic3.jpg")} alt=""/></a>
												</div>
												<div class="dlab-info p-a20 border-1">
													<div class="dlab-post-meta">
														<ul>
															<li class="post-date"> <strong>15 Aug</strong> <span> 2016</span> </li>
															<li class="post-author"> By <a href="javascript:void(0);">Anna</a> </li>
														</ul>
													</div>
													<div class="dlab-post-title ">
														<h5 class="post-title"><a href="blog-single">The Story Of Industry Has Just</a></h5>
													</div>
													<div class="dlab-post-text">
														<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
													</div>
													<div class="dlab-post-readmore">
														<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
															<i class="ti-arrow-right"></i>
														</a>
													</div>
												</div>
											</div>
										</div>
										<div class="post card-container col-xl-3 col-lg-4 col-md-6 col-sm-6">
											<div class="blog-post blog-grid blog-rounded blog-effect1">
												<div class="dlab-post-media dlab-img-effect">
													<a href="blog-single"><img src={("/images/blog/grid/pic4.jpg")} alt=""/></a>
												</div>
												<div class="dlab-info p-a20 border-1">
													<div class="dlab-post-meta">
														<ul>
															<li class="post-date"> <strong>14 Aug</strong> <span> 2016</span> </li>
															<li class="post-author"> By <a href="javascript:void(0);">Victoria</a> </li>
														</ul>
													</div>
													<div class="dlab-post-title">
														<h5 class="post-title"><a href="blog-single">Seven Outrageous Ideas Industry</a></h5>
													</div>
													<div class="dlab-post-text">
														<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
													</div>
													<div class="dlab-post-readmore">
														<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
															<i class="ti-arrow-right"></i>
														</a>
													</div>
												</div>
											</div>
										</div>
										<div class="post card-container col-xl-3 col-lg-4 col-md-6 col-sm-6">
											<div class="blog-post blog-grid blog-rounded blog-effect1">
												<div class="dlab-post-media dlab-img-effect">
													<a href="blog-single"><img src={("/images/blog/grid/pic4.jpg")} alt=""/></a>
												</div>
												<div class="dlab-info p-a20 border-1">
													<div class="dlab-post-meta">
														<ul>
															<li class="post-date"> <strong>13 Aug</strong> <span> 2016</span> </li>
															<li class="post-author"> By <a href="javascript:void(0);">Winnie </a> </li>
														</ul>
													</div>
													<div class="dlab-post-title">
														<h5 class="post-title"><a href="blog-single">How Industry Can Increase</a></h5>
													</div>
													<div class="dlab-post-text">
														 <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
													</div>
													<div class="dlab-post-readmore">
														<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
															<i class="ti-arrow-right"></i>
														</a>
													</div>
												</div>
											</div>
										</div>
										<div class="post card-container col-xl-3 col-lg-4 col-md-6 col-sm-6">
											<div class="blog-post blog-grid blog-rounded blog-effect1">
												<div class="dlab-post-media dlab-img-effect">
													<a href="blog-single"><img src={("/images/blog/grid/pic3.jpg")} alt=""/></a>
												</div>
												<div class="dlab-info p-a20 border-1">
													<div class="dlab-post-meta">
														<ul>
															<li class="post-date"> <strong>12 Aug</strong> <span> 2016</span> </li>
															<li class="post-author"> By <a href="javascript:void(0);">Jone</a> </li>
														</ul>
													</div>
													<div class="dlab-post-title ">
														<h5 class="post-title"><a href="blog-single">Here's What People Are Saying</a></h5>
													</div>
													<div class="dlab-post-text">
														<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
													</div>
													<div class="dlab-post-readmore">
														<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
															<i class="ti-arrow-right"></i>
														</a>
													</div>
												</div>
											</div>
										</div>
										<div class="post card-container col-xl-3 col-lg-4 col-md-6 col-sm-6">
										   <div class="blog-post blog-grid blog-rounded blog-effect1">
												<div class="dlab-post-media dlab-img-effect">
													<a href="blog-single"><img src={("/images/blog/grid/pic2.jpg")} alt=""/></a>
												</div>
												<div class="dlab-info p-a20 border-1">
													<div class="dlab-post-meta">
														<ul>
															<li class="post-date"> <strong>11 Aug</strong> <span> 2016</span> </li>
															<li class="post-author"> By <a href="javascript:void(0);">Jack</a> </li>
														</ul>
													</div>
													<div class="dlab-post-title">
														<h5 class="post-title"><a href="blog-single">The Shocking Revelation of Industry</a></h5>
													</div>
													<div class="dlab-post-text">
														<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
													</div>
													<div class="dlab-post-readmore">
														<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
															<i class="ti-arrow-right"></i>
														</a>
													</div>
												</div>
											</div>
										</div>
										<div class="post card-container col-xl-3 col-lg-4 col-md-6 col-sm-6">
											<div class="blog-post blog-grid blog-rounded blog-effect1">
												<div class="dlab-post-media dlab-img-effect">
													<a href="blog-single"><img src={("/images/blog/grid/pic1.jpg")} alt=""/></a>
												</div>
												<div class="dlab-info p-a20 border-1">
													<div class="dlab-post-meta">
														<ul>
															<li class="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
															<li class="post-author"> By <a href="javascript:void(0);">Oliver</a> </li>
														</ul>
													</div>
													<div class="dlab-post-title">
														<h5 class="post-title"><a href="blog-single">Here's What People Are Saying</a></h5>
													</div>
													<div class="dlab-post-text">
														<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
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
								<div class="pagination-bx clearfix col-md-12 text-center">
									<ul class="pagination">
										<li class="previous"><a href="javascript:void(0);"><i class="ti-arrow-left"></i> Prev</a></li>
										<li class="active"><a href="javascript:void(0);">1</a></li>
										<li><a href="javascript:void(0);">2</a></li>
										<li><a href="javascript:void(0);">3</a></li>
										<li class="next"><a href="javascript:void(0);">Next <i class="ti-arrow-right"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>

                </div>
                <Footer/>
            </>
        )
    }
}
export default BlogGrid4;
