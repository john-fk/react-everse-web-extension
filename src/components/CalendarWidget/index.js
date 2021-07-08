import React, { useState, useEffect } from 'react';
import { IoCalendarOutline } from 'react-icons/io5';

import moment from 'moment';
import './index.scss';

const CalendarWidget = () => {
  const displayCalendar = moment().format('dddd, MMMM Do YYYY');

  return (
    <div className="time">
      <IoCalendarOutline />
      <p>{displayCalendar}</p>
    </div>
  );
};

export default CalendarWidget;
