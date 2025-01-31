/* eslint-disable react/prop-types */
import { memo } from 'react'
import '../CSS/header/Menu.css'
import { useNavigate } from 'react-router';


const Menu = memo(function Menu(props){

    const navigate = useNavigate()
    const menuLinks = [
        { key:6,path: "/home", name: "Home" },
        { key:7,path: "/services", name: "Services" },
        { key:8,path: "/meet-our-team", name: "Projects" },
        { key:9,path: "/about-us", name: "About Us" },
        { key:10,path: "/blog", name: "Blog" },
        { key:11,path: "/get-in-touch", name: "Contact" }
      ];

  return (
    <div className={` Menu ${!props.menuOpen && "closeMenu"} `} onClick={()=>{props.setMenuOpen(false)}} >
        
      {menuLinks.map((item) =>{
        return(
            <p key={item.key} className='links' onClick={()=>{props.setMenuOpen(false),navigate(item.path)}} >{item.name}</p>
        )
      })}
    </div>
  )
})

export default Menu
