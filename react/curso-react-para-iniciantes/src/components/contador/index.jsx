import React, {useEffect, useState} from "react";
import ComponeneteEfeito from "../componenteEfeito";

const Contador = () => {
    const [count, setCount] = useState(0)

    const diminuirContador = () => {
        setCount(count - 1)
    }

    // useEffect(() => {
    //     setCount(count - 1)
    // }, [count])

    return (
        <div>
            <ComponeneteEfeito contador={count} alterarContador={setCount}/>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>
                + 
            </button>
            <p>Clique</p>
            <button onClick={diminuirContador}>
                -
            </button>
        </div>
    );
}

export default Contador;