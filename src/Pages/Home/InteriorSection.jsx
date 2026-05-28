import React from "react";
import { useNavigate } from "react-router-dom";

import {
    homeInteriorOneImage,
    homeInteriorTwoImage,
    homeInteriorThreeImage,
    homeFlowerTableImage,
} from "../../ImageExports/HomeImages";


function InteriorSection() {

    const navigate = useNavigate();

    return (

        <section className="interior section" data-aos="fade-up">
            <div className="container custom-width">
                <div className="row">
                    <div className="col-lg-6 col-12 professional">
                        <h2>Professional Interior<br /><span>Made Simple</span></h2>
                    </div>
                    <div className="col-lg-6 col-12 intimg">
                        <img src={homeInteriorOneImage} alt="living room" />
                        <img src={homeInteriorTwoImage} alt="living room" />
                        <img src={homeInteriorThreeImage} alt="living room" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 vision">
                        <p>Accuntuate vision</p>
                    </div>
                    <div className="col-lg-3 col-sm-6 flower">
                        <img src={homeFlowerTableImage} alt="table" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-sm-12 idea">
                        <p>Interor Transform Spaces With Creativity,<br />Precision.And Timeless Elegance.<span>Our<br />Expert Designers Crafts Bespoke Interiors<br /> Tailored To Your Style</span></p>
                        <button onClick={() => navigate("/More")} className="btn">
                            More About
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InteriorSection;