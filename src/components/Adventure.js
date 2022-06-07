import Choice1 from "./adventure/Choice1"
import Fetch from "./Fetch"

const Adventure = () => {
  return (
    <div className="container">
      <Fetch />
    
      <h1>Welcome!</h1>
      <h3>You need to find all your buddies to finnish the game. Make a choise below to start searching: </h3>
      <div><Choice1 /></div>
    </div>
    
  )
}

export default Adventure