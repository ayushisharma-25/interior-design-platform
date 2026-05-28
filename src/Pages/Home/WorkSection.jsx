import React from "react";

import {
    homeWorkOneImage,
    homeWorkTwoImage,
    homeWorkThreeImage,
} from "../../ImageExports/HomeImages";

const workCards = [

    {
        title: "living Space",
        image: homeWorkOneImage,
        boxClass: "big",
        labelClass: "small",
    },

    {
        title: "Modern Lights",
        image: homeWorkTwoImage,
        boxClass: "tall",
        labelClass: "label",
    },

    {
        title: "Furnished Room",
        image: homeWorkThreeImage,
        boxClass: "tall",
        labelClass: "label",
    },

];
function WorkSection({ setShowUploader }) {

    return (
        <section className=" section" data-aos="fade-up">
            <div className="interior-container">
                <div className="interior-left" data-aos="fade-right">
                    {workCards.map((item, index) => (

                        <div
                            className="middle-section"
                            data-aos="zoom-in"
                            key={index}
                        >

                            <div className={`boxx ${item.labelClass}`}>

                                <span>
                                    {item.title}
                                </span>

                            </div>

                            <div className={`boxx ${item.boxClass}`}>

                                <img
                                    src={item.image}
                                    alt={item.title}
                                />

                            </div>

                        </div>

                    ))}
                </div>

                <div className="interior-right" data-aos="fade-left">
                    <h2>
                        Professional <br />
                        Interior <span>Made</span> <br />
                        <span>Simple</span>
                    </h2>

                    <p>
                        Lorem Ipsum has been the industry's standard <br /> dummy text ever to
                        since the 1500s, type and <br />scrambled.
                    </p>
                    <button
                        className="upload-trigger-btn"
                        onClick={() => setShowUploader(true)}
                    >
                        Upload & Get Idea
                    </button>
                </div>
            </div>
        </section>
    );
}

export default WorkSection;