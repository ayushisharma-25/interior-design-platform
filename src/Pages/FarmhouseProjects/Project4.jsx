import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Project1.css";

import FarmhouseProject41 from "../../Assets/farmhouseproject4.7.png";
import FarmhouseProject42 from "../../Assets/farmhouseproject4.9.png";
import FarmhouseProject43 from "../../Assets/farmhouseproject4.1.webp";
import FarmhouseProject44 from "../../Assets/farmhouseproject4.3.webp";
import FarmhouseProject45 from "../../Assets/farmhouseproject4.4.webp";
import FarmhouseProject46 from "../../Assets/farmhouseproject4.5.webp";
import FarmhouseProject47 from "../../Assets/farmhouseproject4.6.webp";
import FarmhouseProject48 from "../../Assets/farmhouseproject4.2.webp";
import FarmhouseProject49 from "../../Assets/farmhouseproject4.8.png";
// import Material1 from "../../Assets/farmhouseproject4.10.png";
// import Material2 from "../../Assets/farmhouseproject4.11.jpg";
// import Material3 from "../../Assets/farmhouseproject4.12.webp";
// import Material4 from "../../Assets/farmhouseproject4.13.jpg";
// import Material5 from "../../Assets/farmhouseproject4.14.png";
// import Material6 from "../../Assets/farmhouseproject4.15.jpg";
import ClientImage from "../../Assets/farmhouseproject4.16.png";

import {
    FaCalendarAlt,
    FaExpandArrowsAlt,
    FaMapMarkerAlt,
    FaRupeeSign,
    FaUsers,
    FaMountain,
    FaDraftingCompass,
    FaLightbulb,
    FaGem,
    FaTree,
    FaPaintRoller,
    FaBath,
    FaWarehouse,
    FaCube,
} from "react-icons/fa";

function Project4() {

    const [activeProject, setActiveProject] = useState("Rustic Horizon");
    const navigate = useNavigate();

    const projects = [
        "Twilight Palms",
        "Palm Valley Villa",
        "Lakeview Estate",
        "Rustic Horizon",
        "Courtyard Haven",
        "Sunset Manor",
    ];

    const gallery = [
        FarmhouseProject44,
        FarmhouseProject45,
        FarmhouseProject46,
        FarmhouseProject47,
        FarmhouseProject48,
        FarmhouseProject49,
    ];

    const details = [
        { icon: <FaCalendarAlt />, title: "DURATION", value: "11 Months" },
        { icon: <FaCalendarAlt />, title: "YEAR", value: "2025" },
        { icon: <FaExpandArrowsAlt />, title: "AREA", value: "16,200 sq.ft" },
        { icon: <FaMapMarkerAlt />, title: "LOCATION", value: "Alibaug, Maharashtra" },
        { icon: <FaRupeeSign />, title: "BUDGET", value: "₹3.9 Cr" },
    ];

    const timeline = [
        {
            icon: <FaUsers />,
            title: "CLIENT REQUEST",
            intro:
                "The client wanted a warm contemporary farmhouse blending rustic textures with modern luxury and open leisure spaces.",

            points: [
                "Open courtyard living spaces",
                "Warm wooden interior elements",
                "Luxury outdoor seating areas",
                "Minimal earthy architecture",
                "Large natural light openings",
                "Private family retreat zones",
                "Elegant tropical ambience",
            ],

            outro:
                "The overall vision focused on creating a peaceful farmhouse with timeless warmth and premium comfort.",
        },

        {
            icon: <FaMountain />,
            title: "CHALLENGES",
            intro:
                "The project required balancing rustic aesthetics with clean modern detailing and practical spatial planning.",

            points: [
                "Managing heat through open spaces",
                "Balancing openness with privacy",
                "Maintaining natural ventilation",
                "Creating cohesive indoor-outdoor flow",
                "Blending earthy textures elegantly",
                "Ensuring durability of exterior finishes",
                "Preserving calm visual aesthetics",
            ],

            outro:
                "Every challenge was addressed through thoughtful planning, natural materials, and refined detailing.",
        },

        {
            icon: <FaDraftingCompass />,
            title: "WHAT WE PROVIDED",
            intro:
                "We delivered complete architectural and luxury interior solutions tailored to the farmhouse lifestyle.",

            points: [
                "Architectural planning and facade design",
                "Luxury interior styling concepts",
                "Landscape and outdoor planning",
                "Ambient lighting concepts",
                "Premium material selection",
                "Furniture and decor guidance",
                "Execution and site supervision",
                "Complete turnkey coordination",
            ],

            outro:
                "The result is a luxurious rustic farmhouse with timeless design and relaxing spatial experiences.",
        },

        {
            icon: <FaLightbulb />,
            title: "OUR EXPERIENCE",
            intro:
                "This farmhouse allowed us to explore earthy luxury aesthetics with warm textures and modern simplicity.",

            points: [
                "Using rustic materials elegantly",
                "Creating warm ambient spaces",
                "Designing around natural light",
                "Enhancing indoor-outdoor harmony",
                "Crafting luxury with simplicity",
                "Balancing comfort with aesthetics",
            ],

            outro:
                "The project strengthened our expertise in designing refined rustic luxury homes with peaceful ambience.",
        },
    ];

    const materials = [
        {
            title: "STATUARIO\nMARBLE",
            desc: "Luxury stone with elegant veining patterns.",
            // image: Material1,
            icon: <FaGem />,
        },

        {
            title: "ASH\nWOOD",
            desc: "Light natural textures with modern warmth.",
            // image: Material2,
            icon: <FaTree />,
        },

        {
            title: "RUSTIC\nPLASTER FINISH",
            desc: "Earthy textures with timeless appeal.",
            // image: Material3,
            icon: <FaPaintRoller />,
        },

        {
            title: "COPPER\nFIXTURES",
            desc: "Warm metallic accents with luxury styling.",
            // image: Material4,
            icon: <FaBath />,
        },

        {
            title: "STONE\nPAVERS",
            desc: "Natural pathways with refined detailing.",
            // image: Material5,
            icon: <FaWarehouse />,
        },

        {
            title: "WOODEN\nFACADE PANELS",
            desc: "Elegant cladding with natural character.",
            // image: Material6,
            icon: <FaCube />,
        },
    ];

    return (
        <div className="fp1-page">

            <aside className="fp1-sidebar">

                <h2 className="fp1-sidebar-title">Projects</h2>

                <ul className="fp1-project-list">
                    {projects.map((project, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                setActiveProject(project);

                                if (project === "Twilight Palms") {
                                    navigate("/project1");
                                }

                                if (project === "Palm Valley Villa") {
                                    navigate("/project2");
                                }

                                if (project === "Lakeview Estate") {
                                    navigate("/project3");
                                }

                                if (project === "Rustic Horizon") {
                                    navigate("/project4");
                                }
                                if (project === "Courtyard Haven") {
                                    navigate("/project5");
                                }
                                if (project === "Sunset Manor") {
                                    navigate("/project6");
                                }
                            }}
                            className={`fp1-project-item ${activeProject === project
                                ? "fp1-project-active"
                                : ""
                                }`}
                        >
                            {project}
                        </li>
                    ))}
                </ul>

            </aside>

            <main className="fp1-main">

                <section className="fp1-hero-section">
                    <img
                        src={FarmhouseProject41}
                        alt="Farmhouse"
                        className="fp1-hero-image"
                    />
                </section>

                <section className="p1-wrapper">

                    <div className="p1-container">

                        <p className="p1-top-text">PROJECT OVERVIEW</p>

                        <h1 className="p1-heading">
                            Rustic Horizon
                        </h1>

                        <div className="p1-details-grid">

                            {details.map((item, index) => (
                                <div className="p1-detail-card" key={index}>

                                    <div className="p1-card-icon">
                                        {item.icon}
                                    </div>

                                    <p>{item.title}</p>

                                    <h3>{item.value}</h3>

                                    <span></span>

                                </div>
                            ))}

                        </div>

                        <div className="p1-timeline">

                            {timeline.map((item, index) => (

                                <div className="p1-timeline-item" key={index}>

                                    <div className="p1-left">
                                        <div className="p1-circle">
                                            {item.icon}
                                        </div>
                                    </div>

                                    <div className="p1-right">

                                        <h2>{item.title}</h2>

                                        <p className="p1-intro">
                                            {item.intro}
                                        </p>

                                        <ul className="p1-list">
                                            {item.points.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>

                                        <p className="p1-outro">
                                            {item.outro}
                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>

                <section className="fp1-content-section">

                    <h2 className="fp1-section-title">
                        Before / After
                    </h2>

                    <div className="fp1-before-after-grid">

                        <img
                            src={FarmhouseProject42}
                            alt="Before"
                            className="fp1-before-after-image"
                        />

                        <img
                            src={FarmhouseProject43}
                            alt="After"
                            className="fp1-before-after-image"
                        />

                    </div>

                </section>

                <section className="fp1-content-section">

                    <h2 className="fp1-section-title">
                        Gallery
                    </h2>

                    <div className="fp1-gallery-grid">

                        {gallery.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`gallery-${index}`}
                                className="fp1-gallery-image"
                            />
                        ))}

                    </div>

                </section>

                <section className="fp1-content-section1">

                    <div className="fp1-overlay"></div>

                    <div className="fp1-heading-wrap">

                        <div className="fp1-line"></div>

                        <h2 className="fp1-section-title">
                            MATERIALS USED
                        </h2>

                        <div className="fp1-line"></div>

                    </div>

                    <div className="fp1-materials-wrap">

                        {materials.map((item, index) => (

                            <div className="fp1-material-card" key={index}>

                                <div className="fp1-material-image">
                                    <img src={item.image} alt={item.title} />
                                </div>

                                <div className="fp1-icon-wrap">
                                    {item.icon}
                                </div>

                                <h3 className="fp1-material-title">
                                    {item.title.split("\n").map((line, i) => (
                                        <span key={i}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                                </h3>

                                <p className="fp1-material-desc">
                                    {item.desc}
                                </p>

                            </div>

                        ))}

                    </div>

                </section>

                <section
                    className="fp1-testimonial-box"
                    style={{
                        backgroundImage: `url(${FarmhouseProject41})`
                    }}
                >

                    <div className="fp1-testimonial-overlay"></div>

                    <div className="fp1-testimonial-content">

                        <h2 className="fp1-testimonial-title">
                            Client Testimonial
                        </h2>

                        <div className="fp1-testimonial-divider">
                            <span></span>
                            ✦
                            <span></span>
                        </div>

                        <div className="fp1-testimonial-card">

                            <div className="fp1-client-info">

                                <img
                                    src={ClientImage}
                                    alt="client"
                                    className="fp1-client-image"
                                />

                                <h3>Mr. & Mrs. Arora</h3>

                                <p>Rustic Farmhouse Owners</p>

                                <div className="fp1-stars">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>

                            </div>

                            <div className="fp1-testimonial-right">

                                <i className="fa-solid fa-quote-left fp1-quote-icon"></i>

                                <p className="fp1-testimonial-text">
                                    The farmhouse feels warm, luxurious, and deeply connected to nature. Every corner reflects thoughtful design and timeless elegance.
                                </p>

                                <div className="fp1-testimonial-divider small1">
                                    <span></span>
                                    ✦
                                    <span></span>
                                </div>

                            </div>

                        </div>

                        <div className="fp1-feature-row">

                            <div className="fp1-feature-item">
                                <i className="fa-solid fa-shield-halved"></i>
                                <p>PREMIUM QUALITY</p>
                            </div>

                            <div className="fp1-feature-item">
                                <i className="fa-solid fa-compass-drafting"></i>
                                <p>RUSTIC ELEGANCE</p>
                            </div>

                            <div className="fp1-feature-item">
                                <i className="fa-solid fa-handshake"></i>
                                <p>CLIENT SATISFACTION</p>
                            </div>

                            <div className="fp1-feature-item">
                                <i className="fa-solid fa-house"></i>
                                <p>LUXURY LIVING</p>
                            </div>

                        </div>

                    </div>

                </section>

                <div className="fp1-btn-wrap1">

                    <button
                        className="fp1-prev-btn"
                        onClick={() => navigate("/project3")}
                    >
                        ← Previous Project
                    </button>

                    <button
                        className="fp1-next-btn2"
                        onClick={() => navigate("/project5")}
                    >
                        Next Project →
                    </button>

                </div>

            </main>

        </div>
    );
}

export default Project4;