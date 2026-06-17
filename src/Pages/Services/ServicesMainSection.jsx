import React, { useState } from "react";
import Interior from "../../Assets/services1.jpg";
import Renovation from "../../Assets/renovation.jpg";

import {
    FaCouch,
    FaTools,
    FaHandshake,
    FaHome,
    FaChair,
    FaCube,
    FaUsers,
    FaRulerCombined,
    FaClipboardList,
    FaCheckCircle,
} from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServicesMainSection() {

    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            icon: FaCouch,
            title: "Interior Design",
            text: "Beautiful, functional designs that reflect your style and personality.",
            details:
                "Transform your home or commercial space with our complete interior design solutions tailored to your lifestyle, goals, and aesthetic preferences. Our team carefully plans every aspect including space layouts, lighting design, wall finishes, furniture selection, décor styling, color combinations, and storage solutions to create spaces that are both visually stunning and highly functional. We focus on balancing comfort, elegance, and practicality while ensuring every corner reflects your personality and enhances the overall atmosphere of your environment.",
        },

        {
            icon: FaTools,
            title: "Construction",
            text: "High-quality construction with attention to detail and durability.",
            details:
                "We provide end-to-end construction services with a strong commitment to quality craftsmanship, structural strength, safety standards, and timely project completion. From planning and site preparation to foundation work, civil construction, electrical systems, plumbing, finishing, and final handover, our experienced professionals manage every stage with precision and professionalism. We use durable materials, advanced construction techniques, and strict quality control processes to ensure long-lasting results.",
        },

        {
            icon: FaHandshake,
            title: "Consultation",
            text: "Expert advice to help you make the right design decisions.",
            details:
                "Our professional consultation service helps clients make confident and informed decisions before starting their design or construction project. We guide you through space planning, design concepts, budget allocation, material selection, furniture arrangement, color coordination, lighting ideas, and project execution strategies to ensure a smoother and more organized process. Whether you are building a new property, renovating an existing space, or simply exploring ideas, our expert insights help avoid costly mistakes and improve overall project efficiency.",
        },

        {
            icon: FaHome,
            title: "Renovation",
            text: "Transform your existing space with smart renovation solutions.",
            details:
                "Our renovation services are designed to completely refresh outdated, damaged, or underutilized spaces with modern functionality and stylish aesthetics. We upgrade interiors through improved layouts, better lighting, enhanced storage, premium finishes, and smart design improvements that increase both comfort and visual appeal. From residential homes and apartments to offices, retail stores, and commercial properties, our renovation process focuses on transforming ordinary spaces into efficient and inspiring environments.",
        },

        {
            icon: FaChair,
            title: "Furniture Planning",
            text: "Custom furniture planning for comfort and aesthetics.",
            details:
                "Our furniture planning services are focused on creating balanced, comfortable, and visually appealing interiors that maximize both functionality and style. We carefully analyze your space dimensions, movement flow, storage needs, and design preferences to recommend furniture arrangements that improve usability and enhance the overall look of the environment. From custom-made furniture concepts to optimized placement of sofas, beds, workstations, dining setups, wardrobes, and decorative elements, every decision is made with attention to comfort, proportion, and practicality.",
        },

        {
            icon: FaCube,
            title: "Space Optimization",
            text: "Smart layouts to maximize space and functionality.",
            details:
                "We specialize in intelligent space optimization solutions that help you utilize every square foot efficiently without compromising comfort or aesthetics. Our approach focuses on improving layouts, enhancing storage capacity, increasing movement flow, and creating multifunctional areas that support your daily activities more effectively. Whether you have a compact apartment, a busy office, a retail outlet, or a large commercial property, we design practical arrangements that make spaces feel more open, organized, and productive.",
        },
    ];

    const detailServices = [
        {
            title: "Interior Design",
            desc: "From concept to completion, we create elegant and functional spaces.",
            img: Interior,
            reverse: true,

            points: [
                "Space Planning",
                "3D Visualization",
                "Material Selection",
                "Furniture Styling",
            ],
        },

        {
            title: "Renovation",
            desc: "Breathe new life into your existing space.",
            img: Renovation,
            reverse: false,

            points: [
                "Kitchen Renovation",
                "Bathroom Makeover",
                "Bedroom Revamp",
                "Home Renovation",
            ],
        },
    ];

    return (
        <section className="services-section">

            <h2>Our Services</h2>

            <p className="service-subtitle">
                End-to-end interior solutions tailored to your needs
            </p>

            <div className={`services-layout ${selectedService ? "active" : ""}`}>

                <div className="services-grid">

                    {services.map((service, i) => (

                        <div
                            className={`service-card ${selectedService?.title === service.title
                                ? "selected-card"
                                : ""
                                }`}
                            key={i}
                        >

                            <div className="service-icon">
                                {React.createElement(service.icon)}
                            </div>

                            <h3>{service.title}</h3>

                            <p>{service.text}</p>

                            <button onClick={() => setSelectedService(service)}>
                                Know More ›
                            </button>

                        </div>
                    ))}
                </div>

                {selectedService && (

                    <div className="service-side-panel">

                        <button
                            className="close-service-btn"
                            onClick={() => setSelectedService(null)}
                        >
                            ✕
                        </button>

                        <h3>{selectedService.title}</h3>

                        <p>{selectedService.details}</p>

                    </div>
                )}
            </div>

            {detailServices.map((item, i) => (

                <div
                    key={i}
                    className={`service-detail-box ${item.reverse ? "reverse" : ""
                        }`}
                >

                    <img src={item.img} alt={item.title} />

                    <div className="service-text">

                        <h3>{item.title}</h3>

                        <p>{item.desc}</p>

                        <ul>

                            {item.points.map((point, idx) => (

                                <li key={idx}>

                                    <FaCheckCircle />

                                    {point}

                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default ServicesMainSection;