import { useState, useEffect } from "react"

const pokemon = {
  id: null,
  name: null,
}

const Fetch = () => {
  const [pokemon, setPokemon] = useState([]);
 
  const getPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/5/`);
      const data = await response.json();
      console.log(data)
      setPokemon(data)
    }
    
    useEffect (() => {
      getPokemon();
    }, []);
  
  
  return (
    <>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" alt="" />
    </>
  )
}

export default Fetch