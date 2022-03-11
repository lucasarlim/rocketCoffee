import React from 'react';

import { Container, OptionsNav, NavLink} from './styles';

const Sidebar: React.FC = () => {
  return(
    <Container>
      <OptionsNav>
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
      </OptionsNav>
    </Container>
  );
}

export default Sidebar;