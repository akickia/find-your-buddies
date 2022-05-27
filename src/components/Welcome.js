import Button from "./Button"


const Welcome = () => {
  return (
  <>
  <div className="container">
    <h1>Welcome to Find Your Buddies! </h1>
    <div>
      <h3>A basic turn based game made by Kicki, Åsa and Caroline in the course IT:Tech for women at Sundsgårdens folkhögskola. </h3>
      <h5>The game idea is that you choose a caracter and then search in the world of the game to find all of your Buddies. When all Buddies are found you have won the game. </h5>
    </div>
    
      <div className="cards" style={{display: "flex"}}>
        <div className="card">
          <p>Start a new account</p>
          <Button name="Sign up" link="#" />
        </div>
        <div className="card">
          <p style={{fontWeight: "bold"}}>START THE ADVENTURE!</p>
          <Button name="Start" link="#" />
        </div>
        <div className="card">
          <p>Log in to your account</p>
          <Button name="Log in" link="#" />
        </div>
      </div>
  </div>
  </>
  )
}

export default Welcome