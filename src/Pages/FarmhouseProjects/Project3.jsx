import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Project1.css";


import FarmhouseProject31 from "../../Assets/farmhouseproject3.1.webp";
import FarmhouseProject32 from "../../Assets/farmhouseproject3.2.png";
import FarmhouseProject33 from "../../Assets/farmhouseproject3.3.webp";
import FarmhouseProject34 from "../../Assets/farmhouseproject3.4.webp";
import FarmhouseProject35 from "../../Assets/farmhouseproject3.5.webp";
import FarmhouseProject36 from "../../Assets/farmhouseproject3.6.webp";
import FarmhouseProject37 from "../../Assets/farmhouseproject3.7.webp";
import FarmhouseProject38 from "../../Assets/farmhouseproject3.8.webp";
import FarmhouseProject39 from "../../Assets/farmhouseproject3.9.webp";
// import Material1 from "../../Assets/farmhouseproject3.10.jpg";
// import Material2 from "../../Assets/farmhouseproject3.11.jpg";
// import Material3 from "../../Assets/farmhouseproject3.12.jpg";
// import Material4 from "../../Assets/farmhouseproject3.13.jpg";
// import Material5 from "../../Assets/farmhouseproject3.14.jpg";
// import Material6 from "../../Assets/farmhouseproject3.15.jpg";
import ClientImage from "../../Assets/farmhouseproject3.16.png";

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

function Project3() {

    const [activeProject, setActiveProject] = useState("Lakeview Estate");
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
        FarmhouseProject34,
        FarmhouseProject35,
        FarmhouseProject36,
        FarmhouseProject37,
        FarmhouseProject38,
        FarmhouseProject39,
    ];

    const details = [
        { icon: <FaCalendarAlt />, title: "DURATION", value: "12 Months" },
        { icon: <FaCalendarAlt />, title: "YEAR", value: "2025" },
        { icon: <FaExpandArrowsAlt />, title: "AREA", value: "18,400 sq.ft" },
        { icon: <FaMapMarkerAlt />, title: "LOCATION", value: "Nainital, Uttarakhand" },
        { icon: <FaRupeeSign />, title: "BUDGET", value: "₹4.2 Cr" },
    ];

    const timeline = [
        {
            icon: <FaUsers />,
            title: "CLIENT REQUEST",
            intro:
                "The client envisioned a serene lake-facing luxury estate with modern architecture and warm nature-inspired living spaces.",

            points: [
                "Open lakeview lounge spaces",
                "Luxury double-height living area",
                "Minimal modern architecture",
                "Large glass windows for scenic views",
                "Warm earthy interior palette",
                "Private family retreat atmosphere",
                "Elegant outdoor seating zones",
            ],

            outro:
                "The vision focused on creating a peaceful luxury escape connected beautifully with nature and surrounding landscapes.",
        },

        {
            icon: <FaMountain />,
            title: "CHALLENGES",
            intro:
                "The project demanded careful planning to maintain luxury aesthetics while responding to terrain and climate conditions.",

            points: [
                "Managing sloped terrain levels",
                "Maximizing lake-facing views",
                "Handling moisture and weather exposure",
                "Maintaining indoor thermal comfort",
                "Creating smooth spatial transitions",
                "Balancing openness with privacy",
                "Blending structure with natural surroundings",
            ],

            outro:
                "Every design decision was carefully refined to maintain elegance, comfort, and long-term durability.",
        },

        {
            icon: <FaDraftingCompass />,
            title: "WHAT WE PROVIDED",
            intro:
                "We offered complete architectural, interior, and execution solutions tailored specifically to the luxury estate concept.",

            points: [
                "Architectural planning and elevation",
                "Luxury interior styling",
                "Landscape and outdoor design",
                "Custom lighting concepts",
                "Premium material selection",
                "Furniture and decor guidance",
                "Site supervision and coordination",
                "Complete turnkey execution",
            ],

            outro:
                "The final outcome delivers timeless luxury with calm natural sophistication and premium functionality.",
        },

        {
            icon: <FaLightbulb />,
            title: "OUR EXPERIENCE",
            intro:
                "This estate allowed us to explore contemporary luxury living inspired by scenic landscapes and natural materials.",

            points: [
                "Designing around panoramic views",
                "Using soft earthy textures",
                "Creating warm luxury ambience",
                "Enhancing indoor-outdoor harmony",
                "Balancing elegance with simplicity",
                "Crafting peaceful retreat-style spaces",
            ],

            outro:
                "The project strengthened our expertise in designing refined luxury homes deeply connected with nature.",
        },
    ];

    const materials = [
        {
            title: "TRAVERTINE\nMARBLE",
            desc: "Soft luxurious textures with timeless elegance.",
            // image: Material1,
            icon: <FaGem />,
        },

        {
            title: "WALNUT\nWOOD",
            desc: "Rich finishes adding warmth and depth.",
            // image: Material2,
            icon: <FaTree />,
        },

        {
            title: "SUEDE\nTEXTURE PAINT",
            desc: "Velvety walls with premium character.",
            // image: Material3,
            icon: <FaPaintRoller />,
        },

        {
            title: "GOLDEN\nHARDWARE",
            desc: "Luxury detailing with refined finishes.",
            // image: Material4,
            icon: <FaBath />,
        },

        {
            title: "CLAY\nROOF TILES",
            desc: "Classic roofing with natural aesthetics.",
            // image: Material5,
            icon: <FaWarehouse />,
        },

        {
            title: "CONCRETE\nCLADDING",
            desc: "Modern textures with bold architectural appeal.",
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
                        src={FarmhouseProject31}
                        alt="Farmhouse"
                        className="fp1-hero-image"
                    />
                </section>

                <section className="p1-wrapper">

                    <div className="p1-container">

                        <p className="p1-top-text">PROJECT OVERVIEW</p>

                        <h1 className="p1-heading">
                            Lakeview Estate
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
                            src={FarmhouseProject32}
                            alt="Before"
                            className="fp1-before-after-image"
                        />

                        <img
                            src={FarmhouseProject33}
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
                        backgroundImage: `url(${FarmhouseProject31})`
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

                                <h3>Mr. & Mrs. Kapoor</h3>

                                <p>Lakefront Estate Owners</p>

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
                                    The team created a breathtaking lakeside retreat that perfectly balances modern luxury, warmth, and peaceful living.
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
                        onClick={() => navigate("/project2")}
                    >
                        ← Previous Project
                    </button>

                    <button
                        className="fp1-next-btn2"
                        onClick={() => navigate("/project4")}
                    >
                        Next Project →
                    </button>

                </div>

            </main>

        </div>
    );
}

export default Project3;