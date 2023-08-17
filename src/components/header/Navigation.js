import React from 'react';
import logo from "../../img/logo.svg";

export const Navigation = () => {
  return (
    <section className="Navigation">
      <img src={logo} alt="logo"/>
      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Service</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </section>
  );
};
