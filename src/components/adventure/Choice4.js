import { Link } from "react-router-dom"
import Button from "../Button"

function Choice4() {
  return (
    <div className="events">
      <h3>You found a cave, what do you want to do?</h3>
    <Link to="/penny">
    <Button name="Go past the cave" /> </Link>
    <Link to="/deadend4">
    <Button name="Look in the cave" /></Link>
</div>
  )
}

export default Choice4