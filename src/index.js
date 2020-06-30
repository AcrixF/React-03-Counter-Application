import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp';


const divSaludo = document.querySelector('#root');

ReactDOM.render(<CounterApp value={12.34}/>, divSaludo);