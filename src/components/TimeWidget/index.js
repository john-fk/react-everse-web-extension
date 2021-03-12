import React, { useState, useEffect } from 'react';
import { Greeting } from './Greeting';
import { Day } from './Day';
import { Time } from './Time';
import { formattedMonth, dayOfTheWeek } from '../../utils';

const TimeWidget = () => {
  const [timeState, setTimeState] = useState('');
  const [greet, setGreet] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [period, setPeriod] = useState(false);

  let date = new Date();
  let dYear = date.getFullYear();
  let d = date.getDate();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds();

  let addZero = (val) => (val < 10 ? `0${val}` : val);

  const updateTime = () => {
    const currentTime = `${h}:${addZero(m)}`;
    setTimeState(currentTime);
  };

  const updateSeconds = (seconds) => setSeconds(seconds);

  const updatePeriod = (hours) => (hours < 12 ? setPeriod(true) : period);

  const updateGreetings = (hours) => {
    if (hours < 12) {
      setGreet('Good Morning');
    } else if (hours > 12 && hours < 18) {
      setGreet('Good Afternoon');
    } else return setGreet('Good Evening');
  };

  const updateDay = () => {
    const dayDisplay = dayOfTheWeek();
    const dateDisplay = addZero(d);
    const monthsDisplay = formattedMonth(date.getMonth());

    return `${dayDisplay}, ${dateDisplay} ${monthsDisplay} ${dYear}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateSeconds(s);
    }, 1000);

    updateTime();
    updatePeriod(h);
    updateGreetings(h);

    return () => clearInterval(interval);
  });

  return (
    <div className="bg1">
      <div className="time">
        <div className="time-widget">
          <Day day={updateDay} />
          <Time time={timeState} seconds={seconds} period={period} />
          <Greeting greeting={greet} />
        </div>
      </div>
    </div>
  );
};

export default TimeWidget;
