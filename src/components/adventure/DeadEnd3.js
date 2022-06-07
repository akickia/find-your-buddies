import { Link } from "react-router-dom"
import Button from "../Button"

function DeadEnd3() {
  return (
    <div className="events">
      <div><h3>Oh no! </h3>
      <h4>It's a dead end! You have to turn back! </h4>
      </div>
      <Link to="/choice3"><Button name="Go back" /></Link> 
      </div>
  )
}

export default DeadEnd3