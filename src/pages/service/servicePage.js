import React from 'react';
import './service.scss';
import { ServiceCard } from "../../components/ServiceCard";
import img__card1 from "../../img/service_img_small.svg";
import img__card2 from "../../img/service_img_big.svg";
import content from '../../content';


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

      {content.services.map((serv, index) => {
        const { mainTitle, subTitle, description} = serv;

        return (
          <ServiceCard
            styleCard={index % 2 !== 0 ? true : false}
            imgSmall={img__card1}
            imgBig={img__card2}
            title={mainTitle}
            subTitle={subTitle}
            description={description}
          />
        )
      })}
    </main>
  </>
};
