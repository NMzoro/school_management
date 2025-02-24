import { createContext, useContext, useState, useEffect } from "react";

export const UserStateContext = createContext({
  user: {},
  authenticated: false,
  setAuthenticated: () => {},
  setUser: () => {},
  logout: () => {},
});

export default function UserContext({ children }) {
  const [user, setUser] = useState({});
  const [authenticated, _setAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = window.localStorage.getItem("AUTHENTICATED") === "true";
    console.log("Lecture du localStorage AUTHENTICATED:", authStatus);
  
    if (authStatus) {
      _setAuthenticated(true);
    }
  }, []);
  
  const setAuthenticated = (isAuthenticated) => {
    console.log("Mise à jour de authenticated :", isAuthenticated);
    _setAuthenticated(isAuthenticated);
    window.localStorage.setItem("AUTHENTICATED", isAuthenticated ? "true" : "false");
  };
  

  const logout = () => {
    setUser({});
    _setAuthenticated(false);
    window.localStorage.removeItem("AUTHENTICATED");
  };


  return (
    <UserStateContext.Provider value={{ user, setAuthenticated, logout, authenticated, setUser }}>
      {children}
    </UserStateContext.Provider>
  );
}

export const useUserContext = () => useContext(UserStateContext);
