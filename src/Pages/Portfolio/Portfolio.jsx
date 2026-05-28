import "./Portfolio.css";
import {
  farmhouse,
  apartment,
  hospitality,
  office,
} from "../../ImageExports/PortfolioImages";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Portfolio() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      img: farmhouse,
      title: "Farmhouse",
      subtitle: "Luxury Villas & Outdoor Living",
      count: "6+ Projects",
      icon: "fas fa-house",
      route: "/Farmhouse",
    },
    {
      img: apartment,
      title: "Apartment",
      subtitle: "Modern Homes & Urban Living",
      count: "18+ Projects",
      icon: "fas fa-building",
      route: "/Apartment",
    },
    {
      img: hospitality,
      title: "Hospitality",
      subtitle: "Resorts, Hotels & Restaurants",
      count: "25+ Projects",
      icon: "fas fa-hotel",
      route: "/Hospitality",
    },
    {
      img: office,
      title: "Office",
      subtitle: "Commercial Interiors",
      count: "15+ Projects",
      icon: "fas fa-briefcase",
      route: "/Office",
    },
  ];

  return (
    <section className="portfolio-section">
      <div className="container">

        <div className="portfolio-top">
          <p className="portfolio-small">OUR WORK</p>

          <div className="portfolio-line-wrapper">
            <span className="line1"></span>
            <i className="fas fa-gem"></i>
            <span className="line1"></span>
          </div>
        </div>

        <h2 className="portfolio-title">PORTFOLIO</h2>

        <p className="portfolio-desc">
          Spaces crafted with vision, designed for living.
        </p>

        <div className="desc-line"></div>

        <div className="portfolio-grid">
          {projects.map((item, index) => (
            <div
              key={index}
              className="portfolio-card"
              onClick={() => navigate(item.route)}
            >
              <img src={item.img} alt={item.title} />

              <div className="portfolio-overlay">
                <span className="project-count">{item.count}</span>

                <div className="portfolio-content">
                  <div className="pf-icons">
                    <i className={item.icon}></i>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>

                  <button>
                    View Projects <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-stats">
          <div className="portfolio-stats1">
            <i className="fas fa-building"></i>
            <div>
              <h3>70+</h3>
              <p>Projects Completed</p>
            </div>
          </div>

          <div className="portfolio-stats1">
            <i className="fas fa-users"></i>
            <div>
              <h3>45+</h3>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="portfolio-stats1">
            <i className="fas fa-award"></i>
            <div>
              <h3>8+</h3>
              <p>Years Experience</p>
            </div>
          </div>

          <div className="portfolio-stats2">
            <i className="fas fa-location-dot"></i>
            <div>
              <h3>6+</h3>
              <p>Cities Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;