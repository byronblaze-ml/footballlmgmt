import React from 'react';
import Axios from 'axios';
import { Fragment,useState } from 'react';
import { useParams } from "react-router";


function Edit() {

      
     
    let { id } = useParams();
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0)
    const [newCountry, setNewCountry] = useState("");
    const [newPosition, setNewPosition] = useState("");
    const [playerList, setPlayerList] = useState([]);

    const updatePlayer = () => { 
        Axios.put("http://localhost:3001/update", { name: newName,age: newAge,
        country: newCountry,position: newPosition, player_id: id }).then(
          (response) => {
            setPlayerList(
              playerList.map((val) => {
                return val.player_id == id
                  ? {
                      player_id: val.id,
                      name: val.name,
                      age: val.age,
                      country: val.country,
                      position: val.position,
                      
                    }
                  : val;
              })
            );
            alert('Updated Player!')
          }
        );
      };
      
    return (
        
        <div className='container'>
            <h2>Edit</h2>
            

         <form >
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" className="form-control"  name="name" 
                                onChange={(event) => {
                                setNewName(event.target.value);
                                }}  required />
                            </td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>
                                <input type="number" className="form-control"  name="age"
                                 onChange={(event) => {
                                setNewAge(event.target.value);
                                    }}  required />
                            </td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td>
                                <input type="text" className="form-control"  name="country"
                                 onChange={(event) => {
                                setNewCountry(event.target.value);
                                }} required />
                            </td>
                        </tr>
                        <tr>
                            <td>Position</td>
                            <td>
                                <input type="text" className="form-control"  name="position"
                                onChange={(event) => {
                                setNewPosition(event.target.value);
                                }}  required />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input onClick={updatePlayer} value="Edit" className="btn btn-primary" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

        </div>
    );
}

export default Edit;