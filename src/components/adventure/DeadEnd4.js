import { Link } from "react-router-dom"
import Button from "../Button"

function DeadEnd4() {
  return (
    <div className="events">
      <div><h3> </h3>
        <h4>Nothing here! </h4>
      </div>
      <Link to="/choice4"><Button name="Go back" /></Link> 
    </div>
  )
}

export default DeadEnd4