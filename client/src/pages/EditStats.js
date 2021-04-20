import React from 'react';
import Axios from 'axios';
import { Fragment,useState } from 'react';
import { useParams } from "react-router";


function EditStats() {

     
    let { id } = useParams();
    const [newAppearances, setNewAppearances] = useState(0);
    const [newGoals, setNewGoals] = useState(0)
    const [newAssists, setNewAssists] = useState(0);
    const [newRedCards, setNewRedCards] = useState(0);
    const [playerStatsList, setPlayerStatsList] = useState([]);
    
    

    const updateStats = () => { 
        Axios.put("http://localhost:3001/updatestats", { appearances: newAppearances,
        goals: newGoals, assists: newAssists,red_cards: newRedCards, 
        player_id: id }).then(
          (response) => {
            setPlayerStatsList(
              playerStatsList.map((val) => {
                return val.player_id == id
                  ? {
                      player_id: val.id,
                      appearances: val.appearances,
                      goals: val.goals,
                      assists: val.assists,
                      red_cards: val.red_cards,
                      
                    }
                  : val;
              })
            );
            alert('Updated Stats!')
          }
        );
      };
    
    return (
        
      <div className='container'>
          <h2>Edit Stats</h2>

        <form >
          <table>
            <tbody>
              <tr>
                <td>Appearances</td>
                <td>
                    <input type="number" className="form-control"  name="appearances" 
                    onChange={(event) => {
                    setNewAppearances(event.target.value);
                    }}  required />
                </td>
              </tr>
              <tr>
                <td>Goals</td>
                <td>
                    <input type="number" className="form-control"  name="goals"
                      onChange={(event) => {
                    setNewGoals(event.target.value);
                        }}  required />
                </td>
              </tr>
              <tr>
                  <td>Assists</td>
                  <td>
                      <input type="number" className="form-control"  name="assists"
                        onChange={(event) => {
                      setNewAssists(event.target.value);
                      }} required />
                  </td>
              </tr>
              <tr>
                  <td>Red Cards</td>
                  <td>
                      <input type="number" className="form-control"  name="redCards"
                      onChange={(event) => {
                      setNewRedCards(event.target.value);
                      }}  required />
                  </td>
              </tr>
                    <tr>
                        <td></td>
                        <td>
                        <input onClick={updateStats} value="Edit" className="btn btn-primary" />
                        </td>
                    </tr>
                </tbody>
            </table>
          </form>

      </div>
    );
}

export default EditStats;

/*
const [currStatList, setCurrStatList] = useState([]);

    const getStats = () => {
      Axios.get(`http://localhost:3001/searchid/?search=${id}`).then((response) => {
        setCurrStatList(response.data)
        console.log(response.data)
      });
    };
*/