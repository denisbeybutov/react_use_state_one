import './ColorSwitcher.css'
import { useState } from "react";

export default function ColorSwitcher(){
    const [backgroundColor, setBackgroundColor] = useState('rgb(177, 125, 125)');

    function changeColor(){
        if(backgroundColor === 'rgb(177, 125, 125)') {
            setBackgroundColor('rgb(86, 139, 86)');
        }
        else setBackgroundColor('rgb(177, 125, 125)');
        
        
    }

    return (
        <>
            <p style={{backgroundColor: backgroundColor}} className='text'>
                Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Переулка ему точках свое большого коварных реторический сбить домах то решила одна там обеспечивает ручеек парадигматическая, щеке пустился рот свою. Путь, свой строчка решила подзаголовок пунктуация сих дорогу по всей меня текста текстами, силуэт lorem курсивных несколько собрал безопасную города. Курсивных.
            </p>
            <button onClick={changeColor}>Поменять цвет</button>
        </>
        
    )
}