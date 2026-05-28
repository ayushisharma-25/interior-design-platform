import React from "react";

import {
    FaStar,
} from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TestimonialSection() {

    const testimonials = [
        {
            text: "Indrem Designs exceeded our expectations! They turned our dream home into reality.",
            name: "Riya Sharma",
        },

        {
            text: "Professional team, creative ideas and on-time delivery. Highly recommended!",
            name: "Amit Mehta",
        },

        {
            text: "Our office space looks amazing. Great work and attention to detail!",
            name: "Neha Jain",
        },
    ];

    return (
        <section className="testimonial-section1">

            <h2>What Our Clients Say</h2>

            <div className="testimonial-grid">

                {testimonials.map((item, i) => (

                    <div className="testimonial-card" key={i}>

                        <div className="stars">

                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} />
                            ))}

                        </div>

                        <p>{item.text}</p>

                        <h4>{item.name}</h4>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default TestimonialSection;