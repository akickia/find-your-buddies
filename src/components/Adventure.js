import Choice1 from "./adventure/Choice1"
<<<<<<< HEAD
import Button from "./Button"
import { useState } from "react";


=======
import Fetch from "./Fetch"
>>>>>>> b8c164d59d640b7ef2ca29ec1de114e4e3ce3783

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
      <Fetch />
    
      <h1>Welcome!</h1>
      <h3>You need to find all your buddies to finnish the game. Make a choise below to start searching: </h3>
      <div><Choice1 /></div>
      <p>{addBuddy}</p>
      <button onClick={() => setAddBuddy(addBuddy ++)}>Collect me!</button>
    </div>
    
  )
}

export default Adventure