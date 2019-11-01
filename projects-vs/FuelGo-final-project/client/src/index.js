import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom' // has its own context
import CarInfo from "./context/carInfoProvider"


ReactDOM.render(
<BrowserRouter>
    <CarInfo>
        <App />
    </CarInfo>
</BrowserRouter>
,document.getElementById('root'));
