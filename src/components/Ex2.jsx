import React, {useState} from 'react'

function Ex2() {
    const [inputValue, setInputValue] = useState("");

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }
  return (
    <div>
        <input 
            type="text" 
            onChange={handleInput}
        />
        {inputValue}
    </div>
  )
}

export default Ex2