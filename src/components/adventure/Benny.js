import { Link } from "react-router-dom";
import Button from "../Button"

const Benny = () => {
  
  return (
    <div className="events">

          <h3>You found Benny!</h3>
          <p>Thank you for finding me! I was so lonely!</p>
          <Link to="/choice2"><Button name= "Click to continue"></Button></Link>
    </div>
    
  );
  

  
}

export default Benny