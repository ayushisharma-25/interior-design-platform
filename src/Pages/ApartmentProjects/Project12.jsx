import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Project11.css";

import ApartmentProject12_1 from "../../Assets/apartmentproject12.1.jpg";
import ApartmentProject12_2 from "../../Assets/apartmentproject12.2.jpg";
import ApartmentProject12_3 from "../../Assets/apartmentproject12.3.jpg";
import ApartmentProject12_4 from "../../Assets/apartmentproject12.4.jpg";
import ApartmentProject12_5 from "../../Assets/apartmentproject12.5.jpg";
import ApartmentProject12_6 from "../../Assets/apartmentproject12.6.png";
import ApartmentProject12_7 from "../../Assets/apartmentproject12.1.jpg";
import ApartmentProject12_8 from "../../Assets/apartmentproject12.8.jpg";
import ApartmentProject12_9 from "../../Assets/apartmentproject12.9.jpg";
import ApartmentProject12_10 from "../../Assets/apartmentproject12.10.jpg";
import ApartmentProject12_11 from "../../Assets/apartmentproject12.11.jpg";
import ApartmentProject12_12 from "../../Assets/apartmentproject12.12.jpg";
import ApartmentProject12_13 from "../../Assets/apartmentproject12.13.jpg";
import ApartmentProject12_14 from "../../Assets/apartmentproject12.14.jpg";
import ApartmentProject12_15 from "../../Assets/apartmentproject12.15.jpg";
import ApartmentProject12_16 from "../../Assets/apartmentproject12.16.jpg";
import ApartmentProject12_17 from "../../Assets/apartmentproject12.17.png";

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

const Project12 = () => {
  const [activeProject, setActiveProject] = useState("Modern Haven");
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
          <img src={ApartmentProject12_1} alt="" />
        </div>

        <div className="apx-wrapper">

          <section className="apx-section">
            <div className="apx">
              <p className="apx-top-text">PROJECT OVERVIEW</p>
              <h1 className="apx-heading">Modern Haven</h1>
            </div>

            <div className="apx-overview-grid">
              <div className="apx-info-card"><Maximize2 /><p>AREA</p><h4>1500 sq.ft</h4></div>
              <div className="apx-info-card"><MapPin /><p>CITY</p><h4>Jaipur</h4></div>
              <div className="apx-info-card"><CalendarDays /><p>YEAR</p><h4>2025</h4></div>
              <div className="apx-info-card"><Building2 /><p>TYPE</p><h4>3BHK Premium Apartment</h4></div>
              <div className="apx-info-card"><IndianRupee /><p>BUDGET</p><h4>₹42 Lakhs</h4></div>
            </div>
          </section>

          {/* CLIENT BRIEF */}
          <section className="apx-section">
            <h2 className="apx-section-title">CLIENT BRIEF</h2>

            <div className="apx-four-grid">
              <div className="apx-feature-card">
                <Sofa />
                <h4>Luxury Living</h4>
                <p>Client wanted a modern luxury apartment with warm cozy vibe.</p>
              </div>

              <div className="apx-feature-card">
                <Building2 />
                <h4>Space Optimization</h4>
                <p>Compact layout needed smart planning for openness.</p>
              </div>

              <div className="apx-feature-card">
                <PackageOpen />
                <h4>Storage Focus</h4>
                <p>Hidden storage solutions without visual clutter.</p>
              </div>

              <div className="apx-feature-card">
                <Palette />
                <h4>Modern Style</h4>
                <p>Neutral palette with wood + stone modern aesthetics.</p>
              </div>
            </div>
          </section>

          <section className="apx-section">
            <h2 className="apx-section-title">DESIGN APPROACH</h2>

            <div className="apx-four-grid">
              <div className="apx-feature-card">
                <Building2 />
                <h4>Smart Planning</h4>
                <p>Space optimized for better movement & usability.</p>
              </div>

              <div className="apx-feature-card">
                <Palette />
                <h4>Color Theme</h4>
                <p>Warm beige, white and wooden tones for elegance.</p>
              </div>

              <div className="apx-feature-card">
                <PackageOpen />
                <h4>Material Choice</h4>
                <p>Premium low-maintenance modern materials used.</p>
              </div>

              <div className="apx-feature-card">
                <Lightbulb />
                <h4>Lighting Plan</h4>
                <p>Layered lighting for luxury mood and functionality.</p>
              </div>
            </div>
          </section>

          <section className="apx-section">
            <h2 className="apx-section-title">SPACE BREAKDOWN</h2>

            <div className="apx-four-grid">

              <div className="apx-room-card">
                <img src={ApartmentProject12_2} alt="" />
                <div className="apx-room-content">
                  <h4><Sofa size={18} /> Living Room</h4>
                  <p>Elegant living area with modern seating setup.</p>
                </div>
              </div>

              <div className="apx-room-card">
                <img src={ApartmentProject12_3} alt="" />
                <div className="apx-room-content">
                  <h4><CookingPot size={18} /> Kitchen</h4>
                  <p>Fully modular kitchen with smart storage.</p>
                </div>
              </div>

              <div className="apx-room-card">
                <img src={ApartmentProject12_4} alt="" />
                <div className="apx-room-content">
                  <h4><BedDouble size={18} /> Bedroom</h4>
                  <p>Soft toned bedroom with ambient lighting.</p>
                </div>
              </div>

              <div className="apx-room-card">
                <img src={ApartmentProject12_5} alt="" />
                <div className="apx-room-content">
                  <h4><Bath size={18} /> Bathroom</h4>
                  <p>Minimal luxury bathroom with premium fittings.</p>
                </div>
              </div>

            </div>
          </section>

        </div>

        <section className="apx-section">
          <h2 className="apx-section-title">BEFORE / AFTER</h2>

          <div className="apx-before-after">
            <div className="apx-before">
              <img src={ApartmentProject12_6} alt="" />
              <span>BEFORE</span>
            </div>

            <div className="apx-after">
              <img src={ApartmentProject12_7} alt="" />
              <span>AFTER</span>
            </div>
          </div>
        </section>

        <section className="apx-section">
          <h2 className="apx-section-title">MATERIALS & FINISHES</h2>

          <div className="apx-four-grid">
            <div className="apx-material-card"><img src={ApartmentProject12_8} /><h4>Flooring</h4></div>
            <div className="apx-material-card"><img src={ApartmentProject12_9} /><h4>Woodworks</h4></div>
            <div className="apx-material-card"><img src={ApartmentProject12_10} /><h4>Paints</h4></div>
            <div className="apx-material-card"><img src={ApartmentProject12_12} /><h4>Lighting</h4></div>
          </div>
        </section>

        <section className="apx-section">
          <h2 className="apx-section-title">GALLERY</h2>

          <div className="apx-gallery-grid">
            <img src={ApartmentProject12_12} />
            <img src={ApartmentProject12_13} />
            <img src={ApartmentProject12_14} />
            <img src={ApartmentProject12_15} />
            <img src={ApartmentProject12_16} />
          </div>
        </section>

        <section className="apx-testimonial-box">
          <div className="apx-testimonial-left">
            <h3>CLIENT FEEDBACK</h3>
            <p>Design perfectly matched our lifestyle and needs.</p>
          </div>

          <div className="apx-testimonial-right">
            <img src={ApartmentProject12_17} alt="" />
            <div>
              <h4>Mr. & Mrs. Sharma</h4>
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
            onClick={() => navigate("/project11")}
          >
            ← PREVIOUS PROJECT
          </button>

          <button
            className="apx-next-btn"
            onClick={() => navigate("/project13")}
          >
            NEXT PROJECT →
          </button>

        </div>

      </main>
    </div>
  );
};

export default Project12;