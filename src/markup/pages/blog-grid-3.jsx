import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('/images/banner/bnr1.jpg')

class BlogGrid3 extends Component {


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
                        <div id="masonry" class="dlab-blog-grid-3">
                            <div class="container">
                                <div class="row">
                                    <div class="post card-container col-lg-4 col-md-6 col-sm-12">
                                        <div class="blog-post blog-grid blog-rounded blog-effect1">
                                            <div class="dlab-post-media dlab-img-effect">
                                                <Link href="/blog-single"><img src={("/images/blog/grid/pic1.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info p-a20 border-1">
                                                <div class="dlab-post-meta">
                                                    <ul>
                                                        <li class="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
                                                        <li class="post-author"> By <Link href="#">Jack</Link> </li>
                                                    </ul>
                                                </div>
                                                <div class="dlab-post-title">
                                                    <h4 class="post-title"><Link href="/blog-single">Seven Doubts You Should</Link></h4>
                                                </div>
                                                <div class="dlab-post-text">
                                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                                </div>
                                                <div class="dlab-post-readmore">
                                                    <Link href="/blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
                                                        <i class="ti-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post card-container col-lg-4 col-md-6 col-sm-12">
                                        <div class="blog-post blog-grid blog-rounded blog-effect1">
                                            <div class="dlab-post-media dlab-img-effect">
                                                <Link href="/blog-single"><img src={("/images/blog/grid/pic2.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info p-a20 border-1">
                                                <div class="dlab-post-meta ">
                                                    <ul>
                                                        <li class="post-date"> <strong>11 Aug</strong> <span> 2016</span> </li>
                                                        <li class="post-author"> By <Link href="#">Zachary</Link> </li>
                                                    </ul>
                                                </div>
                                                <div class="dlab-post-title">
                                                    <h4 class="post-title"><Link href="/blog-single">The Shocking Revelation</Link></h4>
                                                </div>
                                                <div class="dlab-post-text">
                                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                                </div>
                                                <div class="dlab-post-readmore">
                                                    <Link href="/blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
                                                        <i class="ti-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post card-container col-lg-4 col-md-6 col-sm-12">
                                        <div class="blog-post blog-grid blog-rounded blog-effect1">
                                            <div class="dlab-post-media dlab-img-effect">
                                                <Link href="/blog-single"><img src={("/images/blog/grid/pic3.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info p-a20 border-1">
                                                <div class="dlab-post-meta">
                                                    <ul>
                                                        <li class="post-date"> <strong>12 Aug</strong> <span> 2016</span> </li>
                                                        <li class="post-author"> By <Link href="#">Charlotte</Link> </li>
                                                    </ul>
                                                </div>
                                                <div class="dlab-post-title">
                                                    <h4 class="post-title"><Link href="/blog-single">The Story Of Industry</Link></h4>
                                                </div>
                                                <div class="dlab-post-text">
                                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                                </div>
                                                <div class="dlab-post-readmore">
                                                    <Link href="/blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
                                                        <i class="ti-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post card-container col-lg-4 col-md-6 col-sm-12">
                                        <div class="blog-post blog-grid blog-rounded blog-effect1">
                                            <div class="dlab-post-media dlab-img-effect">
                                                <Link href="/blog-single"><img src={("/images/blog/grid/pic4.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info p-a20 border-1">
                                                <div class="dlab-post-meta">
                                                    <ul>
                                                        <li class="post-date"> <strong>13 Aug</strong> <span> 2016</span> </li>
                                                        <li class="post-author"> By <Link href="#">Lucinda</Link> </li>
                                                    </ul>
                                                </div>
                                                <div class="dlab-post-title">
                                                    <h4 class="post-title"><Link href="/blog-single">Seven Outrageous Ideas </Link></h4>
                                                </div>
                                                <div class="dlab-post-text">
                                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                                </div>
                                                <div class="dlab-post-readmore">
                                                    <Link href="/blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
                                                        <i class="ti-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post card-container col-lg-4 col-md-6 col-sm-12">
                                        <div class="blog-post blog-grid blog-rounded blog-effect1">
                                            <div class="dlab-post-media dlab-img-effect">
                                                <Link href="/blog-single"><img src={("/images/blog/grid/pic1.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info p-a20 border-1">
                                                <div class="dlab-post-meta">
                                                    <ul>
                                                        <li class="post-date"> <strong>14 Aug</strong> <span> 2016</span> </li>
                                                        <li class="post-author"> By <Link href="#">Victoria</Link> </li>
                                                    </ul>
                                                </div>
                                                <div class="dlab-post-title">
                                                    <h4 class="post-title"><Link href="/blog-single">How Industry Can Increase</Link></h4>
                                                </div>
                                                <div class="dlab-post-text">
                                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                                </div>
                                                <div class="dlab-post-readmore">
                                                    <Link href="/blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
                                                        <i class="ti-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post card-container col-lg-4 col-md-6 col-sm-12">
                                        <div class="blog-post blog-grid blog-rounded blog-effect1">
                                            <div class="dlab-post-media dlab-img-effect">
                                                <Link href="/blog-single"><img src={("/images/blog/grid/pic2.jpg")} alt=""/></Link>
                                            </div>
                                            <div class="dlab-info p-a20 border-1">
                                                <div class="dlab-post-meta">
                                                    <ul>
                                                        <li class="post-date"> <strong>15 Aug</strong> <span> 2016</span> </li>
                                                        <li class="post-author"> By <Link href="#">Winnie </Link> </li>
                                                    </ul>
                                                </div>
                                                <div class="dlab-post-title ">
                                                    <h4 class="post-title"><Link href="/blog-single">Here's What People</Link></h4>
                                                </div>
                                                <div class="dlab-post-text">
                                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                                </div>
                                                <div class="dlab-post-readmore">
                                                    <Link href="/blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
                                                        <i class="ti-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="pagination-bx clearfix text-center">
                                    <ul class="pagination">
                                        <li class="previous"><Link href="#"><i class="ti-arrow-left"></i> Prev</Link></li>
                                        <li class="active"><Link href="#">1</Link></li>
                                        <li><Link href="#">2</Link></li>
                                        <li><Link href="#">3</Link></li>
                                        <li class="next"><Link href="#">Next <i class="ti-arrow-right"></i></Link></li>
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
export default BlogGrid3;
