import React from 'react';
import Counter from './counter';

const CounterSection2 = ({backgroundImage}) => {
    return ( 
    <div class="section-full content-inner overlay-black-dark bg-img-fix" style={{ backgroundImage: "url(" + backgroundImage + ")" }}>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                    <div class="counter-style-1 text-center text-white">
                        <div class="">
                            <Counter count={7652}/>
                        </div>
                        <span class="counter-text">Completed Projects</span>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.3s">
                    <div class="counter-style-1 text-center text-white">
                        <div class="">
                            <Counter count={4562}/>
                        </div>
                        <span class="counter-text">Happy Clients</span>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                    <div class="counter-style-1 text-center text-white">
                        <div class="">
                            <Counter count={3569}/>
                        </div>
                        <span class="counter-text">Questions Answered</span>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                    <div class="counter-style-1 text-center text-white">
                        <div class="">
                            <Counter count={2089}/>
                        </div>
                        <span class="counter-text">Ordered Coffee's</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default CounterSection2;