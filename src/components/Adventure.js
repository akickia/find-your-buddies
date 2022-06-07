import Choice1 from "./adventure/Choice1"

import { useState } from "react";
import Fetch from "./Fetch";


import { v4 as uuidv4 } from "uuid";

const Adventure = () => {
  let [addBuddy, setAddBuddy] = useState("")
 

  const [inputValue, setInputValue] = useState("");
  const [buddies, setBuddies] = useState([]);

  const addBuddies = (e) => {
    e.preventDefault();

    if (addBuddy.trim() === "") return;

    setBuddies([
      ...buddies,
      {
        text: addBuddy,
        id: uuidv4(),
      },
    ]);

    setAddBuddy("");
  };




  


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
      <button value={`You found Penny!`} onClick={(e) => setAddBuddy(e.target.value)}>Collect me!</button>
     
      
      
    
    </div>
    
  )
}

export default Adventure