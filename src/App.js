import Signup from "./components/Signup";
import Header from "./components/Header";
import ShowChoices from "./components/ShowChoices";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Adventure from "./components/Adventure";
import Login from "./components/Login";
import Harry from "./components/adventure/Harry";
import Benny from "./components/adventure/Benny";
import Mary from "./components/adventure/Mary";
import Penny from "./components/adventure/Penny";
import FindBuddy from "./components/FindBuddy";



function App() {
  return (
    <div className="App">
      <Header />
      <FindBuddy />
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
