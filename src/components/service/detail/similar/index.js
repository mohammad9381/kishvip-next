import React from "react";
import ProductSlider from "components/element/productSlider";

const content = [
  {
    image: "/images/product/item1.jpg",
    name: "Product title",
    price: "192",
    oldPrice: "232",
  },
  {
    image: "/images/product/item2.jpg",
    name: "Product title",
    price: "192",
    oldPrice: "232",
  },
  {
    image: "/images/product/item3.jpg",
    name: "Product title",
    price: "192",
    oldPrice: "232",
  },
  {
    image: "/images/product/item4.jpg",
    name: "Product title",
    price: "192",
    oldPrice: "232",
  },
  {
    image: "/images/product/item3.jpg",
    name: "Product title",
    price: "192",
    oldPrice: "232",
  },
  {
    image: "/images/product/item4.jpg",
    name: "Product title",
    price: "192",
    oldPrice: "232",
  },
];

class ServiceDetailSimilar extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <h5 className="m-b20">تفریحات مشابه کیش </h5>
          <ProductSlider content={content} />
        </div>
      </div>
    );
  }
}

export default ServiceDetailSimilar;
