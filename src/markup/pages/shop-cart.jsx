import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('/images/banner/bnr3.jpg')

class ShopCart extends Component {


    render() {
        return (
            <>
                <Header/>
                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle bg-pt"style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Cart</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link href="/">Home</Link></li>
                                        <li>Shop Cart</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-full content-inner">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="table-responsive">
                                        <table class="table check-tbl">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Product name</th>
                                                    <th>Unit Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th>Close</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="alert">
                                                    <td class="product-item-img">
                                                        <img src={("/images/product/thumb/item1.jpg")} alt=""/>
                                                    </td>
                                                    <td class="product-item-name">Prduct Item 3</td>
                                                    <td class="product-item-price">$28.00</td>
                                                    <td class="product-item-quantity">
                                                        <div class="quantity btn-quantity max-w80">
                                                            <input id="demo_vertical3" type="text" class="form-control" value="1" name="demo_vertical2"/>
                                                        </div>
                                                    </td>
                                                    <td class="product-item-totle">$28.00</td>
                                                    <td class="product-item-close">
                                                        <Link href="#" data-dismiss="alert" aria-label="close" class="ti-close"></Link>
                                                    </td>
                                                </tr>
                                                <tr class="alert">
                                                    <td class="product-item-img">
                                                        <img src={("/images/product/thumb/item2.jpg")} alt=""/>
                                                    </td>
                                                    <td class="product-item-name">Prduct Item 3</td>
                                                    <td class="product-item-price">$28.00</td>
                                                    <td class="product-item-quantity">
                                                        <div class="quantity btn-quantity max-w80">
                                                            <input id="demo_vertical4" type="text" value="1" class="form-control" name="demo_vertical2"/>
                                                        </div>
                                                    </td>
                                                    <td class="product-item-totle">$28.00</td>
                                                    <td class="product-item-close">
                                                        <Link href="#" data-dismiss="alert" aria-label="close" class="ti-close"></Link>
                                                    </td>
                                                </tr>
                                                <tr class="alert">
                                                    <td class="product-item-img">
                                                        <img src={("/images/product/thumb/item3.jpg")} alt=""/>
                                                    </td>
                                                    <td class="product-item-name">Prduct Item 3</td>
                                                    <td class="product-item-price">$28.00</td>
                                                    <td class="product-item-quantity">
                                                        <div class="quantity btn-quantity max-w80">
                                                            <input id="demo_vertical5" type="text" value="1" class="form-control" name="demo_vertical2"/>
                                                        </div>
                                                    </td>
                                                    <td class="product-item-totle">$28.00</td>
                                                    <td class="product-item-close">
                                                        <Link href="#" data-dismiss="alert" aria-label="close" class="ti-close"></Link>
                                                    </td>
                                                </tr>
                                                <tr class="alert">
                                                    <td class="product-item-img">
                                                        <img src={("/images/product/thumb/item4.jpg")} alt=""/>
                                                    </td>
                                                    <td class="product-item-name">Prduct Item 3</td>
                                                    <td class="product-item-price">$28.00</td>
                                                    <td class="product-item-quantity">
                                                        <div class="quantity btn-quantity max-w80">
                                                            <input id="demo_vertical6" type="text" value="1" class="form-control" name="demo_vertical2"/>
                                                        </div>
                                                    </td>
                                                    <td class="product-item-totle">$28.00</td>
                                                    <td class="product-item-close">
                                                        <Link href="#" data-dismiss="alert" aria-label="close" class="ti-close"></Link>
                                                    </td>
                                                </tr>
                                                <tr class="alert">
                                                    <td class="product-item-img">
                                                        <img src={("/images/product/thumb/item5.jpg")} alt=""/>
                                                    </td>
                                                    <td class="product-item-name">Prduct Item 3</td>
                                                    <td class="product-item-price">$28.00</td>
                                                    <td class="product-item-quantity">
                                                        <div class="quantity btn-quantity max-w80">
                                                            <input id="demo_vertical7" type="text" value="1" class="form-control" name="demo_vertical2"/>
                                                        </div>
                                                    </td>
                                                    <td class="product-item-totle">$28.00</td>
                                                    <td class="product-item-close">
                                                        <Link href="#" data-dismiss="alert" aria-label="close" class="ti-close"></Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 m-b15">
                                    <form class="shop-form">
                                        <h5>Calculate Shipping</h5>
                                        <div class="form-group">
                                            <select class="form-control">
                                                <option value="">Credit Card Type</option>
                                                <option value="">Another option</option>
                                                <option value="">A option</option>
                                                <option value="">Potato</option>
                                            </select>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-lg-6">
                                                <input type="text" class="form-control" placeholder="Credit Card Number"/>
                                            </div>
                                            <div class="form-group col-lg-6">
                                                <input type="text" class="form-control" placeholder="Card Verification Number"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Coupon Code"/>
                                        </div>
                                        <div class="form-group">
                                        <button class="site-button" type="button">Apply Coupon</button>
                                    </div>
                                    </form>
                                </div>
                                <div class="col-lg-6 m-b15">
                                    <h5>Cart Subtotal</h5>
                                    <table class="table-bordered check-tbl">
                                        <tbody>
                                            <tr>
                                                <td>Order Subtotal</td>
                                                <td>$125.96</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping</td>
                                                <td>Free Shipping</td>
                                            </tr>
                                            <tr>
                                                <td>Coupon</td>
                                                <td>$28.00</td>
                                            </tr>
                                            <tr>
                                                <td>Total</td>
                                                <td>$506.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="form-group">
                                        <button class="site-button" type="button">Proceed to Checkout</button>
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
export default ShopCart;
