import ChoicesContext from "../../context/ChoicesContext"
import {useContext} from "react"
import forrest2 from "../../images/forrest2.jpg"

function Winner() {
  const { buddies } = useContext(ChoicesContext);

  return (
    <div className="events">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" alt="" />
        <h1>YAY! YOU FOUND US ALL!!!</h1>
        <br></br>
        <img src={forrest2} className="img" alt="forrest" />
        <br /><br />
        <div className="winnernames">
          {buddies.map((buddies) => ( 
            <h3>{buddies.name}</h3>
          ))}
        </div>
        <div className="winnernames">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png" alt="" />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" alt="" />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="" />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" alt="" />
        </div>
        <h1>CONGRATULATIONS!</h1>
    </div>
  )
}

export default Winner