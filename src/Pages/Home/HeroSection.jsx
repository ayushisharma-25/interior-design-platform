import React from "react";

import {
    homeChairTableImage,
    homeUserOneImage,
    homeUserTwoImage,
    homeUserThreeImage,
    homePlusIconImage,
    homeSideChairOneImage,
    homeSideChairTwoImage,
    homeSideChairThreeImage,
} from "../../ImageExports/HomeImages";

function HeroSection() {

    return (
        <section className="Hero section" data-aos="fade-up">
            <div className="container">

                <div className="hero-top">
                    <div className="hero-left">
                        <h1>Inspired, Creative, Functional</h1>
                    </div>
                </div>

                <div className="hero-info-row">
                    <div className="hero-users">
                        <span>10M</span>
                        <img src={homeUserOneImage} alt="person" />
                        <img src={homeUserTwoImage} alt="person" />
                        <img src={homeUserThreeImage} alt="person" />
                        <img src={homePlusIconImage} alt="plus" />
                    </div>

                    <div className="hero-text-right">
                        <p>Bringing interiors to life,<br />Understanding the person.</p>
                    </div>
                </div>

                <div className="hero-subtext">
                    <p>People living in a home is<br />far greater need in design.</p>
                </div>

                <div className="hero-bottom">

                    <div className="hero-whatsapp">
                        <a
                            href="https://wa.me/919876543210"
                            className="whatsapp-float"
                            target="_blank"
                        >
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>

                    <div className="hero-main-image">
                        <img src={homeChairTableImage} alt="chair" />
                    </div>

                    <div className="hero-side-images">
                        <img src={homeSideChairOneImage} alt="chair" />
                        <img src={homeSideChairTwoImage} alt="chair" />
                        <img src={homeSideChairThreeImage} alt="chair" />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default HeroSection;

