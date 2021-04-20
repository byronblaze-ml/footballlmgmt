import React from 'react';
import Axios from 'axios';
import { Fragment,useState } from 'react';

import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './Manage.css'

/*
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
*/


function Manage() {
    const [pID, setPID] = useState(0);
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [playerList, setPlayerList] = useState([]);

    const [playerId, setPlayerId] = useState("");
    const [appearances, setAppearances] = useState(0);
    const [goals, setGoals] = useState(0);
    const [assists, setAssists] = useState(0);
    const [red_cards, setRedCards] = useState(0);
    const [playerStatsList, setPlayerStatsList] = useState([]);

    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0)
    const [newCountry, setNewCountry] = useState("");
    const [newPosition, setNewPosition] = useState("");

    const [logList, setLogList] = useState([]);
  
    const addPlayer = () => {
      console.log(name)
      Axios.post('http://localhost:3001/create', {
        player_id: pID,
        name: name,
        age:age,
        country: country,
        position: position
      }).then(() => {
        alert('Player Added Successfully!!');
        console.log('success');
      });
  
    };

    const addStats = () => {
      console.log(name)
      Axios.post('http://localhost:3001/createstats', {
        player_id: playerId,
        appearances:appearances,
        goals: goals,
        assists: assists,
        red_cards: red_cards
      }).then(() => {
        alert('Player Stat Added Successfully!!');
        console.log('success');
      });
  
    };

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

    const deleteLogs = () => {
      Axios.delete(`http://localhost:3001/clearlogs`).then((response) => {
        console.log('deleted');
        alert('Logs Cleared');
          
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

    const deletePlayerStats = (id) => {
      Axios.delete(`http://localhost:3001/deletestats/${id}`).then((response) => {
        setPlayerStatsList(
              playerStatsList.filter((val) => {
              return val.id != id;
          })
          );
      });
    };
         
    const getLogs = () => {
      Axios.get('http://localhost:3001/logs').then((response) => {
        setLogList(response.data)
      });
    };

    return (
    <div className='Manage'>
    <div className="container text-center">
      <label>Insert Players</label>
      </div>
        <div className="Insert">
            <label>Player Id: </label>
            <input type="number"
                onChange={(event) =>{
                setPID(event.target.value);
                }}
            />
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
        <div className="container text-center">
        <label>Insert Stats</label>
        </div>
        <div className="InsertStats">
        <label>Player ID: </label>
            <input type="number"
                onChange={(event) =>{
                setPlayerId(event.target.value);
                }}
            />
            <label>Appearances: </label>
            <input type="number"
                onChange={(event) =>{
                setAppearances(event.target.value);
                }}
            />
            <label>Goals: </label>
            <input type="text"
                onChange={(event) =>{
                setGoals(event.target.value);
                }}
            />
            <label>Assists: </label>
            <input type="text"
                onChange={(event) =>{
                setAssists(event.target.value);
                }}
            />

            <label>Red Cards: </label>
            <input type="text"
                onChange={(event) =>{
                setRedCards(event.target.value);
                }}
            />
            <button onClick={addStats} >Add Stat</button>
            
        </div>

        {/* Show Tables */}      
        <hr />
        <div className="container text-center">
          <button className='btn btn-success' onClick={getLogs}>Show Logs</button>  
          <button className='btn btn-danger' onClick={deleteLogs}>Clear Logs</button> 
          <hr />
          <div className='logs'>
            <table className="table my-5">
              <thead>
                  <tr>
                      <th>Id</th>
                      <th>Action</th>
                      <th>Time</th>
                      
                  </tr>
              </thead>
              
            {logList.map((val, key) => {
                return (
                    
                    <tbody>
                      <tr key={val.id}>
                          <td>{val.id}</td>
                          <td>{val.action}</td>
                          <td>{val.time}</td>
                          
                      </tr>
                    </tbody>    
                  );
                })
            }
            </table>
          </div>
    </div>

    <Fragment>
        <div className="container text-center">
        <button onClick={showPlayer}>Show All Players</button>  
        <hr />
          <table className="table my-5">
            <thead>
                <tr>
                <th>Player ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Country</th>
                <th>Position</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {playerList.map(val => (
                    <tr key={val.player_id}>
                        <td>{val.player_id}</td>
                        <td>{val.name}</td>
                        <td>{val.age}</td>
                        <td>{val.country}</td>
                        <td>{val.position}</td>
                        <td>
                        <Fragment>
                        <Link to={`/edit/${ val.player_id }`} >
                          <button className="btn btn-warning"  >Edit</button>
                          </Link>
                          <button className='btn btn-danger'
                          onClick={() => {
                            deletePlayer(val.player_id)
                            }}>Delete</button>
                        </Fragment>
                        </td>
                      
                        
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
                <th>Player ID</th>
                <th>Name</th>
                <th>Appearances</th>
                <th>Goals</th>
                <th>Assists</th>
                <th>Red Cards</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {playerStatsList.map(val => (
                    <tr key={val.player_id}>
                        <td>{val.player_id}</td>
                        <td>{val.name}</td>
                        <td>{val.appearances}</td>
                        <td>{val.goals}</td>
                        <td>{val.assists}</td>
                        <td>{val.red_cards}</td>
                        <td>
                          <Fragment>
                          <Link to={`/editstats/${ val.player_id }`} >
                            <button className="btn btn-warning" >Edit</button>
                            </Link>
                            <button className='btn btn-danger'
                             onClick={() => {
                              deletePlayerStats(val.player_id)
                              }} >Delete</button>
                          </Fragment>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>           
                    
                   

                
             

            
    
        </div>
        </Fragment>
        
      </div>
    );
}

export default Manage;

/* 
const getPlayer = () => {
      Axios.get('http://localhost:3001/players').then((response) => {
        setPlayerList(response.data)
      });
    }

    
<button onClick={getPlayer}>Show Players</button>

{playerList.map((val, key) => {
  return <div> {val.name} {val.age} {val.country} {val.position}</div>
})} */