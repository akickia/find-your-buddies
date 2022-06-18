import { Link } from "react-router-dom";
import Button from "./Button";

const About = () => {
  return (
    <div className="container">
      <h1>About the game!</h1>
      <h3>"Find Your Buddies" is a game where you have to click your way through a beautiful maze!</h3>
      <h3>Your buddies can appear anywhere in the maze in any way, shape or form.</h3>
      <h5>You need to find all your buddies to finish the game.</h5>
      <h5>Don't hesitate, start searching now!</h5>
      <Link to="/adventure"><Button name="Start the Game!"></Button></Link>
      <p>"Find Your Buddies" is a game created by Kicki, Åsa and Caroline in 2022 as a school project in the course IT:Tech for women. </p>
      <p>In this app we have used pictures from unsplash and fetched Pokemons from pokeapi.co</p>
    </div>
  );
};

export default About;





