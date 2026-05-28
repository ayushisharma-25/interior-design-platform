import React from "react";

function NumberSection() {

    const statsData = [
        {
            number: "100+",
            text: "Happy Customers",
        },
        {
            number: "300+",
            text: "Global Designs",
        },
        {
            number: "10+",
            text: "Spectacular Interiors",
        },
    ];

    return (
        <section className="number section" data-aos="fade-up">

            {statsData.map((item, index) => (
                <div key={index}>
                    <h2>{item.number}</h2>
                    <p>{item.text}</p>
                </div>
            ))}

        </section>
    );
}

export default NumberSection;