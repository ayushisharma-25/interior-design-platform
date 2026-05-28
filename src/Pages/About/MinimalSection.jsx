import React from "react";
import { lamp, lamp1 } from "../../ImageExports/AboutImages";

function MinimalSection() {
    return (
        <section className="minimal">
            <div className="container-fluid">

                <div className="min-img">
                    <img src={lamp1} alt="lamp" />
                </div>

                <div className="min-text">
                    <h2>
                        Minimalism actually meets <br />
                        the functionality
                    </h2>

                    <p>
                        Experience the ultimate relaxation with our collection of
                        serene and tranquil spa-inspired designs
                    </p>
                </div>

                <div className="min-img">
                    <img src={lamp} alt="lamp" />
                </div>

            </div>
        </section>
    );
}

export default MinimalSection;