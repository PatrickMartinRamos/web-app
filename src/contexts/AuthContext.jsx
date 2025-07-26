import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const login = (email, password, users = []) => {
    if (!Array.isArray(users)) {
      console.error("Users is not an array", users);
      return false;
    }

    const user = users.find((u) => u.email === email);
    if (user && password === "password123") {
      setCurrentUser(user);
      navigate("/dashboard");
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
