import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import "./contact.css";

export default function ContactUs() {
  return (
    <section className="contact hidden-section" id="contact">
      <div className="container">
        <h2 className="special-heading">Contact Us</h2>
        <p className="desc">Get in touch with us for any inquiries or support.</p>

        <div className="contact-grid">
          <div className="contact-card">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <h3>Phone</h3>
            <p>+20 0000000000</p>
          </div>
          <div className="contact-card">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <h3>Email</h3>
            <p>ahmed55programer@gmail.com</p>
          </div>
          <div className="contact-card">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <h3>Address</h3>
            <p>Cairo, Egypt</p>
          </div>
        </div>

        <div className="socials">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
    </section>
  );
}
