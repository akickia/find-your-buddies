import { Link } from "react-router-dom";
import Button from "../Button"

const Benny = () => {
  
  return (
    <div className="events">
      <h3>You found Benny!</h3>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png" alt="" />
      <h4>Thank you for finding me! I was so lonely!</h4>
      <Button name= "Collect me"></Button>
      <p>You have found 1 buddy so far, you have 3 left</p>
      <Link to="/choice2"><Button name= "Click to continue"></Button></Link>
    </div>
  );
}

export default Benny