import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import MainPage from './Pages/MainPage';



ReactDOM.render(
  <BrowserRouter>
    <MainPage/>
  </BrowserRouter>,document.getElementById('root')
)