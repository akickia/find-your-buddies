
import { BrowserRouter, Route, Routes } from "react-router-dom";

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

      
      <BrowserRouter>
        <Header />
        <div className ="container">
          <Routes>
            <Route path = "/" element = {<Welcome />}/>
            <Route path = "/showchoices" exact element = {<ShowChoices />}/>
            <Route path = "/adventure" exact element = {<Adventure />}/>
            <Route path = "/signup" exact element = {<Signup />}/>
            <Route path = "/login" exact element = {<Login />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
     

    </div>
  );
}

export default App;
