import React, { Component } from 'react';
import Link  from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [
    {
        image: require('/images/our-services/ship/pic1.jpg'),
        title: 'Ocean Freight and Shipping',
        description:
            'There are many variations of passages of Lorem Ipsum typesetting industry has been the industry.',

    },
    {
        image: require('/images/our-services/ship/pic2.jpg'),
        title: 'Ocean Freight and Shipping',
        description:
            'There are many variations of passages of Lorem Ipsum typesetting industry has been the industry.',

    },
    {
        image: require('/images/our-services/ship/pic3.jpg'),
        title: 'Ocean Freight and Shipping',
        description:
            'There are many variations of passages of Lorem Ipsum typesetting industry has been the industry.',

    },
]


class ProjectSlider3 extends Component {

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
			arrows: false,
            slidesToShow: 2,
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
				  breakpoint: 991,
				  settings: {
					slidesToShow: 2
				  }
				},
				{
				  breakpoint: 767,
				  settings: {
					slidesToShow: 1
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
                <Slider {...settings} className="project-carousel">
                    {content.map((item, id) => (
                        <div class="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                            <div class="dlab-box portfolio-style1">
                                <div class="dlab-media dlab-img-overlay1 dlab-img-effect">
                                    <Link href="/services-details">
                                        <img src={item.image} alt=""/>
                                    </Link>
                                </div>
                                <div class="portfolio-info">
                                    <h4 class="title"><Link href="/services-details">{item.title}</Link></h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default ProjectSlider3;
