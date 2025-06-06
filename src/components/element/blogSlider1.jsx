import React, { Component } from 'react';
import Slider from "react-slick";
import responsive from './slider-resonsive'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavLink from "hoc/NavLink";


class BlogSlider1 extends Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 2
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			  ]
        };
        const imgEffect   = this.props.imgEffect || ""
        const blogPostCls = this.props.blogPostCls || "blog-grid blog-rounded blog-effect1 post-style-3"

        return (
            <>
                <Slider {...settings} className="blog-carousel btn-style-1">
                    {this.props.data.map((item, id) => (
                        <div className="item">
                            <div className={`blog-post ${blogPostCls}`}>
                                <div className={`dlab-post-media dlab-img-effect ${imgEffect}`}> <NavLink href="#"><img src={item.image} alt="" /></NavLink> </div>
                                <div className="dlab-post-info">
                                    <div className="dlab-post-meta">
                                        <ul>
                                            <li className="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
                                            <li className="post-author"> By <NavLink href="#">{item.author}</NavLink> </li>
                                        </ul>
                                    </div>
                                    <div className="dlab-post-title">
                                        <h4 className="post-title"><NavLink href="/blog-single">{item.title}</NavLink></h4>
                                    </div>
                                    {!this.props.noDes &&
                                        (<div className="dlab-post-text">
                                            <p>{item.description}</p>
                                        </div>)
                                    }
                                    <div className="dlab-post-readmore">
                                        <NavLink href="/blog-single" title="READ MORE" rel="bookmark" className="site-button btnhover14">بیشتر بخوانید</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default BlogSlider1;
