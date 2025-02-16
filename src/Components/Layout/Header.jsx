/* eslint-disable react/prop-types */
import { memo } from "react";
import "../CSS/header/Header.css";
import { useNavigate } from "react-router";

const Header = memo(function Header(props){
  
  const navigate = useNavigate()

  const menuLinks = [
    { key:1,path: "/home", name: "Home" },
    { key:2,path: "/services", name: "Services" },
    { key:3,path: "/meet-our-team", name: "Projects" },
    { key:4,path: "/blog", name: "Blog" },
    { key:5,path: "/get-in-touch", name: "Contact" },
  ];

  return (
    <header className="LayoutHeader">
      <img className="logo"  src={"/public/assets/header/logo.png"} alt="" />
      <nav className="nav-links" > 
        {menuLinks.map((item)=>{
          return(
            <li key={item.key} className="navLink" onClick={()=>{navigate(item.path)}} ><p className="navLink" >{item.name}</p></li>
          )
        })}
      </nav>
        <div className="headerButtons" >
          <button className="signUp" onClick={()=>{navigate('/sign-up')}} >Sign up</button>
          <button className="logIn" onClick={()=>{navigate('/log-in')}} >Log in</button>
        </div>
      <img className="burger" src={"/public/assets/header/d4756713-3f44-42f0-bf10-d98d9899fe00.svg"} alt="hamburger" onClick={()=>{props.setMenuOpen(true)}} />
  </header>
);
})
  
    


export default Header;
