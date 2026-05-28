import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Project11.css";
import ApartmentProject11_1 from "../../assets/apartmentproject11.1.jpg";
import ApartmentProject11_2 from "../../assets/apartmentproject11.2.jpg";
import ApartmentProject11_3 from "../../assets/apartmentproject11.3.jpg";
import ApartmentProject11_4 from "../../assets/apartmentproject11.4.jpg";
import ApartmentProject11_5 from "../../assets/apartmentproject11.5.jpg";
import ApartmentProject11_6 from "../../assets/apartmentproject11.6.png";
import ApartmentProject11_7 from "../../assets/apartmentproject11.1.jpg";
import ApartmentProject11_8 from "../../assets/apartmentproject11.8.jpg";
import ApartmentProject11_9 from "../../assets/apartmentproject11.9.jpg";
import ApartmentProject11_10 from "../../assets/apartmentproject11.10.jpg";
import ApartmentProject11_11 from "../../assets/apartmentproject11.11.jpg";
import ApartmentProject11_12 from "../../assets/apartmentproject11.12.jpg";
import ApartmentProject11_13 from "../../assets/apartmentproject11.13.jpg";
import ApartmentProject11_14 from "../../assets/apartmentproject11.14.jpg";
import ApartmentProject11_15 from "../../assets/apartmentproject11.15.jpg";
import ApartmentProject11_16 from "../../assets/apartmentproject11.16.jpg";
import ApartmentProject11_17 from "../../assets/apartmentproject11.17.png";

import {
  MapPin,
  CalendarDays,
  Building2,
  IndianRupee,
  Maximize2,
  Sofa,
  PackageOpen,
  Palette,
  Lightbulb,
  BedDouble,
  Bath,
  CookingPot,
  ArrowRight,
} from "lucide-react";

const Project11 = () => {
  const [activeProject, setActiveProject] = useState("Urban Serenity");
  const navigate = useNavigate();
  const projects = ["Urban Serenity", "Modern Haven", "Classic Elegance"];

  return (
    <div className="apx-main-wrapper">

      <aside className="apx-sidebar">
        <h2 className="apx-sidebar-title">Projects</h2>

        <ul className="apx-project-list">
          {projects.map((project, index) => (
            <li
              key={index}
              onClick={() => {
                setActiveProject(project);

                if (project === "Urban Serenity") {
                  navigate("/project11");
                }

                if (project === "Modern Haven") {
                  navigate("/project12");
                }
                if (project === "Classic Elegance") {
                  navigate("/project13");
                }

              }}
              className={`apx-project-item ${activeProject === project ? "apx-project-active" : ""
                }`}
            >
              {project}
            </li>
          ))}
        </ul>
      </aside>
      <main className="apx-content-area">
        <div className="apx-hero-image">
          <img
            src={ApartmentProject11_1}
            alt=""
          />
        </div>
        <div className="apx-wrapper">
          <section className="apx-section">
            <div className="apx">
              <p className="apx-top-text">PROJECT OVERVIEW</p>
              <h1 className="apx-heading">Urban Serenity</h1>

            </div>

            <div className="apx-overview-grid">
              <div className="apx-info-card">
                <Maximize2 />
                <p>AREA</p>
                <h4>1450 sq.ft</h4>
                <span></span>
              </div>

              <div className="apx-info-card">
                <MapPin />
                <p>CITY</p>
                <h4>Jaipur</h4>
                <span></span>
              </div>

              <div className="apx-info-card">
                <CalendarDays />
                <p>YEAR</p>
                <h4>2024</h4>
                <span></span>
              </div>

              <div className="apx-info-card">
                <Building2 />
                <p>TYPE</p>
                <h4>3BHK Apartment</h4>
                <span></span>
              </div>

              <div className="apx-info-card">
                <IndianRupee />
                <p>BUDGET</p>
                <h4>₹35 Lakhs</h4>
                <span></span>
              </div>
            </div>
          </section>

          <section className="apx-section">
            <h2 className="apx-section-title">
              CLIENT BRIEF
            </h2>

            <div className="apx-four-grid">
              <div className="apx-feature-card">
                <Sofa />
                <h4>Minimal / Luxury / Cozy</h4>
                <p>
                  A minimal yet luxurious home with warm and cozy ambience.
                </p>
              </div>

              <div className="apx-feature-card">
                <Building2 />
                <h4>Space Issues</h4>
                <p>Irregular layout with less open space in living and dining.</p>
              </div>

              <div className="apx-feature-card">
                <PackageOpen />
                <h4>Storage Needs</h4>
                <p>
                  Need maximum storage solutions without compromising aesthetics.
                </p>
              </div>

              <div className="apx-feature-card">
                <Palette />
                <h4>Style Preference</h4>
                <p>
                  Modern contemporary style with neutral tones and wooden accents.
                </p>
              </div>
            </div>
          </section>

          <section className="apx-section">
            <h2 className="apx-section-title">
              DESIGN APPROACH
            </h2>

            <div className="apx-four-grid">
              <div className="apx-feature-card">
                <Building2 />
                <h4>Space Planning Logic</h4>
                <p>
                  Optimized layout for better flow, openness and functionality.
                </p>
              </div>

              <div className="apx-feature-card">
                <Palette />
                <h4>Color Palette Decision</h4>
                <p>
                  Neutral base with warm wood tones and subtle accent colors.
                </p>
              </div>

              <div className="apx-feature-card">
                <PackageOpen />
                <h4>Material Selection Reason</h4>
                <p>
                  Durable, easy-to-maintain materials with a premium look.
                </p>
              </div>

              <div className="apx-feature-card">
                <Lightbulb />
                <h4>Lighting Strategy</h4>
                <p>
                  Layered lighting for functionality, mood and aesthetics.
                </p>
              </div>
            </div>
          </section>

          <section className="apx-section">
            <h2 className="apx-section-title">
              SPACE BREAKDOWN
            </h2>

            <div className="apx-four-grid">
              <div className="apx-room-card">
                <img
                  src={ApartmentProject11_2}
                  alt=""
                />
                <div className="apx-room-content">
                  <h4>
                    <Sofa size={18} /> Living Room
                  </h4>
                  <p>
                    Open and airy living space with comfortable seating and TV
                    unit.
                  </p>
                </div>
              </div>

              <div className="apx-room-card">
                <img
                  src={ApartmentProject11_3}
                  alt=""
                />
                <div className="apx-room-content">
                  <h4>
                    <CookingPot size={18} /> Kitchen
                  </h4>
                  <p>
                    Modular kitchen with ample storage and smart appliances.
                  </p>
                </div>
              </div>

              <div className="apx-room-card">
                <img
                  src={ApartmentProject11_4}
                  alt=""
                />
                <div className="apx-room-content">
                  <h4>
                    <BedDouble size={18} /> Bedroom
                  </h4>
                  <p>Cozy bedrooms with wardrobes and soft ambient lighting.</p>
                </div>
              </div>

              <div className="apx-room-card">
                <img
                  src={ApartmentProject11_5}
                  alt=""
                />
                <div className="apx-room-content">
                  <h4>
                    <Bath size={18} /> Bathroom
                  </h4>
                  <p>
                    Premium bathroom with modern fittings and minimal design.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="apx-section">
          <h2 className="apx-section-title">
            BEFORE / AFTER
          </h2>

          <div className="apx-before-after">
            <div className="apx-before">
              <img
                src={ApartmentProject11_6}
                alt=""
              />
              <span>BEFORE</span>
            </div>

            <div className="apx-after">
              <img
                src={ApartmentProject11_7}
                alt=""
              />
              <span>AFTER</span>
            </div>
          </div>
        </section>

        <section className="apx-section">
          <h2 className="apx-section-title">MATERIALS & FINISHES</h2>

          <div className="apx-four-grid">
            <div className="apx-material-card">
              <img
                src={ApartmentProject11_8}
                alt=""
              />
              <h4>Flooring</h4>
            </div>

            <div className="apx-material-card">
              <img
                src={ApartmentProject11_9}
                alt=""
              />
              <h4>Woodworks</h4>
            </div>

            <div className="apx-material-card">
              <img
                src={ApartmentProject11_10}
                alt=""
              />
              <h4>Paints</h4>
            </div>

            <div className="apx-material-card">
              <img
                src={ApartmentProject11_11}
                alt=""
              />
              <h4>Lighting</h4>
            </div>
          </div>
        </section>

        <section className="apx-section">
          <h2 className="apx-section-title">GALLERY</h2>

          <div className="apx-gallery-grid">
            <img
              src={ApartmentProject11_12}
              alt=""
            />
            <img
              src={ApartmentProject11_13}
              alt=""
            />
            <img
              src={ApartmentProject11_14}
              alt=""
            />
            <img
              src={ApartmentProject11_15}
              alt=""
            />
            <img
              src={ApartmentProject11_16}
              alt=""
            />
          </div>
        </section>

        <section className="apx-testimonial-box">
          <div className="apx-testimonial-left">
            <h3>CLIENT FEEDBACK</h3>
            <p>
              The team understood our needs perfectly and transformed our house
              into a beautiful and luxurious home.
            </p>
          </div>

          <div className="apx-testimonial-right">
            <img
              src={ApartmentProject11_17}
              alt=""
            />

            <div>
              <h4>Mr. & Mrs. Verma</h4>
              <span>Happy Homeowners</span>
            </div>
          </div>
        </section>

        <div className="apx-next-btn-wrap">
          <button className="apx-next-btn"
            onClick={() => navigate("/project12")}>
            NEXT PROJECT <ArrowRight size={18} />
          </button>
        </div>
      </main>
    </div >
  );
};

export default Project11;