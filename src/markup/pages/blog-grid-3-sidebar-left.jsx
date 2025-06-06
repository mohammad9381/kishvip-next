import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Sidebar from '../element/sidebar';

const bg = require('/images/banner/bnr1.jpg')

class BlogGrid3SidebarLeft extends Component {


    render() {
        return (
            <>
                <Header/>
                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Blog grid 3</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link href="/index">Home</Link></li>
                                        <li>Blog grid 3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-area">
						<div class="container">
							<div class="row">
								<Sidebar/>
								<div class="col-lg-9 col-md-7">
									<div id="masonry" class="dlab-blog-grid-2">
										<div class="row">
											<div class="post card-container col-lg-4 col-md-12 col-sm-12">
												<div class="blog-post blog-grid blog-rounded blog-effect1">
													<div class="dlab-post-media dlab-img-effect">
														<a href="blog-single"><img src={("/images/blog/grid/pic1.jpg")} alt=""/></a>
													</div>
													<div class="dlab-info p-a20 border-1">
														<div class="dlab-post-meta">
															<ul>
																<li class="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
																<li class="post-author"> By <a href="javascript:void(0);">Jack</a> </li>
															</ul>
														</div>
														<div class="dlab-post-title">
															<h4 class="post-title"><a href="blog-single">Seven Doubts You Should</a></h4>
														</div>
														<div class="dlab-post-text">
														   <p>All the Lorem Ipsum generators on the Internet tend to repeat.</p>
														</div>
														<div class="dlab-post-readmore">
															<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
																<i class="ti-arrow-right"></i>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div class="post card-container col-lg-4 col-md-12 col-sm-12">
												<div class="blog-post blog-grid blog-rounded blog-effect1">
													<div class="dlab-post-media dlab-img-effect">
														<a href="blog-single"><img src={("/images/blog/grid/pic2.jpg")} alt=""/></a>
													</div>
													<div class="dlab-info p-a20 border-1">
														<div class="dlab-post-meta ">
															<ul>
																<li class="post-date"> <strong>11 Aug</strong> <span> 2016</span> </li>
																<li class="post-author"> By <a href="javascript:void(0);">Zachary</a> </li>
															</ul>
														</div>
														<div class="dlab-post-title">
															<h4 class="post-title"><a href="blog-single">The Shocking Revelation</a></h4>
														</div>
														<div class="dlab-post-text">
														   <p>All the Lorem Ipsum generators on the Internet tend to repeat.</p>
														</div>
														<div class="dlab-post-readmore">
															<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
																<i class="ti-arrow-right"></i>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div class="post card-container col-lg-4 col-md-12 col-sm-12">
												<div class="blog-post blog-grid blog-rounded blog-effect1">
													<div class="dlab-post-media dlab-img-effect">
														<a href="blog-single"><img src={("/images/blog/grid/pic3.jpg")} alt=""/></a>
													</div>
													<div class="dlab-info p-a20 border-1">
														<div class="dlab-post-meta">
															<ul>
																<li class="post-date"> <strong>12 Aug</strong> <span> 2016</span> </li>
																<li class="post-author"> By <a href="javascript:void(0);">Charlotte</a> </li>
															</ul>
														</div>
														<div class="dlab-post-title">
															<h4 class="post-title"><a href="blog-single">The Story Of Industry</a></h4>
														</div>
														<div class="dlab-post-text">
														   <p>All the Lorem Ipsum generators on the Internet tend to repeat.</p>
														</div>
														<div class="dlab-post-readmore">
															<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
																<i class="ti-arrow-right"></i>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div class="post card-container col-lg-4 col-md-12 col-sm-12">
												<div class="blog-post blog-grid blog-rounded blog-effect1">
													<div class="dlab-post-media dlab-img-effect">
														<a href="blog-single"><img src={("/images/blog/grid/pic4.jpg")} alt=""/></a>
													</div>
													<div class="dlab-info p-a20 border-1">
														<div class="dlab-post-meta">
															<ul>
																<li class="post-date"> <strong>13 Aug</strong> <span> 2016</span> </li>
																<li class="post-author"> By <a href="javascript:void(0);">Lucinda</a> </li>
															</ul>
														</div>
														<div class="dlab-post-title">
															<h4 class="post-title"><a href="blog-single">Seven Outrageous Ideas </a></h4>
														</div>
														<div class="dlab-post-text">
														   <p>All the Lorem Ipsum generators on the Internet tend to repeat.</p>
														</div>
														<div class="dlab-post-readmore">
															<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
																<i class="ti-arrow-right"></i>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div class="post card-container col-lg-4 col-md-12 col-sm-12">
												<div class="blog-post blog-grid blog-rounded blog-effect1">
													<div class="dlab-post-media dlab-img-effect">
														<a href="blog-single"><img src={("/images/blog/grid/pic1.jpg")} alt=""/></a>
													</div>
													<div class="dlab-info p-a20 border-1">
														<div class="dlab-post-meta">
															<ul>
																<li class="post-date"> <strong>14 Aug</strong> <span> 2016</span> </li>
																<li class="post-author"> By <a href="javascript:void(0);">Victoria</a> </li>
															</ul>
														</div>
														<div class="dlab-post-title">
															<h4 class="post-title"><a href="blog-single">How Industry Can Increase</a></h4>
														</div>
														<div class="dlab-post-text">
														   <p>All the Lorem Ipsum generators on the Internet tend to repeat.</p>
														</div>
														<div class="dlab-post-readmore">
															<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
																<i class="ti-arrow-right"></i>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div class="post card-container col-lg-4 col-md-12 col-sm-12">
												<div class="blog-post blog-grid blog-rounded blog-effect1">
													<div class="dlab-post-media dlab-img-effect">
														<a href="blog-single"><img src={("/images/blog/grid/pic2.jpg")} alt=""/></a>
													</div>
													<div class="dlab-info p-a20 border-1">
														<div class="dlab-post-meta">
															<ul>
																<li class="post-date"> <strong>15 Aug</strong> <span> 2016</span> </li>
																<li class="post-author"> By <a href="javascript:void(0);">Winnie </a> </li>
															</ul>
														</div>
														<div class="dlab-post-title ">
															<h4 class="post-title"><a href="blog-single">Here's What People</a></h4>
														</div>
														<div class="dlab-post-text">
														   <p>All the Lorem Ipsum generators on the Internet tend to repeat.</p>
														</div>
														<div class="dlab-post-readmore">
															<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
																<i class="ti-arrow-right"></i>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div class="post card-container col-lg-4 col-md-12 col-sm-12">
												<div class="blog-post blog-grid blog-rounded blog-effect1">
													<div class="dlab-post-media dlab-img-effect">
														<a href="blog-single"><img src={("/images/blog/grid/pic1.jpg")} alt=""/></a>
													</div>
													<div class="dlab-info p-a20 border-1">
														<div class="dlab-post-meta">
															<ul>
																<li class="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
																<li class="post-author"> By <a href="javascript:void(0);">Jack</a> </li>
															</ul>
														</div>
														<div class="dlab-post-title">
															<h4 class="post-title"><a href="blog-single">Seven Doubts You Should</a></h4>
														</div>
														<div class="dlab-post-text">
														   <p>All the Lorem Ipsum generators on the Internet tend to repeat.</p>
														</div>
														<div class="dlab-post-readmore">
															<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
																<i class="ti-arrow-right"></i>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div class="post card-container col-lg-4 col-md-12 col-sm-12">
												<div class="blog-post blog-grid blog-rounded blog-effect1">
													<div class="dlab-post-media dlab-img-effect">
														<a href="blog-single"><img src={("/images/blog/grid/pic2.jpg")} alt=""/></a>
													</div>
													<div class="dlab-info p-a20 border-1">
														<div class="dlab-post-meta ">
															<ul>
																<li class="post-date"> <strong>11 Aug</strong> <span> 2016</span> </li>
																<li class="post-author"> By <a href="javascript:void(0);">Zachary</a> </li>
															</ul>
														</div>
														<div class="dlab-post-title">
															<h4 class="post-title"><a href="blog-single">The Shocking Revelation</a></h4>
														</div>
														<div class="dlab-post-text">
														   <p>All the Lorem Ipsum generators on the Internet tend to repeat.</p>
														</div>
														<div class="dlab-post-readmore">
															<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
																<i class="ti-arrow-right"></i>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div class="post card-container col-lg-4 col-md-12 col-sm-12">
												<div class="blog-post blog-grid blog-rounded blog-effect1">
													<div class="dlab-post-media dlab-img-effect">
														<a href="blog-single"><img src={("/images/blog/grid/pic3.jpg")} alt=""/></a>
													</div>
													<div class="dlab-info p-a20 border-1">
														<div class="dlab-post-meta">
															<ul>
																<li class="post-date"> <strong>12 Aug</strong> <span> 2016</span> </li>
																<li class="post-author"> By <a href="javascript:void(0);">Charlotte</a> </li>
															</ul>
														</div>
														<div class="dlab-post-title">
															<h4 class="post-title"><a href="blog-single">The Story Of Industry</a></h4>
														</div>
														<div class="dlab-post-text">
															<p>All the Lorem Ipsum generators on the Internet tend to repeat.</p>
														</div>
														<div class="dlab-post-readmore">
															<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
																<i class="ti-arrow-right"></i>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div class="post card-container col-lg-4 col-md-12 col-sm-12">
												<div class="blog-post blog-grid blog-rounded blog-effect1">
													<div class="dlab-post-media dlab-img-effect">
														<a href="blog-single"><img src={("/images/blog/grid/pic4.jpg")} alt=""/></a>
													</div>
													<div class="dlab-info p-a20 border-1">
														<div class="dlab-post-meta">
															<ul>
																<li class="post-date"> <strong>13 Aug</strong> <span> 2016</span> </li>
																<li class="post-author"> By <a href="javascript:void(0);">Lucinda</a> </li>
															</ul>
														</div>
														<div class="dlab-post-title">
															<h4 class="post-title"><a href="blog-single">Seven Outrageous Ideas </a></h4>
														</div>
														<div class="dlab-post-text">
														   <p>All the Lorem Ipsum generators on the Internet tend to repeat.</p>
														</div>
														<div class="dlab-post-readmore">
															<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
																<i class="ti-arrow-right"></i>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div class="post card-container col-lg-4 col-md-12 col-sm-12">
												<div class="blog-post blog-grid blog-rounded blog-effect1">
													<div class="dlab-post-media dlab-img-effect">
														<a href="blog-single"><img src={("/images/blog/grid/pic1.jpg")} alt=""/></a>
													</div>
													<div class="dlab-info p-a20 border-1">
														<div class="dlab-post-meta">
															<ul>
																<li class="post-date"> <strong>14 Aug</strong> <span> 2016</span> </li>
																<li class="post-author"> By <a href="javascript:void(0);">Victoria</a> </li>
															</ul>
														</div>
														<div class="dlab-post-title">
															<h4 class="post-title"><a href="blog-single">How Industry Can Increase</a></h4>
														</div>
														<div class="dlab-post-text">
														   <p>All the Lorem Ipsum generators on the Internet tend to repeat.</p>
														</div>
														<div class="dlab-post-readmore">
															<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
																<i class="ti-arrow-right"></i>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div class="post card-container col-lg-4 col-md-12 col-sm-12">
												<div class="blog-post blog-grid blog-rounded blog-effect1">
													<div class="dlab-post-media dlab-img-effect">
														<a href="blog-single"><img src={("/images/blog/grid/pic2.jpg")} alt=""/></a>
													</div>
													<div class="dlab-info p-a20 border-1">
														<div class="dlab-post-meta">
															<ul>
																<li class="post-date"> <strong>15 Aug</strong> <span> 2016</span> </li>
																<li class="post-author"> By <a href="javascript:void(0);">Winnie </a> </li>
															</ul>
														</div>
														<div class="dlab-post-title ">
															<h4 class="post-title"><a href="blog-single">Here's What People</a></h4>
														</div>
														<div class="dlab-post-text">
														   <p>All the Lorem Ipsum generators on the Internet tend to repeat.</p>
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

										<div class="pagination-bx clearfix m-b30 text-center col-md-12">
											<ul class="pagination">
												<li class="previous"><Link href="/#"><i class="ti-arrow-left"></i> Prev</Link></li>
												<li class="active"><Link href="/#">1</Link></li>
												<li><Link href="/#">2</Link></li>
												<li><Link href="/#">3</Link></li>
												<li class="next"><Link href="/#">Next <i class="ti-arrow-right"></i></Link></li>
											</ul>
										</div>
									</div>
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
export default BlogGrid3SidebarLeft;
