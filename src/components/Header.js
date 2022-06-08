import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className = "links">Home</Link>
      <Link to="/about" className = "links">About</Link>
    </header>
  )
}

export default Header;