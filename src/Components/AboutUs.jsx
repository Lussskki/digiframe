import "./CSS/AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUsDiv">
      <div className="aboutUsHeader">About Us</div>

      <div className="mission-div">
        <div className="images-div">
          <div className="temp-image"></div>
          <div className="temp-image"></div>
          <div className="temp-image img-3"></div>
        </div>

        <div className="mission-text">
          <p className="title">Our Mission</p>
          <p className="text">
            At Unified Digital Solutions, our mission is to empower small and
            medium-sized businesses by providing innovative, tailored digital
            solutions that drive growth and success. We are committed to
            delivering high-quality services in web design, digital marketing,
            IT support, and more, helping businesses thrive in an ever-evolving
            digital landscape.
          </p>
        </div>
      </div>

      <div className="leaders-div">
        <p className="title">Meet Our Leaders</p>
        <div className="temp-leaders-div">
          <div className="temp-leader"></div>
          <div className="temp-leader"></div>
          <div className="temp-leader"></div>
          <div className="temp-leader"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
