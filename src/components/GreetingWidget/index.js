import React, { useEffect } from 'react';
import moment from 'moment';

import { SubHeading } from '../UI/Heading';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentAppTime, currentUserName } from '../../EverseStates';
import './GreetingWidget.scss';
import TimeOfDay from './TimeOfDay';

function GreetingWidget() {
  const [currentTime, setCurrentTime] = useRecoilState(currentAppTime);
  setInterval(() => {
    const usersCurrentTime = moment().format('h:mm A');
    setCurrentTime(usersCurrentTime);
  }, 1000);

  const usersTimeOfDay = moment().format('H');

  return (
    <div className="greeting-widget">
      <TimeOfDay currentTimeOfDay={usersTimeOfDay} />
      <SubHeading text={`Your current time is ${currentTime}`} />
    </div>
  );
}

export default GreetingWidget;
