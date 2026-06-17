import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Project1.css";

import FarmhouseProject61 from "../../Assets/farmhouseproject6.1.png";
import FarmhouseProject62 from "../../Assets/farmhouseproject6.2.png";
import FarmhouseProject63 from "../../Assets/farmhouseproject6.3.png";
import FarmhouseProject64 from "../../Assets/farmhouseproject6.4.webp";
import FarmhouseProject65 from "../../Assets/farmhouseproject6.5.webp";
import FarmhouseProject66 from "../../Assets/farmhouseproject6.6.webp";
import FarmhouseProject67 from "../../Assets/farmhouseproject6.7.webp";
import FarmhouseProject68 from "../../Assets/farmhouseproject6.8.webp";
import FarmhouseProject69 from "../../Assets/farmhouseproject6.9.webp";
// import Material1 from "../../Assets/farmhouseproject6.10.png";
// import Material2 from "../../Assets/farmhouseproject6.11.jpg";
// import Material3 from "../../Assets/farmhouseproject6.12.webp";
// import Material4 from "../../Assets/farmhouseproject6.13.jpg";
// import Material5 from "../../Assets/farmhouseproject6.14.png";
// import Material6 from "../../Assets/farmhouseproject6.15.jpg";
import ClientImage from "../../Assets/farmhouseproject6.16.png";

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

function Project6() {

    const [activeProject, setActiveProject] = useState("Sunset Manor");
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
        FarmhouseProject64,
        FarmhouseProject65,
        FarmhouseProject66,
        FarmhouseProject67,
        FarmhouseProject68,
        FarmhouseProject69,
    ];

    const details = [
        { icon: <FaCalendarAlt />, title: "DURATION", value: "9 Months" },
        { icon: <FaCalendarAlt />, title: "YEAR", value: "2024" },
        { icon: <FaExpandArrowsAlt />, title: "AREA", value: "8,750 sq.ft" },
        { icon: <FaMapMarkerAlt />, title: "LOCATION", value: "Cotswolds, England" },
        { icon: <FaRupeeSign />, title: "BUDGET", value: "₹2.1 Cr" },
    ];
    const timeline = [
        {
            icon: <FaUsers />,
            title: "CLIENT REQUEST",
            intro:
                "The client wanted to transform an old countryside plot into a timeless European-style cottage with warm outdoor charm and peaceful surroundings.",

            points: [
                "Classic countryside cottage aesthetics",
                "Warm exterior lighting ambience",
                "Stone boundary wall detailing",
                "Cozy outdoor seating spaces",
                "Natural garden landscape planning",
                "Traditional sloped roof styling",
                "Elegant rustic architecture",
            ],

            outro:
                "The overall vision focused on creating a charming countryside retreat with timeless character and welcoming warmth.",
        },

        {
            icon: <FaMountain />,
            title: "CHALLENGES",
            intro:
                "The project required preserving the rustic countryside feel while introducing modern comfort and refined exterior detailing.",

            points: [
                "Maintaining authentic cottage character",
                "Balancing old-world and modern elements",
                "Managing compact outdoor planning",
                "Creating seamless road-facing aesthetics",
                "Enhancing natural greenery beautifully",
                "Designing warm nighttime ambience",
                "Ensuring durable exterior finishes",
            ],

            outro:
                "Every challenge was approached with careful detailing to maintain elegance, simplicity, and timeless appeal.",
        },

        {
            icon: <FaDraftingCompass />,
            title: "WHAT WE PROVIDED",
            intro:
                "We delivered complete architectural renovation and exterior enhancement solutions tailored to countryside luxury living.",

            points: [
                "Complete exterior transformation",
                "Landscape and garden planning",
                "Warm facade lighting concepts",
                "Stone pathway and wall detailing",
                "Rustic architectural enhancements",
                "Outdoor seating area development",
                "Premium material selection",
                "Full execution supervision",
            ],

            outro:
                "The final outcome is a beautifully restored countryside home with refined charm and peaceful surroundings.",
        },

        {
            icon: <FaLightbulb />,
            title: "OUR EXPERIENCE",
            intro:
                "This project allowed us to explore timeless European cottage aesthetics while creating a luxurious yet cozy countryside experience.",

            points: [
                "Blending rustic charm with luxury",
                "Designing elegant outdoor environments",
                "Creating warm evening aesthetics",
                "Enhancing natural landscape beauty",
                "Crafting timeless architectural appeal",
                "Balancing simplicity with sophistication",
            ],

            outro:
                "The project strengthened our expertise in creating charming countryside homes with elegant and welcoming ambience.",
        },
    ];

    const materials = [
        {
            title: "CALACATTA\nMARBLE",
            desc: "Sophisticated stone with premium luxury appeal.",
            // image: Material1,
            icon: <FaGem />,
        },

        {
            title: "MAHOGANY\nWOOD",
            desc: "Deep rich tones with timeless elegance.",
            // image: Material2,
            icon: <FaTree />,
        },

        {
            title: "LIMEWASH\nPAINT",
            desc: "Soft textured walls with natural beauty.",
            // image: Material3,
            icon: <FaPaintRoller />,
        },

        {
            title: "BRONZE\nFIXTURES",
            desc: "Elegant metallic detailing with warmth.",
            // image: Material4,
            icon: <FaBath />,
        },

        {
            title: "PORCELAIN\nFLOOR TILES",
            desc: "Luxury flooring with refined durability.",
            // image: Material5,
            icon: <FaWarehouse />,
        },

        {
            title: "TEXTURED\nSTONE VENEER",
            desc: "Layered textures enhancing modern architecture.",
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
                        src={FarmhouseProject61}
                        alt="Farmhouse"
                        className="fp1-hero-image"
                    />
                </section>

                <section className="p1-wrapper">

                    <div className="p1-container">

                        <p className="p1-top-text">PROJECT OVERVIEW</p>

                        <h1 className="p1-heading">
                            Sunset Manor
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
                            src={FarmhouseProject62}
                            alt="Before"
                            className="fp1-before-after-image"
                        />

                        <img
                            src={FarmhouseProject63}
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
                        backgroundImage: `url(${FarmhouseProject61})`
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

                                <h3>Mr. & Mrs. Wilson</h3>

                                <p>Countryside Farmhouse Owners</p>

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
                                    The cottage perfectly captures warmth, charm, and peaceful countryside living. Every detail feels timeless, elegant, and beautifully crafted.
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
                        onClick={() => navigate("/project5")}
                    >
                        ← Previous Project
                    </button>
                </div>

            </main>

        </div>
    );
}

export default Project6;