import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = styled.nav`
  position: relative;

  width: 100%;
  max-width: 908px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px 16px;
  flex: 1;
  z-index: 1;

  &::before{
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;

    background-color: var(--border);
    content: '';
    display: none;
  }


  .logoMobile {
    display: none;
  }

  .sidebarIcon {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {

    &::before {
      display: inline;
    }

    .sidebarIcon {
      display: block;
    }

    .logoDesktop {
      display: none;
    }

    .logoMobile {
      display: block;
    }

    .buttonHeader {
      display: none;
    }
  }
`;

export const OptionsMenu = styled.div`
  display: flex;
  align-items: center;

  grid-gap: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
    position: relative;

    font-size: 0.875rem;
    font-weight: 500;

    cursor: pointer;
    color: var(--border-menu-mobile);
    text-decoration: none;
    transition: 0.3s ease-out;

    &::before {
      position: absolute;
      width: 0%;
      height: 5px;

      background-color: var(--button);

      left: 0;
      bottom: -10px;
      content: '';

      transition: width 0.3s ease-out;
    }

    &:hover {
        color: var(--text-color);

        &::before {
          width: 100%;
          display: inline;
        }
    }

    &.active {
      color: var(--text-color);

      &::before {
        width: 100%;
        display: inline;
      }

    }
`;
