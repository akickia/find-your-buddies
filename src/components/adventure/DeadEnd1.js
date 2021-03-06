import { Link } from "react-router-dom"
import Button from "../Button"
import deadend from "../../images/deadend.jpg"

function DeadEnd1() {
  return (
    <div className="events">
      <div>
        <h3>Oh no! </h3>
        <img className="img" src={deadend} alt="deadend" />
        <h4>It's a dead end! You have to turn back! </h4>
      </div>
      <Link to="/choice1"><Button name="Go back" /></Link> 
    </div>
  )
}

export default DeadEnd1