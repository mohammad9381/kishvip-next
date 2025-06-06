import React, { Component } from 'react';
import Link  from 'next/link';
import Slider from "react-slick";

class TeamFlyBox extends Component {

    render() {

        return (
            <>
                <div class="row">
					<div class="col-lg-4 col-md-4 col-sm-12 m-b30">
						<div class="dlab-box fly-box dlab-img-effect off-color ">
							<div class="dlab-media">
								<a href="javascript:void(0);"><img src={("/images/our-team/pic1.jpg")} alt=""/></a>
							</div>
							<div class="dlab-info p-a20 p-t40 border-1">
								<h5 class="dlab-title m-tb0"><a href="javascript:void(0);">Marco Datella</a></h5>
								<div class="bg-primary skew-content-box">
									<ul class="dlab-social-icon">
										<li><a class="fa fa-facebook" href="javascript:void(0);"></a></li>
										<li><a class="fa fa-twitter" href="javascript:void(0);"></a></li>
										<li><a class="fa fa-linkedin" href="javascript:void(0);"></a></li>
										<li><a class="fa fa-google-plus" href="javascript:void(0);"></a></li>
									</ul>
								</div>
								<span>Developer</span>
								<p class="m-t10 m-b0">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-12 m-b30">
						<div class="dlab-box fly-box dlab-img-effect off-color ">
							<div class="dlab-media">
								<a href="javascript:void(0);"><img src={("/images/our-team/pic2.jpg")} alt=""/></a>
							</div>
							<div class="dlab-info p-a20 p-t40 border-1">
								<h5 class="dlab-title m-tb0"><a href="javascript:void(0);">Konne Backfield</a></h5>
								<div class="bg-primary skew-content-box">
									<ul class="dlab-social-icon">
										<li><a class="fa fa-facebook" href="javascript:void(0);"></a></li>
										<li><a class="fa fa-twitter" href="javascript:void(0);"></a></li>
										<li><a class="fa fa-linkedin" href="javascript:void(0);"></a></li>
										<li><a class="fa fa-google-plus" href="javascript:void(0);"></a></li>
									</ul>
								</div>
								<span>Manager</span>
								<p class="m-t10 m-b0">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-12 m-b30">
						<div class="dlab-box fly-box dlab-img-effect off-color ">
							<div class="dlab-media off-color">
								<a href="javascript:void(0);"><img src={("/images/our-team/pic3.jpg")} alt=""/></a>
							</div>
							<div class="dlab-info p-a20 p-t40 border-1">
								<h5 class="dlab-title m-tb0"><a href="javascript:void(0);">Jimmy Morris</a></h5>
								<div class="bg-primary skew-content-box">
									<ul class="dlab-social-icon">
										<li><a class="fa fa-facebook" href="javascript:void(0);"></a></li>
										<li><a class="fa fa-twitter" href="javascript:void(0);"></a></li>
										<li><a class="fa fa-linkedin" href="javascript:void(0);"></a></li>
										<li><a class="fa fa-google-plus" href="javascript:void(0);"></a></li>
									</ul>
								</div>
								<span>Director</span>
								<p class="m-t10 m-b0">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
							</div>
						</div>
					</div>
				</div>
            </>
        )
    }
}
export default TeamFlyBox;
