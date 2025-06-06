import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'


class Error405 extends Component {


    render() {
        return (
            <>
                <Header/>
                <div class="page-content bg-white">
                    <div class="section-full dz_error-405 content-inner bg-gray">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-5 text-center m-tb30">
                                    <div class="dz_error">405</div>
                                </div>
                                <div class="col-lg-7 m-b30">
                                    <h2 class="error-head">Server Error!</h2>
                                    <div class="dlab-divider bg-gray-dark"></div>
                                    <p class="font-16 error-content">You can go back to the Main Page by clicking the button.</p>
                                    <Link href="/index" class="site-button">Go To Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}
export default Error405;
