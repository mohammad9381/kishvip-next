import React, { Component } from 'react';
// import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

import Team1 from '../element/team1'
import Team3 from '../element/team3'
import Team4 from '../../components/element/team4'
import Team5 from '../element/team5'
import Team6 from '../element/team6'
import Team8 from '../element/team8'
import Team9 from '../element/team9'
import Team10 from '../element/team10'
import Team11 from '../element/team11'

import TeamRounded from '../element/teamrounded'
import TeamBoxType from '../element/teamboxtype'
import TeamFlyBox from '../element/teamflybox'
import TeamBox from '../element/teambox'

import TeamSlider1 from '../element/teamSlider1';
import TeamSlider2 from '../element/teamSlider2';

var bnr4 = require('/images/banner/bnr4.jpg');
var bg2 = require('/images/background/bg2.jpg');
var bg19 = require('/images/background/bg19.jpg');

class shortTeam extends Component {

    render() {
        return (
            <>
                <Header />

                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
								<h1 class="text-white">Team</h1>
								<div class="breadcrumb-row">
									<ul class="list-inline">
										<li><a href="/">Home</a></li>
										<li>Element</li>
										<li>Team</li>
									</ul>
								</div>
							</div>
                        </div>
                    </div>

					<div class="section-full bg-white content-inner">
						<div class="container">
							<div class="sort-title clearfix text-center">
								<h4>Team Section Style 1</h4>
							</div>
							<Team4 />
						</div>
					</div>

					<div class="section-full bg-gray content-inner">
						<div class="container">
							<div class="sort-title clearfix text-center">
								<h4>Team Section Style 2</h4>
							</div>
							<Team5 />
						</div>
					</div>

					<div class="section-full bg-white content-inner">
						<div class="container">
							<div class="sort-title clearfix text-center">
								<h4>Team Section Style 3</h4>
							</div>
							<Team6 />
						</div>
					</div>

					<div class="section-full bg-gray content-inner">
						<div class="container">
							<div class="sort-title clearfix text-center">
								<h4>Team Section Style 4</h4>
							</div>
							<TeamSlider2 />
						</div>
					</div>

					<div class="section-full bg-white content-inner">
						<div class="container">
							<div class="sort-title clearfix text-center">
								<h4>Team Section Style 5</h4>
							</div>
							<Team8 />
						</div>
					</div>

					<div class="section-full bg-gray content-inner">
						<div class="container">
							<div class="sort-title clearfix text-center">
								<h4>Team Section Style 6</h4>
							</div>
							<Team9 />
						</div>
					</div>

					<div class="section-full bg-white content-inner">
						<div class="container">
							<div class="sort-title clearfix text-center">
								<h4>Team Section Style 7</h4>
							</div>
							<Team10 />
						</div>
					</div>

					<div class="section-full bg-gray content-inner-2">
						<div class="container">
							<div class="sort-title clearfix text-center">
								<h4>Team Section Style 8</h4>
							</div>
							 <TeamSlider1/>
						</div>
					</div>

					<div class="section-full bg-white content-inner overlay-primary-dark bg-img-fix" style={{backgroundImage: "url(" + bg19 + ")"}}>
						<div class="container">
							<div class="sort-title clearfix text-white text-center">
								<h4>Team Section Style 9</h4>
							</div>
							<Team3 />
						</div>
					</div>

					<div class="section-full bg-gray content-inner">
						<div class="container">
							<div class="sort-title clearfix text-center">
								<h4>Team Section Style 10</h4>
							</div>
							<Team1 />
						</div>
					</div>

					<div class="dlab-divider bg-gray-dark"></div>

					<div class="section-full bg-white content-inner">
						<div class="container">
							<div class="row">
								<div class="col-lg-12">
									<div class="sort-title clearfix text-center">
										<h4>Team Section Style 11</h4>
									</div>
									<TeamRounded />
								</div>
							</div>
						</div>
					</div>

					<div class="dlab-divider bg-gray-dark"></div>

					<div class="section-full bg-white content-inner">
						<div class="container">
							<div class="row">
								<div class="col-lg-12">
									<div class="sort-title clearfix text-center">
										<h4>Team Section Style 12</h4>
									</div>
									<TeamBoxType />
								</div>
							</div>
						</div>
					</div>

					<div class="dlab-divider bg-gray-dark"></div>

					<div class="section-full bg-white content-inner">
						<div class="container">
							<div class="row">
								<div class="col-lg-12">
									<div class="sort-title clearfix text-center">
										<h4>Team Section Style 13</h4>
									</div>
									<TeamBox />
								</div>
							</div>
						</div>
					</div>

					<div class="section-full bg-gray content-inner bg-img-fix overlay-black-dark" style={{backgroundImage: "url(" + bg2 + ")"}}>
						<div class="container">
							<div class="row">
								<div class="col-lg-12">
									<div class="sort-title clearfix text-center text-white">
										<h4>Team Section Style 14</h4>
									</div>
									<Team11 />
								</div>
							</div>
						</div>
					</div>

					<div class="section-full bg-white content-inner">
						<div class="container">
							<div class="row">
								<div class="col-lg-12">
									<div class="sort-title clearfix text-center">
										<h4>Team Section Style 15</h4>
									</div>
									<TeamFlyBox />
								</div>
							</div>
						</div>
					</div>

                </div>

                <Footer />
            </>
        )
    }
}

export default shortTeam;
