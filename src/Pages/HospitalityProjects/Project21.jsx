import React, { useState } from "react";
import "./Project21.css";
import { useNavigate } from "react-router-dom";
import {
    FaMapMarkerAlt,
    FaBuilding,
    FaRupeeSign,
    FaRegCalendarAlt,
    FaRegLightbulb,
    FaHandshake,
    FaCouch,
    FaArrowRight,
    FaStar,
} from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GiSofa, GiFloorHatch, GiModernCity } from "react-icons/gi";
import { HiOutlineUser } from "react-icons/hi";
import { IoBedOutline } from "react-icons/io5";
import { BsArrowLeftRight } from "react-icons/bs";
// import HotelProject1 from "../../Assets/hotelproject1.jpg";
// import HotelProject2 from "../../Assets/hotelproject2.jpg";
// import HotelProject3 from "../../Assets/hotelproject3.jpg";
// import HotelProject4 from "../../Assets/hotelproject4.jpg";
// import HotelProject5 from "../../Assets/hotelproject5.jpg";
// import HotelProject6 from "../../Assets/hotelproject6.jpg";
// import HotelProject7 from "../../Assets/hotelproject7.jpg";
// import HotelProject8 from "../../Assets/hotelproject8.jpg";
// import HotelProject9 from "../../Assets/hotelproject9.jpg";
// import HotelProject10 from "../../Assets/hotelproject10.jpg";
// import HotelProject11 from "../../Assets/hotelproject11.jpg";
// import HotelProject12 from "../../Assets/hotelproject12.jpg";
// import HotelProject13 from "../../Assets/hotelproject13.jpg";
// import HotelProject14 from "../../Assets/hotelproject14.jpg";
// import HotelProject15 from "../../Assets/hotelproject15.jpg";
// import HotelProject16 from "../../Assets/hotelproject16.jpg";
// import HotelProject17 from "../../Assets/hotelproject17.jpg";

const Project21 = () => {
    const navigate = useNavigate();
    const [activeProject, setActiveProject] = useState("Azure Coast Resort");
    const projects = [
        "Azure Coast Resort",
        "Palm Haven Suites",
    ];

    return (
        <div className="apartment-project-container">

            <aside className="project-sidebar">
                <div>
                    <h2 className="sidebar-title">PROJECTS</h2>

                    <ul className="sidebar-projects">
                        {projects.map((project, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    setActiveProject(project);

                                    if (project === "Azure Coast Resort") {
                                        navigate("/project21");
                                    }

                                    if (project === "Palm Haven Suites") {
                                        navigate("/project22");
                                    }
                                }}
                                className={`sidebar-project ${activeProject === project ? "active-project" : ""
                                    }`}
                            >
                                {project}
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

            <main className="project-main-content">

                <section className="first-section">
                    {/* <img src={HotelProject1} alt="" className="hero-image" /> */}

                    <div className="first-content">
                        <h1>Azure Coast Resort</h1>

                        <h3>LUXURY BEACH~ RESORT • GOA</h3>

                        <div className="first-divider"></div>

                        <p>Crafted for Elevated Guest Experiences.</p>
                    </div>
                </section>

                <section className="project-snapshot-section">
                    <h2>PROJECT SNAPSHOT</h2>

                    <div className="snapshot-grid">

                        <div className="snapshot-card">
                            <FaMapMarkerAlt />
                            <h4>LOCATION</h4>
                            <p>North Goa</p>
                        </div>

                        <div className="snapshot-card">
                            <MdOutlineSpaceDashboard />
                            <h4>PROPERTY SIZE</h4>
                            <p>5.8 Acres</p>
                        </div>

                        <div className="snapshot-card">
                            <FaBuilding />
                            <h4>CATEGORY</h4>
                            <p>Luxury Resort</p>
                        </div>

                        <div className="snapshot-card">
                            <FaRegCalendarAlt />
                            <h4>YEAR</h4>
                            <p>2024</p>
                        </div>

                        <div className="snapshot-card">
                            <FaRupeeSign />
                            <h4>BUDGET</h4>
                            <p>₹18 Crore</p>
                        </div>

                    </div>
                </section>

                <section className="business-goals-section">
                    <h2>BUSINESS GOALS</h2>

                    <div className="business-grid">

                        <div className="business-card">
                            <GiSofa />

                            <h3>Luxury Guest Experience</h3>

                            <p>
                                Create a premium hospitality atmosphere with comfort,
                                elegance and seamless guest experiences.
                            </p>
                        </div>

                        <div className="business-card">
                            <FaCouch />

                            <h3>Modern Tropical Aesthetic</h3>

                            <p>
                                Blend warm tropical materials with modern luxury interiors
                                inspired by Goa’s coastal lifestyle.
                            </p>
                        </div>

                        <div className="business-card">
                            <MdOutlineSpaceDashboard />

                            <h3>Operational Efficiency</h3>

                            <p>
                                Plan smooth guest circulation, smart zoning and
                                maintenance-friendly luxury spaces.
                            </p>
                        </div>

                        <div className="business-card">
                            <HiOutlineUser />

                            <h3>Destination Experience</h3>

                            <p>
                                Design memorable spaces for leisure, relaxation,
                                dining and premium vacation stays.
                            </p>
                        </div>

                    </div>
                </section>

                <section className="journey-section">
                    <h2>GUEST EXPERIENCE JOURNEY</h2>

                    <div className="journey-grid">

                        <div className="journey-step">
                            <FaHandshake />
                            <p>Arrival Experience</p>
                        </div>

                        <span className="journey-arrow">
                            <FaArrowRight />
                        </span>

                        <div className="journey-step">
                            <FaRegLightbulb />
                            <p>Reception Ambience</p>
                        </div>

                        <span className="journey-arrow">
                            <FaArrowRight />
                        </span>

                        <div className="journey-step">
                            <GiFloorHatch />
                            <p>Luxury Suites</p>
                        </div>

                        <span className="journey-arrow">
                            <FaArrowRight />
                        </span>

                        <div className="journey-step">
                            <IoBedOutline />
                            <p>Dining Experience</p>
                        </div>

                        <span className="journey-arrow">
                            <FaArrowRight />
                        </span>

                        <div className="journey-step">
                            <FaBuilding />
                            <p>Leisure & Wellness</p>
                        </div>

                        <span className="journey-arrow">
                            <FaArrowRight />
                        </span>

                        <div className="journey-step">
                            <FaHandshake />
                            <p>Memorable Checkout</p>
                        </div>

                    </div>
                </section>


                <section className="experience-section">
                    <h2>SIGNATURE EXPERIENCE SPACES</h2>

                    <div className="experience-grid">

                        <div className="experience-card">
                            {/* <img src={HotelProject2} alt="" /> */}
                            <p>Grand Lobby</p>
                        </div>

                        <div className="experience-card">
                            {/* <img src={HotelProject3} alt="" /> */}
                            <p>Infinity Pool Deck</p>
                        </div>

                        <div className="experience-card">
                            {/* <img src={HotelProject4} alt="" /> */}
                            <p>Luxury Suites</p>
                        </div>

                        <div className="experience-card">
                            {/* <img src={HotelProject5} alt="" /> */}
                            <p>Sunset Lounge</p>
                        </div>

                        <div className="experience-card">
                            {/* <img src={HotelProject6} alt="" /> */}
                            <p>Wellness Spa</p>
                        </div>

                    </div>
                </section>

                <section className="ambience-section">
                    <h2>AMBIENCE TRANSFORMATION</h2>

                    <div className="ambience-grid">

                        <div className="ambience-card">
                            {/* <img src={HotelProject7} alt="" /> */}
                            <p>MORNING COASTAL CALM</p>
                        </div>

                        <div className="ambience-card">
                            {/* <img src={HotelProject8} alt="" /> */}
                            <p>SUNSET LUXURY VIBES</p>
                        </div>

                        <div className="ambience-card">
                            {/* <img src={HotelProject9} alt="" /> */}
                            <p>NIGHT AMBIENCE EXPERIENCE</p>
                        </div>

                    </div>
                </section>

                <section className="before-after-section">
                    <h2>BEFORE / AFTER</h2>

                    <div className="before-after-grid">
                        <div className="before-box">
                            <span>BEFORE</span>

                            {/* <img src={HotelProject10} alt="" /> */}
                        </div>

                        <div className="before-after-arrow">
                            <BsArrowLeftRight />
                        </div>

                        <div className="after-box">
                            <span>AFTER</span>

                            {/* <img src={HotelProject11} alt="" /> */}
                        </div>
                    </div>
                </section>

                <section className="gallery-section">
                    <h2>GALLERY</h2>

                    <div className="gallery-grid">
                        {/* <img src={HotelProject12} alt="" /> */}
                        {/* <img src={HotelProject13} alt="" /> */}
                        {/* <img src={HotelProject14} alt="" /> */}
                        {/* <img src={HotelProject15} alt="" /> */}
                        {/* <img src={HotelProject16} alt="" /> */}
                    </div>
                </section>

                <section className="testimonial-section">

                    <div className="testimonial-left">
                        <h1>“</h1>

                        <p>
                            The redesign elevated our guest experience and significantly
                            improved the premium identity of the resort. Every space now
                            feels immersive, luxurious and unforgettable.
                        </p>
                    </div>

                    <div className="testimonial-right">
                        {/* <img src={HotelProject17} alt="" /> */}

                        <div>
                            <h3>Resort Director</h3>

                            <p>Azure Coast Resort</p>

                            <div className="testimonial-stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>

                </section>

                <div className="next-project-btn-wrapper">
                    <button className="next-project-btn">
                        NEXT HOTEL PROJECT <FaArrowRight />
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Project21;