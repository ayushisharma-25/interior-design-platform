import React from "react";

import {
    homeReasonImage,
} from "../../ImageExports/HomeImages";

const reasons = [

    {
        icon: "⏰",
        title: "24/7 Service",
        num: "01",
    },

    {
        icon: "💡",
        title: "Expertise and experience",
        num: "02",
    },

    {
        icon: "😊",
        title: "Our patients are happy",
        num: "03",
    },

];

function ReasonSection() {

    return (
        <section className=" section" data-aos="fade-up">
            <div className="reasons-container">
                <div className="reasons-left">
                    <img src={homeReasonImage} alt="living area" />
                </div>

                <div className="reasons-right">
                    <h2>
                        <span>Reasons</span> to Choose <br /> Our Services.
                    </h2>

                    <p className="desc">
                        Bringing interiors to life, understanding the person or people
                        living in a home is far greater need in design.
                    </p>

                    {reasons.map((item, index) => (

                        <div
                            className="reason-card"
                            key={index}
                        >

                            <div className="icon">
                                {item.icon}
                            </div>

                            <p>
                                {item.title}
                            </p>

                            <span className="num">
                                {item.num}
                            </span>

                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
}

export default ReasonSection;