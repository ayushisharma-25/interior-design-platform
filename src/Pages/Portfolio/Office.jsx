import { PiBuildingsFill } from "react-icons/pi";
import './farmhouse.css'
import officeImg from '../../Assets/office1.png';
import officeImg2 from "../../Assets/office2.png";
import mainInterior from "../../Assets/office3.png";
import living1 from "../../Assets/office4.png";
import kitchenImg from "../../Assets/office5.png";
import kitchen2 from "../../Assets/office6.jpg";
import bedroomImg from "../../Assets/office7.png";
import stoneImg from "../../Assets/office8.jpg";
import woodImg from "../../Assets/office9.png";
import openingImg from "../../Assets/office10.jpg";
import finishImg from "../../Assets/office11.png";
import outdoor1 from "../../Assets/office12.png";
import outdoor2 from "../../Assets/office13.png";

function Office() {
  const details = [
    {
      image: stoneImg,
      title: "PREMIUM MATERIALS",
      text: "High-quality finishes and durable materials elevate the workspace.",
    },
    {
      image: woodImg,
      title: "SMART WORKSPACES",
      text: "Designed layouts that improve productivity and team collaboration.",
    },
    {
      image: openingImg,
      title: "OPEN ENVIRONMENT",
      text: "Large glass panels maximize openness, light, and connectivity.",
    },
    {
      image: finishImg,
      title: "MODERN FINISHES",
      text: "Minimal aesthetics with elegant tones for a premium office feel.",
    },
  ];

  return (
    <>
      <section className="farmhouse-hero">
        <div className="farmhouse-overlay1"></div>

        <div className="farmhouse-content">
          <span className="project-tag">
            <PiBuildingsFill className="project-icon" />
            PROJECTS
          </span>

          <div className="title-line"></div>
          <h1>OFFICE</h1>
          <div className="title-line bottom-line"></div>

          <p>
            A truly productive office is a sanctuary that seamlessly integrates professional functionality with inspired aesthetics. It incorporates ergonomic elements, encourages collaboration through flexible open plans.
          </p>

          <p>
            Above all, it cultivates a focused atmosphere, offering a sophisticated environment that elevates the professional experience.
          </p>

          <button>MORE PROJECT GALLERY</button>
        </div>

        <div className="farmhouse-image-box">
          <img src={officeImg} alt="Office" />
        </div>
      </section>

      <section className="about-project">
        <div className="about-left">
          <span className="about-tag">ABOUT THE PROJECT</span>

          <h2>
            Workspaces Built <br /> for Excellence.
          </h2>

          <div className="about-line"></div>

          <p>
            This office project is designed to balance aesthetics with
            functionality. Open layouts, collaborative zones, executive cabins,
            and premium finishes create a productive yet elegant work
            environment.
          </p>
        </div>

        <div className="about-features">
          <div className="feature-box">
            <i className="fa-solid fa-users"></i>
            <h4>TEAM COLLABORATION</h4>
            <p>
              Open spaces and meeting areas designed to encourage communication.
            </p>
          </div>

          <div className="feature-box">
            <i className="fa-solid fa-briefcase"></i>
            <h4>PROFESSIONAL DESIGN</h4>
            <p>
              Elegant interiors that reflect a premium and corporate identity.
            </p>
          </div>

          <div className="feature-box">
            <i className="fa-solid fa-window-maximize"></i>
            <h4>NATURAL LIGHT</h4>
            <p>
              Expansive windows and glass partitions create bright interiors.
            </p>
          </div>

          <div className="feature-box">
            <i className="fa-solid fa-laptop"></i>
            <h4>SMART FUNCTIONALITY</h4>
            <p>
              Efficient planning with flexible workstations and tech integration.
            </p>
          </div>
        </div>

        <div className="about-image">
          <img src={officeImg2} alt="Office" />
        </div>
      </section>

      <section className="living-section">
        <div className="living-top container">

          <div className="living-content">
            <span className="living-tag">MODERN WORKSPACES</span>

            <h2>
              Where Design <br /> Meets Productivity.
            </h2>

            <div className="living-line"></div>

            <p>
              Thoughtfully planned office spaces ensure smooth workflow, better
              collaboration, and a balanced professional atmosphere.By integrating ergonomic design with quiet zones.
            </p>

            <ul>
              <li>Open collaborative workstations</li>
              <li>Executive cabins with privacy</li>
              <li>Conference & meeting rooms</li>
              <li>Breakout and lounge areas</li>
            </ul>
          </div>

          <div className="main-image-box">
            <img src={mainInterior} alt="Office Interior" />
          </div>
        </div>

        <div className="gallery-grid container">
          <img src={living1} alt="Workspace" />
          <img src={kitchenImg} alt="Meeting Room" />
          <img src={kitchen2} alt="Conference Area" />
          <img src={bedroomImg} alt="Cabin" />
        </div>
      </section>

      <section className="details-section">
        <div className="container">
          <div className="details-container">

            <div className="details-left">
              <span className="details-tag">DESIGN DETAILS</span>

              <h2>
                Crafted for Growth, <br /> Designed for Teams.
              </h2>

              <div className="details-line"></div>

              <p>
                Every zone is tailored to improve productivity while maintaining
                a sleek, sophisticated corporate environment.This harmonious layout fosters a culture of innovation, providing the perfect foundation for teams to thrive.
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
            <span>BREAKOUT SPACES</span>

            <h2>
              Spaces Beyond <br /> the Desk.
            </h2>

            <div className="line-outside"></div>

            <p>
              Lounge zones and informal meeting areas provide employees with
              comfort, flexibility, and relaxation.
            </p>

            <ul>
              <li>Employee lounge zones</li>
              <li>Outdoor discussion areas</li>
              <li>Cafeteria & refreshment spaces</li>
              <li>Relaxing breakout corners</li>
            </ul>
          </div>

          <div className="outdoor-images">
            <img src={outdoor1} alt="Breakout 1" />
            <img src={outdoor2} alt="Breakout 2" />
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
                <p>Business District</p>
              </div>
            </div>

            <div className="info-box">
              <i className="fa-regular fa-map"></i>
              <div>
                <h4>FLOOR AREA</h4>
                <p>8,500 Sq. Ft.</p>
              </div>
            </div>

            <div className="info-box">
              <i className="fa-regular fa-building"></i>
              <div>
                <h4>CAPACITY</h4>
                <p>150 Employees</p>
              </div>
            </div>

            <div className="info-box">
              <i className="fa-regular fa-clock"></i>
              <div>
                <h4>YEAR</h4>
                <p>2024</p>
              </div>
            </div>

            <div className="info-box">
              <i className="fa-solid fa-briefcase"></i>
              <div>
                <h4>TYPE</h4>
                <p>Corporate Office</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="quote-section">
          <div className="quote-text">
            <p>
              “Great workplaces are not just functional — they inspire people to perform better.”
            </p>
            <span>– Workplace Design Studio</span>
          </div>

          <button>VIEW ALL PROJECTS</button>
        </div>
      </section>
    </>
  );
}

export default Office;