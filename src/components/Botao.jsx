import React from 'react';
import './Botao.css';

const Operador = val => {
    return !isNaN(val) || val === "." || val === "=";
};

export const Botao = props => (
   
    <div className={`box-botao ${
        Operador(props.children) ? null : "operador"
    }`}
    onClick={() => props.handleClick(props.children)}
    > 
        {props.children}
    </div>
);