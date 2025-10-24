'use client';

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ClientCard(props) {
  const id = props.id;
  const iid = 10 + id;
  const isrc = "https://picsum.photos/id/" + iid + "/200/200";
  return (
    <Card style={{ width: "18rem" }} data-testid={`client-card-${id}`}>
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
