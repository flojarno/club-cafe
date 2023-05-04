import { useState, useEffect, createContext } from "react";
import config from '../config.json'

export const EventContext = createContext();

export default function EventContextProvider({ children }) {
  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${config.api}/api/events`);
      const data = await response.json();
      const eventList = data["hydra:member"];
      console.log(eventList);
      setEvents(eventList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <EventContext.Provider value={{ events, setEvents, refetchEvents: fetchData }}>
      {children}
    </EventContext.Provider>
  );
}
