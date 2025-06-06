import React, { Component } from 'react';
import Link  from 'next/link';
import Slider from "react-slick";
import responsive from 'components/element/slider-resonsive'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [
    {
        image: require('/images/our-services/ship/pic1.jpg'),
        icon:'fa fa-codepen',
        title: 'cargo',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',

    },
    {
        image: require('/images/our-services/ship/pic2.jpg'),
        icon:'fa fa-fighter-jet',
        title: 'logistic service',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',

    },
    {
        image: require('/images/our-services/ship/pic3.jpg'),
        icon:'fa fa-home',
        title: 'storage',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',

    },
    {
        image: require('/images/our-services/ship/pic1.jpg'),
        icon:'fa fa-codepen',
        title: 'cargo',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',

    },
]


class ProjectSlider4 extends Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            responsive:responsive()
        };
        return (
            <>
                <Slider {...settings} className="about-ser-carousel btn-style-1">
                    {content.map((item, id) => (
                        <div class="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                            <div class="icon-bx-wraper service-box style6">
                                <div class="dlab-media m-b20">
                                    <img src={item.image} alt=""/>
                                    <div class="icon-bx-sm icon-bx bg-primary icon-up">
                                        <Link href="#" class="icon-cell">
                                            <i class={item.icon}></i>
                                        </Link>
                                    </div>
                                </div>
                                <div class="icon-content">
                                    <h4 class="dlab-tilte text-capitalize"><Link href="/about-1">{item.title}</Link></h4>
                                    <p>{item.description}</p>
                                    <Link href="/about-1" class="site-button btnhover17 radius-no">Read More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default ProjectSlider4;
