import { useState, useEffect } from "react"


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
    {pokemon.name}
    </>
  )
}

export default Fetch