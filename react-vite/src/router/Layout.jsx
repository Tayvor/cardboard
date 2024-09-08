import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import './Layout.css';

export default function Layout() {
  return (
    <>
      <Header />

      <div className="layout">
        <Menu />
        <Outlet />
      </div>
    </>
  )
}
