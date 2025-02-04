/* eslint-disable react/prop-types */
import { useCallback } from "react";
import "./CSS/Home.css";
import { MdOutlineDone } from "react-icons/md";

function Home() {
  const Slider = ({comp}) => {
    const Logo = () => {
      return (
        <div className="slide">
          <img
            src={"/assets/header/logo(2).png"}
            className="sliderLogo"
            alt=""
          />
          <p className="sliderText">digiframe</p>
        </div>
      );
    };

    const Offers = ({components}) => {
      
      return (
        <div className="offerBox">
          <h1 className="offerName">{components.name}</h1>
          <h1 className="offerPrice">{components.price}</h1>
          <div className="offerItems">
            {components.offer.map((item, index) => (
                <div key={index} className="offerItem">
                  <MdOutlineDone className="homeCheckMark" />
                  <div className="offerItemName">{item}</div>
                </div>
              ))}
          </div>
        </div>
      );
    };

    const offers = [
      {
        "name": "UI/UX Design",
        "price": "$750",
        "offer": [
          "Responsive and user-focused design.",
          "Wireframes and interactive prototypes.",
          "Usability and accessibility optimization."
        ]
      },
      {
        "name": "Website and App Development",
        "price": "$1,200",
        "offer": [
          "Custom websites & apps.",
          "Mobile-friendly design.",
          "Analytics integration."
        ]
      },
      {
        "name": "Digital Marketing",
        "price": "$500/month",
        "offer": [
          "SEO optimization",
          "Social media campaigns",
          "Content strategies."
        ]
      },
      {
        "name": "E-commerce Solutions",
        "price": "$2,000",
        "offer": [
          "Fully functional online store.",
          "Payment & shipping integration.",
          "Easy-to-manage dashboard."
        ]
      }
    ]
    
    return (
      <div className={`slider-container ${comp != "logo" && 'slider-container2' }`}>
        <div className={`slider ${comp != "logo" && 'offerSlider'} `}>
          {comp == "logo" ?
            Array(10).fill(null).map((_, index) => {
              return(<Logo key={index} />)})
            :
            <>
            {offers.map((item, index) => {
              return(
              <Offers key={index + 10} components={item} />
            )})}
            {offers.map((item, index) => {
              return(
              <Offers key={index + 10} components={item} />
            )})}
            </>
          }
        </div>
      </div>
    );
  };

  const InfoBox = useCallback((props) => {
    return (
      <div className={`homeAboutUs ${props.infoFor != "about" && 'homeAboutUs2'} `}>
        {props.infoFor == "about" ? (
          <div className="homeAboutUsInfoBox" >
          <h1 className="homeAboutUsHead">about us</h1>
          <p className="homeAboutUsInfo" >At Unified Digital Solutions, we empower small and medium 
businesses with a full range of digital services — from 
advertising and marketing to IT, design, and web
 development. Our mission is to drive your growth
 and help you succeed in the digital landscape.</p>
          </div>
        ) : null}
        <div className={` homeAboutUsContent ${props.infoFor != "about" && 'homeAboutUsContent2'} `}>
          <div className="homeAboutUsContentInside" />
        </div>
      </div>
    );
  }, []);

  return (
    <section className="homeSection">
      <div className="homeHeader">
        <h1 className="homeHeaderHead">
          Achieve Success in the Digital World with Us!
        </h1>
        <h3 className="homeHeaderSubhead">Crafting Your Online Presence</h3>
        <div className="homeHeaderBox homeHeaderBoxPosition1" />
        <div className="homeHeaderBox homeHeaderBoxPosition2" />
      </div>
      <InfoBox infoFor={"about"} />
      <Slider comp={'logo'} />
      <InfoBox infoFor={""} />
      <Slider comp={'offer'} />
    </section>
  );
}

export default Home;
