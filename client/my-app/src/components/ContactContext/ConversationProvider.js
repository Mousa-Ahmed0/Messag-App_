import React,{useContext, useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useContacts } from './ContactsProvider';

const ConversationsContext=React.createContext()
//
export function useConversations(){
  return useContext(ConversationsContext);
}
export  function ConversationsProvider({children}) {
  //
  const [Conversations,setConversations]=useLocalStorage('Conversations',[]);
  const [selectConversationIndex,setSelectConversationIndex]=useState(0);
  const {contacts}=useContacts();
  //
  function createConversations(recipients){
    setConversations(prevConversations=>{
      return [...prevConversations,{recipients,masages:[]}];
    })
  }
  const formattadConversations=Conversations.map((conversation,index)=>{
        const recipients=conversation.recipients.map(recipient=>{
            const contact =contacts.find(contact =>{
                return contact.id === recipient
            })
            const name=(contact && contact.name)|| recipient;
            return {id:recipient,name}
        })
        const selected=index===selectConversationIndex;
        return {...conversation,recipients,selected}
  })
  const value={
    conversations:formattadConversations,
    selectConversation:formattadConversations[selectConversationIndex],
    selectConversationIndex:setSelectConversationIndex,
    createConversations
  }
  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  )
}
