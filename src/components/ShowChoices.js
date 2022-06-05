import ShowChoicesItem from "./ShowChoicesItem";
import { useContext } from "react";
import ChoicesContext from "../context/ChoicesContext";

const ShowChoices = () => {
  const { choices } = useContext(ChoicesContext);

  return (
    <div>
      {choices.map((item) => (
        <ShowChoicesItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ShowChoices;
