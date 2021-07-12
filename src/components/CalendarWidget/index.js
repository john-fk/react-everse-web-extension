import React, { useState, useEffect } from 'react';
import { IoCalendarOutline } from 'react-icons/io5';
import moment from 'moment';
import './CalendarWidget.scss';
import { useRecoilState } from 'recoil';
import { currentAppTime } from '../../EverseStates';

const CalendarWidget = () => {
  const [currentTime, setCurrentTime] = useRecoilState(currentAppTime);

  const currentCalendarDate = moment().format('dddd, Do MMMM YYYY');

  return (
    <div className="calendar d-flex py-3 px-4">
      <IoCalendarOutline />
      <p className="ml-2">
        {currentCalendarDate} {currentTime}
      </p>
    </div>
  );
};

export default CalendarWidget;
