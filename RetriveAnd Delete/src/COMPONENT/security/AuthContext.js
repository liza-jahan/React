import { createContext, useContext, useState } from "react";

//create context
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
//const authContext = useContext(AuthContext);

//2:Share the create context with  other component

export default function AuthProvider({ children }) {
  //3:put some state in the context
  const [number, setNumber] = useState(10);

  const [isAuthenticated, setAuthenticated] = useState(false);

  const valueToBeShared = {isAuthenticated, login, logout };
  function login(user, email, password) {
    if (
      user === "udemy" &&
      email === "udemy@gmail.com" &&
      password === "udemy"
    ) {
      setAuthenticated(true);
      return true;
    } else {
      setAuthenticated(false);
      return false;
    }
  }
  function logout() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={valueToBeShared}>
      {children}
    </AuthContext.Provider>
  );
}
