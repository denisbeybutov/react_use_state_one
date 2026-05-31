import { useState } from "react";

export default function CountTimeout(){
    const [counter, setCounter] = useState(0);
    function changeCounter(){
        setTimeout(() => {
            setCounter(c => c + 1);
        }, 3000);
    }

    return (
        <>
            <p>{counter}</p>
            <button onClick={changeCounter}>+</button>
        </>
    )
}