import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Cat({category, getAllCats, deleteCat}) {
    const [show, setShow]=useState(true)

    const updateCat= async(id)=>{
        event.preventDefault()
        let response= await axios.put(`update_category/${id}`, {
            "update_title":document.getElementById(id).value
        })
        if(response.data.success===true){
            getAllCats()
            setShow(!show)
        }
    }

    return (
        <div>
            {show ? 
            <div>
            <a href={`/#/categoris/${category.id}`}>{category.title}</a> 
            <button onClick={()=>setShow(!show)}>edit</button>
            <button onClick={()=>deleteCat(category.id)}>delete</button>
            </div>: 
            <form onSubmit={()=>updateCat(category.id)} >
            <input id={category.id} placeholder={category.title} /> 
            <input type='submit' />
            <button onClick={()=>setShow(!show)}>cancel</button>
            </form>}
        </div>
    )
}
