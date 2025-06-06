import React, { Component } from 'react';
import Link  from 'next/link';
import Slider from "react-slick";

class Team11 extends Component {

    render() {

        return (
            <>
                <div class="row">
					<div class="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
						<div class="dlab-box m-b30 fly-box-ho dlab-img-effect on-color">
							<div class="dlab-media dlab-img-overlay2 dlab-img-effect text-center">
								<Link href="/team-1"> <img width="358" height="460" src={("/images/our-team/pic8.jpg")} alt=""/> </Link>
								<div class="dlab-info-has ">
									<ul class="dlab-social-icon dlab-social-icon-lg border">
										<li><Link href="#" class="fa fa-facebook fb-btn"></Link></li>
										<li><Link href="#" class="fa fa-twitter tw-btn"></Link></li>
										<li><Link href="#" class="fa fa-linkedin link-btn"></Link></li>
										<li><Link href="#" class="fa fa-pinterest-p pin-btn"></Link></li>
									</ul>
								</div>
							</div>
							<div class="p-lr10 p-tb20 text-black bg-white text-center">
								<h5 class="dlab-title m-t0 m-b5"><Link href="/team-1">Nashid Martines</Link></h5>
								<span class="dlab-member-position">Director</span>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
						<div class="dlab-box m-b30 fly-box-ho dlab-img-effect on-color">
							<div class="dlab-media dlab-img-overlay2 dlab-img-effect text-center">
								<Link href="/team-1"> <img width="358" height="460" src={("/images/our-team/pic5.jpg")} alt=""/> </Link>
								<div class="dlab-info-has">
									<ul class="dlab-social-icon dlab-social-icon-lg border">
										<li><Link href="#" class="fa fa-facebook fb-btn"></Link></li>
										<li><Link href="#" class="fa fa-twitter tw-btn"></Link></li>
										<li><Link href="#" class="fa fa-linkedin link-btn"></Link></li>
										<li><Link href="#" class="fa fa-pinterest-p pin-btn"></Link></li>
									</ul>
								</div>
							</div>
							<div class="p-lr10 p-tb20 text-black bg-white text-center">
								<h5 class="dlab-title m-t0 m-b5"><Link href="/team-1">Nashid Martines</Link></h5>
								<span class="dlab-member-position">Director</span>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.3s">
						<div class="dlab-box m-b30 fly-box-ho dlab-img-effect on-color">
							<div class="dlab-media dlab-img-overlay2 dlab-img-effect text-center">
								<Link href="/team-1"> <img width="358" height="460" src={("/images/our-team/pic1.jpg")} alt=""/> </Link>
								<div class="dlab-info-has ">
									<ul class="dlab-social-icon dlab-social-icon-lg border">
										<li><Link href="#" class="fa fa-facebook fb-btn"></Link></li>
										<li><Link href="#" class="fa fa-twitter tw-btn"></Link></li>
										<li><Link href="#" class="fa fa-linkedin link-btn"></Link></li>
										<li><Link href="#" class="fa fa-pinterest-p pin-btn"></Link></li>
									</ul>
								</div>
							</div>
							<div class="p-lr10 p-tb20 text-black bg-white text-center">
								<h5 class="dlab-title m-t0 m-b5"><Link href="/team-1">Nashid Martines</Link></h5>
								<span class="dlab-member-position">Director</span>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
						<div class="dlab-box m-b30 fly-box-ho dlab-img-effect on-color">
							<div class="dlab-media dlab-img-overlay2 dlab-img-effect text-center">
								<Link href="/team-1"> <img width="358" height="460" src={("/images/our-team/pic6.jpg")} alt=""/> </Link>
								<div class="dlab-info-has">
									<ul class="dlab-social-icon dlab-social-icon-lg border">
										<li><Link href="#" class="fa fa-facebook fb-btn"></Link></li>
										<li><Link href="#" class="fa fa-twitter tw-btn"></Link></li>
										<li><Link href="#" class="fa fa-linkedin link-btn"></Link></li>
										<li><Link href="#" class="fa fa-pinterest-p pin-btn"></Link></li>
									</ul>
								</div>
							</div>
							<div class="p-lr10 p-tb20 text-black bg-white text-center">
								<h5 class="dlab-title m-t0 m-b5"><Link href="/team-1">Hackson Willingham</Link></h5>
								<span class="dlab-member-position">Developer</span>
							</div>
						</div>
					</div>
				</div>

            </>
        )
    }
}
export default Team11;
