import numeriarr from "./numeriArray";
import {Button} from "react-bootstrap";
import React, {useState} from "react";


function Boxlist(props){
    const [statoLista, setStatoLista] = useState(numeriarr);
    return (
        statoLista.map((k,list) => <Button key={k} onClick={() =>console.log(statoLista[list])}>{ props.nome + " " + list}</Button> )
    )
    }

export default Boxlist