
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function Home() {
  return (
    <>
      <Link href="/products">
        {/* <button>Volver a productos</button> */}
        <Button as="a" variant="primary" href="/products">
          Volver a productos
        </Button>
      </Link>
      <Header title="Hola pirinola" />
    </>
  );
}