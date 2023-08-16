import React ,{useRef}from 'react'
import {Container,Form,Button } from 'react-bootstrap'
import './Login.css'
import {v4 as uuidv4} from'uuid'
export const Login = ({onIdSubmit}) => {
    const idRef = useRef();

    function handleSubmit(e){
        e.preventDefault();
        onIdSubmit(idRef.current.value);
    }
    function createNewId(){
        onIdSubmit(uuidv4());
    }
    return (
        <Container className='align-item-center d-flex styleCont'>
            <Form className="w-100" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter Your ID</Form.Label>
                    <Form.Control type='text' ref={idRef} required/>
                </Form.Group>
                <Button type='submit' className='mr-2'>Login</Button>
                <Button onClick={createNewId} variant='secondary'>Create A New ID</Button>
            </Form>
        </Container>
    )
}
