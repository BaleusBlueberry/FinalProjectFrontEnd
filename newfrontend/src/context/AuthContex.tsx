import { createContext, useEffect, useState } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  token: string;
  login: (token: string) => void;
  logout: () => void;
  authChecked: boolean; // Added to track when the authentication check is completed
}

const initialValues: AuthContextType = {
  isLoggedIn: false,
  token: "",
  login: () => {},
  logout: () => {},
  authChecked: false, // Initially false
};

const AuthContext = createContext(initialValues);

function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [authChecked, setAuthChecked] = useState(false); // Track if the auth check is complete

  useEffect(() => {
    const storedToken = localStorage.getItem("user"); // Retrieve token from localStorage

    if (storedToken) {
      setIsLoggedIn(true); // Set isLoggedIn to true if token is found
      setToken(storedToken); // Set token state
      console.log("logged in");
    } else {
      setIsLoggedIn(false); // Set isLoggedIn to false if token not found
      console.log("not logged in");
    }
    setAuthChecked(true); // Indicate that the authentication check is complete
  }, []);

  function login(token: string) {
    setIsLoggedIn(true);
    setToken(token);
    localStorage.setItem("user", token); // Store token in localStorage during login
  }

  function logout() {
    setIsLoggedIn(false);
    setToken("");
    localStorage.removeItem("user"); // Remove token from localStorage during logout
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, token, login, logout, authChecked }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
