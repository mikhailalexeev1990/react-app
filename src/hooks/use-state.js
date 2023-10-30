import React, {useState} from "react";

const useStateTest = () => {

    const [color, setColor] = useState('gray')
    const [fontSize, setFontSize] = useState(14)

    return (
        <div style={{
            padding: '50px',
            background: color
        }}>
            <button onClick={() => setColor('black')}>Dark</button>
            <button onClick={() => setColor('gray')}>Light</button>
            <button onClick={() => setFontSize((s) => s + 5)}>[+]</button>
            <button onClick={() => setFontSize((s) => s - 5)}>[-]</button>
            <h1 style={{
                fontSize: `${fontSize}px`
            }}>Hello hooks</h1>
        </div>
    );
}

export default useStateTest;
