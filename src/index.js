import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css'

const mainBox = ReactDOM.createRoot(document.querySelector('#root'));
mainBox.render(
  <div className='container'>
    <App/>
  </div>
);
