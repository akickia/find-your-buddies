import { Link } from "react-router-dom";
import Button from "../Button"

const Mary = () => {


  return (
    <div className="events">

          <h3>You found Mary!</h3>
          <p>Thank you for finding me! I was really lost!</p>
          <p>What do you want to do now?</p>
          <Link to="/choice1"><Button name= "Click to find more friends"></Button></Link>
          <Link to="/task3"><Button name= "Click to continue"></Button></Link>

    </div>
    
  );
  

  
}
export default Mary