import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
    
const SignIn = ()=>{

    const signIn=async()=>{
        event.preventDefault()
        let username=document.getElementById("username").value 
        let password=document.getElementById("password").value
        // let mydata={
        //     "username":username,
        //     "password":password
        // }
        let mydata={
                "username":'som@some.com',
                "password":'password'
            }
        let myresponse=await axios.post('sign_in',mydata)
        myresponse=myresponse.data["success"]
        if(myresponse){
            window.location.href="/"
        }
        else{
            alert("incorrect input")
            window.location.reload()
        }
    }

    return (
        <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Form  onSubmit={signIn} style={{marginTop:"5vh", padding:"2vh 4vw", width:"80vw", height:"80vh", minHeight:"fit-content", backgroundColor:"lightgray", borderRadius:"5vw"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control id="username" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control id="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
        </div>
    );
}

export default SignIn;