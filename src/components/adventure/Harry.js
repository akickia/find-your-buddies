import { Link } from "react-router-dom";
import Button from "../Button"

const Harry = () => {

  return (
    <div className="events">
      <h3>You found Harry!</h3>
      <p>Thank you for finding me! It's so good to see you!</p>
      <div><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="" /></div>
      <Button name= "Collect me"></Button>
      <p>You have found 3 buddies so far, you have 1 left</p>
      <Link to="/choice4"><Button name= "Click to continue"></Button></Link>
    </div>
  );
}

export default Harry