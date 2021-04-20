import './App.css';
import Navbar from './components/Navbar'
import Axios from 'axios';
import { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import Manage from './pages/Manage';
import Stats from './pages/Stats';
import Login from './pages/Login';
import Search from './pages/Search';
import Edit from './pages/Edit';
import EditStats from './pages/EditStats'
function App() {


  return (
    <>
    <Navbar />
    <Router>
      <Route path='/home' exact render={() => <Home />} />
      <Route path='/search' exact render={() => <Search />} />
      <Route path='/manage' exact render={() => <Manage />} />
      <Route path='/edit/:id' exact render={() => <Edit />} />
      <Route path='/editstats/:id' exact render={() => <EditStats />} />
      <Route path='/stats' exact render={() => <Stats />} />
      <Route path='/' exact render={() => <Login />} />


    </Router>
    </>
  );
}

export default App;
