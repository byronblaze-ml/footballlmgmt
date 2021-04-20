import './Search.css';
import Axios from 'axios';
import { useState } from 'react';

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchPosResult, setSearchPosResult] = useState([]);
    const [searchPosTerm, setSearchPosTerm] = useState("");

    const searchPlayer = () => {
        console.log(searchTerm)
        Axios.get(`http://localhost:3001/searchname/?search=${searchTerm}`).then((response) => {
          setSearchResult(response.data)
          console.log(response.data)
        });
    };

    const searchPosition = () => {
        console.log(searchPosTerm)
        Axios.get(`http://localhost:3001/searchposition/?search=${searchPosTerm}`).then((response) => {
          setSearchPosResult(response.data)
          console.log(response.data)
        });
    };

    return (
        <div className="container text-center">
            <h1 className="my-5">Search Player</h1>
            <input type='text' placeholder='Search by name..'
            value={searchTerm}
            className="form-control"
                onChange={(event) => {
                setSearchTerm(event.target.value); 
                }}/>
            <button className='btn btn-success' onClick={searchPlayer}>Search</button> 
            <hr />
            <div className='searchResult'> 
                <table className="table my-5">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Country</th>
                            <th>Position</th>
                            <th>Appearances</th>
                            <th>Goals</th>
                            <th>Assists</th>
                            <th>Red Cards</th>
                        </tr>
                    </thead>
                    {searchResult.map((val, key) => {
                        return(
                            
                            <tbody>
                                <tr key={val.id}>
                                    <td>{val.name}</td>
                                    <td>{val.age}</td>
                                    <td>{val.country}</td>
                                    <td>{val.position}</td>
                                    <td>{val.appearances}</td>
                                    <td>{val.goals}</td>
                                    <td>{val.assists}</td>
                                    <td>{val.red_cards}</td>
                                </tr>
                            </tbody>
                    
                        );
                    })}
                </table>
                        
                
            </div>
        
            <h1 className="my-5">Search Player by Position</h1>
            <input type='text' placeholder='Search by position..'
            value={searchPosTerm}
            className="form-control"
                onChange={(event) => {
                setSearchPosTerm(event.target.value); 
                }}/>
            <button className='btn btn-success' onClick={searchPosition}>Search</button> 
            <hr />
            <div className='searchPosResult'> 
                <table className="table my-5">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Country</th>
                        <th>Position</th>
                        <th>Appearances</th>
                        <th>Goals</th>
                        <th>Assists</th>
                        <th>Red Cards</th>
                        </tr>
                    </thead>
                    {searchPosResult.map((val, key) => {
                        
                        return(
                        
                            <tbody>
                                <tr key={val.id}>
                                    <td>{val.name}</td>
                                    <td>{val.age}</td>
                                    <td>{val.country}</td>
                                    <td>{val.position}</td>
                                    <td>{val.appearances}</td>
                                    <td>{val.goals}</td>
                                    <td>{val.assists}</td>
                                    <td>{val.red_cards}</td>
                                    
                                </tr>
                            </tbody>
                            );
                        
                        })}
                    </table>
                    
                
            </div>                    
    
</div>
    );
}

export default Search;

//<input type='text' placeholder='Search by position..'/>