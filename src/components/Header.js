import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className = "links">Link to Home</Link>
      <Link to="/about" className = "links">Link to About</Link>
    </header>
  )
}

export default Header;