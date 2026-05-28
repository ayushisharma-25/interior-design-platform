import React from "react";
import { booktable } from "../../ImageExports/AboutImages";

function AboutHeroSection() {
    return (
        <section className="about" data-aos="fade-up">
            <div className="container modern">

                <div className="furniture-left">
                    <h1>
                        Modern furniture for <br />
                        minimalist lovers
                    </h1>

                    <p>
                        Experience the ultimate relaxation with our collection of
                        serene and tranquil spa-inspired designs.
                    </p>

                    <div className="furniture-buttons">
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="insta-btn"
                        >
                            Show reel
                        </a>
                    </div>
                </div>

                <div className="furniture-right">
                    <div className="book">
                        <img
                            src={booktable}
                            alt="book-table"
                            className="img-fluid"
                        />

                        <div className="book-overlay">
                            <h3>Book Table</h3>
                            <p>Experience the ultimate</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutHeroSection;