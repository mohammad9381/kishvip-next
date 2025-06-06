import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('/images/banner/bnr1.jpg')

class ShopLogin extends Component {


    render() {
        return (
            <>
                <Header/>
                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle bg-pt"  style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Login</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link href="/">Home</Link></li>
                                        <li>Login</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-full content-inner shop-account">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 text-center">
                                    <h2 class="font-weight-700 m-t0 m-b40">ALREADY REGISTERED?</h2>
                                </div>
                            </div>
                            <div class="row dzseth">
                                <div class="col-lg-6 col-md-6 m-b30">
                                    <div class="p-a30 border-1 seth">
                                        <div class="tab-content">
                                                <h4 class="font-weight-700">NEW CUSTOMER</h4>
                                                <p class="font-weight-600">By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                                                <Link class="site-button m-r5 button-lg radius-no" to="#">CREATE AN ACCOUNT</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 m-b30">
                                    <div class="p-a30 border-1 seth">
                                        <div class="tab-content nav">
                                            <form id="login" class="tab-pane active col-12 p-a0 ">
                                                <h4 class="font-weight-700">LOGIN</h4>
                                                <p class="font-weight-600">If you have an account with us, please log in.</p>
                                                <div class="form-group">
                                                    <label class="font-weight-700">E-MAIL *</label>
                                                    <input name="dzName" required="" class="form-control" placeholder="Your Email Id" type="email"/>
                                                </div>
                                                <div class="form-group">
                                                    <label class="font-weight-700">PASSWORD *</label>
                                                    <input name="dzName" required="" class="form-control " placeholder="Type Password" type="password"/>
                                                </div>
                                                <div class="text-left">
                                                    <button class="site-button m-r5 button-lg radius-no">login</button>
                                                    <Link data-toggle="tab" to="#forgot-password" class="m-l5"><i class="fa fa-unlock-alt"></i> Forgot Password</Link>
                                                </div>
                                            </form>
                                            <form id="forgot-password" class="tab-pane fade col-12 p-a0">
                                                <h4 class="font-weight-700">FORGET PASSWORD ?</h4>
                                                <p class="font-weight-600">We will send you an email to reset your password. </p>
                                                <div class="form-group">
                                                    <label class="font-weight-700">E-MAIL *</label>
                                                    <input name="dzName" required="" class="form-control" placeholder="Your Email Id" type="email"/>
                                                </div>
                                                <div class="text-left">
                                                    <Link class="site-button outline gray button-lg radius-no" data-toggle="tab" to="#login">Back</Link>
                                                    <button class="site-button pull-right button-lg radius-no">Submit</button>
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
                <Footer hideContactInfo />
            </>
        )
    }
}
export default ShopLogin;
