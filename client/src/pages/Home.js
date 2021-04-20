import React from 'react';
import Axios from 'axios';
import {useEffect, useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './Home.css'



function Home() {
    const [logList, setLogList] = useState([]);
    
    useEffect(() => {
      if (!localStorage.getItem("loggedIn")) {
        localStorage.setItem("loggedIn", false);
      }
    }, []);


    const getLogs = () => {
      Axios.get('http://localhost:3001/logs').then((response) => {
        setLogList(response.data)
      });
    };


    return (
      <div className='landing'>
        <div  className="container text-center">
          
          <div className='info'>
          <p><h1>Football Player Management System</h1></p>
          <p><h3>Ishdeep Singh Chadha</h3></p>
          <p><h3>Pradeep Kumar G</h3></p>
          <p><h3>Vidit Mittal</h3></p>
          </div>
          </div>
    </div>
    );

  }

export default Home;

/* 
const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
  
    const [playerList, setPlayerList] = useState([]);
    
  
    const addPlayer = () => {
      console.log(name)
      Axios.post('http://localhost:3001/create', {
        name: name,
        age:age,
        country: country,
        position: position
      }).then(() => {
        alert('Player Added Successfully!!');
        console.log('success');
      });
  
    };
const getPlayer = () => {
      Axios.get('http://localhost:3001/players').then((response) => {
        setPlayerList(response.data)
      });
    }
<div className="info">
        <label>Name: </label>
            <input type="text"
                onChange={(event) =>{
                setName(event.target.value);
                }}
            />
            <label>Age: </label>
            <input type="number"
                onChange={(event) =>{
                setAge(event.target.value);
                }}
            />
            <label>Country: </label>
            <input type="text"
                onChange={(event) =>{
                setCountry(event.target.value);
                }}
            />
            <label>Position: </label>
            <input type="text"
                onChange={(event) =>{
                setPosition(event.target.value);
                }}
            />
            <button onClick={addPlayer} >Add Player</button>
            
        </div>
    
<button onClick={getPlayer}>Show Players</button>

{playerList.map((val, key) => {
  return <div> {val.name} {val.age} {val.country} {val.position}</div>
})} */