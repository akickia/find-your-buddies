import { Link } from "react-router-dom"
import Button from "../Button"
import cave from "../../images/cave.jpg"


function Choice4() {
  return (
    <div className="events">
      <h3>You found a cave, what do you want to do?</h3>
      <img src={cave} className="img" alt="cave" />
      <div>
        <Link to="/penny">
        <Button name="Go past the cave" /> </Link>
        <Link to="/deadend4">
        <Button name="Look in the cave" /></Link>
      </div>
    </div>
  )
}

export default Choice4