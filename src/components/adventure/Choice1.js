import Button from "../Button";
import { Link } from "react-router-dom";
import forrest from "../../images/forrest.jpg"

const Choice1 = () => {
    return (
        <div className="events">
            <h3>Welcome to the forrest! </h3>
            <img className="img" src={forrest} alt="forrest" />
            <h4>Be carefull not to get lost in here...</h4>
            <h3>The road splits, where do you want to go?</h3>
            <div className="btns"><Link to="/deadend1">
                <Button name="Take left" /> </Link>
                <Link to="/benny">
                <Button name="Take right" /></Link>
            </div>
        </div>
    )
};

export default Choice1;