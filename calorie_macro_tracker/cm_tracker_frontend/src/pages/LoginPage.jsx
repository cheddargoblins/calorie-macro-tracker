import {  useContext, useState } from "react";
import { logIn } from "../utilities";
import { UserContext } from "../App";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {user} = useContext(UserContext)
  const {setUser} = useContext(UserContext)
 

  return (
    <Form onSubmit={(e) => [
      e.preventDefault(),
      logIn(email, password, setUser),
      setEmail(""),
      setPassword(""),
    ]}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control 
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control 
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
    
    </Form>
  );
};