import React, { Component,useMemo } from 'react';
import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'
import { Accordion, AccordionItem } from 'react-sanfona';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import PriceRange from '../element/priceRange';

const bg = require('/images/banner/bnr5.jpg')

class ShopSidebar extends Component {

    render() {

        return (
            <>
                <Header/>

                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Shop Grid 3 Side Bar</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link href="/">Home</Link></li>
                                        <li>Shop Grid 3 Side Bar</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-full content-inner">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-3 col-md-4 m-b30">
                                    <aside class="side-bar shop-categories sticky-top">
                                        <div class="widget recent-posts-entry">
                                            <div class="dlab-accordion advanced-search toggle" id="accordion1">
                                                <Accordion allowMultiple className="p-filter dlab-accordion advanced-search toggle">
                                                    <AccordionItem expanded className="filter-title" title=" Product categories" titleTag="div">
                                                        <div class="acod-content">
                                                            <div class="widget widget_services">
                                                                <ul>
                                                                    <Accordion allowMultiple className="filter list">
                                                                        <AccordionItem className="noStyle" title="Bags" titleTag="li">
                                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae
                                                                        </AccordionItem>

                                                                        <AccordionItem className="noStyle" title="Jeans" titleTag="li">
                                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae
                                                                        </AccordionItem>

                                                                        <AccordionItem className="noStyle" title="Shoes" titleTag="li">
                                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae
                                                                        </AccordionItem>

                                                                        <AccordionItem className="noStyle" title="Sweaters" titleTag="li">
                                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae
                                                                        </AccordionItem>

                                                                        <AccordionItem className="noStyle" title="tops" titleTag="li">
                                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae
                                                                        </AccordionItem>

                                                                        <AccordionItem className="noStyle" title="women" titleTag="li">
                                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae
                                                                        </AccordionItem>
                                                                    </Accordion>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </AccordionItem>
                                                    <AccordionItem expanded className="filter-title" title=" price range" titleTag="div">
                                                        <div id="price-range" class="acod-body collapse show">
                                                            <div class="acod-content">
                                                                <div class="price-slide-2 range-slider">
                                                                    <PriceRange/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </AccordionItem>
                                                    <AccordionItem expanded className="filter-title" title=" color" titleTag="div">
                                                        <div id="color" class="acod-body collapse show">
                                                            <div class="acod-content">
                                                                <h6>Select the color</h6>
                                                                <div class="btn-group product-item-color" data-toggle="buttons">
                                                                    <label class="btn bg-red active">
                                                                        <input name="options" id="option1" checked="" type="radio"/>
                                                                    </label>
                                                                    <label class="btn bg-pink">
                                                                        <input name="options" id="option2" type="radio"/>
                                                                    </label>
                                                                    <label class="btn bg-yellow">
                                                                        <input name="options" id="option3" type="radio"/>
                                                                    </label>
                                                                    <label class="btn bg-blue">
                                                                        <input name="options" id="option4" type="radio"/>
                                                                    </label>
                                                                    <label class="btn bg-green">
                                                                        <input name="options" id="option5" type="radio"/>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </AccordionItem>
                                                    <AccordionItem expanded className="filter-title" title=" size" titleTag="div">
                                                        <div class="acod-content">
                                                            <h6>Product Size</h6>
                                                            <div class="btn-group product-item-size" data-toggle="buttons">
                                                                <label class="btn active">
                                                                    <input name="options" id="option6" checked="" type="radio"/>XS
                                                                </label>
                                                                <label class="btn">
                                                                    <input name="options" id="option7" type="radio"/> LG
                                                                </label>
                                                                <label class="btn">
                                                                    <input name="options" id="option8" type="radio"/> MD
                                                                </label>
                                                                <label class="btn">
                                                                    <input name="options" id="option9" type="radio"/> SM
                                                                </label>
                                                                <label class="btn">
                                                                    <input name="options" id="option10" type="radio"/> Xl
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </AccordionItem>
                                                    <AccordionItem expanded className="filter-title" title=" vendor" titleTag="div">
                                                        <div id="vendor" class="acod-body collapse show">
                                                            <div class="acod-content">
                                                                <div class="product-brand">
                                                                    <div class="search-content">
                                                                        <input id="seating1" type="checkbox"/>
                                                                        <label for="seating1"  class="search-content-area">Gap</label>
                                                                    </div>
                                                                    <div class="search-content">
                                                                        <input id="seating2" type="checkbox"/>
                                                                        <label for="seating2"  class="search-content-area">Guess</label>
                                                                    </div>
                                                                    <div class="search-content">
                                                                        <input id="seating3" type="checkbox"/>
                                                                        <label for="seating3"  class="search-content-area">Lacoste</label>
                                                                    </div>
                                                                    <div class="search-content">
                                                                        <input id="seating4" type="checkbox"/>
                                                                        <label for="seating4"  class="search-content-area">Levi's</label>
                                                                    </div>
                                                                    <div class="search-content">
                                                                        <input id="seating5" type="checkbox"/>
                                                                        <label for="seating5"  class="search-content-area">Polo</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </AccordionItem>
                                                    <AccordionItem className="filter-title" title=" POPULAR TAGS" titleTag="div">
                                                        <div id="tags" class="acod-body">
                                                            <div class="acod-content">
                                                                <div class="widget_tag_cloud radius">
                                                                    <div class="tagcloud"> <Link href="#">Design</Link>
                                                                    <Link href="#">User interface</Link>
                                                                    <Link href="#">SEO</Link>
                                                                    <Link href="#">WordPress</Link>
                                                                    <Link href="#">Development</Link>
                                                                    <Link href="#">Joomla</Link>
                                                                    <Link href="#">Design</Link>
                                                                    <Link href="#">User interface</Link>
                                                                    <Link href="#">SEO</Link>
                                                                    <Link href="#">WordPress</Link>
                                                                    <Link href="#">Development</Link>
                                                                    <Link href="#">Joomla</Link>
                                                                    <Link href="#">Design</Link>
                                                                    <Link href="#">User interface</Link>
                                                                    <Link href="#">SEO</Link>
                                                                    <Link href="#">WordPress</Link>
                                                                    <Link href="#">Development</Link>
                                                                    <Link href="#">Joomla</Link> </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </AccordionItem>
                                                    <AccordionItem className="filter-title" title=" features" titleTag="div">
                                                        <div id="features" class="acod-body">
                                                            <div class="acod-content">
                                                                <div class="item-widgets-box">
                                                                    <div class="item-widgets-left">
                                                                        <img src={("/images/product/thumb/item1.jpg")} alt=""/>
                                                                    </div>
                                                                    <div class="item-widgets-body text-black">
                                                                        <h6 class="item-title text-capitalize font-weight-500 m-t0">
                                                                            <Link href="/shop-product-details">Product Title</Link>
                                                                        </h6>
                                                                        <ul class="item-review text-yellow-light">
                                                                            <li><i class="fa fa-star"></i></li>
                                                                            <li><i class="fa fa-star"></i></li>
                                                                            <li><i class="fa fa-star"></i></li>
                                                                            <li><i class="fa fa-star-half-o"></i></li>
                                                                            <li><i class="fa fa-star-o"></i></li>
                                                                        </ul>
                                                                        <h6 class="item-price m-b0">
                                                                            <del>$232</del>
                                                                            <span class="text-primary">$192</span>
                                                                        </h6>
                                                                    </div>
                                                                </div>
                                                                <div class="item-widgets-box">
                                                                    <div class="item-widgets-left">
                                                                        <img src={("/images/product/thumb/item2.jpg")} alt=""/>
                                                                    </div>
                                                                    <div class="item-widgets-body text-black">
                                                                        <h6 class="item-title text-capitalize font-weight-500 m-t0">
                                                                            <Link href="/shop-product-details">Product Title</Link>
                                                                        </h6>
                                                                        <ul class="item-review text-yellow-light">
                                                                            <li><i class="fa fa-star"></i></li>
                                                                            <li><i class="fa fa-star"></i></li>
                                                                            <li><i class="fa fa-star"></i></li>
                                                                            <li><i class="fa fa-star-half-o"></i></li>
                                                                            <li><i class="fa fa-star-o"></i></li>
                                                                        </ul>
                                                                        <h6 class="item-price m-b0">
                                                                            <del>$232</del>
                                                                            <span class="text-primary">$192</span>
                                                                        </h6>
                                                                    </div>
                                                                </div>
                                                                <div class="item-widgets-box">
                                                                    <div class="item-widgets-left">
                                                                        <img src={("/images/product/thumb/item3.jpg")} alt=""/>
                                                                    </div>
                                                                    <div class="item-widgets-body text-black">
                                                                        <h6 class="item-title text-capitalize font-weight-500 m-t0">
                                                                            <Link href="/shop-product-details">Product Title</Link>
                                                                        </h6>
                                                                        <ul class="item-review text-yellow-light">
                                                                            <li><i class="fa fa-star"></i></li>
                                                                            <li><i class="fa fa-star"></i></li>
                                                                            <li><i class="fa fa-star"></i></li>
                                                                            <li><i class="fa fa-star-half-o"></i></li>
                                                                            <li><i class="fa fa-star-o"></i></li>
                                                                        </ul>
                                                                        <h6 class="item-price m-b0">
                                                                            <del>$232</del>
                                                                            <span class="text-primary">$192</span>
                                                                        </h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                                <div class="col-lg-9 col-md-8 m-b30">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6 col-sm-6">
                                            <div class="item-box m-b10">
                                                <div class="item-img">
                                                    <img src={("/images/product/item1.jpg")} alt=""/>
                                                    <div class="item-info-in center">
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
                                                    <h4 class="item-price">
                                                        <del>$232</del>
                                                        <span class="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-sm-6">
                                            <div class="item-box m-b10 item-style-1">
                                                <div class="item-img">
                                                    <img src={("/images/product/item2.jpg")} alt=""/>
                                                    <div class="item-info-in center">
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
                                                    <h4 class="item-price">
                                                        <del>$232</del>
                                                        <span class="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-sm-6">
                                            <div class="item-box m-b10">
                                                <div class="item-img">
                                                    <img src={("/images/product/item3.jpg")} alt=""/>
                                                    <div class="item-info-in center">
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
                                                    <h4 class="item-price">
                                                        <del>$232</del>
                                                        <span class="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-sm-6">
                                            <div class="item-box m-b10">
                                                <div class="item-img">
                                                    <img src={("/images/product/item4.jpg")} alt=""/>
                                                    <div class="item-info-in center">
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
                                                    <h4 class="item-price">
                                                        <del>$232</del>
                                                        <span class="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-sm-6">
                                            <div class="item-box m-b10">
                                                <div class="item-img">
                                                    <img src={("/images/product/item5.jpg")} alt=""/>
                                                    <div class="item-info-in center">
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
                                                    <h4 class="item-price">
                                                        <del>$232</del>
                                                        <span class="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-sm-6">
                                            <div class="item-box m-b10 item-style-1">
                                                <div class="item-img">
                                                    <img src={("/images/product/item6.jpg")} alt=""/>
                                                    <div class="item-info-in center">
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
                                                    <h4 class="item-price">
                                                        <del>$232</del>
                                                        <span class="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-sm-6">
                                            <div class="item-box m-b10">
                                                <div class="item-img">
                                                    <img src={("/images/product/item7.jpg")} alt=""/>
                                                    <div class="item-info-in center">
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
                                                    <h4 class="item-price">
                                                        <del>$232</del>
                                                        <span class="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-sm-6">
                                            <div class="item-box m-b10">
                                                <div class="item-img">
                                                    <img src={("/images/product/item8.jpg")} alt=""/>
                                                    <div class="item-info-in center">
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
                                                    <h4 class="item-price">
                                                        <del>$232</del>
                                                        <span class="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-sm-6">
                                            <div class="item-box m-b10">
                                                <div class="item-img">
                                                    <img src={("/images/product/item1.jpg")} alt=""/>
                                                    <div class="item-info-in center">
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
                                                    <h4 class="item-price">
                                                        <del>$232</del>
                                                        <span class="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-sm-6">
                                            <div class="item-box m-b10 item-style-1">
                                                <div class="item-img">
                                                    <img src={("/images/product/item2.jpg")} alt=""/>
                                                    <div class="item-info-in center">
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
                                                    <h4 class="item-price">
                                                        <del>$232</del>
                                                        <span class="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-sm-6">
                                            <div class="item-box m-b10">
                                                <div class="item-img">
                                                    <img src={("/images/product/item3.jpg")} alt=""/>
                                                    <div class="item-info-in center">
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
                                                    <h4 class="item-price">
                                                        <del>$232</del>
                                                        <span class="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-sm-6">
                                            <div class="item-box m-b10">
                                                <div class="item-img">
                                                    <img src={("/images/product/item4.jpg")} alt=""/>
                                                    <div class="item-info-in center">
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
                                                    <h4 class="item-price">
                                                        <del>$232</del>
                                                        <span class="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
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
export default ShopSidebar;
