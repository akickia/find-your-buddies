
import Button from "./Button";
import { Link } from "react-router-dom";

const ShowChoicesItem = ({ item }) => {

  return (
    <>
      <div>{item.text}

<Link to="/adventure"><Button name={item.option1}></Button></Link>

      <Button name={item.option2} link="/" />
      </div>
      <div>
        {item.name}
      </div>
      </>
  );
};

export default ShowChoicesItem;