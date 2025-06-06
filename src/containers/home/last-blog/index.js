import React from 'react'
import BlogSlider1 from "components/element/blogSlider1";
import {blogContent3} from "components/element/SliderContent";

class LastBlog extends React.Component
{


    render() {
        return (
            <div className="section-full content-inner bg-gray">
                <div className="container">
                    <div className="section-head style2 text-center">
                        <h2 className="title">آخرین مطالب  را بخوانید</h2>
                        <p>شما می توانید اخبار و مقالات مرتبط با صنایع کنسرو و ظفر ماشین را در قسمت زیر مشاهده نمایید</p>
                    </div>

                    <BlogSlider1
                        data={blogContent3}
                        imgEffect="zoom"
                        blogPostCls="post-style-2"
                        noDes
                    />

                </div>
            </div>
        );
    }

}


export default LastBlog;
