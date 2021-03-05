import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './fonts/Alata-Regular.ttf';
import 'antd/dist/antd.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import './styles.scss';

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
