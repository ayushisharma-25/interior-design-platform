import './More.css'
import forest from '../../assets/forest.jpg';
import company from '../../assets/company.jpg';
import person11 from '../../assets/person11.png';
import person2 from '../../assets/person2.png';
import { useEffect } from "react";

function More() {
    useEffect(() => {
            window.scrollTo(0, 0);            
        }, []
        );
    return (
        <>
            <section>
                <div className="container">
                    <div className="company">
                        <div className="co-img">
                            <img src={company} alt="My Company Photo" />
                        </div>
                        <div className="co-about">
                            <h2>The Company</h2>
                            <p>Indoor is a contemporary interior and furniture brand dedicated to creating stylish and functional living spaces. We combine modern design with quality craftsmanship to deliver interiors that feel elegant and comfortable. For us, every project is more than just work—we treat it as our own, with care, passion, and attention to detail. From personalized interiors to curated furniture, we create spaces that truly reflect your lifestyle.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about-hero">
                <div className="more container">
                    <div className="ghar">
                        <img src={forest} alt="Farmhouse In Forest" className="forest" />
                        <div className="forest1">
                            <h2>Designing Spaces That<span> <br />Inspire Living</span></h2>
                        </div>
                    </div>
                    <div className="forest2">
                        <p>Designing spaces that <span>inspire living</span> is not just what we do—it's what we truly care about. We believe your space should reflect <span>who you are</span> and support the way you live every day. That's why we take the time to understand your<span>needs, your style, and your vision </span>. With thoughtful design, balanced elements, and<span>attention to detail</span>, we create spaces that feel <span>comfortable, functional, and uniquely yours</span>. For us, it's never just a project—we design every space with the same <span>care and dedication</span> as if it were our own</p>
                    </div>
                </div>
            </section>

            <section class="experience">
                <div className="container">
                    <h2>Our Experience</h2>
                    <div className="sharing">
                        <card className="year">
                            <h3>5+ Years Experience</h3>
                            <p>With 5+ years of experience, we have learned that every space holds a story. We approach each project with patience, understanding, and a genuine commitment to creating something meaningful and lasting.</p>
                        </card>
                        <card className="project">
                            <h3>150+ Projects</h3>
                            <p>Having completed 150+ projects, we treat every design as our own responsibility. We focus on getting every detail right, ensuring the final space truly reflects what our clients had imagined.</p>
                        </card>
                        <card className="client">
                            <h3>100+ Clients</h3>
                            <p>With 100+ clients, our biggest achievement is the trust they place in us. We believe in honest work, clear communication, and delivering spaces that make people feel truly comfortable and satisfied.</p>
                        </card>
                    </div>
                </div>
            </section>

            <section class="team">
                <div className="container">
                    <h2>Meet Our Team</h2>
                </div>
            </section>

            <section className="member">
                <div className="emp">
                    <card className="employee1">
                        <img src={person11} alt="employee" />
                        <h3>Ananya<br />Sharma</h3>
                        <p>Senior Interior Designer</p>
                    </card>
                    <card className="employee">
                        <img src={person2} alt="employee" />
                        <h3>Aarav<br />Mehta</h3>
                        <p>Creative Director</p>
                    </card>
                    <card className="employee1">
                        <img src={person11} alt="employee" />
                        <h3>Priya <br />Kapoor</h3>
                        <p>Design Consultant</p>
                    </card>
                    <card className="employee">
                        <img src={person2} alt="employee" />
                        <h3>Rohan <br />Verma</h3>
                        <p>Project Manager</p>
                    </card>
                </div>
            </section>
        </>
    )
}
export default More;