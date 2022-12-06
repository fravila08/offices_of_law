import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Csrf from './components/Csrf'
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import Banner from './components/Banner'
import { useEffect } from 'react'
import axios from 'axios'
import Survey from './pages/Survey';
import Posts from './pages/Posts';



function App() {
  const [user, setUser]=useState(null)
  Csrf()

  async function curr_user(){
    const response = await axios.get('curr_user')
    const user = response.data && response.data[0] && response.data[0].fields
    setUser(user)
  }
  
  useEffect(()=>{
    curr_user()
  },[])
  
  return (
    <div className="App">
      <Banner />
      <NavBar user={user} setUser={setUser}/>
      {user && <h4>Welcome {user.first_name}</h4>}
      <Router>
        <Routes>
          <Route path='/' element={<Home user={user} />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/categories' element={<Survey />} />
          <Route path='/categoris/:id' element={<Posts />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
