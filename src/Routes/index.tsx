import {
  Route,
  BrowserRouter,
  Routes as RoutesContainer,
} from 'react-router-dom';
import Gifts from '../pages/Gifts';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Rewards from '../pages/Rewards';
import Store from '../pages/Store';


export function Routes(){
  return (
    <BrowserRouter>
      <RoutesContainer>
        <Route element={<Home />} path="/" />
        <Route element={<Menu />} path="/menu" />
        <Route element={<Rewards />} path="/rewards" />
        <Route element={<Gifts />} path="/gifts" />
        <Route element={<Store />} path="/store" />
      </RoutesContainer>
    </BrowserRouter>
  )
}