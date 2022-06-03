import { Link } from "react-router-dom"
import Button from "../Button"

function Task1() {
  return (
    <div className="events">
      <div><h3>You ran into a problem!</h3>
      <p>Solve this riddle to proceed: What has to be broken before you can use it? </p>
      </div>
      <Link to="/task2"><Button name="Continue" /></Link> 
      </div>
  )
}

export default Task1