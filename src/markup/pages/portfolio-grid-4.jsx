import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Portfolio from '../element/portfolio'

const bg = require('/images/banner/bnr4.jpg')

class PortfolioGrid4 extends Component {


    render() {
        return (
            <>
                <Header/>
                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }} >
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Portfolio Grid 4 Icon</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link href="/">Home</Link></li>
                                        <li>Portfolio Grid 4 Icon</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Portfolio col="col-md-3"/>
                </div>
                <Footer/>
            </>
        )
    }
}
export default PortfolioGrid4;
