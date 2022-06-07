import { Link } from "react-router-dom";
import Button from "../Button"

import { useState } from "react";
import ChoicesContext from "../../context/ChoicesContext";



const Penny = () => {
  let [addBuddy, setAddBuddy] = useState(0)


  
  return (
    <div className="events">

          <h3>You found Penny!</h3>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" alt="" />
          <p>Yay! I see that you have found us all now, congratulations! Now you can finnish the game - press the button!</p>
          <p>{addBuddy}</p>
          <button onClick={() => setAddBuddy(addBuddy ++)}>Collect me!</button>
          <Link to="/winner"><Button name="Click to continue"></Button></Link>
          
    </div>
    
  );
  

  
}

export default Penny