import React from 'react'
import Team4 from "components/element/team4";

class OurTeam extends React.Component
{

    render() {

        return   <div className="section-full bg-white content-inner">
            <div className="container">
                <div className="section-head text-center">
                    <h2 className="title">تیم مدیریت ظفر </h2>
                    <p>شرکت ظفر ماشین فناوران (توحیدی) با 30 سال سابقه در زمینه ساخت ماشین آلات خطوط کنسرو در حال فعالیت می باشد . </p>
                </div>
                <Team4/>
            </div>
        </div>

    }
}

export default OurTeam
