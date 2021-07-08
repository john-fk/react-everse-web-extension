import React from 'react';
import { atom, useRecoilState } from 'recoil';

const globalTimeState = atom({
  key: 'globalTimeState',
  default: '',
});

function TimeOfDayWidget() {
  const [currentTime, setCurrentTime] = useRecoilState(globalTimeState);

  return <div className="time-of-day">Hello From time of day</div>;
}

export default TimeOfDayWidget;
