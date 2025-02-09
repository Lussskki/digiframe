import "./CSS/Services.css";
import { MdOutlineDone } from "react-icons/md";

function Services() {
  const offers = [
    {
      name: "UI/UX Design",
      price: "$750",
      offer: [
        "Responsive and user-focused design.",
        "Wireframes and interactive prototypes.",
        "Usability and accessibility optimization.",
      ],
    },
    {
      name: "Website and App Development",
      price: "$1,200",
      offer: [
        "Custom websites & apps.",
        "Mobile-friendly design.",
        "Analytics integration.",
      ],
    },
    {
      name: "Digital Marketing",
      price: "$500/month",
      offer: [
        "SEO optimization",
        "Social media campaigns",
        "Content strategies.",
      ],
    },
    {
      name: "E-commerce Solutions",
      price: "$2,000",
      offer: [
        "Fully functional online store.",
        "Payment & shipping integration.",
        "Easy-to-manage dashboard.",
      ],
    },
  ];

  const Offers = ({ components }) => {
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

  return (
    <div className="service-div">
      <h1>Services</h1>
      <div className="offers-div">
        {offers.map((item, index) => {
          return <Offers key={index} components={item} />;
        })}

        {offers.map((item, index) => {
          return <Offers key={index} components={item} />;
        })}
      </div>
    </div>
  );
}

export default Services;
