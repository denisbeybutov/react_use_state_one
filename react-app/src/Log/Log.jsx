import { useState } from "react";

export default function Log(){
    const [count, setCount] = useState(0);
    const [log, setLog] = useState([]);

    function addLog(){
        setCount(count+1);
        setLog(prevLog => [...prevLog, `новое значение: ${count+1}`] )
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={addLog}>Добавить</button>
            <div>
                {log.map((l,index) => <p key={index}>{l}</p>)}
            </div>
            
        </>
    )
}