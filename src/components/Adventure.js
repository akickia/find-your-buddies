import { Link } from "react-router-dom";
import Button from "./Button";


const Adventure = () => {
  
  return (
    <div className="container">
      <img style={{width:"200px"}} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" alt="" />
      <h1>Welcome!</h1>
      <h3>You need to find all your buddies to finish the game. </h3>
      <h4>Press the button below to start searching: </h4>
      <div><Link to="/choice1">
            <Button name="START" /> </Link></div>
    </div>
  )
}

export default Adventure