import React, { useEffect } from 'react';
import { getGreetingTime, getLocalUser } from '../../utils';

const TimeOfDay = ({ currentTimeOfDay }) => {
  const userData = getLocalUser();

  useEffect(() => {
    if (!userData) return;
  }, []);

  return (
    <h2 className="text-capitalize mb-0">
      {`Good ${getGreetingTime(currentTimeOfDay)} ${userData ? userData : ''}`}
    </h2>
  );
};
export default TimeOfDay;
