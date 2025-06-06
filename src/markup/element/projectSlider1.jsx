import React, { Component } from 'react';
import Link  from 'next/link';
import Slider from "react-slick";
import responsive from 'components/element/slider-resonsive'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class ProjectSlider1 extends Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 2
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1
				  }
				}
			]
        };
        return (
            <>
                <Slider {...settings} className="img-carousel-dots-nav btn-style-1 icon-2">
                    {this.props.data.map((item, id) => (
                        <div class="item">
                            <div class="dlab-box project-bx">
                                <div class="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect zoom">
                                    <Link href="/portfolio-details">
                                        <img src={item.image} alt="" />
                                    </Link>
                                </div>
                                <div class="dlab-info">
                                    <h5 class="dlab-title"><Link href="/portfolio-details">{item.projectName}</Link></h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default ProjectSlider1;
