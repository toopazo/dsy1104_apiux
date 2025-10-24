'use client';

import React from "react";
import Badge from "react-bootstrap/Badge";



export default function ClientCount() {
    const [count, setCount] = React.useState(0);
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

    return (<>
        <div className="d-flex justify-content-center align-items-center">
            <Badge variant="dark" style={{ margin: "15px" }}>
                <button onClick={subtractClick}> - </button>
                {/* <b> Mostrando {count} producto(s) </b> */}
                <b> Mostrando contador {count} dentro de un CSC </b>
                <button onClick={addClick}> + </button>
            </Badge>
        </div>
    </>
    );
}

function getCount() {
    return count;
}

export { getCount };