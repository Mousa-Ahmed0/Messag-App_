import { Login } from "./Login";
import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Deshbord  from "./Deshbord";
import { ContactsProvider } from "./ContactContext/ContactsProvider";
import { ConversationsProvider } from "./ContactContext/ConversationProvider";
function App() {
  const [id,setId]=useLocalStorage('id');
  const deshbord=(
    <ContactsProvider>
      <ConversationsProvider>
        <Deshbord id={id}/>
      </ConversationsProvider>
    </ContactsProvider>
  )
  return (
      // id ? <Deshbord id ={id}/> : <Login onIdSubmit={setId} />
      id ? deshbord : <Login onIdSubmit={setId} />

  )

}

export default App;
 