import React from "react";
import '../../components/componentes.css';

const PrimeiroComponente = ({qualquerNome}) => {

    return (
        <div className="conteinerPrimeiroComponente">
            <h1>Preencha o formúlario</h1>
            <label>{qualquerNome}</label>
            <input type="text"/>
        </div>
    )
}

export default PrimeiroComponente;