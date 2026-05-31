import { useState } from "react";

export default function TextToggle() {

    const [text, setText] = useState('Первый текст')

    function changeText(){
        if(text === 'Первый текст') setText('Второй текст');
        else setText('Первый текст')
    }

    return (
        <>
            <p>{text}</p>
            <button onClick={changeText}>Поменять текст</button>
        </>
    )
}