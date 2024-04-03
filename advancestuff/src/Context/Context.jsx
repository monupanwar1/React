import { createContext, useState } from "react";

export const UserContext = createContext();
const context = (props) => {


const [User, setUser] = useState([
  {name: 'John', email:   'john@example.com'},
  {name: 'JohnDoe', email:   'john@example.com'},
])

  return <UserContext.Provider value={[User,setUser]}> {props.children}</UserContext.Provider>;
};

export default context;