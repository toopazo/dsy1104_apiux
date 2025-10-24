import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import ClientCard from "./client_card";
import ClientCount from './client_badge';

// import '../globals.css';


export default function HomePage() {
  const count = 9;
  return (
    <div className="HomePage" style={{ margin: "20px" }}>
      {/* <ClientCount /> */}
      <Products likes={count} />
    </div>
  );
}

function Product(props) {
  const prodid = props.prodid;
  return (
    <>
      <h3>Destino {prodid} </h3>
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

