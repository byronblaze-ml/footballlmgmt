import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './Home.css'



function Home() {
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

    return (
    <div className='Home'>
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
        <hr />
       
        
      </div>
    );
}

export default Home;

/* <button onClick={getPlayer}>Show Players</button>

{playerList.map((val, key) => {
  return <div> {val.name} {val.age} {val.country} {val.position}</div>
})} */