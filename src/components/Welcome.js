import Button from "./Button"
import { Link } from "react-router-dom"

const Welcome = () => {
  return (
  <>
  <div className="container">
    <h1>Welcome to Find Your Buddies! </h1>
    <div>
      <h3>A basic turn based game made by Kicki, Åsa and Caroline in the course IT:Tech for women at Sundsgårdens folkhögskola. </h3>
      <h5>The game idea is to search in the world of the game to find all of your Buddies.</h5>
      <h5>When all Buddies are found you have won the game. </h5>
    </div>
    <div className="cards" style={{display: "flex"}}>
      <div className="card">
        <p>Start a new account</p>
        <Link to="/signup"><Button name="Sign up"></Button></Link>        
      </div>
      <div className="card">
        <p>Log in to your account</p>
        <Link to="/login"><Button name="Log in"></Button></Link>        
      </div>
    </div>
  </div>
  </>
  )
}

export default Welcome