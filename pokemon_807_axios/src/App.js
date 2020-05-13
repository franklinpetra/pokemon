import React, { useState } from 'react';
import axios from 'axios';
import ListPokemon from "./components/ListPokemon";
import './App.css';

function App() {
  const[list, setListState]= useState([])
  const clickHandler = () =>{
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')

      .then(resp => {
        setListState(resp.data.results)
      })
      .catch(err => {
      })
  }
    return(
      <div className="App">
        <button onClick ={clickHandler}>Fetch Pokemon</button>
        <ListPokemon list={list}/>
      </div>
    );   
}
export default App;
