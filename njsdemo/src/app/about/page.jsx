import Button from 'react-bootstrap/Button';


function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function Home() {
  return (
    <>
      <Button as="a" variant="primary">
        Button as link
      </Button>
      <Header title="Hola pirinola" />
    </>
  );
}