import { Link } from "react-router-dom"
import Button from "../Button"
import continue1 from "../../images/continue.jpg"

function Continue() {
  return (
    <div className="events">
      <div>
        <h3>Hmmmm </h3>
        <img className="img" src={continue1} alt="continue" />
        <h4>No Buddy here, you have to keep on going.  </h4>
      </div>
      <Link to="/mary"><Button name="Continue" /></Link> 
    </div>
  )
}

export default Continue