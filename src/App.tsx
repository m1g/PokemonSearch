import React, { Component } from 'react'
import PokemonSearch from './components/PokemonSearch';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonSearch name="Miguel" numberOfPokemons={5} />
      </div>
    )
  }
}
