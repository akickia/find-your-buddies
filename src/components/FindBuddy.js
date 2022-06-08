import Button from "./Button"

import { useContext } from "react";
import ChoicesContext from "../context/ChoicesContext";

const FindBuddy = () => {
  const { buddies } = useContext(ChoicesContext);

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