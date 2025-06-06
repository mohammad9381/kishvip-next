import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('/images/banner/bnr4.jpg')

class ShopWishlist extends Component {


    render() {
        return (
            <>
                <Header/>
                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Wishlist</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link href="/">Home</Link></li>
                                        <li>Wishlist</li>
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
                                                    <th>Add to cart </th>
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
                                                            <input id="demo_vertical2" type="text" value="1" class="form-control" name="demo_vertical2"/>
                                                        </div>
                                                    </td>
                                                    <td class="product-item-totle">
                                                        <Link href="/shop-cart" class="site-button">Add To Cart</Link>
                                                    </td>
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
                                                            <input id="demo_vertical3" type="text" value="1" class="form-control" name="demo_vertical2"/>
                                                        </div>
                                                    </td>
                                                    <td class="product-item-totle">
                                                        <Link href="/shop-cart" class="site-button">Add To Cart</Link>
                                                    </td>
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
                                                            <input id="demo_vertical4" type="text" value="1" class="form-control" name="demo_vertical2"/>
                                                        </div>
                                                    </td>
                                                    <td class="product-item-totle">
                                                        <Link href="/shop-cart" class="site-button">Add To Cart</Link>
                                                    </td>
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
                                                            <input id="demo_vertical5" type="text" value="1" class="form-control" name="demo_vertical2"/>
                                                        </div>
                                                    </td>
                                                    <td class="product-item-totle">
                                                        <Link href="/shop-cart" class="site-button">Add To Cart</Link>
                                                    </td>
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
                                                    <td class="product-item-totle">
                                                        <Link href="/shop-cart" class="site-button">Add To Cart</Link>
                                                    </td>
                                                    <td class="product-item-close">
                                                        <Link href="#" data-dismiss="alert" aria-label="close" class="ti-close"></Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
                                            <h5 class="dlab-tilte">Fre shipping on orders $60+</h5>
                                            <p>Order more than 60$ and you will get fre shippining Worldwide. More info.</p>
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
                                            <p>Not happy with our product, feel fre to return it, we will refund 100% your money!</p>
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
export default ShopWishlist;
