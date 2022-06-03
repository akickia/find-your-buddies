
import Button from "./Button";

const ShowChoicesItem = ({ item }) => {

  return (
      <div>{item.text}
      <Button name={item.option1} link="/Benny" />

      <Button name={item.option2} link="/" />
      </div>
  );
};

export default ShowChoicesItem;