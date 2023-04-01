import { createContext, useContext, useEffect, useState } from "react";
import { useFirebase } from "../utils/useFirebase";

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);
export default function AuthContextProvider({ children }) {
  const { auth } = useFirebase();
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.uid);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
