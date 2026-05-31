import { useState } from "react";

export default function Counter(){

    const [number, setNumber] = useState(0);

    function handlePlus(){
        setNumber(number + 1);
    }

    function handleMinus(){
        setNumber(number - 1);
    }

    return (
        <>
        Hello
            <button onClick={handlePlus}>+</button>
            {number}
            <button onClick={handleMinus}>-</button>
        </>
    )
}