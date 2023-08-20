import React from 'react';
import './card.scss'

export const Card = ({ text, image, title }) => {
  return (
    <>
      <div className="card">
        <div className="card__content">
          <h3>{title}</h3>
          <p>
            {text}
          </p>
        </div>
        <div className="card__image">
          <img src={image} alt="settings" />
        </div>
      </div>
    </>
  );
};
