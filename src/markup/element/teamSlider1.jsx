import React, { Component } from 'react';
import Link  from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [
    {
        image: ('/images/our-team/team-bx/pic1.jpg'),
        name:"Oliver",
        title: 'Farm Experts',
    },
    {
        image: ('/images/our-team/team-bx/pic2.jpg'),
        name:"Alexander",
        title: 'Farmer',
    },
    {
        image: ('/images/our-team/team-bx/pic3.jpg'),
        name:"Charles",
        title: 'milkmaster',
    },
    {
        image: ('/images/our-team/team-bx/pic4.jpg'),
        name:"Thomas",
        title: 'warden of sty',
    },
	{
        image: ('/images/our-team/team-bx/pic1.jpg'),
        name:"Oliver",
        title: 'Farm Experts',
    }
]


class TeamSlider1 extends Component {

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
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
                <Slider {...settings} className="dlab-team11-area dots-theme dots-long d-primary btn-style-2" >
                    {content.map((item, id) => (
                        <div class="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                            <div class="dlab-box dlab-team11">
                                <div class="dlab-media dlab-img-effect zoom">
                                    <Link href="/team-1">
                                        <img src={item.image} alt=""/>
                                    </Link>
                                </div>
                                <div class="dlab-info">
                                    <h4 class="dlab-title"><Link href="/team-1">{item.name}</Link></h4>
                                    <span class="dlab-position">{item.title}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default TeamSlider1;
