
// import Link from 'next/link';
import Image from 'next/image'

function Header({ title }) {
  return <h1 style={{ textAlign: "center" }}>{title ? title : 'Default title'}</h1>;
}

export default function Home() {
  return (
    <>

      <Image
        src="/file.svg"
        width={200}
        height={200}
        alt="Picture of the author"
        style={{ marginTop: "20px" }}
      />
      <Header title="Hola pirinola" />
      <p style={{ textAlign: "center" }} data-testid="about-page">This is the about page</p>
    </>
  );
}