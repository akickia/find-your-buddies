import { createContext, useState, useEffect } from "react"

const ChoicesContext = createContext()

export const ChoicesProvider = ({ children }) => {
  const [choices, setChoices] = useState([])
  const [buddies, setBuddies] = useState([])
  const [quests, setQuests] = useState([])
  

  useEffect(() => {
    fetchQuests();
  }, []);
  

  const fetchQuests = async () => {
    const response = await fetch(`/quest`);
    const data = await response.json();
    setQuests(data);
}


useEffect(() => {
  fetchBuddies();
}, []);


const fetchBuddies = async () => {
  const response = await fetch(`/buddy`);
  const data = await response.json();

  setBuddies(data);
}


useEffect(() => {
  fetchChoices();
}, []);


const fetchChoices = async () => {
  const response = await fetch(`/choices`);
  const data = await response.json();

  setChoices(data);
}

  return (
    <ChoicesContext.Provider
      value={{
        choices,
        buddies,
        quests
      }}
    >
      {children}
    </ChoicesContext.Provider>
  )
}

export default ChoicesContext