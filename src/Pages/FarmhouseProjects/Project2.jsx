import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Project1.css";


import FarmhouseProject21 from "../../Assets/farmhouseproject2.14.jpg";
import FarmhouseProject22 from "../../Assets/farmhouseproject2.19.png";
import FarmhouseProject23 from "../../Assets/farmhouseproject2.11.jpg";


import FarmhouseProject24 from "../../Assets/farmhouseproject2.13.jpg";
import FarmhouseProject25 from "../../Assets/farmhouseproject2.15.jpg";
import FarmhouseProject26 from "../../Assets/farmhouseproject2.16.jpg";
import FarmhouseProject27 from "../../Assets/farmhouseproject2.17.jpg";
import FarmhouseProject28 from "../../Assets/farmhouseproject2.18.jpg";
import FarmhouseProject29 from "../../Assets/farmhouseproject2.12.jpg";


import Material1 from "../../Assets/farmhouseproject2.20.jpg";
import Material2 from "../../Assets/farmhouseproject2.21.jpg";
import Material3 from "../../Assets/farmhouseproject2.22.jpg";
import Material4 from "../../Assets/farmhouseproject2.23.jpg";
import Material5 from "../../Assets/farmhouseproject2.24.jpg";
import Material6 from "../../Assets/farmhouseproject2.25.jpg";
import ClientImage from "../../Assets/farmhouseproject2.26.png";

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


function Project2() {

    const [activeProject, setActiveProject] = useState("Palm Valley Villa");
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
        FarmhouseProject24,
        FarmhouseProject25,
        FarmhouseProject26,
        FarmhouseProject27,
        FarmhouseProject28,
        FarmhouseProject29,
    ];

    const details = [
        { icon: <FaCalendarAlt />, title: "DURATION", value: "10 Months" },
        { icon: <FaCalendarAlt />, title: "YEAR", value: "2025" },
        { icon: <FaExpandArrowsAlt />, title: "AREA", value: "15,800 sq.ft" },
        { icon: <FaMapMarkerAlt />, title: "LOCATION", value: "Udaipur, Rajasthan" },
        { icon: <FaRupeeSign />, title: "BUDGET", value: "₹3.6 Cr" },
    ];

    const timeline = [
        {
            icon: <FaUsers />,
            title: "CLIENT REQUEST",
            intro:
                "The client wanted a sophisticated luxury villa with resort-inspired outdoor spaces and a peaceful connection to nature.",

            points: [
                "Contemporary farmhouse architecture",
                "Large landscaped lawn with lounge zones",
                "Private outdoor seating and deck spaces",
                "Warm earthy interiors with premium finishes",
                "Large openings for natural ventilation",
                "Elegant poolside experience",
                "Comfortable family gathering spaces",
            ],

            outro:
                "The goal was to create a luxurious yet calm weekend retreat for relaxation and hospitality-style living.",
        },

        {
            icon: <FaMountain />,
            title: "CHALLENGES",
            intro:
                "The project required balancing modern luxury aesthetics with practical site and climate conditions.",

            points: [
                "Managing extreme summer heat",
                "Creating privacy without blocking views",
                "Maintaining indoor comfort with large glazing",
                "Blending architecture with natural landscape",
                "Achieving seamless indoor-outdoor flow",
                "Material durability for outdoor exposure",
                "Creating resort ambience within functional planning",
            ],

            outro:
                "Every challenge was solved through thoughtful planning, material selection, and spatial detailing.",
        },

        {
            icon: <FaDraftingCompass />,
            title: "WHAT WE PROVIDED",
            intro:
                "We delivered complete design and execution services tailored to the project vision.",

            points: [
                "Architectural planning and facade design",
                "Luxury interior concepts",
                "Landscape and plantation planning",
                "Lighting and ambience concepts",
                "Pool and deck detailing",
                "Material and finish selection",
                "Furniture styling guidance",
                "Complete turnkey execution",
            ],

            outro:
                "The final villa reflects luxury, comfort, and timeless tropical elegance.",
        },

        {
            icon: <FaLightbulb />,
            title: "OUR EXPERIENCE",
            intro:
                "This project allowed us to explore refined tropical living with elegant architectural simplicity.",

            points: [
                "Using natural textures and earthy finishes",
                "Creating luxury through minimal detailing",
                "Enhancing indoor-outdoor interaction",
                "Designing hospitality-inspired spaces",
                "Balancing warmth with contemporary aesthetics",
                "Crafting calm and inviting environments",
            ],

            outro:
                "The experience strengthened our approach towards timeless luxury farmhouse design.",
        },
    ];

    const materials = [
        {
            title: "ONYX\nMARBLE",
            desc: "Bold luxury with rich natural textures.",
            image: Material1,
            icon: <FaGem />,
        },

        {
            title: "OAK\nWOOD",
            desc: "Warm earthy tones with timeless charm.",
            image: Material2,
            icon: <FaTree />,
        },

        {
            title: "MICROCEMENT\nFINISH",
            desc: "Smooth modern surfaces with minimal appeal.",
            image: Material3,
            icon: <FaPaintRoller />,
        },

        {
            title: "MATTE BLACK\nFIXTURES",
            desc: "Elegant accents with modern sophistication.",
            image: Material4,
            icon: <FaBath />,
        },

        {
            title: "SLATE\nROOFING",
            desc: "Durable roofing with rustic character.",
            image: Material5,
            icon: <FaWarehouse />,
        },

        {
            title: "NATURAL\nSTONE PANELS",
            desc: "Organic textures enhancing the elevation.",
            image: Material6,
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
                        src={FarmhouseProject21}
                        alt="Farmhouse"
                        className="fp1-hero-image"
                    />
                </section>

                <section className="p1-wrapper">

                    <div className="p1-container">

                        <p className="p1-top-text">PROJECT OVERVIEW</p>

                        <h1 className="p1-heading">
                            Palm Valley Villa
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
                            src={FarmhouseProject22}
                            alt="Before"
                            className="fp1-before-after-image"
                        />

                        <img
                            src={FarmhouseProject23}
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
                        backgroundImage: `url(${FarmhouseProject21})`
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

                                <h3>Mr. & Mrs. Mehta</h3>

                                <p>Luxury Villa Owners</p>

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
                                    The team beautifully transformed the property into a luxurious and peaceful retreat with exceptional detailing and execution.
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
                                <p>QUALITY DELIVERED</p>
                            </div>

                            <div className="fp1-feature-item">
                                <i className="fa-solid fa-compass-drafting"></i>
                                <p>DESIGN EXCELLENCE</p>
                            </div>

                            <div className="fp1-feature-item">
                                <i className="fa-solid fa-handshake"></i>
                                <p>CLIENT TRUST</p>
                            </div>

                            <div className="fp1-feature-item">
                                <i className="fa-solid fa-house"></i>
                                <p>DREAMS REALIZED</p>
                            </div>

                        </div>

                    </div>

                </section>

                <div className="fp1-btn-wrap1">

                    <button
                        className="fp1-prev-btn"
                        onClick={() => navigate("/project1")}
                    >
                        ← Previous Project
                    </button>

                    <button
                        className="fp1-next-btn2"
                        onClick={() => navigate("/project3")}
                    >
                        Next Project →
                    </button>

                </div>

            </main>

        </div>
    );
}

export default Project2;