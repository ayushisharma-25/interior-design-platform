import React from "react";

import {
    FaUsers,
    FaRulerCombined,
    FaClipboardList,
    FaTools,
    FaCheckCircle,
} from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DesignProcessSection() {

    const process = [
        {
            icon: FaUsers,
            title: "1. Consultation",
            desc: "Understanding your needs and vision.",
        },

        {
            icon: FaRulerCombined,
            title: "2. Site Visit",
            desc: "Analyzing the space and requirements.",
        },

        {
            icon: FaClipboardList,
            title: "3. Design Planning",
            desc: "Creating concepts and 3D designs.",
        },

        {
            icon: FaTools,
            title: "4. Execution",
            desc: "Bringing the design to life with precision.",
        },

        {
            icon: FaCheckCircle,
            title: "5. Delivery",
            desc: "Final handover and client satisfaction.",
        },
    ];

    return (
        <section className="design-process">

            <h2>Our Design Process</h2>

            <div className="process-line">

                {process.map((step, i) => (

                    <div className="process-card" key={i}>

                        <div className="process-icon">

                            <step.icon />

                        </div>

                        <h3>{step.title}</h3>

                        <p>{step.desc}</p>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default DesignProcessSection;