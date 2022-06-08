import Button from "./Button"
import { useContext } from "react";
import ChoicesContext from "../context/ChoicesContext";

const ShowQuest = () => {
  const { quests } = useContext(ChoicesContext);

  return (
    <div>
      {quests.map((quests) => ( 
        <div>
          <h3>{quests.header}!</h3>
          <p>{quests.text}</p>
          <Button name= "Click to continue" link="/ShowChoises"></Button>
        </div>
      ))}      
    </div>
  );
}

export default ShowQuest