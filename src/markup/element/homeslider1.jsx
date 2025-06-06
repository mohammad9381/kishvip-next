import React, { Component } from 'react';
// import Link  from 'next/link';

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../../assets/css/slider-animations.css";
import "../../assets/css/homeslider.css";

const content = [
    {
      title: "Vulputate Mollis Ultricies Fermentum Parturient",
      description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
      button: "Read More",
      image: "https://i.imgur.com/ZXBtVw7.jpg",
      user: "Luan Gjokaj",
      userProfile: "https://i.imgur.com/JSW6mEk.png"
    },
    {
      title: "Tortor Dapibus Commodo Aenean Quam",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
      button: "Discover",
      image: "https://i.imgur.com/DCdBXcq.jpg",
      user: "Erich Behrens",
      userProfile: "https://i.imgur.com/0Clfnu7.png"
    },
    {
      title: "Phasellus volutpat metus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
      button: "Buy now",
      image: "https://i.imgur.com/DvmN8Hx.jpg",
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/4KeKvtH.png"
    }
  ];



class HomeSlider1 extends Component {

    render() {
        const sliderContent = this.props.data || content
        const {btnText,hideBtn,show2Btn,btn2Text,contentWrapperCls} = this.props
        const contentCls = contentWrapperCls || ""
        const btnCls = this.props.btnCls || ""


        return (
            <>
            <Slider className="slider-wrapper home-slider2">
            {sliderContent.map((item, index) => (
                <div
                  key={index}
                  className="slider-content"
                  style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                  <div className={`inner ${contentCls}`}>

                    {item.title && <h1>{item.title}</h1> }
                    {item.description && <p>{item.description}</p>}


                    { hideBtn ? "" :  show2Btn ? (
                      <>
                        <button className={btnCls}>{btnText}</button>
                        <button className={btnCls}>{btn2Text}</button>
                      </>
                      ) : (
                        <button className={btnCls}>{btnText}</button>
                      )
                    }
                  </div>
                </div>
              ))}
            </Slider>

            </>
        )
    }
}
export default HomeSlider1;
