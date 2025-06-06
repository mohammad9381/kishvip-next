import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Sidebar from '../element/sidebar';

const bg = require('/images/banner/bnr1.jpg')

class BlogHalfImgSidebar extends Component {


    render() {
        return (
            <>
                <Header/>
                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Blog half image with sidebar</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link href="/index">Home</Link></li>
                                        <li>Blog half image with sidebar</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-9">
                                <div class="blog-post blog-md clearfix">
                                    <div class="dlab-post-media dlab-img-effect zoom-slow">
                                        <Link href="/blog-single"><img src={("/images/blog/grid/pic1.jpg")} alt=""/></Link>
                                    </div>
                                    <div class="dlab-post-info">
                                        <div class="dlab-post-meta">
                                            <ul>
                                                <li class="post-date"> <strong>17 Aug</strong> <span> 2016</span> </li>
                                                <li class="post-author"> By <Link href="/#">Oliver</Link> </li>
                                            </ul>
                                        </div>
                                        <div class="dlab-post-title">
                                            <h4 class="post-title"><Link href="/blog-single">Why Are Children So Obsessed</Link></h4>
                                        </div>
                                        <div class="dlab-post-text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                        <div class="dlab-post-readmore">
                                            <Link href="/blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
                                                <i class="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="blog-post blog-md clearfix">
                                    <div class="dlab-post-media dlab-img-effect zoom-slow">
                                        <Link href="/blog-single"><img src={("/images/blog/grid/pic2.jpg")} alt=""/></Link>
                                    </div>
                                    <div class="dlab-post-info">
                                        <div class="dlab-post-meta">
                                            <ul>
                                                <li class="post-date"> <strong>16 Aug</strong> <span> 2016</span> </li>
                                                <li class="post-author"> By <Link href="/#">Harry</Link> </li>
                                            </ul>
                                        </div>
                                        <div class="dlab-post-title">
                                            <h4 class="post-title"><Link href="/blog-single">How To Get People To Like Industry</Link></h4>
                                        </div>
                                        <div class="dlab-post-text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                        <div class="dlab-post-readmore">
                                            <Link href="/blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
                                                <i class="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="blog-post blog-md clearfix">
                                    <div class="dlab-post-media dlab-img-effect zoom-slow">
                                        <Link href="/blog-single"><img src={("/images/blog/grid/pic3.jpg")} alt=""/></Link>
                                    </div>
                                    <div class="dlab-post-info">
                                        <div class="dlab-post-meta">
                                            <ul>
                                                <li class="post-date"> <strong>15 Aug</strong> <span> 2016</span> </li>
                                                <li class="post-author"> By <Link href="/#">Aaron</Link> </li>
                                            </ul>
                                        </div>
                                        <div class="dlab-post-title">
                                            <h4 class="post-title"><Link href="/blog-single">The Story Of Industry Has Just</Link></h4>
                                        </div>
                                        <div class="dlab-post-text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                        <div class="dlab-post-readmore">
                                            <Link href="/blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
                                                <i class="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="blog-post blog-md clearfix">
                                    <div class="dlab-post-media dlab-img-effect zoom-slow">
                                        <Link href="/blog-single"><img src={("/images/blog/grid/pic1.jpg")} alt=""/></Link>
                                    </div>
                                    <div class="dlab-post-info">
                                        <div class="dlab-post-meta">
                                            <ul>
                                                <li class="post-date"> <strong>14 Aug</strong> <span> 2016</span> </li>
                                                <li class="post-author"> By <Link href="/#">Jamie</Link> </li>
                                            </ul>
                                        </div>
                                        <div class="dlab-post-title ">
                                            <h4 class="post-title"><Link href="/blog-single">Seven Outrageous Ideas Industry</Link></h4>
                                        </div>
                                        <div class="dlab-post-text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                        <div class="dlab-post-readmore">
                                            <Link href="/blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
                                                <i class="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="blog-post blog-md clearfix">
                                    <div class="dlab-post-media dlab-img-effect zoom-slow">
                                        <Link href="/blog-single"><img src={("/images/blog/grid/pic2.jpg")} alt=""/></Link>
                                    </div>
                                    <div class="dlab-post-info">
                                        <div class="dlab-post-meta ">
                                            <ul>
                                                <li class="post-date"> <strong>13 Aug</strong> <span> 2016</span> </li>
                                                <li class="post-author"> By <Link href="/#">Winnie </Link> </li>
                                            </ul>
                                        </div>
                                        <div class="dlab-post-title">
                                            <h4 class="post-title"><Link href="/blog-single">How Industry Can Increase</Link></h4>
                                        </div>
                                        <div class="dlab-post-text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                        <div class="dlab-post-readmore">
                                            <Link href="/blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
                                                <i class="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="blog-post blog-md clearfix">
                                    <div class="dlab-post-media dlab-img-effect zoom-slow">
                                        <Link href="/blog-single"><img src={("/images/blog/grid/pic3.jpg")} alt=""/></Link>
                                    </div>
                                    <div class="dlab-post-info">
                                        <div class="dlab-post-meta">
                                            <ul>
                                                <li class="post-date"> <strong>12 Aug</strong> <span> 2016</span> </li>
                                                <li class="post-author">By <Link href="/#">Anna</Link> </li>
                                            </ul>
                                        </div>
                                        <div class="dlab-post-title ">
                                            <h4 class="post-title"><Link href="/blog-single">Here's What People Are Saying</Link></h4>
                                        </div>
                                        <div class="dlab-post-text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                        <div class="dlab-post-readmore">
                                            <Link href="/blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
                                                <i class="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="blog-post blog-md clearfix">
                                    <div class="dlab-post-media dlab-img-effect zoom-slow">
                                        <Link href="/blog-single"><img src={("/images/blog/grid/pic4.jpg")} alt=""/></Link>
                                    </div>
                                    <div class="dlab-post-info">
                                        <div class="dlab-post-meta">
                                            <ul>
                                                <li class="post-date"> <strong>11 Aug</strong> <span> 2016</span> </li>
                                                <li class="post-author"> By <Link href="/#">Thomas</Link> </li>
                                            </ul>
                                        </div>
                                        <div class="dlab-post-title">
                                            <h4 class="post-title"><Link href="/blog-single">The Shocking Revelation of Industry</Link></h4>
                                        </div>
                                        <div class="dlab-post-text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                        <div class="dlab-post-readmore">
                                            <Link href="/blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
                                                <i class="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="blog-post blog-md clearfix">
                                    <div class="dlab-post-media dlab-img-effect zoom-slow">
                                        <Link href="/blog-single"><img src={("/images/blog/grid/pic1.jpg")} alt=""/></Link>
                                    </div>
                                    <div class="dlab-post-info">
                                        <div class="dlab-post-meta">
                                            <ul>
                                                <li class="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
                                                <li class="post-author"> By <Link href="/#">Lucinda</Link> </li>
                                            </ul>
                                        </div>
                                        <div class="dlab-post-title">
                                            <h4 class="post-title"><Link href="/blog-single">Why You Should Not Go To Industry</Link></h4>
                                        </div>
                                        <div class="dlab-post-text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                        <div class="dlab-post-readmore">
                                            <Link href="/blog-single" title="READ MORE" rel="bookmark" class="site-button">READ MORE
                                                <i class="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div class="pagination-bx clearfix m-b30 text-center">
                                    <ul class="pagination">
                                        <li class="previous"><Link href="/#"><i class="ti-arrow-left"></i> Prev</Link></li>
                                        <li class="active"><Link href="/#">1</Link></li>
                                        <li><Link href="/#">2</Link></li>
                                        <li><Link href="/#">3</Link></li>
                                        <li class="next"><Link href="/#">Next <i class="ti-arrow-right"></i></Link></li>
                                    </ul>
                                </div>
                            </div>

                            <Sidebar/>
                        </div>
                    </div>
                </div>
            </div>
                <Footer/>
            </>
        )
    }
}
export default BlogHalfImgSidebar;
