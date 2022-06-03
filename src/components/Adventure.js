import Choice1 from "./adventure/Choice1"


const Adventure = () => {
  return (
    <div className="container">

    
      <h1>Welcome!</h1>
      <h3>Please choose your character to start the adventure: </h3>
      <h5>You need to find all your buddies to finnish the game. Make a choise below to start searching: </h5>
      <div><Choice1 /></div>
    </div>
    
  )
}

export default Adventure