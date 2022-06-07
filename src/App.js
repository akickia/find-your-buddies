import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChoicesProvider } from "./context/ChoicesContext"

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
import Choice4 from "./components/adventure/Choice4"
import Winner from "./components/adventure/Winner"
import FindBuddy from "./components/FindBuddy"
import ShowQuest from "./components/ShowQuest";
import DeadEnd1 from "./components/adventure/DeadEnd1";
import DeadEnd2 from "./components/adventure/DeadEnd2";
import DeadEnd3 from "./components/adventure/DeadEnd3";
import DeadEnd4 from "./components/adventure/DeadEnd4";
import Continue from "./components/adventure/Continue";
import Continue2 from "./components/adventure/Continue2";



function App() {
  return (
    <div className="App">


    <ChoicesProvider>
      <BrowserRouter>
        <Header />
        
        <div className ="container">
          <Routes>
            <Route path = "/" element = {<Welcome />}/>
            <Route path = "/about" exact element = {<About />}/>
            <Route path = "/quests" exact element = {<ShowQuest />}/>
            <Route path = "/buddies" exact element = {<FindBuddy />}/>
            <Route path = "/choices" exact element = {<ShowChoices />}/>
            <Route path = "/adventure" exact element = {<Adventure />}/>
            <Route path = "/signup" exact element = {<Signup />}/>
            <Route path = "/login" exact element = {<Login />}/>
            <Route path = "/benny" exact element = {<Benny />}/>
            <Route path = "/deadend1" exact element = {<DeadEnd1 />}/>
            <Route path = "/deadend2" exact element = {<DeadEnd2 />}/>
            <Route path = "/deadend3" exact element = {<DeadEnd3 />}/>
            <Route path = "/deadend4" exact element = {<DeadEnd4 />}/>
            <Route path = "/mary" exact element = {<Mary />}/>
            <Route path = "/harry" exact element = {<Harry />}/>
            <Route path = "/penny" exact element = {<Penny />}/>
            <Route path = "/choice1" exact element = {<Choice1 />}/>
            <Route path = "/choice2" exact element = {<Choice2 />}/>
            <Route path = "/choice3" exact element = {<Choice3 />}/>
            <Route path = "/choice4" exact element = {<Choice4 />}/>
            <Route path = "/continue" exact element = {<Continue />}/>
            <Route path = "/continue2" exact element = {<Continue2 />}/>
            <Route path = "/winner" exact element = {<Winner />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </ChoicesProvider>
    </div>
  );
}

export default App;