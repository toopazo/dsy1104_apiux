import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";

// import Stack from "react-bootstrap/Stack";
// import { Stack } from "react-bootstrap"

import "./App.css";

function NavBar() {
  return (
    <>
      {/* <h1>Soy el componente NavBar</h1> */}
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="primary"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

function BasicExample(props) {
  const id = props.id;
  const iid = 10 + id;
  const isrc = "https://picsum.photos/id/" + iid + "/200/200";
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={isrc} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

function Footer() {
  return (
    <>
      {/* <h1>Soy el componente Footer</h1>; */}
      {/* <Stack direction="horizontal" gap={2}> */}
      <div className="d-flex justify-content-center align-items-center">
        <Badge bg="secondary" style={{ margin: "15px" }}>
          <Button as="a" variant="primary">
            About us
          </Button>
          <Button as="a" variant="success">
            Contact us
          </Button>
        </Badge>
      </div>
      {/* </Stack> */};
    </>
  );
}

function Product(props) {
  const prodid = props.prodid;
  return (
    <>
      <h3>Producto {prodid} </h3>
      <BasicExample id={prodid} />
    </>
  );
}

function Products(props) {
  const num_prods = props.likes;

  // Para cada producto, crear un componente Product que reciba el id del producto
  // y retorne un tag html
  const complist = [];
  for (let i = 1; i <= num_prods; i++) {
    complist.push(
      <Col>
        <Product key={i} prodid={i} />
      </Col>
    );
  }

  return (
    <Container>
      <Row>{complist}</Row>
    </Container>
  );
}

function HomePage() {
  const [count, setCount] = React.useState(6);
  // const [saludo, setSaludo] = React.useState("Hola");

  function addClick() {
    setCount(count + 1);
  }
  function subtractClick() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  }

  return (
    <div className="HomePage">
      <NavBar />
      <div className="d-flex justify-content-center align-items-center">
        <Badge variant="dark" style={{ margin: "15px" }}>
          <button onClick={subtractClick}> - </button>
          <b> Mostrando {count} producto(s) </b>
          <button onClick={addClick}> + </button>
        </Badge>
      </div>
      <Products likes={count} />
      <Footer />
    </div>
  );
}

export default HomePage;
