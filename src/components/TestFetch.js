import { useState, useEffect } from "react";
import axios from "axios";

function getUrl(limit, offset) {
  return `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
}



const pokemon = {
  id: null,
  name: null,
}

const Fetch = () => {
  const [pokemonData, setPokemonData] = useState([])
  const initialURL = 'https://pokeapi.co/api/v2/pokemon/'


  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      await loadPokemon(response.results);
    }
    fetchData();
  }, [])


  function getPokemon({ url }) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}

async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}
    
const loadPokemon = async (data) => {
  let _pokemonData = await Promise.all(data.map(async pokemon => {
    let pokemonRecord = await getPokemon(pokemon)
    return pokemonRecord
  }))
  setPokemonData(_pokemonData);
}
  
  console.log(pokemonData)
  return (
    <div>
      {pokemonData.map((pokemon, i) => {
        return (<p key={i}><img src={pokemon.sprites.front_default} alt="" /></p>)
      })}

      
    </div>
  )
}

export default TestFetch