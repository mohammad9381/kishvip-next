import React, { Component } from "react";

import Slider from "react-animated-slider";
import NavLink from "hoc/NavLink";

const content = [
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    image: "/images/main-slider/slide11.jpg",
    subTitle: "Luan Gjokaj",
    subTitle2: "https://i.imgur.com/JSW6mEk.png",
  },
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    image: "/images/main-slider/slide11.jpg",
    subTitle: "Luan Gjokaj",
    subTitle2: "https://i.imgur.com/JSW6mEk.png",
  },
];

class HomeSlider2 extends Component {
  render() {
    const sliderContent = this.props.data || content;
    const { btnText } = this.props;
    const contentCls = this.props.contentWrapperCls || "";
    const subTitleCls = this.props.subTitleCls || "";
    const btnCls = this.props.btnCls || "";
    return (
      <>
        <Slider className="slider-wrapper">
          {sliderContent.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`,
              }}
            >
              <div className={`inner ${contentCls}`}>
                <div>
                  {item.subTitle && (
                    <p className={`subTitle1 ${subTitleCls}`}>
                      {item.subTitle}
                    </p>
                  )}

                  <h1>{item.title}</h1>
                  <p>{item.description}</p>

                  {item.subTitle2 && <p>{item.subTitle2}</p>}
                  <NavLink href={item.url}>
                    <button className="text-primary">{item.btnTitle}</button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </>
    );
  }
}
export default HomeSlider2;
