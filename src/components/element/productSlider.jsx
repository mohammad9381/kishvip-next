import React, { Component } from "react";
import NavLink from "hoc/NavLink";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//

class ProductSlider extends Component {
  render() {
    const { content } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <>
        <Slider
          {...settings}
          className="img-carousel-content primary btn-style-1"
        >
          {content.map((item, id) => (
            <div className="item">
              <div className="item-box">
                <div className="item-img">
                  <img src={item.image} alt="" />
                  <div className="item-info-in">
                    <ul>
                      <li>
                        <NavLink to="/shop-cart">
                          <i className="ti-shopping-cart"></i>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          <i className="ti-eye"></i>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          <i className="ti-heart"></i>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-info text-center text-black p-a10">
                  <h6 className="item-title text-uppercase font-weight-500">
                    <NavLink to="/shop-product-details.html">
                      {item.name}
                    </NavLink>
                  </h6>
                  <ul className="item-review">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star-half-o"></i>
                    </li>
                    <li>
                      <i className="fa fa-star-o"></i>
                    </li>
                  </ul>
                  <h4 className="item-price">
                    <del>{item.oldPrice}</del>
                    <span className="text-primary">{item.price}</span>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </>
    );
  }
}
export default ProductSlider;
