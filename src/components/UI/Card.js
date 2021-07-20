import React from 'react';
import './Card.scss';

function Card({ widget, widgetTitle, widgetSubTitle }) {
  return (
    <div className="widget">
      <h2 className="widget__title">{widgetTitle}</h2>
      <small className="widget__title-sub">{widgetSubTitle}</small>
      {widget}
    </div>
  );
}

export default Card;
