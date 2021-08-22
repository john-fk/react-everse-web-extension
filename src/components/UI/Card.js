import React from 'react';
import './Card.scss';

function Card({ widget, widgetTitle, className }) {
  return (
    <div className={`widget ${className}`}>
      <h2 className="widget__title">{widgetTitle}</h2>
      {widget}
    </div>
  );
}

export default Card;
