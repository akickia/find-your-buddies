import ChoicesContext from "../../context/ChoicesContext"
import {useContext} from "react"

function Winner() {
  const { buddies } = useContext(ChoicesContext);

  return (
    <div className="events">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" alt="" />
        <h1>YAY! YOU ARE THE WINNER!!!</h1>
        <h2>You found</h2>{buddies.map((buddies) => ( 
        <h3>{buddies.name}</h3>
          
        ))}
        <h2>CONGRATULATIONS!</h2>
   
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="" />
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" alt="" />
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" alt="" />
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png" alt="" />
    </div>
  )
}

export default Winner