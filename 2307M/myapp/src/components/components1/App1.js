import { useState } from "react";

export default function MyInput(){
    const [text, setText] = useState('Hello');

    function handleChange(e){
        setText(e.target.value);
    }

    return (
        <>
        <input value={text} onChange={handleChange}/>
        <p>You types: {text}</p>
        <button onClick={() => setText('Hello')}>   
           Reset
        </button>
        </>
     )
}