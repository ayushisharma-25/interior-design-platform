import { PiTreeEvergreenFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import './Farmhouse.css'
import FarmhouseImg from '../../assets/farmhouse1.png';
import farmhouseImg2 from "../../assets/farmhouse2.png";
import mainInterior from "../../assets/farmhouse3.png";
import living1 from "../../assets/farmhouse3.png";
import kitchenImg from "../../assets/farmhouse4.png";
import kitchen2 from "../../assets/farmhouse5.png";
import bedroomImg from "../../assets/farmhouse6.png";
import stoneImg from "../../assets/farmhouse7.png";
import woodImg from "../../assets/farmhouse8.png";
import openingImg from "../../assets/farmhouse9.png";
import finishImg from "../../assets/farmhouse10.png";
import outdoor1 from "../../assets/farmhouse11.png";
import outdoor2 from "../../assets/farmhouse12.png";

function Farmhouse() {
  const navigate = useNavigate();
  const details = [
    {
      image: stoneImg,
      title: "NATURAL STONE",
      text: "Adds warmth, texture and a sense of permanence.",
    },
    {
      image: woodImg,
      title: "EXPOSED WOOD",
      text: "Brings character and rustic charm to every space.",
    },
    {
      image: openingImg,
      title: "WIDE OPENINGS",
      text: "Frames the views and invites nature indoors.",
    },
    {
      image: finishImg,
      title: "EARTHY FINISHES",
      text: "Natural materials and muted tones for a calming feel.",
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
          <h1>FARMHOUSE</h1>
          <div className="title-line bottom-line"></div>

          <p>
            A truly good farmhouse is a sanctuary that seamlessly blends rustic
            charm with modern comfort. It incorporates natural, earthy materials,
            boasts expansive open spaces, and fosters strong indoor-outdoor
            connections that beautifully invite nature in.
          </p>

          <p>
            Above all, it cultivates a tranquil, elegant atmosphere, offering an
            elevated lifestyle amidst serene surroundings.
          </p>

          <button onClick={() => navigate("/project1")}>
            MORE PROJECT GALLERY</button>
        </div>

        <div className="farmhouse-image-box">
          <img src={FarmhouseImg} alt="Farmhouse" />
        </div>
      </section >

      <section className="about-project">
        <div className="about-left">
          <span className="about-tag">ABOUT THE PROJECT</span>

          <h2>
            A Retreat Rooted <br /> in Nature.
          </h2>

          <div className="about-line"></div>

          <p>
            This farmhouse is designed as a peaceful retreat from the city's
            chaos. Set amidst lush greenery, it celebrates the beauty of nature
            while offering all the comforts of modern living.
            The architecture takes inspiration from traditional farmhouses with a
            contemporary approach – open spaces, natural materials, earthy tones,
            and large openings that frame the surrounding landscape.
          </p>
        </div>

        <div className="about-features">
          <div className="feature-box">
            <i className="fa-brands fa-pagelines"></i>
            <h4>HARMONY WITH NATURE</h4>
            <p>
              Designed to coexist with nature, the farmhouse opens up to green
              views on every side.
            </p>
          </div>

          <div className="feature-box">
            <i className="fa-solid fa-house"></i>
            <h4>RUSTIC MATERIALS</h4>
            <p>
              Use of wood, stone, and natural finishes that age beautifully with
              time.
            </p>
          </div>

          <div className="feature-box">
            <i className="fa-regular fa-window-maximize"></i>
            <h4>OPEN & AIRY SPACES</h4>
            <p>
              High ceilings, expansive windows, and open layouts create a sense
              of freedom and calm.
            </p>
          </div>

          <div className="feature-box">
            <i className="fa-solid fa-couch"></i>
            <h4>COMFORT & ELEGANCE</h4>
            <p>
              A perfect balance of raw, rustic textures with refined, timeless
              details.
            </p>
          </div>
        </div>

        <div className="about-image">
          <img src={farmhouseImg2} alt="Farmhouse" />
        </div>
      </section>

      <section className="living-section">
        <div className="living-top container">

          <div className="living-content">
            <span className="living-tag">EXPANSIVE LIVING SPACES</span>

            <h2>
              Where Inside <br /> Meets Outside.
            </h2>

            <div className="living-line"></div>

            <p>
              The living spaces are designed to blur the boundaries between
              indoors and outdoors. Floor-to-ceiling glass panels open up to
              wide decks and lawns, allowing natural light and fresh air to fill
              the interiors all day long.
            </p>

            <ul>
              <li>Double height living area with natural light</li>
              <li>Warm wood tones and earthy textures</li>
              <li>Seamless connection to outdoor deck</li>
              <li>Perfect for quiet mornings and gatherings</li>
            </ul>
          </div>

          <div className="main-image-box">
            <img src={mainInterior} alt="Main Interior" />
          </div>
        </div>

        <div className="gallery-grid container">
          <img src={living1} alt="Living Room" />
          <img src={kitchenImg} alt="Dining" />
          <img src={kitchen2} alt="Kitchen" />
          <img src={bedroomImg} alt="Bedroom" />
        </div>
      </section>

      <section className="details-section">
        <div className="container">
          <div className="details-container">

            {/* Left Content */}
            <div className="details-left">
              <span className="details-tag">THOUGHTFUL DETAILS</span>

              <h2>
                Crafted with Care, <br /> Designed to Last.
              </h2>

              <div className="details-line"></div>

              <p>
                Every corner of this farmhouse reflects thoughtful design and
                attention to detail. From handcrafted woodwork to natural stone
                accents, each material is chosen for its beauty, durability, and
                timeless appeal.
              </p>
            </div>

            {/* Right Cards */}
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
            <span>OUTDOOR LIVING</span>

            <h2>
              Live Closer to <br /> What Matters.
            </h2>

            <div className="line-outside"></div>

            <p>
              The outdoor areas are an extension of the home — perfect for
              relaxing, entertaining, or simply enjoying the sounds of nature.
            </p>

            <ul>
              <li>Spacious wooden deck for gatherings</li>
              <li>Landscaped gardens and open lawns</li>
              <li>Fire pit area for cozy evenings</li>
              <li>Surrounded by trees for complete privacy</li>
            </ul>
          </div>

          <div className="outdoor-images">
            <img src={outdoor1} alt="Outdoor 1" />
            <img src={outdoor2} alt="Outdoor 2" />
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
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
                <p>Countryside Retreat</p>
              </div>
            </div>

            <div className="info-box">
              <i className="fa-regular fa-map"></i>
              <div>
                <h4>PLOT AREA</h4>
                <p>2.5 Acres</p>
              </div>
            </div>

            <div className="info-box">
              <i className="fa-regular fa-building"></i>
              <div>
                <h4>BUILT-UP AREA</h4>
                <p>4200 Sq. Ft.</p>
              </div>
            </div>

            <div className="info-box">
              <i className="fa-regular fa-clock"></i>
              <div>
                <h4>YEAR</h4>
                <p>2023</p>
              </div>
            </div>

            <div className="info-box">
              <i className="fa-solid fa-house"></i>
              <div>
                <h4>TYPE</h4>
                <p>Farmhouse</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section>
        <div className="quote-section">
          <div className="quote-text">
            <p>
              “Architecture should speak of its time and place, but yearn for
              timelessness.”
            </p>
            <span>– Frank Gehry</span>
          </div>

          <button onClick={() => navigate("/project1")}>
            View All Projects
          </button>
        </div>
      </section>
    </>
  );
}

export default Farmhouse;