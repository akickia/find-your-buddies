import { Link } from "react-router-dom";
import { useState } from "react";

import Button from "../Button"

const Penny = () => {
  let [addBuddy, setAddBuddy] = useState([])

  return (
    <div className="events">
      <h3>You found Penny!</h3>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" alt="" />
      <p>Thank you so much!</p>
      <div><button onClick={() => setAddBuddy(addBuddy ++)}>Collect me!</button></div>
      <p>You have found all of your buddies!</p>
      <Link to="/winner"><Button name="Click to continue"></Button></Link>    
    </div>
  );
}

export default Penny