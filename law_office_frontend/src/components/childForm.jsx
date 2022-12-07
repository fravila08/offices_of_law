import React, { useEffect } from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import CurrencyInput from 'react-currency-input-field';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ChildForm() {
    const[dad, setDad]=useState(false)
    const[mom,setMom]=useState(false)
    const[legal,setLegal]=useState(false)
  return (
    <div>
        <Form.Group className="mb-3">
            <Form.Label>First Name:</Form.Label>
            <Form.Control onChange={(event)=>console.log(event.target.value)} />
            <Form.Label>Middle Name:</Form.Label>
            <Form.Control onChange={(event)=>console.log(event.target.value)} />
            <Form.Label>Last Name:</Form.Label>
            <Form.Control onChange={(event)=>console.log(event.target.value)} />
            <Form.Label>Age:</Form.Label>
            <Form.Control type='number' min='0' max='17' onChange={(event)=>console.log(event.target.value)} />
            <Form.Label>Birth Date:</Form.Label>
            <Form.Control type='date' onChange={(event)=>console.log(event.target.value)} />
            <Form.Label>Childs primary residence:</Form.Label>
            <Form.Control onChange={(event)=>console.log(event.target.value)} />
            <Form.Label>Who is the childs primary care taker: (who's with the child most of the time)</Form.Label><br/>
            <Form.Check type="checkbox" checked={dad} label="Dad" onChange={()=>{setDad(true), setMom(false), setLegal(false)}}/>
            <Form.Check type="checkbox" checked={mom} label="Mom" onChange={()=>{setMom(true), setDad(false), setLegal(false)}}/>
            <Form.Check type="checkbox" checked={legal} label="Legal Guardian" onChange={()=>{setLegal(true), setDad(false),setMom(false)}}/>
            {legal ?
            <Form.Group>
                <h4><u>Guardians Information</u></h4>
                <Form.Label>Guardians First Name:</Form.Label>
                <Form.Control onChange={(event)=>console.log(event.target.value)} />
                <Form.Label>Guardians Last Name:</Form.Label>
                <Form.Control onChange={(event)=>console.log(event.target.value)} />
                <Form.Label>Guardians Middle Name:</Form.Label>
                <Form.Control onChange={(event)=>console.log(event.target.value)} />
                <Form.Label>When was child assigned to Legal Guardian?</Form.Label>
                <Form.Control type='date' onChange={(event)=>console.log(event.target.value)} />
            </Form.Group>
            :
            null}
        </Form.Group>
    </div>
  )
}

export default ChildForm
