import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('/images/banner/bnr1.jpg')

class BlogHalfImg extends Component {


    render() {
        return (
            <>
                <Header/>
                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Blog half img</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link href="/index">Home</Link></li>
                                        <li>Blog half img</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-area">
						<div class="container">
							<div class="blog-post blog-md clearfix">
								<div class="dlab-post-media dlab-img-effect zoom-slow">
									<a href="blog-single"><img src={("/images/blog/grid/pic1.jpg")} alt=""/></a>
								</div>
								<div class="dlab-post-info">
									<div class="dlab-post-meta">
										<ul>
											<li class="post-date"> <strong>12 Aug</strong> <span> 2016</span> </li>
											<li class="post-author"> By <a href="javascript:void(0);">Oliver</a> </li>
										</ul>
									</div>
									<div class="dlab-post-title">
										<h4 class="post-title"><a href="blog-single">How To Get People To Like Industry</a></h4>
									</div>
									<div class="dlab-post-text">
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									</div>
									<div class="dlab-post-readmore">
										<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
											<i class="ti-arrow-right"></i>
										</a>
									</div>
								</div>
							</div>
							<div class="blog-post blog-md clearfix">
								<div class="dlab-post-media dlab-img-effect zoom-slow">
									<a href="blog-single"><img src={("/images/blog/grid/pic2.jpg")} alt=""/></a>
								</div>
								<div class="dlab-post-info">
									<div class="dlab-post-meta">
										<ul>
											<li class="post-date"> <strong>15 July</strong> <span> 2016</span> </li>
											<li class="post-author">By <a href="javascript:void(0);">Jamie</a> </li>
										</ul>
									</div>
									<div class="dlab-post-title">
										<h4 class="post-title"><a href="blog-single">Why You Should Not Go To Industry</a></h4>
									</div>
									<div class="dlab-post-text">
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									</div>
									<div class="dlab-post-readmore">
										<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
											<i class="ti-arrow-right"></i>
										</a>
									</div>
								</div>
							</div>
							<div class="blog-post blog-md clearfix">
								<div class="dlab-post-media dlab-img-effect zoom-slow">
									<a href="blog-single"><img src={("/images/blog/grid/pic3.jpg")} alt=""/></a>
								</div>
								<div class="dlab-post-info">
									<div class="dlab-post-meta">
										<ul>
											<li class="post-date"> <strong>18 Aug</strong> <span> 2016</span> </li>
											<li class="post-author">By <a href="javascript:void(0);">Charlotte</a> </li>
										</ul>
									</div>
									<div class="dlab-post-title">
										<h4 class="post-title"><a href="blog-single">Seven Doubts You Should Clarify About</a></h4>
									</div>
									<div class="dlab-post-text">
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									</div>
									<div class="dlab-post-readmore">
										<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
											<i class="ti-arrow-right"></i>
										</a>
									</div>
								</div>
							</div>
							<div class="blog-post blog-md clearfix">
								<div class="dlab-post-media dlab-img-effect zoom-slow">
									<a href="blog-single"><img src={("/images/blog/grid/pic4.jpg")} alt=""/></a>
								</div>
								<div class="dlab-post-info">
									<div class="dlab-post-meta">
										<ul>
											<li class="post-date"> <strong>12 Aug</strong> <span> 2016</span> </li>
											<li class="post-author"> By <a href="javascript:void(0);">Josephine</a> </li>
										</ul>
									</div>
									<div class="dlab-post-title">
										<h4 class="post-title"><a href="blog-single">The Shocking Revelation of Industry</a></h4>
									</div>
									<div class="dlab-post-text">
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									</div>
									<div class="dlab-post-readmore">
										<a href="blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
											<i class="ti-arrow-right"></i>
										</a>
									</div>
								</div>
							</div>
							<div class="pagination-bx clearfix text-center">
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
                <Footer/>
            </>
        )
    }
}
export default BlogHalfImg;
