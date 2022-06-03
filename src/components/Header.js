import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">Link to Home</Link>
      <Link to="/about">Link to About</Link>
    </header>

  )
}

export default Header;