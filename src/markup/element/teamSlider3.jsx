import React, { Component } from 'react';
import Link  from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [
    {
        image: ('/images/our-team/pic1.jpg'),
        name:"Oliver",
        title: 'Director',
    },
    {
        image: ('/images/our-team/pic2.jpg'),
        name:"Alexander",
        title: 'Designer',
    },
    {
        image: ('/images/our-team/pic3.jpg'),
        name:"Hackson Willingham",
        title: 'Developer',
    },
    {
        image: ('/images/our-team/pic4.jpg'),
        name:"Konne Backfield",
        title: 'Manager',
    }
]


class TeamSlider3 extends Component {

    render() {

        const settings = {
            dots: true,
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
        return (
            <>
                <Slider {...settings} className="img-carousel btn-style-1 dots-long d-primary" >
                    {content.map((item, id) => (
                        <div class="item">
                            <div class="dlab-box m-b30 dlab-team1">
                                <div class="dlab-media">
                                    <Link href="#">
                                        <img width="358" height="460" alt="" src={item.image}/>
                                    </Link>
                                </div>
                                <div class="dlab-info">
                                    <h4 class="dlab-title"><Link href="#">{item.name}</Link></h4>
                                    <span class="dlab-position">{item.title}</span>
                                    <ul class="dlab-social-icon dez-border">
                                        <li><Link class="fa fa-facebook" to="#"></Link></li>
                                        <li><Link class="fa fa-twitter" to="#"></Link></li>
                                        <li><Link class="fa fa-linkedin" to="#"></Link></li>
                                        <li><Link class="fa fa-pinterest" to="#"></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default TeamSlider3;
