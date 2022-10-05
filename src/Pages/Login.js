import React from "react";
import "../Styles/auth.scss";
import { Background, LoginImage } from "../Assets/Images";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function Login() {
  return (
    <>
      <Container className="Main">
        <Card style={{ width: "18rem" }}>
          <Card.Body>   
            <Card.Text>Login your account</Card.Text>
            <input className="mt-3 w-100" />
             <input className="mt-3 w-100" />
            <Button className="mt-4 w-100">Login</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Login;
