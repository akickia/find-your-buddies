import { Link } from "react-router-dom";

import Button from "../Button"

const Penny = () => {

  return (
    <div className="events">
      <h3>You found Penny!</h3>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" alt="" />
      <p>Thank you so much!</p>
      <p>You have found all of your buddies!</p>
      <Link to="/winner"><Button name="Click to continue"></Button></Link>    
    </div>
  );
}

export default Penny