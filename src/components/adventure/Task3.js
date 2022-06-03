import { Link } from "react-router-dom"
import Button from "../Button"

function Task3() {
  return (
    <div className="events">
      <div>
        <h3>You ran into a problem!</h3>
        <p>Solve this riddle to proceed: What gets wet while drying?</p>
      </div>
    <Link to="/penny"><Button name="Continue" /></Link> 
    </div>
  )
}

export default Task3