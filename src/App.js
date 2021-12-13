import './App.css';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import  Mynavbar from './component/navbar';
import NumberList from './component/listItem';
import numeriarr from './component/numeriArray';
import Mycarosello from './component/carosello';
import Boxlist from './component/boxlist';

import { Routes, Route, Link } from "react-router-dom";

/* pages */
import Home from  "./pages/homepage";
import Chisiamo from "./pages/chisiamo"

{/* commento in JSX 
function My_button(props){
  const [nomeStato, setStato] = useState(props.titolo);
if(nomeStato === 'it')
  return <button onClick={() => setStato('en')}> ITALIANO </button>
else
return <button onClick={() => setStato('it')}> INGLESE </button>
}
*/}

{/* <> */}


function App() {
 const [input, setinput] = useState("");
 const [classButt, setclassButt] = useState("danger")


const handleclick = (e) =>{
e.preventDefault();
console.log("funziona" , input)
setinput("");
 }

useEffect(() => {
  console.log(input);
  if(input.length > 5){
    setclassButt("primary");
   
  } else setclassButt("danger");
}, [input])



  return (
    <div>
      <Mynavbar></Mynavbar>
      <Mycarosello></Mycarosello>
    <div className="primoDiv"> 
<form>
  <input type="text" value={input} onChange={(e) =>setinput(e.target.value)}></input>
  <Button variant={classButt} onClick={handleclick}> premi qua </Button>
</form>

<br></br>
<Boxlist nome="premi qua"></Boxlist>


<div>
<Routes>
        <Route path="/" element={<Home />} />
       <Route path="Chisiamo" element={<Chisiamo />} />
      </Routes>

      </div>

      <br></br>   
   </div>
   </div>
 
  );
}

export default App;
