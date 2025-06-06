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

class Faq2 extends Component {


    render() {
        return (
            <>
                <Header/>
                <div class="page-content bg-white">
                    <div class="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Faq 2</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link href="/">Home</Link></li>
                                        <li>Faq 2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content-block">
                        <div class="section-full content-inner bg-white">
                            <div class="container">
                                <div class="section-head text-black text-left">
                                    <h3>General Questions</h3>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12 col-sm-12">
                                        <Accordion className="accordian dlab-accordion faq-2 box-sort-in m-b30">
                                            {
                                                faqContent.map(faq =>(
                                                    <AccordionItem title={faq.question} className="accodion-title b-style-2" titleTag="h6">
                                                        {faq.answer}
                                                    </AccordionItem>
                                                ))
                                            }
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section-full bg-gray content-inner">
                            <div class="container">
                                <div class="section-head text-black text-left">
                                    <h3>General Questions</h3>
                                </div>
                                <div class="row m-b30">
                                    <div class="col-lg-12 col-sm-12">
                                        <Accordion className="accordian dlab-accordion faq-2 box-sort-in m-b30">
                                            {
                                                faqContent.map(faq =>(
                                                    <AccordionItem title={faq.question} className="accodion-title b-style-2" titleTag="h6">
                                                        {faq.answer}
                                                    </AccordionItem>
                                                ))
                                            }
                                        </Accordion>
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
export default Faq2;
