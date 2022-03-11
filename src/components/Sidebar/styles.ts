import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  background-color: var(--background);
`;

export const OptionsNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NavLink = styled(Link)`
  position: relative;
  font-size: 1.125rem;
  font-weight: 500;
  padding: 16px 24px;

  cursor: pointer;
  color: var(--border-menu-mobile);
  text-decoration: none;
  transition: 0.3s ease-out;

  &::after {
    position: absolute;
    width: 5px;
    height: 0%;

    left: 0;
    top: 0;

    background-color: var(--button);

    content: '';
    display: none;

    transition: width 0.3s ease-out;
  }

  &::before{
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;

    background-color: var(--border);
    content: '';
  }

  &: hover{
    color: var(--text-color);

    &::after {
      height: 100%;
      display: inline;
    }
  }

  &.active {
    color: var(--text-color);

    &::after {
      display: inline;
      height: 100%;
    }
  }
`;
