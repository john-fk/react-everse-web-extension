import React from 'react';
import moment from 'moment';
import { getGreetingTime } from '../../utils';
import { SubHeading } from '../UI/Heading';
import './GreetingWidget.scss';
import { useRecoilState } from 'recoil';
import { currentAppTime } from '../../EverseStates';

const TimeOfDay = ({ currentTimeOfDay }) => (
  <h2 className="text-capitalize mb-0">
    {getGreetingTime(currentTimeOfDay)}
    {/* TODO add user name from name entered by the user */}
    {` Deejay`}
  </h2>
);

function GreetingWidget() {
  const [currentTime, setCurrentTime] = useRecoilState(currentAppTime);
  /*
  TODO Continue working with moment.duration here https://momentjs.com/docs/#/durations/
  const screenTime = moment().fromNow('H');
  console.log(screenTime);
  */
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
