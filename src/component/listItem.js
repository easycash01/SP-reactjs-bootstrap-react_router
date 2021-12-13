function NumberList(props){
    const numeri = props.numeri;
    let listitem = numeri.map( (numero )=> ( <li key={numero} >{numero}</li>) );
    return (<ul>{listitem}</ul>);
  }

export default NumberList;