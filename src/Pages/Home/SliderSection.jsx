import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { slideimages } from "../../ImageExports/HomeImages";

function SliderSection() {

    return (
        <section className="lv-hero-slider-wrap">

            <Slide
                duration={4000}
                transitionDuration={900}
                arrows={false}
                indicators={true}
                pauseOnHover={false}
                easing="ease"
            >

                {slideimages.map((img, index) => (
                    <div className="lv-each-slide" key={index}>

                        <div
                            className="lv-slide-bg"
                            style={{ backgroundImage: `url(${img})` }}
                        >

                            <div className="lv-slide-overlay"></div>

                            <div className="lv-slide-content-box">

                                <span className="lv-slide-mini-tag">
                                    Luxury Interior Studio
                                </span>

                                <h1 className="lv-slide-main-heading">
                                    Designing Timeless <br />
                                    Luxury Spaces
                                </h1>

                                <p className="lv-slide-description">
                                    Premium interiors, farmhouse concepts &
                                    modern architectural experiences.
                                </p>

                            </div>
                        </div>
                    </div>
                ))}

            </Slide>

        </section>
    );
}

export default SliderSection;