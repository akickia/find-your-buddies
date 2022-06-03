import { Link } from "react-router-dom"
import Button from "../Button"

function Choice2() {
  return (
    <div className="events">
      <h3>The road splits, where do you want to go?</h3>
    <Link to="/benny">
    <Button name="Go right" /> </Link>
    <Link to="/harry">
    <Button name="Go straight ahead" /></Link>
</div>
 )
}

export default Choice2