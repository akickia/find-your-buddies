import { Link } from "react-router-dom"
import Button from "../Button"
import dear from "../../images/dear.jpg"

function DeadEnd2() {
  return (
    <div className="events">
      <div><h3>Oups! </h3>
      <h4>Dont' scare the dear! You have to go back!</h4>
      <img className="img" src={dear} alt="dear" />
      </div>
      <Link to="/choice2"><Button name="Go back" /></Link> 
      </div>
  )
}

export default DeadEnd2