import Signup from "./components/Signup";
import Header from "./components/Header";
import ShowChoices from "./components/ShowChoices";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Adventure from "./components/Adventure";
import Login from "./components/Login";



function App() {
  return (
    <div className="App">
      <Header />
      <ShowChoices />
      <Adventure />
      <Welcome />
      <Signup />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
