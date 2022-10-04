import React from "react";
import PrimeiroComponente from "../primeiroComponents";
import '../../components/componentes.css'

const ComponentePai = () => {

    const nomeDaEtiqueta = 'Preencha com o seu email'

    return (
        <>
            <h1 className="titulo">React Curso</h1>
            <PrimeiroComponente qualquerNome={nomeDaEtiqueta} numero={1}/>
        </>
    );
}
export default ComponentePai;