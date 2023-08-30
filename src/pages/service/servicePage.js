import React from 'react';
import './service.scss';
import { ServiceCard } from "../../components/ServiceCard";

export const ServicePage = () => {
  return <>
    <header className="header header__service-page">
      <div className="header__service__content">
        <div className="title">
          <h1>
            <span className="title__normal">Our</span>
            &nbsp;
            <span className="title__strong">Services</span>
          </h1>
        </div>
        <span className="header__service__text">
          Lorem ipsum dolor sit amet consectetur.
          Facilisis auctor a diam cursus amet.
          Molestie metusmorbi purus amet
          malesuada proin amet facilisis.
        </span>
      </div>
    </header>
    <main className="main">
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />




      <div className="service__card">
        <div className="service__card__top">
          <div className="service__card__img--reverce">
            <div className="card__ing1--r">
              <div className="card__ing2--r"></div>
            </div>
          </div>
        </div>
        <div className="service__card__bottom">
          <h2 className="service__card__title">
          <span className="service__card__title--purple">
            Services
          </span>
            <br/>
            <span className="service__card__title--bold">
              For Business Solutions
            </span>
          </h2>
          <div className="service__card__description">
            <p>
              Lorem ipsum dolor sit amet consectetur. Fames tempor enim molestie rutrum tempus dui arcu. Eu ultrices ut est ut adipiscing lorem. Proin nisi sollicitudin erat diam felis euismod vehicula sit.
            </p>
            <br/>
            <p>
              Cras egestas sit faucibus nunc et. Enim vitae egestas arcu bibendum auctor in sed eget. Vulputate etiam quis lacus congue. Dapibus sed lacinia id enim dui aliquam purus faucibus. Eu lorem id sit ornare odio dictum sed dignissim.
            </p>

          </div>

          <button
            type="button"
            className="button button--dark_purple"
          >
            Start
          </button>

        </div>

      </div>

    </main>
  </>
};