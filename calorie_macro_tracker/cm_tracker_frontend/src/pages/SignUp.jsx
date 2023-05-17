import { useState } from "react";
import { signUp } from "../utilities";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

    <Form 
      onSubmit={(e) => [
      e.preventDefault(),
      signUp(name, email, password),
      setEmail(""),
      setPassword(""),
      setName(""),
    ]}>
      <div className="signup-container">
      <h3 className="signup-header">Sign Up</h3>

      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control 
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>

    <Button variant="secondary" type="submit">
      Submit
    </Button>
    </div>
    </Form>
    
  );
};