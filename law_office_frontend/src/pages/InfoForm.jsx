import React, { useEffect } from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import CurrencyInput from 'react-currency-input-field';
import "react-datepicker/dist/react-datepicker.css";
import ChildForm from '../components/childForm';

function InfoForm() {
    const [home, setHome]=useState(false)
    const [ballChecked, setBallChecked]=useState(false)
    const [exactChecked, setExactChecked]=useState(true)
    const [disValue, setDisValue]=useState(0)
    const [children, setChildren]=useState(false)
    const [startMarriage, setStartMarriage]=useState('during')
    const [numChild, setNumChild]=useState([])
    const [child, setChild]=useState(false)
    
    const createArray = (num)=>{
        let arr=[]
        for(let i=0; i<num;i++){
            arr.push(i)
            }
        setNumChild(arr)
        }

    useEffect(()=>{
        if(numChild.length>0){
            setChild(true)
        }
        else{
            setChild(false)
        }
        console.log(numChild)
    },[numChild])

    return (
        <div>
            <>
            <Form.Group className="mb-3">
                <Form.Label>Do you own a home?</Form.Label>
                <Form.Select onChange={(event)=>setHome(event.target.value === 'true')} >
                    <option value={false} >No</option>
                    <option value={true} >Yes</option>
                </Form.Select>
            </Form.Group>
            {home ? 
            <div>
            <Form.Group className="mb-3">
                <Form.Label>Was this home purchased before, during, after the marriage?</Form.Label>
                <Form.Select onChange={(event)=>setStartMarriage(event.target.value)} >
                    <option value={'during'} >During</option>
                    <option value={'before'} >Before</option>
                    <option value={'after'} >After</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Address of said home:</Form.Label>
                <Form.Control  onChange={(event)=>console.log(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>How much did the home cost:</Form.Label><br/>
                <Form.Check type="checkbox" checked={exactChecked} label="Exact" onChange={()=>{setExactChecked(!exactChecked), setBallChecked(!ballChecked)}}/>
                <Form.Check type="checkbox" checked={ballChecked} label="Estimate" onChange={()=>{setExactChecked(!exactChecked), setBallChecked(!ballChecked)}}/>
            </Form.Group>
            {ballChecked ?
            <Form.Group className="mb-3">
                <Form.Label><strong>${disValue}</strong></Form.Label>
                <Form.Range defaultValue="0" onChange={(event)=>setDisValue(event.target.value)} min="0" max="1000000"/>
            </Form.Group>
            :
            <CurrencyInput
            id="input-example"
            name="input-name"
            prefix='$'
            placeholder="Enter the price of your home"
            defaultValue={0}
            decimalsLimit={2}
            onValueChange={(value, name) => console.log(value, name)}
            />
            }
            </div>
            : null}
            <Form.Group className="mb-3">
                <Form.Label>Do have any children?</Form.Label>
                <Form.Select onChange={(event)=>setChildren(event.target.value==='true')} >
                    <option value={false}>No</option>
                    <option value={true} >Yes</option>
                </Form.Select>
            </Form.Group>
            {
                children?
                <div>
                <Form.Group className="mb-3">
                    <Form.Label><strong>How many underage children?</strong></Form.Label>
                    <Form.Select defaultValue="0" onChange={(event)=>createArray(parseInt(event.target.value))}>
                        <option value={0}>---</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </Form.Select>
                </Form.Group>
                {child ?
                <div>
                <h4>Child Info</h4>
                {numChild.map((index)=>(
                    <div>
                    <h1><u>Child {index +1}:</u></h1>
                    <ChildForm />
                    </div>
                ))}
                </div>
                : null
                }
                </div>
                :
                null
            }
            </>
        </div>
    )
}

export default InfoForm
