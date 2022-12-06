import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const SignUp = ()=>{
    const signUp=async()=>{
        let email=document.getElementById("email").value
        let firstName=document.getElementById("firstName").value
        let lastName=document.getElementById("lastName").value
        let midInit=document.getElementById("midInit").value
        let dob=document.getElementById("dob").value
        let password=document.getElementById("password").value
        let mydata={
            "email":email,
            "firstName": firstName,
            "lastName":lastName,
            "midInit":midInit,
            "dob":dob,
            "password":password
        }
        // let mydata={
        //     "email":'som@some.com',
        //     "firstName": 'francisco',
        //     "lastName":'avila',
        //     "midInit":'r',
        //     "dob":'12-12-1998',
        //     "password":'password'
        // }
        let myresponse=await axios.post('sign_up', mydata)
        myresponse= myresponse.data['success']
        if(myresponse){
            window.location.href="/#/signin"
        }
        else{
            alert("Incorrect input")
        }
    }


    return (
        <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
        {/* <div style={{marginTop:"5vh", padding:"2vh 4vw", width:"80vw", height:"80vh", minHeight:"fit-content", backgroundColor:"lightgray", borderRadius:"5vw"}}> */}
            <Form onSubmit={signUp} style={{marginTop:"5vh", padding:"2vh 4vw", width:"80vw", height:"80vh", minHeight:"fit-content", backgroundColor:"lightgray", borderRadius:"5vw"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control id='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control id='firstName' type="text" placeholder="Enter first name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control id='lastName' type="text" placeholder="Enter last name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Middle Initial</Form.Label>
                    <Form.Control id='midInit' type="text" placeholder="Enter middle initial" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Date Of Birth</Form.Label>
                    <Form.Control id='dob' type="date" />
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control id='password' type="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                    We'll never share any of the information you provide to any third party agencies.
                    </Form.Text>
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        // </div>
      );
}

export default SignUp;