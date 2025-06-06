import React, { Component } from 'react';
import Link  from 'next/link';
import Slider from "react-slick";

class Team1 extends Component {

    render() {

        return (
            <>
                <div class="row">
					<div class="col-lg-3 col-md-6 col-sm-6">
						<div class="relative">
							<div class="dlab-box dlab-team1">
								<div class="inner">
									<div class="dlab-media">
										<a href="javascript:;">
											<img width="358" height="460" alt="" src={("/images/our-team/pic1.jpg")}/>
										</a>
									</div>
									<div class="dlab-info">
										<h4 class="dlab-title"><a href="javascript:;">Nashid Martines</a></h4>
										<span class="dlab-position">Director</span>
										<ul class="dlab-social-icon dez-border">
											<li><a class="fa fa-facebook" href="javascript:void(0);"></a></li>
											<li><a class="fa fa-twitter" href="javascript:void(0);"></a></li>
											<li><a class="fa fa-linkedin" href="javascript:void(0);"></a></li>
											<li><a class="fa fa-pinterest" href="javascript:void(0);"></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6">
						<div class="dlab-box m-b30 dlab-team1">
							<div class="dlab-media">
								<a href="javascript:;">
									<img width="358" height="460" alt="" src={("/images/our-team/pic2.jpg")}/>
								</a>
							</div>
							<div class="dlab-info">
								<h4 class="dlab-title"><a href="javascript:;">Konne Backfield</a></h4>
								<span class="dlab-position">Designer</span>
								<ul class="dlab-social-icon dez-border">
									<li><a class="fa fa-facebook" href="javascript:void(0);"></a></li>
									<li><a class="fa fa-twitter" href="javascript:void(0);"></a></li>
									<li><a class="fa fa-linkedin" href="javascript:void(0);"></a></li>
									<li><a class="fa fa-pinterest" href="javascript:void(0);"></a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6">
						<div class="dlab-box m-b30 dlab-team1">
							<div class="dlab-media">
								<a href="javascript:;">
									<img width="358" height="460" alt="" src={("/images/our-team/pic3.jpg")}/>
								</a>
							</div>
							<div class="dlab-info">
								<h4 class="dlab-title"><a href="javascript:;">Hackson Willingham</a></h4>
								<span class="dlab-position">Developer</span>
								<ul class="dlab-social-icon dez-border">
									<li><a class="fa fa-facebook" href="javascript:void(0);"></a></li>
									<li><a class="fa fa-twitter" href="javascript:void(0);"></a></li>
									<li><a class="fa fa-linkedin" href="javascript:void(0);"></a></li>
									<li><a class="fa fa-pinterest" href="javascript:void(0);"></a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6">
						<div class="dlab-box m-b30 dlab-team1">
							<div class="dlab-media">
								<a href="javascript:;">
									<img width="358" height="460" alt="" src={("/images/our-team/pic4.jpg")}/>
								</a>
							</div>
							<div class="dlab-info">
								<h4 class="dlab-title"><a href="javascript:;">Konne Backfield</a></h4>
								<span class="dlab-position">Manager</span>
								<ul class="dlab-social-icon dez-border">
									<li><a class="fa fa-facebook" href="javascript:void(0);"></a></li>
									<li><a class="fa fa-twitter" href="javascript:void(0);"></a></li>
									<li><a class="fa fa-linkedin" href="javascript:void(0);"></a></li>
									<li><a class="fa fa-pinterest" href="javascript:void(0);"></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

            </>
        )
    }
}
export default Team1;
