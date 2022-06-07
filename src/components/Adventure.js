import Choice1 from "./adventure/Choice1"
import Button from "./Button"
import { useState } from "react";



const Adventure = () => {
  let [addBuddy, setAddBuddy] = useState(0)

  // const handleCollect = (e) => {
  //   setAddBuddy(addBuddy+1)
  //   console.log(addBuddy)
  // }



  // const handleCollect = (e) => {

  //   const id = e.target.id
  //   const value = e.target.value

  //       setAddBuddy({...addBuddy, [id]: value});

  //   console.log(addBuddy);

  // }
  
  return (
    <div className="container">

    
      <h1>Welcome!</h1>
      <h3>Please choose your character to start the adventure: </h3>
      <h5>You need to find all your buddies to finnish the game. Make a choise below to start searching: </h5>
      <div><Choice1 /></div>
      <p>{addBuddy}</p>
      <button onClick={() => setAddBuddy(addBuddy ++)}>Collect me!</button>
    </div>
    
  )
}

export default Adventure