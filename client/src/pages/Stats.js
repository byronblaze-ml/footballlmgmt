import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './Stats.css'

function Stats() {

    const [playerList, setPlayerList] = useState([]);
  
    const getPlayer = () => {
      Axios.get('http://localhost:3001/players').then((response) => {
        setPlayerList(response.data)
      });
    };

    const deletePlayer = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
            setPlayerList(
                playerList.filter((val) => {
                return val.id != id;
            })
            );
        });
    };

    return (
    <div className='Stats'>
        <button onClick={getPlayer}>Show Players</button>  
        <hr />
        {playerList.map((val, key) => {
            return (
                <div className='playerStats'> 
                    <div>
                        <h3>Name: {val.name}</h3>
                        <h3>Age: {val.age}</h3>
                        <h3>Country: {val.country}</h3>
                        <h3>Position: {val.position}</h3>
                    </div>
                    <div> 
                        <button onClick={() => {
                            deletePlayer(val.id)
                        }}>Delete</button> 
                    </div>
                </div>
                
             
            );
            
        })} 

        </div>
    );
}

export default Stats;