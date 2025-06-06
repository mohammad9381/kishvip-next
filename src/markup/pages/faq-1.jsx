import React, { Component } from 'react';
import Link  from 'next/link';
import Header from '../layout/header'
import Footer from '../layout/footer'
import { Accordion, AccordionItem } from 'react-sanfona';


const faqContent=[
    {
        question:"1. Web design aorem apsum dolor sit amet?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae "
    },
    {
        question:"2. Graphic design aorem apsum dolor ?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae "
    },
    {
        question:"3. Developement aorem apsum dolor sit amet ? ",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae "
    },
    {
        question:"4. True Responsiveness consectetuer adipiscing ? ",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae "
    },
    {
        question:"5. Claritas est etiam processus ?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae "
    },
]

const bg = require('/images/banner/bnr3.jpg')

class Faq1 extends Component {


    render() {
        return (
            <>
                <Header/>
                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Faq 1</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link href="#">Home</Link></li>
                                        <li>Faq 1</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content-block">
                        <div class="section-full overlay-white-middle content-inner" >
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h3 class="title">Do you have Questions?</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 col-md-12 m-b30">
                                        <div class="faq-video">
                                            <Link class="play-btn popup-youtube" to="/https://www.youtube.com/watch?v=_FRZVScwggM">
                                            <i class="flaticon-play-button text-white"></i></Link>
                                            <img src={("/images/about/pic5.jpg")} alt="" class="img-cover radius-sm"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 m-b30">
                                        <Accordion className="accordian dlab-accordion faq-1 box-sort-in m-b30 faq">
                                            {
                                                faqContent.map(faq =>(
                                                    <AccordionItem title={faq.question} className="accodion-title" titleTag="h6">
                                                        {faq.answer}
                                                    </AccordionItem>
                                                ))
                                            }
                                        </Accordion>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4 col-md-6 m-b30">
                                        <div class="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                                            <div class="icon-md text-primary m-b20">
                                                <Link href="#" class="icon-cell"><i class="flaticon-factory"></i></Link>
                                            </div>
                                            <div class="icon-content">
                                                <h5 class="dlab-tilte">Make it Simple</h5>
                                                <p>Web design aorem apsum dolor  dolore magna aliquam erat volutpat.Claritas est etiam processus.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 m-b30">
                                        <div class="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                                            <div class="icon-md text-primary m-b20">
                                                <Link href="#" class="icon-cell"><i class="flaticon-worker"></i></Link>
                                            </div>
                                            <div class="icon-content">
                                                <h5 class="dlab-tilte">Unique design</h5>
                                                <p>Web design aorem apsum dolor  dolore magna aliquam erat volutpat.Claritas est etiam processus.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-12 m-b30">
                                        <div class="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                                            <div class="icon-md text-primary m-b20">
                                                <Link href="#" class="icon-cell"><i class="flaticon-settings"></i></Link>
                                            </div>
                                            <div class="icon-content">
                                                <h5 class="dlab-tilte">True Responsiveness</h5>
                                                <p>Web design aorem apsum dolor  dolore magna aliquam erat volutpat.Claritas est etiam processus.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}
export default Faq1;
