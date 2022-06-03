import Button from "../Button";
import { Link } from "react-router-dom";

const Choice1 = () => {
    return (
        <div className="events">
            <h3>The road splits, where do you want to go?</h3>
            <div className="btns"><Link to="/choice2">
            <Button name="Take left" /> </Link>
            <Link to="/choice3">
            <Button name="Take right" /></Link></div>
        </div>
    )
};

export default Choice1;