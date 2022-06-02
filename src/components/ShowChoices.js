import { useState, useEffect } from "react"
import ShowChoicesItem from "./ShowChoicesItem";

const ShowChoices = () => {

  const [choices, setChoices] = useState([])

  useEffect(() => {
    fetchChoices();
  }, []);
  

  const fetchChoices = async () => {
    const response = await fetch("/choices");
    const data = await response.json();

    setChoices(data);
  };
  return (
    <div>
      {choices.map((item) => (
        <ShowChoicesItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ShowChoices;
