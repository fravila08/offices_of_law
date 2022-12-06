import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function Posts() {
    const [posts, setPosts]= useState([])
    let params=useParams()

    const getAllPosts=async(id)=>{
        let response=await axios.get(`all_posts/${id}`)
        setPosts(response.data.posts)
    }

    useEffect(()=>{
        getAllPosts(params.id)
    }, [])

    const newPost=async(id)=>{
        event.preventDefault()
        let response=await axios.post("new_post",{
            "title": document.getElementById("postInput").value,
            "content":document.getElementById("contentInput").value,
            "category":id
        })
        if(response.data.success===true){
            getAllPosts(id)
        }
    }

    const deletePost=async(id, cat_id)=>{
        let response= await axios.delete(`update_post/${id}`)
        if(response.data.success===true){
            getAllPosts(cat_id)
        }
    }
    return (
        <div>
        <h1>POST {params.id}</h1>
        {posts.map((post)=>(
            <div><a href="#">{post.title}</a><button onClick={()=>deletePost(post.id, params.id)}>delete</button></div>
        ))}
        <hr/>
        <form onSubmit={()=>newPost(params.id)}>
            <input id='postInput' />
            <textarea id='contentInput' />
            <input type='submit' />
        </form>
        </div>

    )
}

export default Posts
