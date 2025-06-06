import React, { Component } from 'react';
import Link  from 'next/link';
import Slider from "react-slick";

class TeamBoxType extends Component {

    render() {

        return (
            <>
                <div class="row">
					<div class="col-lg-6 col-md-12 m-b30">
						<div class="team-box-type dlab-box">
							<div class="team-mamber-img dlab-media dlab-img-overlay8">
								<img src={("/images/our-team/pic4.jpg")} alt=""/>
							</div>
							<div class="team-info-box">
								<h4 class="dlab-title"><a href="javascript:;">Marco Datella</a></h4>
								<p>Lorem Ipsum is simply dummy text of the printing and.</p>
								<ul class="list-inline m-tb20">
									<li><a href="javascript:void(0);" class="site-button facebook sharp outline">
										<i class="fa fa-facebook"></i>
									</a></li>
									<li><a href="javascript:void(0);" class="site-button google-plus sharp outline">
										<i class="fa fa-google-plus"></i>
									</a></li>
									<li><a href="javascript:void(0);" class="site-button linkedin sharp outline">
										<i class="fa fa-linkedin"></i>
									</a></li>
									<li><a href="javascript:void(0);" class="site-button twitter sharp outline">
										<i class="fa fa-twitter"></i>
									</a></li>
								</ul>
								<ul class="team-p-info">
									<li><i class="ti-mobile m-r5 text-primary"></i> +01 234 567 8910</li>
									<li><i class="ti-email m-r5 text-primary"></i> info@example.com</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-12 m-b30">
						<div class="team-box-type dlab-box">
							<div class="team-mamber-img dlab-media dlab-img-overlay8">
								<img src={("/images/our-team/pic3.jpg")} alt=""/>
							</div>
							<div class="team-info-box">
								<h4 class="dlab-title"><a href="javascript:;">Konne Backfield</a></h4>
								<p>Lorem Ipsum is simply dummy text of the printing and.</p>
								<ul class="list-inline m-tb20">
									<li><a href="javascript:void(0);" class="site-button facebook sharp outline">
										<i class="fa fa-facebook"></i>
									</a></li>
									<li><a href="javascript:void(0);" class="site-button google-plus sharp outline">
										<i class="fa fa-google-plus"></i>
									</a></li>
									<li><a href="javascript:void(0);" class="site-button linkedin sharp outline">
										<i class="fa fa-linkedin"></i>
									</a></li>
									<li><a href="javascript:void(0);" class="site-button twitter sharp outline">
										<i class="fa fa-twitter"></i>
									</a></li>
								</ul>
								<ul class="team-p-info">
									<li><i class="ti-mobile m-r5 text-primary"></i> +01 234 567 8910</li>
									<li><i class="ti-email m-r5 text-primary"></i> info@example.com</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-12 m-b30">
						<div class="team-box-type dlab-box">
							<div class="team-mamber-img dlab-media dlab-img-overlay8">
								<img src={("/images/our-team/pic2.jpg")} alt=""/>
							</div>
							<div class="team-info-box">
								<h4 class="dlab-title"><a href="javascript:;">Hackson Willingham</a></h4>
								<p>Lorem Ipsum is simply dummy text of the printing and.</p>
								<ul class="list-inline m-tb20">
									<li><a href="javascript:void(0);" class="site-button facebook sharp outline">
										<i class="fa fa-facebook"></i>
									</a></li>
									<li><a href="javascript:void(0);" class="site-button google-plus sharp outline">
										<i class="fa fa-google-plus"></i>
									</a></li>
									<li><a href="javascript:void(0);" class="site-button linkedin sharp outline">
										<i class="fa fa-linkedin"></i>
									</a></li>
									<li><a href="javascript:void(0);" class="site-button twitter sharp outline">
										<i class="fa fa-twitter"></i>
									</a></li>
								</ul>
								<ul class="team-p-info">
									<li><i class="ti-mobile m-r5 text-primary"></i> +01 234 567 8910</li>
									<li><i class="ti-email m-r5 text-primary"></i> info@example.com</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-12 m-b30">
						<div class="team-box-type dlab-box">
							<div class="team-mamber-img dlab-media dlab-img-overlay8">
								<img src={("/images/our-team/pic1.jpg")} alt=""/>
							</div>
							<div class="team-info-box">
								<h4 class="dlab-title"><a href="javascript:;">Jimmy Morris</a></h4>
								<p>Lorem Ipsum is simply dummy text of the printing and.</p>
								<ul class="list-inline m-tb20">
									<li><a href="javascript:void(0);" class="site-button facebook sharp outline">
										<i class="fa fa-facebook"></i>
									</a></li>
									<li><a href="javascript:void(0);" class="site-button google-plus sharp outline">
										<i class="fa fa-google-plus"></i>
									</a></li>
									<li><a href="javascript:void(0);" class="site-button linkedin sharp outline">
										<i class="fa fa-linkedin"></i>
									</a></li>
									<li><a href="javascript:void(0);" class="site-button twitter sharp outline">
										<i class="fa fa-twitter"></i>
									</a></li>
								</ul>
								<ul class="team-p-info">
									<li><i class="ti-mobile m-r5 text-primary"></i> +01 234 567 8910</li>
									<li><i class="ti-email m-r5 text-primary"></i> info@example.com</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
            </>
        )
    }
}
export default TeamBoxType;
