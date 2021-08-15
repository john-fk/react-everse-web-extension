import React from 'react';
import './Card.scss';

function Card({ widget, widgetTitle }) {
  return (
    <div className="widget">
      <h2 className="widget__title">{widgetTitle}</h2>
      {widget}
    </div>
  );
}

export default Card;
