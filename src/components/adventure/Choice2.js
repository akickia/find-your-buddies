import { Link } from "react-router-dom"
import Button from "../Button"
import crossroads2 from "../../images/crossroads2.jpg"

function Choice2() {
  return (
    <div className="events">
      <h3>The road splits again, where do you want to go?</h3>
    <img className="img" src={crossroads2} alt="crossroads" />
    <div>
    <Link to="/continue">
    <Button name="Go left" /> </Link>
    <Link to="/deadend2">
    <Button name="Go straight ahead" /></Link>
    <Link to="/continue"><Button name="Go right" /></Link>
    </div>
</div>
 )
}

export default Choice2