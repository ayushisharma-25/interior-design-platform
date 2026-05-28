import React from "react";
import { useNavigate } from "react-router-dom";

import {
    office1,
    office2,
    office3,
} from "../../ImageExports/AboutImages";

function ProjectsSection() {

    const navigate = useNavigate();

    return (
        <section className="projects">

            <div className="container">

                <div className="projects-top">

                    <h2>
                        Some of our well
                        <br />
                        know projects!
                    </h2>

                    <p>
                        Elevate your interiors with our curated selection of
                        premium furniture and accessories
                    </p>

                </div>

                {/* PROJECT 1 */}

                <div className="project-row">

                    <div className="left">

                        <span className="pronumber">01</span>

                        <div className="prep">
                            <h3>Refined Elegance</h3>

                            <p>
                                Indulge in comfort and style with our range of
                                plush furniture and cozy accents
                            </p>
                        </div>

                    </div>

                    <button
                        className="view-btn"
                        onClick={() => navigate("/portfolio")}
                    >
                        View project
                    </button>

                    <img src={office1} alt="office" />

                </div>

                {/* PROJECT 2 */}

                <div className="project-row">

                    <div className="left">

                        <span className="pronumber">02</span>

                        <div className="prep">
                            <h3>Artistic Fusion</h3>

                            <p>
                                Indulge in comfort and style with our range of
                                plush furniture and cozy accents
                            </p>
                        </div>

                    </div>

                    <button
                        className="view-btn"
                        onClick={() => navigate("/portfolio")}
                    >
                        View project
                    </button>

                    <img src={office2} alt="office" />

                </div>

                {/* PROJECT 3 */}

                <div className="project-row">

                    <div className="left">

                        <span className="pronumber">03</span>

                        <div className="prep">
                            <h3>Harmonious Spaces</h3>

                            <p>
                                Indulge in comfort and style with our range of
                                plush furniture and cozy accents
                            </p>
                        </div>

                    </div>

                    <button
                        className="view-btn"
                        onClick={() => navigate("/portfolio")}
                    >
                        View project
                    </button>

                    <img src={office3} alt="office" />

                </div>

            </div>
        </section>
    );
}

export default ProjectsSection;