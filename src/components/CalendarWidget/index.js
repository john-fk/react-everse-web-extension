import React, { useState, useEffect } from 'react';
import { IoCalendarOutline } from 'react-icons/io5';
import moment from 'moment';
import './CalendarWidget.scss';

const CalendarWidget = () => {
  const currentCalendarDate = moment().format('dddd, Do MMMM YYYY');

  return (
    <div className="calendar d-flex p-3">
      <IoCalendarOutline />
      <p className="ml-2">{currentCalendarDate}</p>
    </div>
  );
};

export default CalendarWidget;
