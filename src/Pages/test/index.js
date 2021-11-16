import React, { useState, useRef } from 'react';
import { Button } from 'reactstrap';

const Test = props => {

    


    //  const [text,setText]=useState("")
    const textref = useRef("")
    const init = ["bmw", "ford", "ferrari"]
    const [cars, setCar] = useState(init)
    // const handleText=e=>{
    //     setText(e.target.value)
    //     var msg = new SpeechSynthesisUtterance();
    //     console.log(msg)
    //     msg.text = e.target.value;
    //     window.speechSynthesis.speak(msg);
    // }
    const romoveCar = car => {
        setCar(prev => prev.filter(y => y !== car))
    }
 
    const add = () => {
        setCar(car=>{
           return [...car,textref.current.value] }   )
    }
    return <>
        <input ref={textref} />
        <Button onClick={add}>Add</Button>
        <Button onClick={() => setCar(init)}>reset</Button>
        {cars && cars.map(car =>
            <li key={car}>
                <Button onClick={()=>romoveCar(car)} >{car}f</Button>
            </li>
        )}
    </>
}
export default Test