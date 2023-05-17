import React , { createContext, useEffect, useState } from "react";
import "./App.css";
import { currUser } from "./utilities";
import { getToken } from "./components/CSRF";
import { NavBar } from "./components/NavBar";
import { Outlet } from "react-router-dom";

export const UserContext = createContext([]);
export const queryContext = createContext([]);

function App() {
  const [user, setUser] = useState(null);
  const [query, setQuery] = useState(null);

  getToken();

  useEffect(() => {
    const getCurrUser = async () => {
      setUser(await currUser());
    };
    getCurrUser();
  }, []);

  return (
    <div className="App">
      <NavBar />
      
      <UserContext.Provider value={{ user, setUser }}>
      <queryContext.Provider value = {{query, setQuery}}>
        <Outlet />
      </queryContext.Provider>
      </UserContext.Provider>
      
    </div>
  );
}

export default App;