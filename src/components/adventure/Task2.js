import { Link } from "react-router-dom"
import Button from "../Button"

function Task2() {
  return (
    <div className="events">
          <div><h3>You ran into a problem!</h3>
      <p>Solve this riddle to proceed: What month of the year has 28 days?</p>
      </div>
    <Link to="/mary"><Button name="Continue" /></Link> 
    </div>
  )
}

export default Task2