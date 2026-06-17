import "./Contact.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import ending from '../../Assets/ending1.jpg';
import {
  validateName,
  validateEmail,
  validatePhone,
} from "../../utils/validators";

const initialState = {
  firstName: '', lastName: '', email: '', phone: '',
  location: '', projectDetails: '', budget: '',
  timeline: '', hasContractor: '', referral: '', customReferral: ''
};
function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "referral") {
      setShowOtherInput(value === "Other");
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    let error = "";

    if (name === "firstName" || name === "lastName") {
      error = validateName(value);
    }

    if (name === "email") {
      error = validateEmail(value);
    }

    if (name === "phone") {
      error = validatePhone(value);
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const firstInput = document.querySelector("input.error-input, textarea.error-input, select.error-input");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true);

    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);

      setTimeout(() => {
        const firstError = document.querySelector(".error-input");

        if (firstError) {
          firstError.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });

          firstError.focus();
        }
      }, 100);

      return;
    }

    try {
      setErrors({});

      const response = await fetch(
        "http://localhost:5000/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            type: "contact",
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            location: formData.location,
            projectDetails: formData.projectDetails,
            budget: formData.budget,
            timeline: formData.timeline,
            hasContractor: formData.hasContractor,
            referral:
              formData.referral === "Other"
                ? formData.customReferral
                : formData.referral,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);

        setFormData(initialState);

        setSubmitted(false);

        if (response.ok) {
          setFormData(initialState);
          setSubmitted(false);

          toast.success("Message Sent Successfully");
        } else {
          toast.error(data.message || "Something went wrong");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Server Error");
    }
  };

  const validate = (data) => {
    let newErrors = {};

    newErrors.firstName = validateName(data.firstName);
    newErrors.lastName = validateName(data.lastName);
    newErrors.email = validateEmail(data.email);
    newErrors.phone = validatePhone(data.phone);

    if (!data.location?.trim()) {
      newErrors.location = "Location is required";
    }

    if (!data.projectDetails?.trim()) {
      newErrors.projectDetails = "Project details are required";
    }

    if (!data.budget?.trim() && formData.budgetOption === "yes") {
      newErrors.budget = "Budget is required";
    }

    if (!data.timeline) {
      newErrors.timeline = "Timeline is required";
    }

    if (!data.hasContractor) {
      newErrors.hasContractor = "Please select one option";
    }

    if (!data.referral) {
      newErrors.referral = "Please select one option";
    }

    if (
      data.referral === "Other" &&
      !data.customReferral?.trim()
    ) {
      newErrors.customReferral = "Please specify source";
    }

    Object.keys(newErrors).forEach((key) => {
      if (!newErrors[key]) {
        delete newErrors[key];
      }
    });

    return newErrors;
  };

  return (
    <>
      <section className=" conn">
        <div className="container start">
          <div className="con-left">
            <h2>Contact Us</h2>
          </div>
          <div className="con-right">
            <p>
              <span>We would love an opportunity to work with you!</span> If you’ve <br />connected with our portfolio and have a project in mind, please fill <br />out the contact form or shoot us an email at <br /><a href="mailto:info@yourcompany.com?subject=Interior Consultation&body=Hi, I want to book a consultation">
                @indoor.gmail.com.
              </a></p>
            <p>For speaking opportunities or press inquiries, please contact<br /> sarah@albaworkspr.com.</p>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-container">
          {submitted && Object.keys(errors).length > 0 && (
            <div className="error-summary" role="alert" aria-live="assertive" tabIndex={-1}>
              ⚠ Form submission failed. Review the following fields:{" "}
              {Object.values(errors).join(", ")}
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="contact-form"
            aria-label="Contact form"
            noValidate
          >

            <div className="form-section">
              <div className="name-row">
                <div className="input-group">
                  <label htmlFor="firstName">First Name</label>

                  <input
                    required
                    id="firstName"
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={handleChange}
                    aria-invalid={!!errors.firstName}
                    aria-describedby="firstName-error"
                    className={`form-input ${errors.firstName ? "error-input" : ""}`}
                  />

                  {errors.firstName && (
                    <div id="email-error" className="error-box" role="alert">
                      ⚠ {errors.firstName}
                    </div>
                  )}
                </div>

                <div className="input-group">
                  <label htmlFor="lastName">Last Name</label>

                  <input
                    required
                    id="lastName"
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={handleChange}
                    aria-invalid={!!errors.lastName}
                    aria-describedby="lastName-error"
                    className={`form-input ${errors.lastName ? "error-input" : ""}`}
                  />

                  {errors.lastName && (
                    <div id="email-error" className="error-box" role="alert">
                      ⚠ {errors.lastName}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="form-section">
              <label htmlFor="email">Email</label>

              <input
                required
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
                className={`form-input ${errors.email ? "error-input" : ""}`}
              />

              {errors.email && (
                <div id="email-error" className="error-box" role="alert">
                  ⚠ {errors.email}
                </div>
              )}

            </div>

            <div className="form-section">
              <label htmlFor="phone">Phone</label>

              <input
                required
                id="phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                aria-invalid={!!errors.phone}
                aria-describedby="phone-error"
                className={`form-input ${errors.phone ? "error-input" : ""}`}
              />

              {errors.phone && (
                <div id="phone-error" className="error-box" role="alert">
                  ⚠ {errors.phone}
                </div>
              )}
            </div>

            <div className="form-section">
              <label htmlFor="location" className="main-label">
                Where is your home located?
              </label>

              <textarea
                required
                id="location"
                name="location"
                autoComplete="street-address"
                value={formData.location}
                onChange={handleChange}
                className={`form-textarea ${errors.location ? "error-input" : ""}`}
                aria-invalid={!!errors.location}
                aria-describedby="location-error"
              />

              {errors.location && (
                <div id="location-error" className="error-box" role="alert">
                  ⚠ {errors.location}
                </div>
              )}
            </div>

            <div className="form-section">
              <label htmlFor="projectDetails" className="main-label">
                Tell us a little bit about your project.
              </label>

              <textarea
                required
                id="projectDetails"
                name="projectDetails"
                placeholder="Which rooms in your home are you looking to update? Where would you like our help (i.e. furnishings; all finishes; layout; etc.)?"
                onChange={handleChange}
                value={formData.projectDetails}
                className={`form-textarea ${errors.projectDetails ? "error-input" : ""}`}
                aria-invalid={!!errors.projectDetails}
                aria-describedby="projectDetails-error"
              />

              {errors.projectDetails && (
                <div id="projectDetails-error" className="error-box" role="alert">
                  ⚠ {errors.projectDetails}
                </div>
              )}
            </div>

            <div className="form-section">
              <label className="main-label">
                Do you have a budget in mind for the project?
              </label>

              {errors.budget && (
                <div className="error-box">⚠ {errors.budget}</div>
              )}

              <div className="budget-radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="budgetOption"
                    value="yes"
                    checked={formData.budgetOption === "yes"}
                    onChange={handleChange}
                  />
                  Yes
                </label>

                <label className="radio-label">
                  <input
                    type="radio"
                    name="budgetOption"
                    value="no"
                    checked={formData.budgetOption === "no"}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>

              {formData.budgetOption === "yes" && (
                <textarea
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Tell us your estimated budget so we can better plan and personalize your space."
                  className={`form-textarea ${errors.budget ? "error-input" : ""
                    }`}
                />
              )}
            </div>

            <div className="form-section">
              <label htmlFor="timeline">When are you hoping to begin the project? </label>

              <select
                required
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                aria-invalid={!!errors.timeline}
                aria-describedby="timeline-error"
                className={`form-input ${errors.timeline ? "error-input" : ""}`}
              >
                <option value="">Select Timeline</option>
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="1 month">1 month</option>
                <option value="2-3 months">2-3 months</option>
                <option value="flexible">Flexible</option>
              </select>

              {errors.timeline && (
                <div id="timeline-error" className="error-box" role="alert">
                  ⚠ {errors.timeline}
                </div>
              )}
            </div>

            <fieldset className="form-section">
              <legend className="main-label">
                Do you have a contractor secured?
              </legend>

              {errors.hasContractor && (
                <div id="hasContractor-error" className="error-box" role="alert">
                  ⚠ {errors.hasContractor}
                </div>
              )}

              {['Yes', 'No'].map((option) => (
                <label key={option} className="radio-option">
                  <input
                    required
                    type="radio"
                    name="hasContractor"
                    value={option}
                    checked={formData.hasContractor === option}
                    onChange={handleChange}
                    aria-invalid={!!errors.hasContractor}
                    aria-describedby="hasContractor-error"
                    className="radio-input"
                  />
                  {option}
                </label>
              ))}
            </fieldset>

            <fieldset className="form-section">
              <legend className="main-label">
                How did you hear about us?
              </legend>

              {errors.referral && (
                <div id="referral-error" className="error-box" role="alert">
                  ⚠ {errors.referral}
                </div>
              )}

              {['Instagram', 'Pinterest', 'Google', 'Referral', 'Redfin/Zillow', 'Other'].map((option) => (
                <label key={option} className="radio-option">
                  <input
                    required
                    type="radio"
                    name="referral"
                    value={option}
                    checked={formData.referral === option}
                    onChange={handleChange}
                    aria-invalid={!!errors.referral}
                    aria-describedby="referral-error"
                    className="radio-input"
                  />
                  {option}
                </label>
              ))}
            </fieldset>
            {showOtherInput && (
              <div className="form-section">
                <label htmlFor="customReferral" className="main-label">
                  Please specify
                </label>

                {errors.customReferral && (
                  <div id="customReferral-error" className="error-box" role="alert">
                    ⚠ {errors.customReferral}
                  </div>
                )}

                <input
                  required
                  id="customReferral"
                  type="text"
                  name="customReferral"
                  placeholder="Add your own"
                  value={formData.customReferral || ""}
                  onChange={handleChange}
                  aria-invalid={!!errors.customReferral}
                  aria-describedby="customReferral-error"
                  className={`form-input ${errors.customReferral ? "error-input" : ""}`}
                />
              </div>
            )}
            <button type="submit" className="submit-button" aria-label="Submit contact form">Send</button>
          </form>

          {success && (
            <div className="success-popup" role="status" aria-live="polite">
              ✅ Your form has been submitted successfully!
            </div>
          )}
        </div>
      </section >
      <section className="map-section">
        <div className="container map">

          <div className="map-info">
            <div>
              <h2> Studio Address</h2>

              <p className="info-item">
                <i className="fas fa-map-marker-alt"></i>123 Interior Studio, Mansarovar <br />
                Near Metro Station, Jaipur <br />
                Rajasthan - 302020
              </p>

              <p className="info-item">
                <i className="fas fa-phone-alt"></i> <a href="tel:+919876543210">+91 9876543210</a>
              </p>
              <p className="info-item">
                <i className="fas fa-envelope"></i> <a href="mailto:indoor@gmail.com">indoor@gmail.com</a>
              </p>
            </div>
            <div>
              <h2>Timing</h2>
              <p className="info-item">
                <i className="fas fa-clock"></i> Mon – Sat: 10:00 AM – 7:00 PM <br />
                Sunday: Closed
              </p>

              <div className="map-buttons">
                <a
                  href="https://www.google.com/maps?q=Mansarovar Jaipur"
                  target="_blank"
                  rel="noreferrer"
                  className="btn direction-btn"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - MAP */}
          <div className="map-box">
            <iframe
              src="https://www.google.com/maps?q=Mansarovar Jaipur Rajasthan&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              tabIndex="0"
              title="Studio location map"
              aria-label="Google map showing studio location"
            ></iframe>
          </div>

        </div>
      </section>
      <section >
        <div className="praise">
          <img src={ending} alt="image" />
          <div className="text-overlay">
            <p> It's scary to imagine doing the project without her. Jessica has<br /> held our hand, listened to our needs and took note of our style.<br /> Her designs are thoughtful, elegant, and timeless. Highly<br /> recommend outdoor Design!<br /><br />
              <span>Arjun</span></p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;








// react m mene abhi toh components, props, basic hooks , state, use effect, con