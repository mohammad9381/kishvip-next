import React from "react";
import ProductSlider from "../../element/productSlider";
import ProductGallerySlider from "../../element/productGallerySlider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import NavLink from "hoc/NavLink";
import ServiceDetailSans from "components/service/detail/sans";
import ServiceDetailSimilar from "components/service/detail/similar";
import ServiceDetailRules from "components/service/detail/rules";
import ServiceDetailComments from "components/service/detail/comments";
import ServiceDetailAddComment from "components/service/detail/add-comment";
const bg = "/images/kish_img.png";

class ServiceDetail extends React.Component {
  render() {
    const { data } = this.props.data;

    return (
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-black-middle bg-pt"
          style={{ backgroundImage: "url(" + bg + ")" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">{data.title}</h1>
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <NavLink href="/">خانه</NavLink>
                  </li>
                  <li>{data.eventCategory}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section-full content-inner bg-white">
          <div className="container woo-entry">
            <div className="row m-b30">
              <div className="col-md-5 col-lg-5 col-sm-12 m-b30">
                <ProductGallerySlider img={data.coverImage} />
              </div>
              <div className="col-md-7 col-lg-7 col-sm-12">
                <form method="post" className="cart sticky-top">
                  <div className="dlab-post-title">
                    <h4 className="post-title">
                      <NavLink>{data.title}</NavLink>
                    </h4>
                    <p className="m-b10">{data.description}</p>
                    <div className="dlab-divider bg-gray tb15">
                      <i className="icon-dot c-square"></i>
                    </div>
                  </div>
                  <div className="relative">
                    {/*<h3 className="m-tb10">$2,140.00 </h3>*/}
                    {/*<div className="shop-item-rating">*/}
                    {/*            <span className="rating-bx">*/}
                    {/*                <i className="fa fa-star"></i>*/}
                    {/*                <i className="fa fa-star"></i>*/}
                    {/*                <i className="fa fa-star"></i>*/}
                    {/*                <i className="fa fa-star-o"></i>*/}
                    {/*                <i className="fa fa-star-o"></i>*/}
                    {/*            </span>*/}
                    {/*    <span>4.5 Rating</span>*/}
                    {/*</div>*/}
                  </div>
                  {/*<div className="shop-item-tage">*/}
                  {/*  <span>Tags :- </span>*/}
                  {/*  <NavLink>Shoes,</NavLink>*/}
                  {/*  <NavLink>Clothing</NavLink>*/}
                  {/*  <NavLink>T-shirts</NavLink>*/}
                  {/*</div>*/}
                  {/*<div className="dlab-divider bg-gray tb15">*/}
                  {/*  <i className="icon-dot c-square"></i>*/}
                  {/*</div>*/}
                  {/*<div className="row">*/}
                  {/*  <div className="m-b30 col-md-7 col-sm-8">*/}
                  {/*    <h6>Product Size</h6>*/}
                  {/*    <div*/}
                  {/*      className="btn-group product-item-size"*/}
                  {/*      data-toggle="buttons"*/}
                  {/*    >*/}
                  {/*      <label className="btn active">*/}
                  {/*        <input*/}
                  {/*          type="radio"*/}
                  {/*          name="options"*/}
                  {/*          id="option1"*/}
                  {/*          checked*/}
                  {/*        />*/}
                  {/*        XS*/}
                  {/*      </label>*/}
                  {/*      <label className="btn">*/}
                  {/*        <input type="radio" name="options" id="option2" /> LG*/}
                  {/*      </label>*/}
                  {/*      <label className="btn">*/}
                  {/*        <input type="radio" name="options" id="option3" /> MD*/}
                  {/*      </label>*/}
                  {/*      <label className="btn">*/}
                  {/*        <input type="radio" name="options" id="option4" /> SM*/}
                  {/*      </label>*/}
                  {/*      <label className="btn">*/}
                  {/*        <input type="radio" name="options" id="option5" /> Xl*/}
                  {/*      </label>*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*  <div className="m-b30 col-md-5 col-sm-4">*/}
                  {/*    <h6>Select quantity</h6>*/}
                  {/*    <div className="quantity btn-quantity style-1">*/}
                  {/*      <input*/}
                  {/*        id="demo_vertical2"*/}
                  {/*        type="text"*/}
                  {/*        value="1"*/}
                  {/*        className="form-control"*/}
                  {/*        name="demo_vertical2"*/}
                  {/*      />*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<div className="m-b30">*/}
                  {/*  <h6>Select the color</h6>*/}
                  {/*  <div*/}
                  {/*    className="btn-group product-item-color"*/}
                  {/*    data-toggle="buttons"*/}
                  {/*  >*/}
                  {/*    <label className="btn bg-red active">*/}
                  {/*      <input*/}
                  {/*        type="radio"*/}
                  {/*        name="options"*/}
                  {/*        id="option6"*/}
                  {/*        checked*/}
                  {/*      />*/}
                  {/*    </label>*/}
                  {/*    <label className="btn bg-pink">*/}
                  {/*      <input type="radio" name="options" id="option7" />*/}
                  {/*    </label>*/}
                  {/*    <label className="btn bg-yellow">*/}
                  {/*      <input type="radio" name="options" id="option8" />*/}
                  {/*    </label>*/}
                  {/*    <label className="btn bg-blue">*/}
                  {/*      <input type="radio" name="options" id="option9" />*/}
                  {/*    </label>*/}
                  {/*    <label className="btn bg-green">*/}
                  {/*      <input type="radio" name="options" id="option10" />*/}
                  {/*    </label>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<button className="site-button radius-no">*/}
                  {/*  <i className="ti-shopping-cart"></i> Add To Cart*/}
                  {/*</button>*/}
                </form>
              </div>
            </div>
            <div className="row m-b30">
              <div className="col-lg-12">
                <div className="dlab-tabs  product-description tabs-site-button">
                  <Tabs>
                    <TabList className="nav nav-tabs ">
                      <Tab selectedClassName="tab-active">
                        <a to={"/#"}>
                          <i className="fa fa-globe"></i> سانس ها
                        </a>
                      </Tab>
                      <Tab selectedClassName="tab-active">
                        <a to={"/#"}>
                          <i className="fa fa-photo"></i> قوانین
                        </a>
                      </Tab>
                      <Tab selectedClassName="tab-active">
                        <a to={"/#"}>
                          <i className="fa fa-cog"></i> نظرات
                        </a>
                      </Tab>
                    </TabList>

                    <TabPanel class="tab-pane">
                      <ServiceDetailSans data={data} />
                    </TabPanel>

                    <TabPanel class="tab-pane ">
                      <ServiceDetailRules data={data} />
                    </TabPanel>

                    <TabPanel class="tab-pane ">
                      <ServiceDetailComments />
                      <ServiceDetailAddComment />
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
            {/*<ServiceDetailSimilar data={data} />*/}
          </div>
        </div>

        {/*<div className="section-full p-t50 p-b20 bg-primary text-white">*/}
        {/*  <div className="container">*/}
        {/*    <div className="row">*/}
        {/*      <div className="col-md-4 col-lg-4">*/}
        {/*        <div className="icon-bx-wraper left shop-service-info m-b30">*/}
        {/*          <div className="icon-md text-black radius">*/}
        {/*            <NavLink>*/}
        {/*              {" "}*/}
        {/*              <i className="fa fa-gift"></i>*/}
        {/*            </NavLink>*/}
        {/*          </div>*/}
        {/*          <div className="icon-content">*/}
        {/*            <h5 className="dlab-tilte">Free shipping on orders $60+</h5>*/}
        {/*            <p>*/}
        {/*              Order more than 60$ and you will get free shippining*/}
        {/*              Worldwide. More info.*/}
        {/*            </p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="col-md-4 col-lg-4">*/}
        {/*        <div className="icon-bx-wraper left shop-service-info m-b30">*/}
        {/*          <div className="icon-md text-black radius">*/}
        {/*            <NavLink>*/}
        {/*              {" "}*/}
        {/*              <i className="fa fa-plane"></i>*/}
        {/*            </NavLink>*/}
        {/*          </div>*/}
        {/*          <div className="icon-content">*/}
        {/*            <h5 className="dlab-tilte">Worldwide delivery</h5>*/}
        {/*            <p>*/}
        {/*              We deliver to the following countries: USA, Canada,*/}
        {/*              Europe, Australia*/}
        {/*            </p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="col-md-4 col-lg-4">*/}
        {/*        <div className="icon-bx-wraper left shop-service-info m-b30">*/}
        {/*          <div className="icon-md text-black radius">*/}
        {/*            <NavLink>*/}
        {/*              {" "}*/}
        {/*              <i className="fa fa-history"></i>*/}
        {/*            </NavLink>*/}
        {/*          </div>*/}
        {/*          <div className="icon-content">*/}
        {/*            <h5 className="dlab-tilte">60 days money back guranty!</h5>*/}
        {/*            <p>*/}
        {/*              Not happy with our product, feel free to return it, we*/}
        {/*              will refund 100% your money!*/}
        {/*            </p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default ServiceDetail;
