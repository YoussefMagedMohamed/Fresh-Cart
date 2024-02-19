import { createContext, useState } from "react";

export let UserContext = createContext();

export default function UserContextProvider(props) {
  // Create State To Save Token
  const [userToken, setUserToken] = useState(null);

  return (
    <UserContext.Provider value={{ userToken, setUserToken }}>
      {props.children}
    </UserContext.Provider>
  );
}
