import { FaHotel } from "react-icons/fa";
import "./farmhouse.css";
import { useNavigate } from "react-router-dom";

import HospitalityImg from "../../Assets/hospitality1.png";
import hospitalityImg2 from "../../Assets/hospitality13.png";
import mainInterior from "../../Assets/hospitality3.png";
import living1 from "../../Assets/hospitality4.png";
import kitchenImg from "../../Assets/hospitality5.png";
import kitchen2 from "../../Assets/hospitality6.png";
import bedroomImg from "../../Assets/hospitality7.png";
import stoneImg from "../../Assets/hospitality2.png";
import woodImg from "../../Assets/hospitality9.png";
import openingImg from "../../Assets/hospitality10.png";
import finishImg from "../../Assets/hospitality8.png";
import outdoor1 from "../../Assets/hospitality12.png";
import outdoor2 from "../../Assets/hospitality11.png";

function Hospitality() {
  const navigate = useNavigate();
  const details = [
    {
      image: stoneImg,
      title: "LUXURY INTERIORS",
      text: "Elegant finishes and refined materials for elevated guest comfort.",
    },
    {
      image: woodImg,
      title: "WELCOMING SPACES",
      text: "Designed to create a warm and memorable hospitality experience.",
    },
    {
      image: openingImg,
      title: "PREMIUM AMENITIES",
      text: "Modern facilities thoughtfully integrated for convenience.",
    },
    {
      image: finishImg,
      title: "TIMELESS DESIGN",
      text: "Balanced aesthetics that feel sophisticated and enduring.",
    },
  ];

  return (
    <>
      <section className="farmhouse-hero">
        <div className="farmhouse-overlay1"></div>

        <div className="farmhouse-content">
          <span className="project-tag">
            <FaHotel className="project-icon" />
            PROJECTS
          </span>

          <div className="title-line"></div>
          <h1>HOSPITALITY</h1>
          <div className="title-line bottom-line"></div>

          <p>
            A truly world-class hospitality space is a sanctuary that blends immersive luxury with heartfelt warmth. It features rich, sensory textures, offers expansive communal areas for connection, and creates seamless transitions that invite the beauty of the destination in.
          </p>

          <p>
            Above all, it cultivates an enchanting atmosphere, offering an elevated escape for a serene and memorable stay.
          </p>

          <button onClick={() => navigate("/project21")}>
            MORE PROJECT GALLERY</button>
        </div>

        <div className="farmhouse-image-box">
          <img src={HospitalityImg} alt="Hospitality" />
        </div>
      </section>

      <section className="about-project">
        <div className="about-left">
          <span className="about-tag">ABOUT THE PROJECT</span>

          <h2>
            Where Comfort <br /> Meets Elegance.
          </h2>

          <div className="about-line"></div>

          <p>
            This hospitality project is designed to deliver a seamless blend of
            luxury accommodation, refined ambiance, and premium service-focused
            spaces, creating an immersive sanctuary where every guest feels truly distinguished.
          </p>
        </div>

        <div className="about-features">
          <div className="feature-box">
            <i className="fa-solid fa-bed"></i>
            <h4>LUXURY STAYS</h4>
            <p>Comfort-first spaces designed for memorable guest experiences.</p>
          </div>

          <div className="feature-box">
            <i className="fa-solid fa-bell-concierge"></i>
            <h4>PREMIUM SERVICE</h4>
            <p>Spaces planned to support seamless hospitality operations.</p>
          </div>

          <div className="feature-box">
            <i className="fa-solid fa-spa"></i>
            <h4>RELAXING AMBIENCE</h4>
            <p>Calming interiors with elegant materials and warm tones.</p>
          </div>

          <div className="feature-box">
            <i className="fa-solid fa-utensils"></i>
            <h4>DINING EXPERIENCE</h4>
            <p>Curated dining and lounge spaces for social connection.</p>
          </div>
        </div>

        <div className="about-image">
          <img src={hospitalityImg2} alt="Hospitality" />
        </div>
      </section>

      <section className="living-section">
        <div className="living-top container">
          <div className="living-content">
            <span className="living-tag">EXPERIENCE DRIVEN SPACES</span>

            <h2>
              Designed for <br /> Every Guest Journey.
            </h2>

            <div className="living-line"></div>

            <p>
              Every zone is carefully designed to balance functionality,
              elegance, and comfort while enhancing guest satisfaction.. It creates a seamless transition between luxury and utility, ensuring a tailored experience that anticipates every need.
            </p>

            <ul>
              <li>Luxury lobby & lounge areas</li>
              <li>Fine dining and café spaces</li>
              <li>Premium suite accommodations</li>
              <li>Open social and relaxation zones</li>
            </ul>
          </div>

          <div className="main-image-box">
            <img src={mainInterior} alt="Hospitality Interior" />
          </div>
        </div>

        <div className="gallery-grid container">
          <img src={living1} alt="Lobby" />
          <img src={kitchenImg} alt="Restaurant" />
          <img src={kitchen2} alt="Suite" />
          <img src={bedroomImg} alt="Bathroom" />
        </div>
      </section>

      <section className="details-section">
        <div className="container">
          <div className="details-container">
            <div className="details-left">
              <span className="details-tag">DESIGN HIGHLIGHTS</span>

              <h2>
                Details That <br /> Elevate Hospitality.
              </h2>

              <div className="details-line"></div>

              <p>
                Sophisticated materials, ambient lighting, and curated finishes
                create an atmosphere of understated luxury, perfectly blending timeless textures with contemporary details to foster an environment that feels both deeply personal and exceptionally refined.
              </p>
            </div>

            <div className="details-grid">
              {details.map((item, index) => (
                <div className="detail-card" key={index}>
                  <img src={item.image} alt={item.title} />
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="outdoor">
        <div className="container outdoor-grid">
          <div className="outdoor-left">
            <span>OUTDOOR EXPERIENCE</span>

            <h2>
              Spaces to Relax <br /> and Reconnect.
            </h2>

            <div className="line-outside"></div>

            <p>
              Outdoor areas are designed for leisure, dining, and immersive
              guest experiences, blending the beauty of nature with refined comfort to create a serene backdrop for meaningful moments and effortless relaxation.Every detail is thoughtfully curated to foster a deep sense of belonging while celebrating the art of slow, peaceful living.
            </p>
          </div>

          <div className="outdoor-images">
            <img src={outdoor1} alt="Outdoor Hospitality" />
            <img src={outdoor2} alt="Outdoor Lounge" />
          </div>
        </div>
      </section>

      <section>
        <div className="container info-section">
          <div className="info-left">
            <span>PROJECT INFORMATION</span>
            <h2>The Details</h2>
            <div className="line-outside"></div>
          </div>

          <div className="info-grid">
            <div className="info-box">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h4>LOCATION</h4>
                <p>Luxury Destination</p>
              </div>
            </div>

            <div className="info-box">
              <i className="fa-solid fa-hotel"></i>
              <div>
                <h4>PROPERTY TYPE</h4>
                <p>Boutique Hotel</p>
              </div>
            </div>

            <div className="info-box">
              <i className="fa-regular fa-building"></i>
              <div>
                <h4>BUILT-UP AREA</h4>
                <p>8,500 Sq. Ft.</p>
              </div>
            </div>

            <div className="info-box">
              <i className="fa-regular fa-calendar"></i>
              <div>
                <h4>YEAR</h4>
                <p>2024</p>
              </div>
            </div>

            <div className="info-box">
              <i className="fa-regular fa-circle-check"></i>
              <div>
                <h4>STATUS</h4>
                <p>Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="quote-section">
          <div className="quote-text">
            <p>“Hospitality is making your guests feel at home.”</p>
            <span>even when they are away from home.</span>
          </div>

          <button onClick={() => navigate("/project21")}>
            VIEW ALL PROJECTS</button>
        </div>
      </section>
    </>
  );
}

export default Hospitality;