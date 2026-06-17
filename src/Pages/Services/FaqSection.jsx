import React, { useState } from "react";

import FaqImg from "../../Assets/faq.jpg";

import {
    FaLock,
    FaClock,
    FaCube,
    FaMapMarkerAlt,
    FaPencilRuler,
    FaClipboardList,
    FaHome,
    FaCouch,
    FaComments,
    FaMinus,
    FaPlus,
    FaUserTie,
    FaAward,
    FaCalendarCheck,
    FaHeadset,
} from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FaqSection() {

    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            icon: FaLock,
            question: "How much does interior design cost?",
            answer:
                "The cost depends on the size of the space, design complexity, materials selected, and customization.",
        },

        {
            icon: FaClock,
            question: "How long does a project take?",
            answer:
                "Most projects take between 4-12 weeks depending on scope.",
        },

        {
            icon: FaCube,
            question: "Do you provide 3D designs?",
            answer:
                "Yes, realistic 3D renders are included before execution.",
        },

        {
            icon: FaMapMarkerAlt,
            question: "Do you work outside Jaipur?",
            answer:
                "Yes, we work across selected pan-India locations.",
        },

        {
            icon: FaPencilRuler,
            question: "Can I customize the design?",
            answer:
                "Absolutely, every project is personalized.",
        },

        {
            icon: FaClipboardList,
            question: "Do you handle complete project execution?",
            answer:
                "Yes, from planning to execution.",
        },

        {
            icon: FaHome,
            question: "What types of projects do you specialize in?",
            answer:
                "Residential, offices, villas, hospitality and apartments.",
        },

        {
            icon: FaCouch,
            question: "Do you provide furniture suggestions?",
            answer:
                "Yes, complete styling guidance is provided.",
        },

        {
            icon: FaComments,
            question: "How do I get started with my project?",
            answer:
                "Book a consultation with us to get started.",
        },
    ];

    return (
        <section className="faq-main-section">

            <div className="faq-top-heading">

                <h2>
                    Frequently Asked
                    <span className="gold-text">
                        Questions
                    </span>
                </h2>

                <p>
                    Find answers to common questions about our services.
                </p>

            </div>

            <div className="faq-layout">

                <div className="faq-left-box">

                    {faqData.map((item, index) => (

                        <div
                            className={`faq-card ${openIndex === index ? "active" : ""
                                }`}
                            key={index}
                        >

                            <div
                                className="faq-question-row"
                                onClick={() =>
                                    setOpenIndex(
                                        openIndex === index
                                            ? null
                                            : index
                                    )
                                }
                            >

                                <div className="faq-icon-left">

                                    <item.icon />

                                </div>

                                <div className="faq-number-box">

                                    {String(index + 1).padStart(2, "0")}

                                </div>

                                <h4>{item.question}</h4>

                                <button
                                    type="button"
                                    className="faq-toggle-btn"
                                >
                                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                                </button>

                            </div>

                            {openIndex === index && (

                                <div className="faq-answer-box">

                                    <p>{item.answer}</p>

                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="faq-right-box">

                    <img src={FaqImg} alt="faq" />

                    <div className="service-features-box">

                        <div className="feature-card">

                            <FaUserTie />

                            <h4>Personalized Approach</h4>

                            <p>
                                Every space is unique.
                            </p>

                        </div>

                        <div className="feature-card">

                            <FaAward />

                            <h4>Quality & Transparency</h4>

                            <p>
                                Premium materials and clear pricing.
                            </p>

                        </div>

                        <div className="feature-card">

                            <FaCalendarCheck />

                            <h4>On-Time Delivery</h4>

                            <p>
                                Timely project completion.
                            </p>

                        </div>

                        <div className="feature-card">

                            <FaHeadset />

                            <h4>End-to-End Support</h4>

                            <p>
                                From concept to completion.
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default FaqSection;