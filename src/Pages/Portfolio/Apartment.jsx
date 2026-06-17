import { PiTreeEvergreenFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import "./Farmhouse.css";

import ApartmentImg from "../../Assets/apartment1.png";
import apartmentImg2 from "../../Assets/apartment2.png";
import mainInterior from "../../Assets/apartment3.png";
import living1 from "../../Assets/apartment4.png";
import kitchenImg from "../../Assets/apartment5.png";
import kitchen2 from "../../Assets/apartment6.png";
import bedroomImg from "../../Assets/apartment7.png";
import stoneImg from "../../Assets/apartment8.png";
import woodImg from "../../Assets/apartment9.png";
import openingImg from "../../Assets/apartment10.png";
import finishImg from "../../Assets/apartment11.png";
import outdoor1 from "../../Assets/apartment12.png";
import outdoor2 from "../../Assets/apartment13.png";

function Apartment() {
  const navigate = useNavigate();
  const details = [
    {
      image: stoneImg,
      title: "PREMIUM FINISHES",
      text: "High quality materials selected for durability and timeless appeal.",
    },
    {
      image: woodImg,
      title: "OPEN & AIRY",
      text: "Large openings and layouts that create a bright spacious feel.",
    },
    {
      image: openingImg,
      title: "MINIMAL AESTHETIC",
      text: "Clean lines and neutral palettes for elegant modern living.",
    },
    {
      image: finishImg,
      title: "SMART STORAGE",
      text: "Thoughtful built-in storage solutions for clutter-free spaces.",
    },
  ];

  return (
    <>
      <section className="farmhouse-hero">
        <div className="farmhouse-overlay1"></div>

        <div className="farmhouse-content">
          <span className="project-tag">
            <PiTreeEvergreenFill className="project-icon" />
            PROJECTS
          </span>

          <div className="title-line"></div>
          <h1>APARTMENT</h1>
          <div className="title-line bottom-line"></div>

          <p>
            A truly exceptional apartment is a sanctuary that harmonizes sophisticated design with urban convenience. It features sleek, contemporary finishes, maximizes vertical space through thoughtful layouts, and utilizes expansive windows to invite breathtaking cityscapes inside.
          </p>

          <p>
            Above all, it fosters a refined atmosphere, offering a private retreat high above the city pulse.
          </p>

          <button onClick={() => navigate("/project11")}>
            MORE PROJECT GALLERY</button>
        </div>

        <div className="farmhouse-image-box">
          <img src={ApartmentImg} alt="Apartment" />
        </div>
      </section>

      <section className="about-project">
        <div className="about-left">
          <span className="about-tag">ABOUT THE PROJECT</span>

          <h2>
            Modern Living, <br /> Elevated Every Day.
          </h2>

          <div className="about-line"></div>

          <p>
            This apartment is crafted for contemporary lifestyles with smart
            layouts, elegant interiors, and abundant natural light. Every
            element is designed to balance style, comfort, and functionality.
          </p>
        </div>

        <div className="about-features">
          <div className="feature-box">
            <i className="fa-regular fa-sun"></i>
            <h4>NATURAL LIGHT</h4>
            <p>Large windows bring brightness and refreshing openness.</p>
          </div>

          <div className="feature-box">
            <i className="fa-solid fa-table-cells-large"></i>
            <h4>SMART LAYOUT</h4>
            <p>Efficient use of space for seamless movement and comfort.</p>
          </div>

          <div className="feature-box">
            <i className="fa-brands fa-pagelines"></i>
            <h4>QUALITY MATERIALS</h4>
            <p>Premium finishes selected for elegance and durability.</p>
          </div>

          <div className="feature-box">
            <i className="fa-solid fa-house-laptop"></i>
            <h4>MODERN COMFORT</h4>
            <p>Integrated technology and refined amenities for easy living.</p>
          </div>
        </div>

        <div className="about-image">
          <img src={apartmentImg2} alt="Apartment" />
        </div>
      </section>

      <section className="living-section">
        <div className="living-top container">
          <div className="living-content">
            <span className="living-tag">SPACES THAT INSPIRE COMFORT</span>

            <h2>
              Thoughtful Spaces <br /> for Every Moment.
            </h2>

            <div className="living-line"></div>

            <p>
              From relaxing evenings to productive mornings, every corner is
              designed to support the rhythm of modern living.It is a space where effortless functionality meets quiet elegance.
            </p>

            <ul>
              <li>Spacious living & dining area</li>
              <li>Modern modular kitchen</li>
              <li>Comfortable serene bedrooms</li>
              <li>Private balcony with skyline views</li>
            </ul>
          </div>

          <div className="main-image-box">
            <img src={mainInterior} alt="Apartment Interior" />
          </div>
        </div>

        <div className="gallery-grid container">
          <img src={living1} alt="Living" />
          <img src={kitchenImg} alt="Kitchen" />
          <img src={kitchen2} alt="Bedroom" />
          <img src={bedroomImg} alt="Bathroom" />
        </div>
      </section>

      <section className="details-section">
        <div className="container">
          <div className="details-container">
            <div className="details-left">
              <span className="details-tag">DESIGN HIGHLIGHTS</span>

              <h2>
                Details That <br /> Define the Experience.
              </h2>

              <div className="details-line"></div>

              <p>
                Carefully selected finishes, textures, and materials combine to
                create a sophisticated and calming apartment environment.
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
            <span>BALCONY LIVING</span>

            <h2>
              A Private Escape <br /> Above the City.
            </h2>

            <div className="line-outside"></div>

            <p>
              The balcony extends your living space outdoors, offering the perfect setting to unwind or entertain. Step inside to discover a thoughtfully designed interior where modern elegance meets everyday functionality. Open-concept rooms are bathed in natural light, highlighting sleek finishes and warm textures.
            </p>
          </div>

          <div className="outdoor-images">
            <img src={outdoor1} alt="Balcony 1" />
            <img src={outdoor2} alt="Balcony 2" />
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
                <p>Urban City Center</p>
              </div>
            </div>

            <div className="info-box">
              <i className="fa-regular fa-building"></i>
              <div>
                <h4>BUILT-UP AREA</h4>
                <p>1,750 Sq. Ft.</p>
              </div>
            </div>

            <div className="info-box">
              <i className="fa-solid fa-house"></i>
              <div>
                <h4>TYPE</h4>
                <p>3 BHK Apartment</p>
              </div>
            </div>

            <div className="info-box">
              <i className="fa-regular fa-calendar"></i>
              <div>
                <h4>YEAR</h4>
                <p>2023</p>
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
            <p>“Good design is not just about how a space looks.”</p>
            <span>but how it makes you feel every day.</span>
          </div>

          <button onClick={() => navigate("/project11")}>
            VIEW ALL PROJECTS</button>
        </div>
      </section>
    </>
  );
}

export default Apartment;