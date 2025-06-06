import React, { Component } from 'react';
import Link  from 'next/link';
import Slider from "react-slick";

class Team10 extends Component {

    render() {

        return (
            <>
                <div class="row dlab-team10-area">
					<div class="col-lg-3 col-md-6 col-sm-6">
						<div class="dlab-box m-b30 dlab-team10">
							<div class="dlab-media">
								<a href="javascript:;">
									<img alt="" src={("/images/our-team/team-bx/pic1.jpg")}/>
								</a>
							</div>
							<div class="dlab-info">
								<h4 class="dlab-title"><a href="javascript:;">Nashid Martines</a></h4>
								<span class="dlab-position">Director</span>
								<ul class="dlab-social-icon">
									<li><a class="site-button fa fa-facebook facebook" href="javascript:void(0);"></a></li>
									<li><a class="site-button fa fa-twitter twitter" href="javascript:void(0);"></a></li>
									<li><a class="site-button fa fa-linkedin linkedin" href="javascript:void(0);"></a></li>
									<li><a class="site-button fa fa-pinterest pinterest" href="javascript:void(0);"></a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6">
						<div class="dlab-box m-b30 dlab-team10">
							<div class="dlab-media">
								<a href="javascript:;">
									<img alt="" src={("/images/our-team/team-bx/pic2.jpg")}/>
								</a>
							</div>
							<div class="dlab-info">
								<h4 class="dlab-title"><a href="javascript:;">Konne Backfield</a></h4>
								<span class="dlab-position">Designer</span>
								<ul class="dlab-social-icon">
									<li><a class="site-button fa fa-facebook facebook" href="javascript:void(0);"></a></li>
									<li><a class="site-button fa fa-twitter twitter" href="javascript:void(0);"></a></li>
									<li><a class="site-button fa fa-linkedin linkedin" href="javascript:void(0);"></a></li>
									<li><a class="site-button fa fa-pinterest pinterest" href="javascript:void(0);"></a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6">
						<div class="dlab-box m-b30 dlab-team10">
							<div class="dlab-media">
								<a href="javascript:;">
									<img alt="" src={("/images/our-team/team-bx/pic3.jpg")}/>
								</a>
							</div>
							<div class="dlab-info">
								<h4 class="dlab-title"><a href="javascript:;">Hackson Willingham</a></h4>
								<span class="dlab-position">Developer</span>
								<ul class="dlab-social-icon">
									<li><a class="site-button fa fa-facebook facebook" href="javascript:void(0);"></a></li>
									<li><a class="site-button fa fa-twitter twitter" href="javascript:void(0);"></a></li>
									<li><a class="site-button fa fa-linkedin linkedin" href="javascript:void(0);"></a></li>
									<li><a class="site-button fa fa-pinterest pinterest" href="javascript:void(0);"></a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6">
						<div class="dlab-box m-b30 dlab-team10">
							<div class="dlab-media">
								<a href="javascript:;">
									<img alt="" src={("/images/our-team/team-bx/pic4.jpg")}/>
								</a>
							</div>
							<div class="dlab-info">
								<h4 class="dlab-title"><a href="javascript:;">Konne Backfield</a></h4>
								<span class="dlab-position">Manager</span>
								<ul class="dlab-social-icon">
									<li><a class="site-button fa fa-facebook facebook" href="javascript:void(0);"></a></li>
									<li><a class="site-button fa fa-twitter twitter" href="javascript:void(0);"></a></li>
									<li><a class="site-button fa fa-linkedin linkedin" href="javascript:void(0);"></a></li>
									<li><a class="site-button fa fa-pinterest pinterest" href="javascript:void(0);"></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

            </>
        )
    }
}
export default Team10;
