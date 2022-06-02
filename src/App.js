import Signup from "./components/Signup"
import ShowChoices from "./components/ShowChoices";

import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Adventure from "./components/Adventure";
import Login from "./components/Login";



function App() {
  return (
    <div className="App">
    <ShowChoices />
    <Signup />

      <header className="App-header">
</header>
        <Adventure />
        <p>
          
        </p>

      <Welcome />
      <Signup />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
