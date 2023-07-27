import { createContext, useState } from "react";

//create context
export const AuthContext = createContext();


//Share the create context with  other component

export default function AuthProvider({children}) {
//put some state in the context
 const [number,setNumber]=useState(0)

  return <AuthContext.Provider value={{number}}>{children}</AuthContext.Provider>;
}
