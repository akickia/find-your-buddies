import { Link } from "react-router-dom"
import Button from "../Button"
import bridge from "../../images/bridge.jpg"


function Choice3() {
  return (
    <div className="events">
      <h3>There is a bridge here, where do you want to go?</h3>
      <img className="img" src={bridge} alt="bridge" />
      <div>    
        <Link to="/continue2">
        <Button name="Over the bridge" /> </Link>
        <Link to="/deadend3">
        <Button name="Under the bridge" /></Link>
      </div>
    </div>
  )
}

export default Choice3