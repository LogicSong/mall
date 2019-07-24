import React from 'react';
import ReactDom from 'react-dom';

import 'font-awesome/css/font-awesome.min.css';
import './style.css';
import './style.scss';
ReactDom.render(
    
    <div>
        <h1>
        Hello World!
        </h1>
        <i className='fa fa-spinner fa-pulse'></i>
    </div>,
    document.getElementById('app')
);