import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('/images/banner/bnr4.jpg')

class Shop extends Component {


    render() {
        return (
            <>
                <Header/>
                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Shop Grid 4</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link href="/">Home</Link></li>
                                        <li>Shop Grid 4</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-full content-inner">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="item-box m-b10">
                                        <div class="item-img">
                                            <img src={("/images/product/item1.jpg")} alt=""/>
                                            <div class="item-info-in">
                                                <ul>
                                                    <li><Link href="/shop-cart"><i class="ti-shopping-cart"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-eye"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="item-info text-center text-black p-a10">
                                            <h6 class="item-title font-weight-500"><Link href="/shop-product-details">Checked Short Dress</Link></h6>
                                            <ul class="item-review">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star-half-o"></i></li>
                                                <li><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="item-box m-b10 item-style-1">
                                        <div class="item-img">
                                            <img src={("/images/product/item2.jpg")} alt=""/>
                                            <div class="item-info-in">
                                                <ul>
                                                    <li><Link href="/shop-cart"><i class="ti-shopping-cart"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-eye"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="item-info text-center text-black p-a10">
                                            <h6 class="item-title font-weight-500"><Link href="/shop-product-details">Slim Fit Chinos</Link></h6>
                                            <ul class="item-review">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star-half-o"></i></li>
                                                <li><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="item-box m-b10">
                                        <div class="item-img">
                                            <img src={("/images/product/item3.jpg")} alt=""/>
                                            <div class="item-info-in">
                                                <ul>
                                                    <li><Link href="/shop-cart"><i class="ti-shopping-cart"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-eye"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="item-info text-center text-black p-a10">
                                            <h6 class="item-title font-weight-500"><Link href="/shop-product-details">Dark Brown Boots</Link></h6>
                                            <ul class="item-review">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star-half-o"></i></li>
                                                <li><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="item-box m-b10">
                                        <div class="item-img">
                                            <img src={("/images/product/item4.jpg")} alt=""/>
                                            <div class="item-info-in">
                                                <ul>
                                                    <li><Link href="/shop-cart"><i class="ti-shopping-cart"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-eye"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="item-info text-center text-black p-a10">
                                            <h6 class="item-title font-weight-500"><Link href="/shop-product-details">Light Blue Denim Dress</Link></h6>
                                            <ul class="item-review">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star-half-o"></i></li>
                                                <li><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="item-box m-b10">
                                        <div class="item-img">
                                            <img src={("/images/product/item5.jpg")} alt=""/>
                                            <div class="item-info-in">
                                                <ul>
                                                    <li><Link href="/shop-cart"><i class="ti-shopping-cart"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-eye"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="item-info text-center text-black p-a10">
                                            <h6 class="item-title font-weight-500"><Link href="/shop-product-details">Green Trousers</Link></h6>
                                            <ul class="item-review">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star-half-o"></i></li>
                                                <li><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="item-box m-b10 item-style-1">
                                        <div class="item-img">
                                            <img src={("/images/product/item6.jpg")} alt=""/>
                                            <div class="item-info-in">
                                                <ul>
                                                    <li><Link href="/shop-cart"><i class="ti-shopping-cart"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-eye"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="item-info text-center text-black p-a10">
                                            <h6 class="item-title font-weight-500"><Link href="/shop-product-details">Unisex Sunglasses</Link></h6>
                                            <ul class="item-review">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star-half-o"></i></li>
                                                <li><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="item-box m-b10">
                                        <div class="item-img">
                                            <img src={("/images/product/item7.jpg")} alt=""/>
                                            <div class="item-info-in">
                                                <ul>
                                                    <li><Link href="/shop-cart"><i class="ti-shopping-cart"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-eye"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="item-info text-center text-black p-a10">
                                            <h6 class="item-title font-weight-500"><Link href="/shop-product-details">Blue Round-Neck Tshirt</Link></h6>
                                            <ul class="item-review">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star-half-o"></i></li>
                                                <li><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="item-box m-b10">
                                        <div class="item-img">
                                            <img src={("/images/product/item8.jpg")} alt=""/>
                                            <div class="item-info-in">
                                                <ul>
                                                    <li><Link href="/shop-cart"><i class="ti-shopping-cart"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-eye"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="item-info text-center text-black p-a10">
                                            <h6 class="item-title font-weight-500"><Link href="/shop-product-details">Men Grey Casual Shoes</Link></h6>
                                            <ul class="item-review">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star-half-o"></i></li>
                                                <li><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="item-box m-b10">
                                        <div class="item-img">
                                            <img src={("/images/product/item9.jpg")} alt=""/>
                                            <div class="item-info-in">
                                                <ul>
                                                    <li><Link href="/shop-cart"><i class="ti-shopping-cart"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-eye"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="item-info text-center text-black p-a10">
                                            <h6 class="item-title font-weight-500"><Link href="/shop-product-details">Checked Short Dress</Link></h6>
                                            <ul class="item-review">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star-half-o"></i></li>
                                                <li><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="item-box m-b10 item-style-1">
                                        <div class="item-img">
                                            <img src={("/images/product/item1.jpg")} alt=""/>
                                            <div class="item-info-in">
                                                <ul>
                                                    <li><Link href="/shop-cart"><i class="ti-shopping-cart"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-eye"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="item-info text-center text-black p-a10">
                                            <h6 class="item-title font-weight-500"><Link href="/shop-product-details">Slim Fit Chinos</Link></h6>
                                            <ul class="item-review">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star-half-o"></i></li>
                                                <li><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="item-box m-b10">
                                        <div class="item-img">
                                            <img src={("/images/product/item2.jpg")} alt=""/>
                                            <div class="item-info-in">
                                                <ul>
                                                    <li><Link href="/shop-cart"><i class="ti-shopping-cart"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-eye"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="item-info text-center text-black p-a10">
                                            <h6 class="item-title font-weight-500"><Link href="/shop-product-details">Dark Brown Boots</Link></h6>
                                            <ul class="item-review">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star-half-o"></i></li>
                                                <li><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="item-box m-b10">
                                        <div class="item-img">
                                            <img src={("/images/product/item3.jpg")} alt=""/>
                                            <div class="item-info-in">
                                                <ul>
                                                    <li><Link href="/shop-cart"><i class="ti-shopping-cart"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-eye"></i></Link></li>
                                                    <li><Link href="#"><i class="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="item-info text-center text-black p-a10">
                                            <h6 class="item-title font-weight-500"><Link href="/shop-product-details">Light Blue Denim Dress</Link></h6>
                                            <ul class="item-review">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star-half-o"></i></li>
                                                <li><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <h4 class="item-price"><del>$232</del> <span class="text-primary">$192</span></h4>
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
export default Shop;
