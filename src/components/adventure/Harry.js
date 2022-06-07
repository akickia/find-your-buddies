import { Link } from "react-router-dom";
import Button from "../Button"


const Harry = () => {


  
  return (
    <div className="events">

          <h3>You found Harry!</h3>
          <p>Thank you for finding me! It's so good to see you!</p>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="" />
          <Link to="/task1"><Button name= "Click to continue"></Button></Link>
    </div>
    
  );
  

  
}

export default Harry