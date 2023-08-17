import './main.scss';

import React from 'react';
import { Header } from "../header/Header";
import { About } from "../About";
import { Services } from "../Services";
import { Footer } from "../Footer";

export const Main = () => {
  return (
    <div className="Main">
      <Header />
      <About />
      <Services />
      <Footer />
    </div>
  );
};
