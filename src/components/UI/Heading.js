import React from 'react';
import './Heading.scss';

export const Heading = ({ title }) => <h2 className="heading">{title}</h2>;

export const SubHeading = ({ text }) => (
  <small className="heading__small">{text}</small>
);
