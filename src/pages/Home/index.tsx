import React, { useContext } from "react";
import Header from "../../components/Header";

import { Container, MainHeadline, Title, Description } from "./styles";
import coffee from "./../../assets/rocket-coffee.png";

import ButtonCTA from "../../components/ButtonCTA";
import { SidebarContext } from "../../App";
import Sidebar from "../../components/Sidebar";

const Home: React.FC = () => {
  const { sidebar } = useContext(SidebarContext);

  return (
    <Container>
      <Header />

      {sidebar ? (
        <Sidebar />
      ) : (
        <MainHeadline>
          <Description>
            O café que fará seu código decolar para o próximo nível.
          </Description>

          <ButtonCTA className="buttonContent">PEGAR MEU CAFÉ</ButtonCTA>

          <Title>
            <h1>Great Coffee</h1>
            <strong>&lt;Great Code/&gt;</strong>
          </Title>

          <div className="bubble-left" />
          <div className="bubble-right" />
          <div className="bubble-mobile" />
          
          <img src={coffee} alt="Coffee Rocket" />
        </MainHeadline>
      )}
    </Container>
  );
};

export default Home;
