import React from 'react';
import './Card.scss';

function Card({ childComponent, widgetTitle }) {
  return (
    <div className="widget">
      <h2 className="widget__title">{widgetTitle}</h2>
      {childComponent}
    </div>
  );
}

export default Card;
