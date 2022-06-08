import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Fetch from "./Fetch";
import Button from "./Button";


const Adventure = (buddieCount) => {
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
      <h3>You need to find all your buddies to finnish the game. </h3>
      <h4>Press the button below to start searching: </h4>
      <div><Link to="/choice1">
            <Button name="START" /> </Link></div>
      <p>{addBuddy}</p>
      <button value={`You found Penny!`} onClick={(e) => setAddBuddy(e.target.value)}>Collect me!</button>
    </div>
  )
}

export default Adventure