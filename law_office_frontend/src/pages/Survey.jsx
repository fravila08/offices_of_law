import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Cat from '../components/Cat'

const Survey=()=>{
    const [categories, setCategories]=useState([])
    

    const getAllCats=async()=>{
        let response= await axios.get('allcotegories')
        console.log(response.data.categories)
        setCategories(response.data.categories)
    }

    const createCat=async()=>{
        event.preventDefault()
        let title=document.getElementById('newCategory').value
        let response= await axios.post("new_cat",{
            'title':title
        })
        if(response.data.success===true){
            getAllCats()
        }
    }

    useEffect(()=>{
       getAllCats() 
    },[])


    

    const deleteCat=async(id)=>{
        let response = await axios.delete(`update_category/${id}`)
        if(response.data.success===true){
            getAllCats()
        }
    }

    return(
        <div>
            <h1>CATEGORIES:</h1>
            {categories.map((category)=>(
                <Cat deleteCat={deleteCat} getAllCats={getAllCats} category={category} />   
            ))}
            <hr/>
            <form onSubmit={createCat}>
                <label>Category</label>
                <input id='newCategory' />
                <input type='submit' />
            </form>
        </div>
    )
}

export default Survey