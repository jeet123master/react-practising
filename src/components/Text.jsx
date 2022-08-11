import React, { useState, useEffect } from 'react'

function Text() {

    const [text, setText] = useState("")

    useEffect(() => {
        console.log("c mount")
        return () => {
            console.log("c unmount")
        }
    }, [])

  return (
    <div>
        <input 
            type="text"
            onChange={(e) => setText(e.target.value)} 
        />
        <h1>{text}</h1>
    </div>
  )
}

export default Text