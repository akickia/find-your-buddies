import { Link } from "react-router-dom"
import Button from "../Button"
import continue2 from "../../images/continue2.jpg"


function Continue2() {
  return (
    <div className="events">
      <div><h3>Hmmmm </h3>
      <img className="img" src={continue2} alt="continue" />
      <h4>No Buddy here, you have to keep on going.  </h4>
      </div>
      <Link to="/harry"><Button name="Continue" /></Link> 
      </div>
  )
}

export default Continue2