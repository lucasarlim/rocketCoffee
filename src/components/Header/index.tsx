import React, { useContext } from "react";
import ButtonCTA from "../ButtonCTA";

import { Navbar, OptionsMenu, NavLink } from "./styles";
import { SidebarContext } from "../../App";

import logoMobile from "./../../assets/logo-mobile.svg";
import logoDesktop from "./../../assets/logo-desktop.svg";
import close from "./../../assets/menu-buguer-close.svg";
import menu from "./../../assets/menu-buguer-open.svg";


const Header: React.FC = () => {
 
  const {sidebar, setSidebar} = useContext(SidebarContext);

  return (
    <Navbar>
      <img src={logoDesktop} className="logoDesktop" alt="Rocket Coffee Logo" />
      <img src={logoMobile} className="logoMobile" alt="Rocket Coffee Logo" />

      <OptionsMenu>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Home{" "}
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Menu
        </NavLink>
        <NavLink
          to="/rewards"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Recompensas
        </NavLink>
        <NavLink
          to="/gifts"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Gift Cards
        </NavLink>
        <NavLink
          to="/store"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Loja
        </NavLink>
      </OptionsMenu>

      {sidebar ? (
        <img src={close} alt="" className="sidebarIcon" onClick={() => setSidebar(!sidebar)}/>
      ):(
        <img src={menu} alt="" className="sidebarIcon" onClick={() => setSidebar(!sidebar)}/>
      )}

      <ButtonCTA className="buttonHeader">PEGAR MEU CAFÉ</ButtonCTA>
    </Navbar>
  );
};

export default Header;


