import React from "react";

import {
    study,
    study1,
    sofa,
    sofa1,
    modern,
    modern1,
} from "../../ImageExports/AboutImages";

function InspiringSection() {
    return (
        <section className="inspiring">

            <h2>
                Inspiring interiors
                <br />
                crafted with passion
            </h2>

            <div className="photo">

                <div className="box2">
                    <div className="ultimate">

                        <img src={study1} alt="table" />

                        <div className="ultimate-overlay">
                            <h4>Book Table</h4>
                            <p>Experience the Ultimate</p>
                        </div>

                    </div>
                </div>

                <div className="box1">

                    <div className="box">
                        <img src={sofa} alt="Sofa" />

                        <div className="box-overlay">
                            <h4>Soft sofa</h4>
                            <p>Off White Color</p>
                        </div>
                    </div>

                    <div className="box">
                        <img src={modern} alt="chair" />

                        <div className="box-overlay">
                            <h4>Modern chair</h4>
                            <p>Made With Wood</p>
                        </div>
                    </div>

                </div>

                <div className="box2">
                    <div className="ultimate">

                        <img src={study} alt="table" />

                        <div className="ultimate-overlay">
                            <h4>Book Table</h4>
                            <p>Experience the Ultimate</p>
                        </div>

                    </div>
                </div>

                <div className="box1">

                    <div className="box">
                        <img src={sofa1} alt="Sofa" />

                        <div className="box-overlay">
                            <h4>Soft sofa</h4>
                            <p>Off White Color</p>
                        </div>
                    </div>

                    <div className="box">
                        <img src={modern1} alt="chair" />

                        <div className="box-overlay">
                            <h4>Modern chair</h4>
                            <p>Made With Wood</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default InspiringSection;