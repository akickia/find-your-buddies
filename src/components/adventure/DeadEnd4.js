import { Link } from "react-router-dom"
import Button from "../Button"
import eyes from "../../images/eyes.jpg"

function DeadEnd4() {
  return (
    <div className="black-cave">
      <div><h3> </h3>
      <h4>Nothing here! </h4>
      <img className="img" src={eyes} alt="eyes" />
      </div>
      <Link to="/choice4"><Button name="Go back" /></Link> 
    </div>
  )
}

export default DeadEnd4