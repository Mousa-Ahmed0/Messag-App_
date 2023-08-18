import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from '../ContactContext/ContactsProvider'
import { useConversations } from '../ContactContext/ConversationProvider'

export default function NewConversatonModal({closeModal}) {
    const [selectedContactIds, setSelectedContactIds] = useState([]);
    //
    const {contacts}=useContacts();
    const {createConversations}=useConversations();
    //
    function handleSubmit(e){
        e.preventDefault();
        createConversations(selectedContactIds);
        closeModal();
    }
    //
    function handleCheckboxChang(contactId) {
        setSelectedContactIds(prevSelectedContactIds => {
            if (prevSelectedContactIds.includes(contactId)) {
                return prevSelectedContactIds.filter(prevId => {
                    return contactId !==prevId
                })
            }else{
                return [...prevSelectedContactIds,contactId]
            }
        })
    }
    return (
        <>
            <Modal.Header closeButton>Create Conversaton</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} >
                    {contacts.map(contact => (
                        <Form.Group controlId={contact.id} key={contact.id}>
                            <Form.Check
                                type='checkbox'
                                value={selectedContactIds.includes(contact.id)}
                                label={contact.name}
                                onChange={() => handleCheckboxChang(contact.id)}
                            />
                        </Form.Group>
                    ))}
                    <Button type='submit'>Create</Button>
                </Form>
            </Modal.Body>
        </>
    )
}
