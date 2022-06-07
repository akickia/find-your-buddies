import { Link } from "react-router-dom";
import Button from "../Button"

const Benny = () => {
  
  return (
    <div className="events">

          <h3>You found Benny!</h3>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png" alt="" />
          <p>Thank you for finding me! I was so lonely!</p>
          <Button name= "Collect me"></Button>
          <Link to="/choice2"><Button name= "Click to continue"></Button></Link>
    </div>
    
  );
  

  
}

export default Benny