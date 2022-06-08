import { Link } from "react-router-dom"
import Button from "../Button"
import forrest from "../../images/forrest.jpg"


function DeadEnd3() {
  return (
    <div className="events">
      <div><h3>Oh no! </h3>
      <h4>You are lost! You have to turn back! </h4>
      <img className="img" src={forrest} alt="forrest" />
      </div>
      <Link to="/choice3"><Button name="Go back" /></Link> 
    </div>
  )
}

export default DeadEnd3