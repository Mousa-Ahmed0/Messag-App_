import { Login } from "./Login";
import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Deshbord  from "./Deshbord";
function App() {
  const [id,setId]=useLocalStorage('id');
  return (
      id ? <Deshbord id ={id}/> : <Login onIdSubmit={setId} />
  )
}

export default App;
 