import './App.css';
import Navbar from './components/Navbar'
import Axios from 'axios';
import { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Stats from './pages/Stats';
import Login from './pages/Login';

function App() {

  return (
    <>
    <Navbar />
    <Router>
      <Route path='/' exact render={() => <Home />} />
      <Route path='/calendar' exact render={() => <Calendar />} />
      <Route path='/stats' exact render={() => <Stats />} />
      <Route path='/login' exact render={() => <Login />} />

    </Router>
      </>
  );
}

export default App;
