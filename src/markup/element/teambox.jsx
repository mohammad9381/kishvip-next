import React, { Component } from 'react';
import Link  from 'next/link';
import Slider from "react-slick";

class TeamBox extends Component {

    render() {

        return (
            <>
                <div class="row text-center">
					<div class="col-lg-3 col-md-6 col-sm-6 m-b30">
						<div class="dlab-box">
							<div class="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm"> <img src={("/images/our-team/pic1.jpg")} alt=""/>
								<div class="overlay-bx">
									<div class="overlay-icon">
										<ul class="dlab-social-icon">
											<li><a href="javascript:void(0);" class="fa text-white fa-facebook"></a></li>
											<li><a href="javascript:void(0);" class="fa text-white fa-twitter"></a></li>
											<li><a href="javascript:void(0);" class="fa text-white fa-linkedin"></a></li>
											<li><a href="javascript:void(0);" class="fa text-white fa-facebook"></a></li>
										</ul>
									</div>
								</div>
							</div>
							<div class="dlab-title-bx p-a10">
								<h5 class="dlab-title m-b5"><a href="javascript:;">Marco Datella</a></h5>
								<span class="dlab-position">Director</span>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6 m-b30">
						<div class="dlab-box">
							<div class="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm"> <img src={("/images/our-team/pic2.jpg")} alt=""/>
								<div class="overlay-bx">
									<div class="overlay-icon">
										<ul class="dlab-social-icon">
											<li><a href="javascript:void(0);" class="fa text-white fa-facebook"></a></li>
											<li><a href="javascript:void(0);" class="fa text-white fa-twitter"></a></li>
											<li><a href="javascript:void(0);" class="fa text-white fa-linkedin"></a></li>
											<li><a href="javascript:void(0);" class="fa text-white fa-facebook"></a></li>
										</ul>
									</div>
								</div>
							</div>
							<div class="dlab-title-bx p-a10">
								<h5 class="dlab-title m-b5"><a href="javascript:;">Marco Datella</a></h5>
								<span class="dlab-position">Director</span>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6 m-b30">
						<div class="dlab-box">
							<div class="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm"> <img src={("/images/our-team/pic3.jpg")} alt=""/>
								<div class="overlay-bx">
									<div class="overlay-icon">
										<ul class="dlab-social-icon">
											<li><a href="javascript:void(0);" class="fa text-white fa-facebook"></a></li>
											<li><a href="javascript:void(0);" class="fa text-white fa-twitter"></a></li>
											<li><a href="javascript:void(0);" class="fa text-white fa-linkedin"></a></li>
											<li><a href="javascript:void(0);" class="fa text-white fa-facebook"></a></li>
										</ul>
									</div>
								</div>
							</div>
							<div class="dlab-title-bx p-a10">
								<h5 class="dlab-title m-b5"><a href="javascript:;">Konne Backfield</a></h5>
								<span class="dlab-position">Developer</span>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6 m-b30">
						<div class="dlab-box">
							<div class="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm"> <img src={("/images/our-team/pic4.jpg")} alt=""/>
								<div class="overlay-bx">
									<div class="overlay-icon">
										<ul class="dlab-social-icon">
											<li><a href="javascript:void(0);" class="fa text-white fa-facebook"></a></li>
											<li><a href="javascript:void(0);" class="fa text-white fa-twitter"></a></li>
											<li><a href="javascript:void(0);" class="fa text-white fa-linkedin"></a></li>
											<li><a href="javascript:void(0);" class="fa text-white fa-facebook"></a></li>
										</ul>
									</div>
								</div>
							</div>
							<div class="dlab-title-bx p-a10">
								<h5 class="dlab-title m-b5"><a href="javascript:;">Hackson Willingham</a></h5>
								<span class="dlab-position">Manager</span>
							</div>
						</div>
					</div>
				</div>
            </>
        )
    }
}
export default TeamBox;
