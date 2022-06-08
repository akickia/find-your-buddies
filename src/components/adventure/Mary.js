import { Link } from "react-router-dom";
import Button from "../Button"

const Mary = () => {

  return (
    <div className="events">
      <h3>You found Mary!</h3>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" alt="" />
      <p>Thank you for finding me! I was really lost!</p>
      <p>You have found 2 buddies so far, you have 2 left</p>
      <Link to="/choice3"><Button name= "Click to continue"></Button></Link>
    </div>
  );
}

export default Mary