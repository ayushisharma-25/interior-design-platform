import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Project11.css";

import ApartmentProject13_1 from "../../assets/apartmentproject13.1.jpg";
import ApartmentProject13_2 from "../../assets/apartmentproject13.2.jpg";
import ApartmentProject13_3 from "../../assets/apartmentproject13.3.jpg";
import ApartmentProject13_4 from "../../assets/apartmentproject13.4.jpg";
import ApartmentProject13_5 from "../../assets/apartmentproject13.5.png";
import ApartmentProject13_6 from "../../assets/apartmentproject13.6.png";
import ApartmentProject13_7 from "../../assets/apartmentproject13.1.jpg";
import ApartmentProject13_8 from "../../assets/apartmentproject13.8.jpg";
import ApartmentProject13_9 from "../../assets/apartmentproject13.9.jpg";
import ApartmentProject13_10 from "../../assets/apartmentproject13.10.jpg";
import ApartmentProject13_11 from "../../assets/apartmentproject13.11.jpg";
import ApartmentProject13_12 from "../../assets/apartmentproject13.12.jpg";
import ApartmentProject13_13 from "../../assets/apartmentproject13.13.jpg";
import ApartmentProject13_14 from "../../assets/apartmentproject13.14.jpg";
import ApartmentProject13_15 from "../../assets/apartmentproject13.15.jpg";
import ApartmentProject13_16 from "../../assets/apartmentproject13.16.jpg";
import ApartmentProject13_17 from "../../assets/apartmentproject13.17.png";

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

const Project13 = () => {
  const [activeProject, setActiveProject] = useState("Classic Elegance");
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

                if (project === "Urban Serenity") navigate("/project11");
                if (project === "Modern Haven") navigate("/project12");
                if (project === "Classic Elegance") navigate("/project13");
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
          <img src={ApartmentProject13_1} alt="" />
        </div>

        <div className="apx-wrapper">

          <section className="apx-section">
            <div className="apx">
              <p className="apx-top-text">PROJECT OVERVIEW</p>
              <h1 className="apx-heading">Classic Elegance</h1>
            </div>

            <div className="apx-overview-grid">
              <div className="apx-info-card"><Maximize2 /><p>AREA</p><h4>1600 sq.ft</h4></div>
              <div className="apx-info-card"><MapPin /><p>CITY</p><h4>Jaipur</h4></div>
              <div className="apx-info-card"><CalendarDays /><p>YEAR</p><h4>2025</h4></div>
              <div className="apx-info-card"><Building2 /><p>TYPE</p><h4>Premium 3BHK Apartment</h4></div>
              <div className="apx-info-card"><IndianRupee /><p>BUDGET</p><h4>₹48 Lakhs</h4></div>
            </div>
          </section>

          <section className="apx-section">
            <h2 className="apx-section-title">CLIENT BRIEF</h2>

            <div className="apx-four-grid">
              <div className="apx-feature-card">
                <Sofa />
                <h4>Elegant Lifestyle</h4>
                <p>Client wanted a timeless, luxury and elegant home design.</p>
              </div>

              <div className="apx-feature-card">
                <Building2 />
                <h4>Spacious Feel</h4>
                <p>Open and airy layout with premium visual balance.</p>
              </div>

              <div className="apx-feature-card">
                <PackageOpen />
                <h4>Smart Storage</h4>
                <p>Hidden and elegant storage solutions integrated in design.</p>
              </div>

              <div className="apx-feature-card">
                <Palette />
                <h4>Classic Style</h4>
                <p>Warm neutral tones with luxurious classic aesthetics.</p>
              </div>
            </div>
          </section>

          <section className="apx-section">
            <h2 className="apx-section-title">DESIGN APPROACH</h2>

            <div className="apx-four-grid">
              <div className="apx-feature-card">
                <Building2 />
                <h4>Space Balance</h4>
                <p>Well structured layout with perfect proportion.</p>
              </div>

              <div className="apx-feature-card">
                <Palette />
                <h4>Color Palette</h4>
                <p>Beige, ivory and soft gold tones for elegance.</p>
              </div>

              <div className="apx-feature-card">
                <PackageOpen />
                <h4>Material Selection</h4>
                <p>Premium marble, wood and textured finishes used.</p>
              </div>

              <div className="apx-feature-card">
                <Lightbulb />
                <h4>Lighting Concept</h4>
                <p>Warm layered lighting to enhance luxury feel.</p>
              </div>
            </div>
          </section>

          <section className="apx-section">
            <h2 className="apx-section-title">SPACE BREAKDOWN</h2>

            <div className="apx-four-grid">

              <div className="apx-room-card">
                <img src={ApartmentProject13_2} alt="" />
                <div className="apx-room-content">
                  <h4><Sofa size={18} /> Living Room</h4>
                  <p>Elegant living space with classic luxury styling.</p>
                </div>
              </div>

              <div className="apx-room-card">
                <img src={ApartmentProject13_3} alt="" />
                <div className="apx-room-content">
                  <h4><CookingPot size={18} /> Kitchen</h4>
                  <p>Premium modular kitchen with refined detailing.</p>
                </div>
              </div>

              <div className="apx-room-card">
                <img src={ApartmentProject13_4} alt="" />
                <div className="apx-room-content">
                  <h4><BedDouble size={18} /> Bedroom</h4>
                  <p>Luxury bedroom with calm and elegant ambience.</p>
                </div>
              </div>

              <div className="apx-room-card">
                <img src={ApartmentProject13_5} alt="" />
                <div className="apx-room-content">
                  <h4><Bath size={18} /> Bathroom</h4>
                  <p>High-end bathroom with marble finishes.</p>
                </div>
              </div>

            </div>
          </section>

        </div>

        <section className="apx-section">
          <h2 className="apx-section-title">BEFORE / AFTER</h2>

          <div className="apx-before-after">
            <div className="apx-before">
              <img src={ApartmentProject13_6} alt="" />
              <span>BEFORE</span>
            </div>

            <div className="apx-after">
              <img src={ApartmentProject13_7} alt="" />
              <span>AFTER</span>
            </div>
          </div>
        </section>

        <section className="apx-section">
          <h2 className="apx-section-title">MATERIALS & FINISHES</h2>

          <div className="apx-four-grid">
            <div className="apx-material-card"><img src={ApartmentProject13_8} /><h4>Flooring</h4></div>
            <div className="apx-material-card"><img src={ApartmentProject13_9} /><h4>Woodworks</h4></div>
            <div className="apx-material-card"><img src={ApartmentProject13_10} /><h4>Paints</h4></div>
            <div className="apx-material-card"><img src={ApartmentProject13_11} /><h4>Lighting</h4></div>
          </div>
        </section>

        <section className="apx-section">
          <h2 className="apx-section-title">GALLERY</h2>

          <div className="apx-gallery-grid">
            <img src={ApartmentProject13_12} />
            <img src={ApartmentProject13_13} />
            <img src={ApartmentProject13_14} />
            <img src={ApartmentProject13_15} />
            <img src={ApartmentProject13_16} />
          </div>
        </section>

        <section className="apx-testimonial-box">
          <div className="apx-testimonial-left">
            <h3>CLIENT FEEDBACK</h3>
            <p>Elegant design with perfect luxury detailing and comfort.</p>
          </div>

          <div className="apx-testimonial-right">
            <img src={ApartmentProject13_17} alt="" />
            <div>
              <h4>Mr. & Mrs. Gupta</h4>
              <span>Happy Homeowners</span>
            </div>
          </div>
        </section>

        <div className="apx-nav-btn-wrap" style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px"
        }}>

          <button
            className="apx-prev-btn"
            onClick={() => navigate("/project12")}
          >
            ← PREVIOUS PROJECT
          </button>

        </div>

      </main>
    </div>
  );
};

export default Project13;