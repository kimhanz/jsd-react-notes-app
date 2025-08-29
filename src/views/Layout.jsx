import { Outlet } from "react-router-dom"
import Header from "../components/Header.jsx"

const Layout = () => {
  return (
    <div>
      <Header userName="Kim Thanawat" />
      <section className="bg-[#e7e8e7] ">
        <Outlet />
      </section>
    </div>
  )
}

export default Layout
