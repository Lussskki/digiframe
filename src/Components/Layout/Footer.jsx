import { memo } from "react";
import Logo from "../../../public/assets/footer/logo.png";
import Facebook from "../../../public/assets/footer/facebook.png";
// import Instagram from ".../../../public/assets/footer/.png"
import Youtube from "../../../public/assets/footer/youtube.png";
import Twitter from "../../../public/assets/footer/twitter.png";
import RespFacebook from "../../../public/assets/footer/resp-facebook.png";
import RespInstagram from "../../../public/assets/footer/resp-instagram.png";
import RespTwitter from "../../../public/assets/footer/x.png";
import RespLinkdin from "../../../public/assets/footer/linkdin.png";
import RespYoutube from "../../../public/assets/footer/resp-youtube.png";
import { Link } from "react-router-dom";
import "../CSS/Footer/Footer.css";

const Footer = memo(function Footer(props) {
  return (
    <footer className="footer">
      <section className="main">
        <article className="digiframe-container">
          <div className="footer-header">
            <img src={Logo} alt="logo image" />
            <h2 className="digiframe">Digiframe</h2>
          </div>
          <p className="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="sites-links">
            <img src={Facebook} alt="facebook" />
            {/* <img src={Instagram} alt="instagram" /> */}
            <img src={Youtube} alt="youtube" />
            <img src={Twitter} alt="twitter" />
          </div>
        </article>
        <section className="pages-container">
          <article className="pages">
            <div className="home">
              <Link to="/home">Home</Link>
            </div>
            <div className="contact">
              <Link to="/contact">Contact</Link>
            </div>
            <div className="projects">
              <Link to="/projects">Projects</Link>
            </div>
            <div className="about-us">
              <Link to="/about-us">About us</Link>
            </div>
            <div className="portfolio">
              <Link to="/portfolio">Portfolio</Link>
            </div>
            <div className="blog">
              <Link to="/blog">Blog</Link>
            </div>
            <div className="faqs">
              <Link to="/faqs">FAQs</Link>
            </div>
          </article>
          <article className="about">
            <div className="about-us">
              <Link to="/about-us">About us</Link>
            </div>
            <Link to="/">
              <p className="number">+5525252452</p>
            </Link>
            <Link to="/">
              <p className="email">asslkfnlksnd@hiuhsd</p>
            </Link>
            <Link to="/">
              <p className="address">
                4517 Washington Ave. Manchester,Kentucky 39495
              </p>
            </Link>
          </article>
          <article className="servises-and-input">
            <div className="services">
              <Link to="/services">Services</Link>
            </div>
            <div className="input">
              <input type="text" placeholder="Email address" />
              <button className="button"></button>
            </div>
          </article>
        </section>
        <section className="resp-container">
          <article className="resp-address-cont">
            <h5 className="resp-address">Address:</h5>
            <p className="resp-address-info">
              Level 1, 12 Sample St, Sydney NSW 2000
            </p>
          </article>
          <article className="resp-contact-cont">
            <h5 className="resp-contact">Contact:</h5>
            <p className="resp-number">1800 123 4567</p>
            <p className="resp-email">info@relume.io</p>
          </article>
          <article className="resp-sites-links-cont">
            <img src={RespFacebook} alt="facebook" />
            <img src={RespInstagram} alt="instagram" />
            <img src={RespTwitter} alt="twitter" />
            <img src={RespLinkdin} alt="linkedin" />
            <img src={RespYoutube} alt="youtube" />
          </article>
          <article className="resp-pages">
            <div className="resp-home">
              <Link to="/home">Home page</Link>
            </div>
            <div className="resp-about-us">
              <Link to="/about-us">About us</Link>
            </div>
            <div className="resp-service">
              <Link to="/faqs">Service</Link>
            </div>
            <div className="resp-portfolio">
              <Link to="/portfolio">Portfolio</Link>
            </div>
            <div className="resp-projects">
              <Link to="/projects">Projects</Link>
            </div>
            <div className="resp-contact">
              <Link to="/contact">Contact</Link>
            </div>
          </article>
        </section>
      </section>
      <section className="copyright-container">
        <p className="copyright">
          Copyright @ 2024 Digital Agency. All Rights Reserved
        </p>
        <div className="copyright-text">
          <p className="policy">Privacy Policy</p>
          <p className="terms">Terms of Service</p>
        </div>
        <div className="resp-copyright-text">
          <p className="resp-policy">Privacy Policy</p>
          <p className="resp-terms">Terms of Service</p>
          <p className="resp-cookies">Cookies Settings</p>
        </div>
      </section>
      <section className="containers">
        <div className="first"></div>
        <div className="second"></div>
      </section>
    </footer>
  );
});

export default Footer;
