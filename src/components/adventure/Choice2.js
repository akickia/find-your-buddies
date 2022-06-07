import { Link } from "react-router-dom"
import Button from "../Button"

function Choice2() {
  return (
    <div className="events">
      <h3>The road splits again, where do you want to go?</h3>
    <Link to="/continue">
    <Button name="Go left" /> </Link>
    <Link to="/deadend2">
    <Button name="Go straight ahead" /></Link>
    <Link to="/continue"><Button name="Go right" /></Link>
</div>
 )
}

export default Choice2