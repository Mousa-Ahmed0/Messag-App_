import React, { useState } from 'react'
import {Tab ,Nav} from 'react-bootstrap';
import Conversation from './Conversation';
import Contacts from './Contacts';

const CONVERSATIONS_KEY='Conversations';
const Contacts_KEY='Contacts';
export default function Sidbar({id}) {
    const [activeKey,setActionKey]=useState(CONVERSATIONS_KEY);
  return (
    <div style={{width:'250px'}} className='d-flex flex-column'>
        <Tab.Container activeKey={activeKey} onSelect={setActionKey}>
            <Nav variant='tabs' className='justify-content-center'>
                <Nav.Item>
                    <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={Contacts_KEY}>Contacts</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content className='border-right overflow-auto flex-grow-1'>
                <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                    <Conversation/>
                </Tab.Pane>
            </Tab.Content>
            <Tab.Content>
                <Tab.Pane eventKey={Contacts_KEY}>
                    <Contacts/>
                </Tab.Pane>
            </Tab.Content>
            <div className='p-2 border-top border-right small'>
                Your ID: <span className='text-muted'>{id}</span>
            </div>
            {/* <Button>
                New {}
            </Button> */}
        </Tab.Container> 
    </div>
  )
}
