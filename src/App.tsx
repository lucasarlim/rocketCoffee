import React, { useState } from "react";
import { Routes } from "./Routes";
import GlobalStyles from "./styles/GlobalStyles";

type Sidebar = {
  sidebar: boolean;
  setSidebar: (sidebar: boolean) => void;
}

export const SidebarContext = React.createContext({} as any);

function App() {
  
  const [sidebar, setSidebar] = useState(false);

  return (
    <SidebarContext.Provider value={{sidebar, setSidebar}}>
      <GlobalStyles />
      
      <Routes />
    </SidebarContext.Provider>
  )
}

export default App
