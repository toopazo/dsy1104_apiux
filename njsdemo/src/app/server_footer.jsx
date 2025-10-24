
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

export default function ServerFooter() {
    return (
        <>
            {/* <h1>Soy el componente Footer</h1>; */}
            {/* <Stack direction="horizontal" gap={2}> */}
            <div className="d-flex justify-content-center align-items-center">
                <Badge bg="secondary" style={{ margin: "15px" }}>
                    {/* <Link href="/about"> */}
                    <Button as="a" variant="primary" href="/about">
                        About us
                    </Button>
                    {/* </Link> */}
                    {/* <Link href="/contact"> */}
                    <Button as="a" variant="success" href="/contact">
                        Contact us
                    </Button>
                    {/* </Link> */}
                </Badge>
            </div>
            {/* </Stack> */};
        </>
    );
}