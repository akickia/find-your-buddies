import { useState, useEffect } from "react";
import Button from "./Button"

const FindBuddy = () => {
  const [buddies, setBuddies] = useState([])

  useEffect(() => {
    fetchBuddies();
  }, []);
  

  const fetchBuddies = async () => {
    const response = await fetch("/buddy");
    const data = await response.json();

    setBuddies(data);
  };

  
  return (
    <div>
          {buddies.map((buddies) => ( 
          <div><h3>You found {buddies.name}!</h3>
          <p>{buddies.info}</p>
          <Button name= "Click to continue" link="/ShowChoises"></Button>
          </div>
          ))}
          
    </div>
    
  );
  

  
}

export default FindBuddy