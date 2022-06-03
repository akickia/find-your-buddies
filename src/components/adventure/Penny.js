import { Link } from "react-router-dom";
import Button from "../Button"

const Penny = () => {


  
  return (
    <div className="events">

          <h3>You found Penny!</h3>
          <p>Yay! I see that you have found us all now, congratulations! Now you can finnish the game - press the button!</p>
          <Link to="/winner"><Button name="Click to continue"></Button></Link>
    </div>
    
  );
  

  
}

export default Penny