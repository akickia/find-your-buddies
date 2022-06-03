import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signup from "./components/Signup";
import About from "./components/About";
import Header from "./components/Header";
import ShowChoices from "./components/ShowChoices";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Adventure from "./components/Adventure";
import Benny from "./components/adventure/Benny"
import Harry from "./components/adventure/Harry"
import Mary from "./components/adventure/Mary"
import Penny from "./components/adventure/Penny"
import Choice1 from "./components/adventure/Choice1"
import Choice2 from "./components/adventure/Choice2"
import Choice3 from "./components/adventure/Choice3"
import Task1 from "./components/adventure/Task1"
import Task2 from "./components/adventure/Task2"
import Task3 from "./components/adventure/Task3"
import Winner from "./components/adventure/Winner"




function App() {
  return (
    <div className="App">


      
      <BrowserRouter>
        <Header />
        <div className ="container">
          <Routes>
            <Route path = "/" element = {<Welcome />}/>
            <Route path = "/about" exact element = {<About />}/>
            <Route path = "/showchoices" exact element = {<ShowChoices />}/>
            <Route path = "/adventure" exact element = {<Adventure />}/>
            <Route path = "/signup" exact element = {<Signup />}/>
            <Route path = "/login" exact element = {<Login />}/>
            <Route path = "/benny" exact element = {<Benny />}/>
            <Route path = "/mary" exact element = {<Mary />}/>
            <Route path = "/harry" exact element = {<Harry />}/>
            <Route path = "/penny" exact element = {<Penny />}/>
            <Route path = "/choice1" exact element = {<Choice1 />}/>
            <Route path = "/choice2" exact element = {<Choice2 />}/>
            <Route path = "/choice3" exact element = {<Choice3 />}/>
            <Route path = "/task1" exact element = {<Task1 />}/>
            <Route path = "/task2" exact element = {<Task2 />}/>
            <Route path = "/task3" exact element = {<Task3 />}/>
            <Route path = "/winner" exact element = {<Winner />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
