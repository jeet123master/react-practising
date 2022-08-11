import React, {useState} from 'react'

function Ex3() {
    const [text, setText] = useState(true)
    const [textColor, setTextColor] = useState("black")
    const toogleText = () => {
        setText(!text);
    }
  return (
    <div>
        <button onClick={toogleText}>Show/Hide</button>
        {text === true && <h1>Hello world!</h1>}
        <br />
        <br />

        <button
            onClick={() => {
                setTextColor(textColor === "black" ? "red" : "black")
            }}
        >
            Text Color
        </button>
        <h1 style={{color: textColor}}>Change text color</h1>
    </div>
  )
}

export default Ex3