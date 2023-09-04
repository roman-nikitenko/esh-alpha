import React from 'react';
import classNames from "classnames";

export const ServiceCard = ({ imgSmall, imgBig, title, subTitle, description, styleCard }) => {

  return <>
    <div className={classNames('service__card', {
      'service__card--reverse' : styleCard
    })}>
      <div className="service__card__top">
        <div className="twice__image">
          <img
            src={imgBig}
            alt="big"
            className="img--big"
          />
          <img
            src={imgSmall}
            alt="small"
            className={classNames(styleCard ? 'img--small--left' : 'img--small')}
          />
        </div>
      </div>
      <div className="service__card__bottom">
        <h2 className="service__card__title">
          <span className="service__card__title--purple">
            {title}
          </span>
          <br/>
          <span className="service__card__title--bold">
              {subTitle}
            </span>
        </h2>
        <div className="service__card__description">
          {description}
        </div>

        <button
          type="button"
          className="btn btn--dark_purple"
        >
          Start
        </button>
      </div>
    </div>
  </>
};
