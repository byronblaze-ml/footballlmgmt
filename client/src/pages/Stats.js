import React from 'react';
import Axios from 'axios';
import { Fragment, useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './Stats.css'

function Stats() {

    const [playerList, setPlayerList] = useState([]);
    const [playerStatsList, setPlayerStatsList] = useState([]);
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0)
    const [newCountry, setNewCountry] = useState("");
    const [newPosition, setNewPosition] = useState("");
    
    
    const showPlayer = () => {
      Axios.get('http://localhost:3001/players').then((response) => {
        setPlayerList(response.data)
      });
    };

    const showPlayerStats = () => {
        Axios.get('http://localhost:3001/playerstats').then((response) => {
          setPlayerStatsList(response.data)
        });
      };

    const updatePlayer = (id) => {
        Axios.put("http://localhost:3001/update", { name: newName,age: newAge,
        country: newCountry,position: newPosition, id: id }).then(
          (response) => {
            setPlayerList(
              playerList.map((val) => {
                return val.id == id
                  ? {
                      id: val.id,
                      name: val.name,
                      age: val.age,
                      country: val.country,
                      position: val.position,
                      
                    }
                  : val;
              })
            );
          }
        );
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
        <Fragment>
        <div className="container text-center">
        <button onClick={showPlayer}>Show All Players</button>  
        <hr />
        

                    <table className="table my-5">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Country</th>
                            <th>Position</th>
                            </tr>
                        </thead>
                        <tbody>
                            {playerList.map(val => (
                                <tr key={val.id}>
                                    <td>{val.name}</td>
                                    <td>{val.age}</td>
                                    <td>{val.country}</td>
                                    <td>{val.position}</td>
                                </tr>
                            ))}
                        </tbody>
                </table>
        
        <hr />
        <button onClick={showPlayerStats}>Show Player Stats</button>  
        <hr /> 
        <table className="table my-5">
            <thead>
                <tr>
                <th>Name</th>
                <th>Appearances</th>
                <th>Goals</th>
                <th>Assists</th>
                <th>Red Cards</th>
                </tr>
            </thead>
            <tbody>
                {playerStatsList.map(val => (
                    <tr key={val.id}>
                        <td>{val.name}</td>
                        <td>{val.appearances}</td>
                        <td>{val.goals}</td>
                        <td>{val.assists}</td>
                        <td>{val.red_cards}</td>
                    </tr>
                ))}
            </tbody>
        </table>           
                    
                   

                
             

            
    
        </div>
        </Fragment>
    );
    
}

export default Stats;

/* 
<h3>Name: {val.name}</h3>
                        <h3>Age: {val.age}</h3>
                        <h3>Country: {val.country}</h3>
                        <h3>Position: {val.position}</h3>

<div className='playerStats'> 

 <div>
                        {" "}
                        <input type='text' placeholder='Name' 
                        onChange={(event) => {
                            setNewName(event.target.value);
                        }}  />
                        <input type='number' placeholder='Age'
                            onChange={(event) => {
                            setNewAge(event.target.value);
                        }}
                        />
                        <input type='text' placeholder='Country'
                            onChange={(event) => {
                            setNewCountry(event.target.value);
                        }}
                        />
                        <input type='text' placeholder='Position'
                            onChange={(event) => {
                            setNewPosition(event.target.value);
                        }}
                        />
                        <button 
                        onClick={() => {
                        updatePlayer(val.id);
                        }}>Update</button>
                    </div>
                    
                    <div> 
                        <button onClick={() => {
                            deletePlayer(val.id)
                        }}>Delete</button> 
                    </div>
                        */

