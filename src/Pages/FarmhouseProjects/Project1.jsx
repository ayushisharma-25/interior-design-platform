import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Project1.css";

import FarmhouseProject11 from "../../Assets/farmhouseproject1.1.jpg";
import FarmhouseProject12 from "../../Assets/farmhouseproject1.8.png";
import FarmhouseProject13 from "../../Assets/farmhouseproject1.2.jpg";
import FarmhouseProject14 from "../../Assets/farmhouseproject1.4.jpg";
import FarmhouseProject15 from "../../Assets/farmhouseproject1.5.jpg";
import FarmhouseProject16 from "../../Assets/farmhouseproject1.6.jpg";
import FarmhouseProject17 from "../../Assets/farmhouseproject1.9.jpg";
import FarmhouseProject18 from "../../Assets/farmhouseproject1.3.jpg";
import FarmhouseProject19 from "../../Assets/farmhouseproject1.7.jpg";

import Material1 from "../../Assets/farmhouseproject2.2.jpg";
import Material2 from "../../Assets/farmhouseproject2.3.jpg";
import Material3 from "../../Assets/farmhouseproject2.4.jpg";
import Material4 from "../../Assets/farmhouseproject2.5.jpg";
import Material5 from "../../Assets/farmhouseproject2.6.jpg";
import Material6 from "../../Assets/farmhouseproject2.7.jpg";

import FarmhouseProject26 from "../../Assets/farmhouseproject2.1.jpeg";

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

function Project1() {
    const [activeProject, setActiveProject] = useState("Twilight Palms");
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
        FarmhouseProject13,
        FarmhouseProject14,
        FarmhouseProject15,
        FarmhouseProject16,
        FarmhouseProject17,
        FarmhouseProject18,
    ];

    const details = [
        { icon: <FaCalendarAlt />, title: "DURATION", value: "8 Months" },
        { icon: <FaCalendarAlt />, title: "YEAR", value: "2025" },
        { icon: <FaExpandArrowsAlt />, title: "AREA", value: "12,500 sq.ft" },
        { icon: <FaMapMarkerAlt />, title: "LOCATION", value: "Jaipur, Rajasthan" },
        { icon: <FaRupeeSign />, title: "BUDGET", value: "₹2.8 Cr" },
    ];

    const timeline = [
        {
            icon: <FaUsers />,
            title: "CLIENT REQUEST",
            intro:
                "Client wanted a luxurious modern weekend farmhouse surrounded by greenery with open indoor-outdoor spaces and a peaceful natural atmosphere.",
            points: [
                "Infinity swimming pool with garden views",
                "Landscaped lawn and tropical plantation",
                "Large glass windows for natural light",
                "Modern architecture with natural stone and wood finishes",
                "Spacious sit-out and relaxation areas",
                "Warm, elegant, and resort-style ambience",
                "Strong connection between built spaces and nature",
            ],
            outro:
                "The overall vision was to create a calm, premium farmhouse retreat for weekend living and family gatherings.",
        },

        {
            icon: <FaMountain />,
            title: "CHALLENGES",
            intro:
                "The project faced several design and site-related challenges while achieving the desired luxury farmhouse experience.",
            points: [
                "Managing sloped site levels and maintaining structural balance",
                "Proper drainage planning during heavy monsoon seasons",
                "Maintaining privacy without blocking scenic landscape views",
                "Blending modern architecture with tropical surroundings",
                "Controlling excessive heat through large glass openings",
                "Ensuring smooth indoor-outdoor connectivity in all weather",
                "Preserving existing greenery during development",
                "Creating resort-like ambience within practical limits",
            ],
            outro:
                "The overall challenge was to balance luxury, functionality, and nature while responding effectively to the site conditions.",
        },

        {
            icon: <FaDraftingCompass />,
            title: "WHAT WE PROVIDED",
            intro:
                "We delivered a complete luxury farmhouse solution tailored to the client’s vision and site conditions.",
            points: [
                "Architectural design and space planning",
                "Modern interior design concepts",
                "Landscape and garden planning",
                "Infinity pool and deck design",
                "Exterior and ambient lighting concepts",
                "Indoor-outdoor living integration",
                "Material selection and facade detailing",
                "Complete turnkey execution and site coordination",
            ],
            outro:
                "The final outcome was a premium tropical farmhouse retreat blending luxury, comfort, and nature seamlessly.",
        },

        {
            icon: <FaLightbulb />,
            title: "OUR EXPERIENCE",
            intro:
                "This project gave us the opportunity to explore hospitality-inspired luxury living through modern tropical design principles.",
            points: [
                "Working with natural textures and earthy materials",
                "Creating seamless indoor-outdoor transitions",
                "Designing relaxing resort-style living spaces",
                "Balancing luxury aesthetics with functional planning",
                "Enhancing architecture-landscape connection",
                "Developing a calm and nature-focused atmosphere",
            ],
            outro:
                "The project helped us craft a refined farmhouse experience that feels both luxurious and deeply connected to nature.",
        },
    ];

    const materials = [
        {
            title: "ITALIAN\nMARBLE",
            desc: "Premium elegance and timeless luxury.",
            image: Material1,
            icon: <FaGem />,
        },

        {
            title: "TEAK\nWOOD",
            desc: "Natural warmth and durability that ages beautifully.",
            image: Material2,
            icon: <FaTree />,
        },

        {
            title: "TEXTURE\nPAINT",
            desc: "Rich finishes for depth, character and sophistication.",
            image: Material3,
            icon: <FaPaintRoller />,
        },

        {
            title: "BRASS\nFIXTURES",
            desc: "Subtle luxury in every detail and finishing.",
            image: Material4,
            icon: <FaBath />,
        },

        {
            title: "CERAMIC\nROOF TILES",
            desc: "Classic appeal with long-lasting performance.",
            image: Material5,
            icon: <FaWarehouse />,
        },

        {
            title: "ARTIFICIAL\nSTONE CLADDING",
            desc: "Textured beauty that enhances the architecture.",
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
                            className={`fp1-project-item ${activeProject === project ? "fp1-project-active" : ""
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
                        src={FarmhouseProject11}
                        alt="Farmhouse"
                        className="fp1-hero-image"
                    />
                </section>

                <section className="p1-wrapper">
                    <div className="p1-container">
                        <p className="p1-top-text">PROJECT OVERVIEW</p>
                        <h1 className="p1-heading">Twilight Palms</h1>

                        <div className="p1-details-grid">
                            {details.map((item, index) => (
                                <div className="p1-detail-card" key={index}>
                                    <div className="p1-card-icon">{item.icon}</div>
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
                                        <div className="p1-circle">{item.icon}</div>
                                    </div>

                                    <div className="p1-right">
                                        <h2>{item.title}</h2>

                                        <p className="p1-intro">{item.intro}</p>

                                        <ul className="p1-list">
                                            {item.points.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>

                                        <p className="p1-outro">{item.outro}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="fp1-content-section">
                    <h2 className="fp1-section-title">Before / After</h2>

                    <div className="fp1-before-after-grid">
                        <img
                            src={FarmhouseProject12}
                            alt="Before"
                            className="fp1-before-after-image"
                        />
                        <img
                            src={FarmhouseProject19}
                            alt="After"
                            className="fp1-before-after-image"
                        />
                    </div>
                </section>

                <section className="fp1-content-section">
                    <h2 className="fp1-section-title">Gallery</h2>

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
                    style={{ backgroundImage: `url(${FarmhouseProject11})` }}
                >
                    <div className="fp1-testimonial-overlay"></div>

                    <div className="fp1-testimonial-content">
                        <h2 className="fp1-testimonial-title">Client Testimonial</h2>

                        <div className="fp1-testimonial-divider">
                            <span></span>
                            ✦
                            <span></span>
                        </div>

                        <div className="fp1-testimonial-card">
                            <div className="fp1-client-info">
                                <img
                                    src={FarmhouseProject26}
                                    alt="client"
                                    className="fp1-client-image"
                                />

                                <h3>Mr. & Mrs. Sharma</h3>
                                <p>Weekend Farmhouse Owners</p>

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
                                    The team transformed our vision into a serene luxury retreat. The
                                    attention to detail and design sensibility exceeded expectations.
                                </p>

                                <div className="fp1-testimonial-divider small">
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

                <div className="fp1-btn-wrap">
                    <button
                        className="fp1-next-btn"
                        onClick={() => navigate("/project2")}
                    >
                        Next Project →
                    </button>
                </div>
            </main>
        </div>
    );
}

export default Project1;