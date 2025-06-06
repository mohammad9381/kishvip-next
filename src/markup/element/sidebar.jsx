import React from 'react';
import Link  from 'next/link';
import { Accordion, AccordionItem } from 'react-sanfona';
import ProjectSlider5 from '../element/projectSlider5';

const Sidebar = () => {
    return (
        <div class="col-lg-3">
        <aside  class="side-bar sticky-top">
            <div class="widget">
                <h5 class="widget-title style-1">Search</h5>
                <div class="search-bx style-1">
                    <form role="search" method="post">
                        <div class="input-group">
                            <input name="text" class="form-control" placeholder="Enter your keywords..." type="text"/>
                            <span class="input-group-btn">
                                <button type="submit" class="fa fa-search text-primary"></button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
            <div class="widget recent-posts-entry">
                <h5 class="widget-title style-1">Recent Posts</h5>
                <div class="widget-post-bx">
                    <div class="widget-post clearfix">
                        <div class="dlab-post-media">
                            <img src={("/images/blog/recent-blog/pic1.jpg")} width="200" height="143" alt=""/>
                        </div>
                        <div class="dlab-post-info">
                            <div class="dlab-post-meta">
                                <ul>
                                    <li class="post-date"> <strong>13 Aug</strong> </li>
                                    <li class="post-author"> By <Link href="/#">Jack </Link> </li>
                                </ul>
                            </div>
                            <div class="dlab-post-header">
                                <h6 class="post-title"><Link href="/blog-single-left-sidebar">How To Get People To Like Industry</Link></h6>
                            </div>
                        </div>
                    </div>
                    <div class="widget-post clearfix">
                        <div class="dlab-post-media">
                            <img src={("/images/blog/recent-blog/pic2.jpg")} width="200" height="160" alt=""/>
                        </div>
                        <div class="dlab-post-info">
                            <div class="dlab-post-meta">
                                <ul>
                                    <li class="post-date"> <strong>13 Aug</strong> </li>
                                    <li class="post-author"> By <Link href="/#">Jamie </Link> </li>
                                </ul>
                            </div>
                            <div class="dlab-post-header">
                                <h6 class="post-title"><Link href="/blog-single-left-sidebar">Seven Doubts You Should Clarify About</Link></h6>
                            </div>
                        </div>
                    </div>
                    <div class="widget-post clearfix">
                        <div class="dlab-post-media">
                            <img src={("/images/blog/recent-blog/pic3.jpg")} width="200" height="160" alt=""/>
                        </div>
                        <div class="dlab-post-info">
                            <div class="dlab-post-meta">
                                <ul>
                                    <li class="post-date"> <strong>13 Aug</strong> </li>
                                    <li class="post-author"> By <Link href="/#">Winnie </Link> </li>
                                </ul>
                            </div>
                            <div class="dlab-post-header">
                                <h6 class="post-title"><Link href="/blog-single-left-sidebar">Why You Should Not Go To Industry</Link></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="widget widget-newslatter">
                <h5 class="widget-title style-1">Newsletter</h5>
                <div class="news-box">
                    <p>Enter your e-mail and subscribe to our newsletter.</p>
                    <form class="dzSubscribe" action="script/mailchamp.php" method="post">
                        <div class="dzSubscribeMsg"></div>
                        <div class="input-group">
                            <input name="dzEmail" required="required" type="email" class="form-control" placeholder="Your Email"/>
                            <button name="submit" value="Submit" type="submit" class="site-button btn-block radius-no">Subscribe Now</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="widget widget_gallery gallery-grid-4">
                <h5 class="widget-title style-1">Our Gallery</h5>
                <ul id="lightgallery" class="lightgallery">
                    <li>
                        <div class="dlab-post-thum dlab-img-effect">
                            <span data-exthumbimage="images/gallery/pic1.jpg" data-src="images/gallery/pic1.jpg" class="check-km" title="Image 1 Title will come here">
                                <img src={("/images/gallery/pic1.jpg")} alt=""/>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="dlab-post-thum dlab-img-effect">
                            <span data-exthumbimage="images/gallery/pic2.jpg" data-src="images/gallery/pic2.jpg" class="check-km" title="Image 2 Title will come here">
                                <img src={("/images/gallery/pic2.jpg")} alt=""/>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="dlab-post-thum dlab-img-effect">
                            <span data-exthumbimage="images/gallery/pic3.jpg" data-src="images/gallery/pic3.jpg" class="check-km" title="Image 3 Title will come here">
                                <img src={("/images/gallery/pic3.jpg")} alt=""/>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="dlab-post-thum dlab-img-effect">
                            <span data-exthumbimage="images/gallery/pic4.jpg" data-src="images/gallery/pic4.jpg" class="check-km" title="Image 4 Title will come here">
                                <img src={("/images/gallery/pic4.jpg")} alt=""/>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="dlab-post-thum dlab-img-effect">
                            <span data-exthumbimage="images/gallery/pic5.jpg" data-src="images/gallery/pic5.jpg" class="check-km" title="Image 5 Title will come here">
                                <img src={("/images/gallery/pic5.jpg")} alt=""/>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="dlab-post-thum dlab-img-effect">
                            <span data-exthumbimage="images/gallery/pic6.jpg" data-src="images/gallery/pic6.jpg" class="check-km" title="Image 6 Title will come here">
                                <img src={("/images/gallery/pic6.jpg")} alt=""/>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="dlab-post-thum dlab-img-effect">
                            <span data-exthumbimage="images/gallery/pic7.jpg" data-src="images/gallery/pic7.jpg" class="check-km" title="Image 7 Title will come here">
                                <img src={("/images/gallery/pic7.jpg")} alt=""/>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="dlab-post-thum dlab-img-effect">
                            <span data-exthumbimage="images/gallery/pic8.jpg" data-src="images/gallery/pic8.jpg" class="check-km" title="Image 8 Title will come here">
                                <img src={("/images/gallery/pic8.jpg")} alt=""/>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="widget widget_archive">
                <h5 class="widget-title style-1">Categories List</h5>
                <ul>
                    <Accordion className="accordian">

                        <AccordionItem title="Electronic Materials" titleTag="li">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae
                        </AccordionItem>

                        <AccordionItem title="Auto Parts" titleTag="li">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae
                        </AccordionItem>

                        <AccordionItem title="Building Management" titleTag="li">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae
                        </AccordionItem>

                        <AccordionItem title="Power Systems" titleTag="li">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae
                        </AccordionItem>

                        <AccordionItem title="Power & Energy" titleTag="li">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae
                        </AccordionItem>

                    </Accordion>
                </ul>
            </div>
            <div class="widget widget-project">
                <h5 class="widget-title style-1">Our Project</h5>
                <ProjectSlider5 slideToShow={1}/>
            </div>
            <div class="widget widget_tag_cloud radius">
                <h5 class="widget-title style-1">Tags</h5>
                <div class="tagcloud">
                    <Link href="/#">Design</Link>
                    <Link href="/#">User interface</Link>
                    <Link href="/#">SEO</Link>
                    <Link href="/#">WordPress</Link>
                    <Link href="/#">Development</Link>
                    <Link href="/#">Joomla</Link>
                    <Link href="/#">Design</Link>
                    <Link href="/#">User interface</Link>
                    <Link href="/#">SEO</Link>
                    <Link href="/#">WordPress</Link>
                    <Link href="/#">Development</Link>
                    <Link href="/#">Joomla</Link>
                    <Link href="/#">Design</Link>
                    <Link href="/#">User interface</Link>
                    <Link href="/#">SEO</Link>
                    <Link href="/#">WordPress</Link>
                    <Link href="/#">Development</Link>
                    <Link href="/#">Joomla</Link>
                </div>
            </div>
        </aside>
    </div>
    );
}

export default Sidebar;
