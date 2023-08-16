import React from 'react'
import Sidbar from './Sidbar'


export default function Deshbord({id}) {
  return (
    <div className='d-flex ' style={{height:"100vh"}}>
        <Sidbar id ={id}/>

    </div> 
  )
}
