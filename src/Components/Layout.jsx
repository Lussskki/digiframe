import { Outlet } from 'react-router';
import './CSS/Layout.css'
import Header from './Layout/Header';
import { useEffect, useState } from 'react';
import Menu from './Layout/Menu';
import Footer from './Layout/Footer';


function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(()=>{console.log(menuOpen);
  },[menuOpen])
  
  return (
    <>
    <main className="LayoutBox">
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header setMenuOpen={setMenuOpen} />
      <Outlet/>
      <Footer />
    </main>
    </>
  )
}

export default Layout