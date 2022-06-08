import { useContext } from "react";
import { Link } from "react-router-dom";

import ChoicesContext from "../context/ChoicesContext";
import Button from "./Button";


const ShowChoices = () => {
  const { choices } = useContext(ChoicesContext);

  return (
    <div>
      {choices.map((choices) => (
              <div key={choices.id}>{choices.text}
              <Link to="/adventure"><Button name={choices.option1}></Button></Link>
              <Button name={choices.option2} link="/" />
            </div>
      ))}
    </div>
  );
};

export default ShowChoices;
