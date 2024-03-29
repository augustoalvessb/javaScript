import React, {useEffect, useState} from "react";

const ComponeneteEfeito = ({contador, alterarContador}) => {
    const [titulo, setTitulo] = useState('Começando com useEffect...')
    const [quantidade, setQuantidade] = useState(0)

    useEffect(() => {
        setQuantidade(quantidade + 1)
        setTitulo('Estou no useEffect pela ' + quantidade + ' vez')
        alterarContador('useEffect me alterou!!')
    }, [contador])
        
    return (
        <h1>{titulo}</h1>
    );
}
    
export default ComponeneteEfeito;