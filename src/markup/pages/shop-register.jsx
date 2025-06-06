import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('/images/banner/bnr5.jpg')

class ShopRegister extends Component {


    render() {
        return (
            <>
                <Header/>
                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle bg-pt"  style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Register</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link href="/">Home</Link></li>
                                        <li>Register</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-full content-inner shop-account">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 text-center">
                                    <h2 class="font-weight-700 m-t0 m-b40">CREATE AN ACCOUNT</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 m-b30">
                                    <div class="p-a30 border-1  max-w500 m-auto">
                                        <div class="tab-content">
                                            <form id="login" class="tab-pane active">
                                                <h4 class="font-weight-700">PERSONAL INFORMATION</h4>
                                                <p class="font-weight-600">If you have an account with us, please log in.</p>
                                                <div class="form-group">
                                                    <label class="font-weight-700">First Name *</label>
                                                    <input name="dzName" required="" class="form-control" placeholder="First Name" type="text"/>
                                                </div>
                                                <div class="form-group">
                                                    <label class="font-weight-700">Last Name *</label>
                                                    <input name="dzName" required="" class="form-control" placeholder="Last Name" type="text"/>
                                                </div>
                                                <div class="form-group">
                                                    <label class="font-weight-700">E-MAIL *</label>
                                                    <input name="dzName" required="" class="form-control" placeholder="Your Email Id" type="email"/>
                                                </div>
                                                <div class="form-group">
                                                    <label class="font-weight-700">PASSWORD *</label>
                                                    <input name="dzName" required="" class="form-control " placeholder="Type Password" type="password"/>
                                                </div>
                                                <div class="text-left m-t15">
                                                    <button class="site-button button-lg radius-no outline outline-2">CREATE</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-full p-t50 p-b20 bg-primary text-white">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-4 col-lg-4">
                                    <div class="icon-bx-wraper left shop-service-info m-b30">
                                        <div class="icon-md text-black radius">
                                            <Link href="#" class="icon-cell text-white"><i class="fa fa-gift"></i></Link>
                                        </div>
                                        <div class="icon-content">
                                            <h5 class="dlab-tilte">Free shipping on orders $60+</h5>
                                            <p>Order more than 60$ and you will get free shippining Worldwide. More info.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-4">
                                    <div class="icon-bx-wraper left shop-service-info m-b30">
                                        <div class="icon-md text-black radius">
                                            <Link href="#" class="icon-cell text-white"><i class="fa fa-plane"></i></Link>
                                        </div>
                                        <div class="icon-content">
                                            <h5 class="dlab-tilte">Worldwide delivery</h5>
                                            <p>We deliver to the following countries: USA, Canada, Europe, Australia</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-4">
                                    <div class="icon-bx-wraper left shop-service-info m-b30">
                                        <div class="icon-md text-black radius">
                                            <Link href="#" class="icon-cell text-white"><i class="fa fa-history"></i></Link>
                                        </div>
                                        <div class="icon-content">
                                            <h5 class="dlab-tilte">60 days money back guranty!</h5>
                                            <p>Not happy with our product, feel free to return it, we will refund 100% your money!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer hideContactInfo/>
            </>
        )
    }
}
export default ShopRegister;
