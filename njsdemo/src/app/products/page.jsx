import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

import ClientNavBar from "./client_navbar";
import ClientCard from "./client_card";
import ClientCount from './client_badge';

// import '../globals.css';


export default function HomePage() {
  const count = 8;
  // const [count, setCount] = React.useState(6);
  // // const [saludo, setSaludo] = React.useState("Hola");

  // function addClick() {
  //   setCount(count + 1);
  // }
  // function subtractClick() {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   } else {
  //     setCount(0);
  //   }
  // }

  return (
    <div className="HomePage">
      <ClientNavBar />
      {/* <div className="d-flex justify-content-center align-items-center">
        <Badge variant="dark" style={{ margin: "15px" }}>
          <button onClick={subtractClick}> - </button>
          <b> Mostrando {count} producto(s) </b>
          <button onClick={addClick}> + </button>
        </Badge>
      </div> */}
      <ClientCount />
      <Products likes={count} />
      <Footer />
    </div>
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
      <ClientCard id={prodid} />
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
      <Col key={i}>
        <Product key={i} prodid={i} />
      </Col>
    );
  }

  let content;
  if (num_prods == 0) {
    content = (
      <div className="d-flex justify-content-center align-items-center">
        <h1>No hay productos para mostrar</h1>
      </div>
    );
  } else {
    content = <Row>{complist}</Row>;
  }
  // return <div>{content}</div>;

  return <Container>{content}</Container>;
}

