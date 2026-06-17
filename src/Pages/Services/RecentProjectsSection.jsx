import React from "react";
import { useNavigate } from "react-router-dom";

import Project1 from "../../Assets/project1.jpg";
import Project2 from "../../Assets/project2.jpg";
import Project3 from "../../Assets/project3.png";
import Project4 from "../../Assets/project4.jpeg";

function RecentProjectsSection() {

    const navigate = useNavigate();

    const recentProjects = [
        {
            img: Project1,
            title: "Luxury Villa",
            location: "Vaishali Nagar, Jaipur",
        },

        {
            img: Project2,
            title: "Modern Office",
            location: "C-Scheme, Jaipur",
        },

        {
            img: Project3,
            title: "Contemporary Apartment",
            location: "Mansarovar, Jaipur",
        },

        {
            img: Project4,
            title: "Elegant Farmhouse",
            location: "Ajmer Road, Jaipur",
        },
    ];

    return (
        <section className="recent-projects">

            <h2>Our Recent Projects</h2>

            <div className="projects-grid">

                {recentProjects.map((project, i) => (

                    <div className="project-card" key={i}>

                        <img
                            src={project.img}
                            alt={project.title}
                        />

                        <h3>{project.title}</h3>

                        <p>{project.location}</p>

                    </div>
                ))}
            </div>

            <button
                onClick={() => navigate("/portfolio")}
                className="view-btn1"
            >
                View All Projects
            </button>

        </section>
    );
}

export default RecentProjectsSection;