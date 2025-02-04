/* eslint-disable react/prop-types */
import { useCallback } from "react";
import "./CSS/Home.css"




function Home() {

  const Slider = () => {
    return (
      <div className="slider-container">
        <div className="slider">
        {Array(10).fill(null).map((_, index) => (
          <div key={index} className="slide">
            <img src={"/assets/header/logo(2).png"} className="sliderLogo" alt="" />
            <p className="sliderText" >digiframe</p>
          </div>
        ))}
      </div>
      </div>
    );
  };

  
  const InfoBox = useCallback((props) => {
    console.log(props);
    
    return (
      <div className="homeAboutUs">
        {props.infoFor == "about"?
          <h1 className="homeAboutUsHead">
          about us
        </h1>
         :null} 
        <div className="homeAboutUsContent">
          <div className="homeAboutUsContentInside" />
        </div>
      </div>
    );
  },[]);
  
  

  return (
    <section className="homeSection" >
      <div className="homeHeader" >
        <h1 className="homeHeaderHead" >
        Achieve Success in the Digital World with Us!
        </h1>
        <h3 className="homeHeaderSubhead" >
        Crafting Your Online Presence
        </h3>
        <div className="homeHeaderBox homeHeaderBoxPosition1" />
        <div className="homeHeaderBox homeHeaderBoxPosition2" />
      </div>
      <InfoBox infoFor={"about"} />
        <Slider/>
        <InfoBox infoFor={""} />
      
    </section>
  )
}

export default Home