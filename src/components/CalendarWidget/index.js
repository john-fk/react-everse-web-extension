import React from 'react';
import { IoCalendarOutline } from 'react-icons/io5';
import moment from 'moment';

import './CalendarWidget.scss';

const CalendarWidget = () => {
  const currentCalendarDate = moment().format('dddd, Do MMMM YYYY');

  return (
    <div className="calendar d-flex py-3 px-4">
      <i className="calendar__icon d-flex mx-2">
        <IoCalendarOutline />
      </i>
      <p className="calendar__text">{currentCalendarDate}</p>
    </div>
  );
};

export default CalendarWidget;
