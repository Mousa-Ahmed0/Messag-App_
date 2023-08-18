import React, { useState } from 'react'
import {Tab ,Nav,Button ,Modal} from 'react-bootstrap';
import Conversation from './Conversation';
import Contacts from './Contacts';
import './Sidbar/Sidbar.css';
import NewConversatonModal from './NewContactModal/NewConversatonModal';
import NewContactModal from './NewContactModal/NewContactModal';

const CONVERSATIONS_KEY='Conversations';
const Contacts_KEY='Contacts';
export default function Sidbar({id}) {
    const [activeKey,setActionKey]=useState(CONVERSATIONS_KEY);
    const [modalOpen,setModelOpen]=useState(false)
    const conversationsOpen=activeKey===CONVERSATIONS_KEY; 
    function closeModal(){
        setModelOpen(false)
    }
  return (
    <div  className='d-flex flex-column sidbar'>
        <Tab.Container activeKey={activeKey} onSelect={setActionKey}>
            <Nav variant='tabs' className='justify-content-center'>
                <Nav.Item>
                    <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={Contacts_KEY}>Contacts</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content className=" overflow-auto flex-grow-1 border-end">
                <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                    <Conversation/>
                </Tab.Pane>
                <Tab.Pane eventKey={Contacts_KEY}>
                    <Contacts/>
                </Tab.Pane>
            </Tab.Content>
         
            <div className='p-2 border-end border-top  small'>
                Your ID: <span className='text-muted'>{id}</span>
            </div>
            <Button onClick={()=>setModelOpen(true)} className='rounded-0'>
                New {conversationsOpen ? 'conversation' : 'Contact'}
            </Button>
            <Modal show={modalOpen} onHide={closeModal}>
                {
                    conversationsOpen ?
                    <NewConversatonModal closeModal={closeModal}/> :
                    <NewContactModal closeModal={closeModal}/>
                }
            </Modal>
        </Tab.Container> 
    </div>
  )
}
