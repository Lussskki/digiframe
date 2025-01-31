
import { Outlet } from "react-router"
import "./CSS/AuthLayout.css"

function AuthLayout() {
  return (
    <main className="AuthLayoutBox" >
      <img className="AuthLogo" src="/public/assets/header/logo(2).png" alt="" />
      <Outlet/>
    </main>
  )
}

export default AuthLayout
