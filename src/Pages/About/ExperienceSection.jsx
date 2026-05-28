import React from "react";
import { table2 } from "../../ImageExports/AboutImages";

function ExperienceSection() {
    return (
        <section className="experience">
            <div className="container new">

                <card className="unlock">.</card>

                <div className="exp-img">
                    <img src={table2} alt="table" />
                </div>

                <div className="exp-text">
                    <h2>
                        New experience <br />
                        <span>is going to unlock</span>
                    </h2>

                    <p>
                        Indulge in comfort and style with our range of plush
                        furniture and cozy accents
                    </p>
                </div>

            </div>
        </section>
    );
}

export default ExperienceSection;