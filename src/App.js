import './App.scss';
import { Route, Routes } from "react-router-dom";
import { ServicePage } from "./pages/servicePage";
import { ContactsPage } from "./pages/contactsPage";
import { HomePage } from "./pages/homePage";
import { MainMenu } from "./components/main-menu/Main-menu";
import { Footer } from "./components/footer/Footer";
import React, { useState } from "react";
import { Menu } from "./components/menu-mobile/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return <>
    <MainMenu menuOpen={menuOpen}  setMenuOpen={setMenuOpen}/>
    {menuOpen && <Menu />}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contacts" element={<ContactsPage/>} />
      <Route path="/service" element={<ServicePage/>} />
    </Routes>
    <Footer />
  </>
}

export default App;
