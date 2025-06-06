import React, { Component } from 'react';
import Link  from 'next/link';
import Slider from "react-slick";

class Team6 extends Component {

    render() {

        return (
            <>
                <div class="row">
					<div class="col-lg-4 col-md-4 col-sm-6">
						<div class="dlab-box m-b30 dlab-team6">
							<div class="dlab-media">
								<a href="javascript:;">
									<img alt="" src={("/images/our-team/pic2.jpg")}/>
								</a>
							</div>
							<div class="dlab-info">
								<h4 class="dlab-title"><a href="javascript:;">Marco Datella</a></h4>
								<span class="dlab-position">Designer</span>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-6">
						<div class="dlab-box m-b30 dlab-team6">
							<div class="dlab-media">
								<a href="javascript:;">
									<img alt="" src={("/images/our-team/pic3.jpg")}/>
								</a>
							</div>
							<div class="dlab-info">
								<h4 class="dlab-title"><a href="javascript:;">Konne Backfield</a></h4>
								<span class="dlab-position">Developer</span>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-6">
						<div class="dlab-box m-b30 dlab-team6">
							<div class="dlab-media">
								<a href="javascript:;">
									<img alt="" src={("/images/our-team/pic4.jpg")}/>
								</a>
							</div>
							<div class="dlab-info">
								<h4 class="dlab-title"><a href="javascript:;">Nashid Martines</a></h4>
								<span class="dlab-position">Manager</span>
							</div>
						</div>
					</div>
				</div>

            </>
        )
    }
}
export default Team6;
