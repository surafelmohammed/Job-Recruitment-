import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [accountType, setAccountType] = useState("seeker");

  const contextValues = {
    value1: { email },
    value2: { username },
    value3: { setEmail },
    value4: { accountType },
  };

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/auth/user", {
        headers: { "content-type": "application/json" },
        credentials: "include",
      });
      const content = await response.json();
      if (response.status == 200) {
        setAccountType(content.accountType);
        setEmail(content.email);
        setUsername(content.username);
      } else if (response.status == 401) {
        setAccountType("seeker");
        setEmail("");
        setUsername("");
        console.log(`--------------------user Unauthorized`);
      }
    })();
  }, [setEmail, email]);

  return (
    <>
      <UserContext.Provider value={contextValues}>
        <Navbar />
        <Outlet />
      </UserContext.Provider>
    </>
  );
}

export default App;
