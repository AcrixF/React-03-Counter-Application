import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

//import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp';

const divSaludo = document.querySelector('#root');

ReactDOM.render(<CounterApp />, divSaludo);
//ReactDOM.render(<PrimeraApp greet="Brenda Marlen"/>, divSaludo);