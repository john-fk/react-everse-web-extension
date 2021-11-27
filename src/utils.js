import React from 'react';
import axios from 'axios';
import '../node_modules/shepherd.js/dist/css/shepherd.css';
import Shepherd from 'shepherd.js';
import { message } from 'antd';
import validator from 'validator';
import store from 'store';

// Gets a random Item from an array
export const getRandomItem = (data, setDataState) => {
  const t = data[Math.floor(Math.random() * data.length)];
  setDataState(t); //
};
// Shows the error popup box when there is an error
export const showErrorMessage = (errorMessage) => {
  message.error({
    content: errorMessage,
    className: 'message-box',
    // duration: 0,
  });
};

// Shows the success popup box
export const showSuccessMessage = (successMessage) => {
  message.success({
    content: successMessage,
    className: 'message-box',
    // duration: 0, Set to 0 to debug the popup box
  });
};

// function to ADD bootstrap .active & .disabled classes
export const isActive = (element) => {
  element.classList.add('active');
  element.classList.add('disabled');
};

// function to REMOVE bootstrap .active & .disabled classes
export const isDisabled = (element) => {
  element.classList.remove('active');
  element.classList.remove('disabled');
};

/*
This function gets the current time of day from moment.js hours 24h format
*/

export const getGreetingTime = (currentTime) => {
  !currentTime && 'Hello';

  const splitAfternoon = 12; // 24hr time to split the afternoon
  const splitEvening = 17; // 24hr time to split the evening

  if (currentTime >= splitAfternoon && currentTime <= splitEvening) {
    // Between 12 PM and 5PM
    return 'afternoon';
  } else if (currentTime >= splitEvening) {
    // Between 5PM and Midnight
    return 'evening';
  }
  // Between dawn and noon
  return 'morning';
};

/*
Fetch data using axios 
*/
export const fetchData = async (arg) => {
  const response = await axios.get(arg);
  if (response.data.error) {
    return [];
  }
  return response.data;
};
/*
Handle shepherdsJS intro
*/
export const appIntro = () => {
  const tour = new Shepherd.Tour({
    defaultStepOptions: {
      scrollTo: true,
      useModalOverlay: true,
      cancelIcon: {
        enabled: true,
      },
      when: {
        show: function () {
          const mainWindow = document.querySelector('.main');
          mainWindow.style.opacity = 0.1;
          mainWindow.style.backgroundColor = '#000';
        },
        destroy: function () {
          const mainWindow = document.querySelector('.main');
          mainWindow.style.opacity = 1;
          mainWindow.style.backgroundColor = '';

          localStorage.setItem('Current_intro', JSON.stringify('intro is off'));
        },
      },
    },
  });

  tour.addStep({
    id: 'step-0',
    title: `Welcome`,
    text: `Thanks installing Everse. Please take a moment to get to know Everse better`,
    attachTo: {
      on: 'auto',
    },
    classes: 'step-0',
    buttons: [
      {
        text: 'Next',
        action: tour.next,
        classes: 'intro-btn intro-btn--next',
      },
    ],
  });

  tour.addStep({
    id: 'step-1',
    title: `Adding Quick Links`,
    text: `Here you can easily add your favorite websites by clicking the ➕ icon in the widget`,
    attachTo: {
      element: '.quick-link__item--plus',
      on: 'right',
    },
    classes: 'step-1',
    buttons: [
      {
        text: 'Back',
        action: tour.back,
        classes: 'intro-btn intro-btn--back',
      },
      {
        text: 'Next',
        action: tour.next,
        classes: 'intro-btn intro-btn--next',
      },
    ],
  });

  tour.addStep({
    id: 'step-2',
    title: `Pick your temperature scale`,
    text: `Simply click on your temperature scale to select your prefer wether setting between Fahrenheit and Celsius`,
    attachTo: {
      element: '.weather__units',
      on: 'bottom',
    },
    classes: 'step-3',
    buttons: [
      {
        text: 'Back',
        action: tour.back,
        classes: 'intro-btn intro-btn--back',
      },
      {
        text: 'Next',
        action: tour.next,
        classes: 'intro-btn intro-btn--next',
      },
    ],
  });

  tour.addStep({
    id: 'covid',
    title: `Daily Covid Updates`,
    text: `Receive daily information for Covid-19 updates for your local. You can also move the mouse to the status your most interesting in to highligh it.`,
    attachTo: {
      element: '#covid',
      on: 'bottom',
    },
    classes: 'step-3',
    buttons: [
      {
        text: 'Back',
        action: tour.back,
        classes: 'intro-btn intro-btn--back',
      },
      {
        text: 'Next',
        action: tour.next,
        classes: 'intro-btn intro-btn--next',
      },
    ],
  });

  tour.addStep({
    id: 'quotes',
    title: `Daily Quotes`,
    text: `Everse gives you daily inspirational quotes to keep you inspired to make it trough your day!`,
    attachTo: {
      element: '.verse',
      on: 'top',
    },
    classes: 'step-4',
    buttons: [
      {
        text: 'Back',
        action: tour.back,
        classes: 'intro-btn intro-btn--back',
      },
      {
        text: 'Next',
        action: tour.next,
        classes: 'intro-btn intro-btn--next',
      },
    ],
  });

  tour.addStep({
    id: 'tasks',
    title: `Personal Checklist`,
    text: `Create items to your personal checklist by clicking on the input box and start typing! once you're done press enter to save your item to the checklist.`,
    attachTo: {
      element: '.todo',
      on: 'bottom',
    },
    classes: 'step-6',
    buttons: [
      {
        text: 'Got it!',
        action: tour.next,
        classes: 'intro-btn intro-btn--next',
      },
    ],
  });

  localStorage.getItem('Current_intro') !== null ? tour.cancel() : tour.start();
};

/*
Exports kelvinToFahrenheit helper
*/
export const kelvinToFahrenheit = (unitValue) => {
  unitValue = parseFloat(unitValue);
  return `${Math.round((unitValue - 273.15) * 1.8 + 32)}­`;
};

/*
Exports kelvinToCelsius helper
*/
export const kelvinToCelsius = (unitValue) => {
  unitValue = parseFloat(unitValue);
  return `${Math.round(unitValue - 273.15)}`;
};

/*
An array of  materialUI Colors
*/
export const materialColors = [
  {
    redPrimary: '#ef5350',
    redSecondary: '#ec407a',
    purplePrimary: '#ab47bc',
    purpleSecondary: '#7e57c2',
    purpleAlt: '#5c6bc0',
    bluePrimary: '#42a5f5',
    blueSecondary: '#29b6f6',
    greenPrimary: '#26c6da',
    greenSecondary: '#26a69a',
    greenAlt: '#66bb6a',
    green: '#9ccc65',
    darkYellow: '#d4e157',
    lightYellow: '#ffee58',
    lightOrange: '#ffca28',
    darkOrange: '#ffa726',
    deepOrange: '#ff7043',
    greyAlt: '#bcaaa4',
    lightGrey: '#bdbdbd',
    primaryGrey: '#90a4ae',
  },
];

/*
A simple helper to get access all the colors
*/
export const appColors = materialColors[0];

/*
This function returns a random color from materialColors Object if null Color
*/
export const pickRandomColor = (arr) => {
  const getRandomColor = (colors) => {
    const color = Object.keys(colors);
    return colors[color[(color.length * Math.random()) << 0]];
  };
  return !arr ? getRandomColor(materialColors[0]) : getRandomColor(arr);
};

/*
 Get GeoLocation from user
*/

export const requestUserGeoLocation = (acceptReq, rejectedReq) => {
  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(acceptReq, rejectedReq);
  }
};

/*
Validate the users input if it is a url or search query
*/

export const validateOpenNewTab = (url) => {
  const userUrl = validator.isURL(url);
  if (userUrl) {
    window.open(`https://${url}`, '_blank');
  } else window.open(`https://www.google.com/search?q=${url}`, '_blank');
};

/*
Get local usersName data
*/
export const getLocalUser = () => {
  return store.get('user_name')?.username;
};
