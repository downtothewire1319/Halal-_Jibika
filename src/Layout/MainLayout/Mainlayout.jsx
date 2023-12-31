import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"


export const Mainlayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>



    </div>
  )
}
