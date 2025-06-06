import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Sidebar from '../element/sidebar';

const bg = require('/images/banner/bnr1.jpg')

class BlogSingleSidebarLeft extends Component {


    render() {
        return (
            <>
                <Header/>
                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Blog single left sidebar</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link href="/index">Home</Link></li>
                                        <li>Blog single left sidebar</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-area">
                        <div class="container">
                            <div class="row">
                                <Sidebar/>
								<div class="col-lg-9 m-b30">
                                    <div class="blog-post blog-single">
                                        <div class="dlab-post-meta">
                                            <ul>
                                                <li class="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
                                                <li class="post-author"> By <Link href="/#">Harry</Link> </li>
                                            </ul>
                                        </div>
                                        <div class="dlab-post-title ">
                                            <h4 class="post-title m-t0"><Link href="/blog-single-sidebar">How To Get People To Like Industry</Link></h4>
                                        </div>
                                        <div class="dlab-post-media dlab-img-effect zoom-slow">
                                            <Link href="/blog-single-sidebar"><img src={("/images/blog/default/thum1.jpg")} alt=""/></Link>
                                        </div>
                                        <div class="dlab-post-text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting  printer a galley Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen  It has urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen It has urvived not only five centuries, but also the leap into electronic typesetting.</p>
                                            <blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Has been the industry's standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimencenturies.</blockquote>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen It has urvived not only five centuries, but also the leap into electronic typesetting.</p>
                                            <h5>Completely Responsive</h5>
                                            <img class="alignleft" width="300" src={("/images/blog/grid/pic4.jpg")} alt=""/>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasefive centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                                            <div class="dlab-divider bg-gray-dark"></div>
                                            <img class="alignright" width="300" src={("/images/blog/grid/pic1.jpg")} alt=""/>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                                        </div>
                                        <div class="dlab-post-tags clear">
                                            <div class="post-tags">
                                                <Link href="/#">Child </Link> <Link href="/#">Eduction </Link> <Link href="/#">Money </Link> <Link href="/#">Resturent </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clear" id="comment-list">
                                        <div class="comments-area" id="comments">
                                            <h2 class="comments-title">8 Comments</h2>
                                            <div class="clearfix">
                                                <ol class="comment-list">
                                                    <li class="comment">
                                                        <div class="comment-body">
                                                            <div class="comment-author vcard"> <img class="avatar photo" src={("/images/testimonials/pic1.jpg")} alt=""/> <cite class="fn">Oliver</cite> <span class="says">says:</span> </div>
                                                            <div class="comment-meta"> <Link href="/#">October 6, 2015 at 7:15 am</Link> </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neqnsectetur adipiscing elit. Nam viae neqnsectetur adipiscing elit.
                                                                Nam vitae neque vitae sapien malesuada aliquet. </p>
                                                            <div class="reply"> <Link href="/#" class="comment-reply-link">Reply</Link> </div>
                                                        </div>
                                                        <ol class="children">
                                                            <li class="comment odd parent">
                                                                <div class="comment-body">
                                                                    <div class="comment-author vcard"> <img class="avatar photo" src={("/images/testimonials/pic2.jpg")} alt=""/> <cite class="fn">Harry</cite> <span class="says">says:</span> </div>
                                                                    <div class="comment-meta"> <Link href="/#">October 6, 2015 at 7:15 am</Link> </div>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                                        In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                                        ac elementum ligula blandit ac.</p>
                                                                    <div class="reply"> <Link href="/#" class="comment-reply-link">Reply</Link> </div>
                                                                </div>
                                                                <ol class="children">
                                                                    <li class="comment odd parent">
                                                                        <div class="comment-body">
                                                                            <div class="comment-author vcard"> <img class="avatar photo" src={("/images/testimonials/pic3.jpg")} alt=""/> <cite class="fn">Thomas</cite> <span class="says">says:</span> </div>
                                                                            <div class="comment-meta"> <Link href="/#">October 6, 2015 at 7:15 am</Link> </div>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                                                In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                                                ac elementum ligula blandit ac.</p>
                                                                            <div class="reply"> <Link href="/#" class="comment-reply-link">Reply</Link> </div>
                                                                        </div>
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                        </ol>
                                                    </li>
                                                    <li class="comment">
                                                        <div class="comment-body">
                                                            <div class="comment-author vcard"> <img class="avatar photo" src={("/images/testimonials/pic1.jpg")} alt=""/> <cite class="fn">Stacy poe</cite> <span class="says">says:</span> </div>
                                                            <div class="comment-meta"> <Link href="/#">October 6, 2015 at 7:15 am</Link> </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                                In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                                ac elementum ligula blandit ac.</p>
                                                            <div class="reply"> <Link href="/#" class="comment-reply-link">Reply</Link> </div>
                                                        </div>
                                                    </li>
                                                    <li class="comment">
                                                        <div class="comment-body">
                                                            <div class="comment-author vcard"> <img class="avatar photo" src={("/images/testimonials/pic2.jpg")} alt=""/> <cite class="fn">Jamie</cite> <span class="says">says:</span> </div>
                                                            <div class="comment-meta"> <Link href="/#">October 6, 2015 at 7:15 am</Link> </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                                In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                                ac elementum ligula blandit ac.</p>
                                                            <div class="reply"> <Link href="/#" class="comment-reply-link">Reply</Link> </div>
                                                        </div>
                                                    </li>
                                                    <li class="comment">
                                                        <div class="comment-body">
                                                            <div class="comment-author vcard"> <img class="avatar photo" src={("/images/testimonials/pic3.jpg")} alt=""/> <cite class="fn">Anna</cite> <span class="says">says:</span> </div>
                                                            <div class="comment-meta"> <Link href="/#">October 6, 2015 at 7:15 am</Link> </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                                In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                                ac elementum ligula blandit ac.</p>
                                                            <div class="reply"> <Link href="/#" class="comment-reply-link">Reply</Link> </div>
                                                        </div>
                                                    </li>
                                                </ol>

                                                <div class="comment-respond" id="respond">
                                                    <h4 class="comment-reply-title" id="reply-title">Leave a Reply <small> <Link style={{display:"none"}} to="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</Link> </small> </h4>
                                                    <form class="comment-form" id="commentform" method="post" action="http://sedatelab.com/developer/donate/wp-comments-post.php">
                                                        <p class="comment-form-author">
                                                            <label for="author">Name <span class="required">*</span></label>
                                                            <input type="text" value="Author" name="Author"  placeholder="Author" id="author"/>
                                                        </p>
                                                        <p class="comment-form-email">
                                                            <label for="email">Email <span class="required">*</span></label>
                                                            <input type="text" value="email" placeholder="Email" name="email" id="email"/>
                                                        </p>
                                                        <p class="comment-form-url">
                                                            <label for="url">Website</label>
                                                            <input type="text"  value="url"  placeholder="Website"  name="url" id="url"/>
                                                        </p>
                                                        <p class="comment-form-comment">
                                                            <label for="comment">Comment</label>
                                                            <textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                                                        </p>
                                                        <p class="form-submit">
                                                            <input type="submit" value="Post Comment" class="submit" id="submit" name="submit"/>
                                                        </p>
                                                    </form>
                                                </div>
                                            </div>
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
export default BlogSingleSidebarLeft;
