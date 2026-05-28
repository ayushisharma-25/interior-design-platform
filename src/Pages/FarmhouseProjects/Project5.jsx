import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Project1.css";

import FarmhouseProject51 from "../../assets/farmhouseproject5.3.jpg";
import FarmhouseProject52 from "../../assets/farmhouseproject5.2.png";
import FarmhouseProject53 from "../../assets/farmhouseproject5.1.jpg";
import FarmhouseProject54 from "../../assets/farmhouseproject5.4.jpg";
import FarmhouseProject55 from "../../assets/farmhouseproject5.5.jpg";
import FarmhouseProject56 from "../../assets/farmhouseproject5.6.jpg";
import FarmhouseProject57 from "../../assets/farmhouseproject5.7.jpg";
import FarmhouseProject58 from "../../assets/farmhouseproject5.8.jpg";
import FarmhouseProject59 from "../../assets/farmhouseproject5.9.jpg";
// import Material1 from "../../assets/farmhouseproject5.10.png";
// import Material2 from "../../assets/farmhouseproject5.11.jpg";
// import Material3 from "../../assets/farmhouseproject5.12.webp";
// import Material4 from "../../assets/farmhouseproject5.13.jpg";
// import Material5 from "../../assets/farmhouseproject5.14.png";
// import Material6 from "../../assets/farmhouseproject5.15.jpg";
import ClientImage from "../../assets/farmhouseproject5.16.png";

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

function Project5() {

    const [activeProject, setActiveProject] = useState("Courtyard Haven");
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
        FarmhouseProject54,
        FarmhouseProject55,
        FarmhouseProject56,
        FarmhouseProject57,
        FarmhouseProject58,
        FarmhouseProject59,
    ];

    const details = [
        { icon: <FaCalendarAlt />, title: "DURATION", value: "8 Months" },
        { icon: <FaCalendarAlt />, title: "YEAR", value: "2024" },
        { icon: <FaExpandArrowsAlt />, title: "AREA", value: "6,900 sq.ft" },
        { icon: <FaMapMarkerAlt />, title: "LOCATION", value: "Lake District, England" },
        { icon: <FaRupeeSign />, title: "BUDGET", value: "₹1.8 Cr" },
    ];

    const timeline = [
        {
            icon: <FaUsers />,
            title: "CLIENT REQUEST",
            intro:
                "The client wanted a peaceful countryside cottage with timeless European charm, cozy outdoor spaces, and a warm welcoming atmosphere.",

            points: [
                "Classic English cottage aesthetics",
                "Warm and inviting exterior lighting",
                "Beautiful garden-facing spaces",
                "Traditional sloped roof styling",
                "Rustic stone detailing",
                "Cozy family-oriented environment",
                "Elegant countryside ambience",
            ],

            outro:
                "The vision focused on creating a charming countryside retreat filled with warmth, simplicity, and timeless elegance.",
        },

        {
            icon: <FaMountain />,
            title: "CHALLENGES",
            intro:
                "The project required maintaining authentic countryside charm while upgrading the home with refined modern comforts.",

            points: [
                "Preserving traditional architecture",
                "Balancing rustic and modern finishes",
                "Enhancing road-facing aesthetics",
                "Creating cohesive landscape planning",
                "Managing warm nighttime ambience",
                "Maintaining natural outdoor harmony",
                "Ensuring durable exterior materials",
            ],

            outro:
                "Every challenge was solved through thoughtful detailing, premium materials, and timeless design planning.",
        },

        {
            icon: <FaDraftingCompass />,
            title: "WHAT WE PROVIDED",
            intro:
                "We delivered complete exterior renovation and countryside landscape solutions tailored to luxurious cottage living.",

            points: [
                "Full exterior facade transformation",
                "Landscape and garden development",
                "Warm lighting design concepts",
                "Stone wall and pathway detailing",
                "Premium rustic material selection",
                "Outdoor relaxation area planning",
                "Architectural enhancement guidance",
                "Execution and finishing supervision",
            ],

            outro:
                "The final result is a beautifully restored countryside home offering peaceful luxury and timeless European character.",
        },

        {
            icon: <FaLightbulb />,
            title: "OUR EXPERIENCE",
            intro:
                "This project allowed us to explore authentic countryside architecture while crafting elegant and welcoming living experiences.",

            points: [
                "Creating warm countryside aesthetics",
                "Designing timeless outdoor spaces",
                "Enhancing rustic architectural beauty",
                "Blending elegance with simplicity",
                "Crafting cozy nighttime ambience",
                "Strengthening natural landscape harmony",
            ],

            outro:
                "The project strengthened our expertise in designing charming countryside homes with luxurious yet peaceful ambience.",
        },
    ];

    const materials = [
        {
            title: "QUARTZ\nSURFACES",
            desc: "Clean luxury with durable sophistication.",
            // image: Material1,
            icon: <FaGem />,
        },

        {
            title: "CEDAR\nWOOD",
            desc: "Natural richness with timeless warmth.",
            // image: Material2,
            icon: <FaTree />,
        },

        {
            title: "MINERAL\nTEXTURE COATING",
            desc: "Soft matte finishes with elegant depth.",
            // image: Material3,
            icon: <FaPaintRoller />,
        },

        {
            title: "CHROME\nFIXTURES",
            desc: "Modern shine with refined detailing.",
            // image: Material4,
            icon: <FaBath />,
        },

        {
            title: "TERRACOTTA\nTILES",
            desc: "Rustic surfaces with earthy character.",
            // image: Material5,
            icon: <FaWarehouse />,
        },

        {
            title: "EXPOSED\nBRICK CLADDING",
            desc: "Classic textures with architectural warmth.",
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
                        src={FarmhouseProject51}
                        alt="Farmhouse"
                        className="fp1-hero-image"
                    />
                </section>

                <section className="p1-wrapper">

                    <div className="p1-container">

                        <p className="p1-top-text">PROJECT OVERVIEW</p>

                        <h1 className="p1-heading">
                            Courtyard Haven
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
                            src={FarmhouseProject52}
                            alt="Before"
                            className="fp1-before-after-image"
                        />

                        <img
                            src={FarmhouseProject53}
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
                        backgroundImage: `url(${FarmhouseProject51})`
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

                                <h3>Mr. & Mrs. Thompson</h3>

                                <p>Luxury Farmhouse Owners</p>

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
                                    The cottage feels peaceful, elegant, and incredibly welcoming. Every detail beautifully captures the warmth of countryside living.
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

export default Project5;