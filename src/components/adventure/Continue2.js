import { Link } from "react-router-dom"
import Button from "../Button"

function Continue2() {
  return (
    <div className="events">
      <div><h3>Hmmmm </h3>
        <h4>No Buddy here, you have to keep on going.</h4>
      </div>
      <Link to="/harry"><Button name="Continue" /></Link> 
    </div>
  )
}

export default Continue2