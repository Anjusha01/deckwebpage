import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Home } from './Home';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Technology from './Technology';
import { Navbar } from 'react-bootstrap';
import Navabar from './Navigation';
import Ideas from './Ideas';
import Login from './Login';
import Register from './Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navabar/>}>
            <Route index element={<Home/>}></Route>
              <Route path='Technology' element={<Technology/>} ></Route>
              <Route path='Ideas' element={<Ideas/>}></Route>
              <Route path='Login' element={<Login/>}></Route>
              <Route path='Register' element={<Register/>}></Route>
          </Route>
          
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
