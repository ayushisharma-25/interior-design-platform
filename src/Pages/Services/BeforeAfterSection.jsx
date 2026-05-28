import React, { useState } from "react";

import Before1 from "../../assets/before1.png";
import Before2 from "../../assets/before2.png";
import Before3 from "../../assets/before3.png";
import Before4 from "../../assets/before4.png";
import Before5 from "../../assets/before5.png";

import After1 from "../../assets/after1.jpg";
import After2 from "../../assets/after2.jpg";
import After3 from "../../assets/after3.webp";
import After4 from "../../assets/after4.jpg";
import After5 from "../../assets/after5.jpg";

function BeforeAfterSection() {

    const [activeIndex, setActiveIndex] = useState(0);

    const [sliderPosition, setSliderPosition] = useState(50);

    const beforeAfterProjects = [
        { before: Before1, after: After1 },

        { before: Before2, after: After2 },

        { before: Before3, after: After3 },

        { before: Before4, after: After4 },

        { before: Before5, after: After5 },
    ];

    const currentProject = beforeAfterProjects[activeIndex];

    return (
        <section className="beforeAfterSection">

            <div className="comparisonWrapper">

                <img
                    src={currentProject.before}
                    alt="before"
                    className="beforeImage"
                />

                <div
                    className="afterWrapper"
                    style={{ width: `${sliderPosition}%` }}
                >

                    <img
                        src={currentProject.after}
                        alt="after"
                        className="afterImage"
                    />

                </div>

                <div
                    className="sliderLine"
                    style={{ left: `${sliderPosition}%` }}
                >

                    <div className="sliderHandle">
                        ↔
                    </div>

                </div>

                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={(e) =>
                        setSliderPosition(Number(e.target.value))
                    }
                    className="rangeSlider"
                />

                <span className="beforeLabel">
                    Before
                </span>

                <span className="afterLabel">
                    After
                </span>

                <div className="slideInfo">
                    ⚪ Slide between images
                </div>

            </div>

            <div className="thumbnailContainer">

                {beforeAfterProjects.map((item, index) => (

                    <img
                        key={index}
                        src={item.after}
                        alt=""
                        onClick={() => setActiveIndex(index)}
                        className={
                            activeIndex === index
                                ? "activeThumb"
                                : ""
                        }
                    />

                ))}

            </div>
        </section>
    );
}

export default BeforeAfterSection;