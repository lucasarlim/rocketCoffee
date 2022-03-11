import React, { useContext } from 'react';
import { SidebarContext } from '../../App';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Container } from './styles';

const Rewards: React.FC = () => {
  const { sidebar } = useContext(SidebarContext);

  return (
    <Container>
      <Header />

      {sidebar ? <Sidebar /> : <div></div>}
    </Container>
  );
}

export default Rewards;