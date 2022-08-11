import React, {useState} from 'react'

function Ex1() {
    const [num, setNum] = useState(0);

    const increaseNum = () => {
        setNum(num + 1)
    }
    const decreaseNum = () => {
      setNum(num - 1);
    }
    const setToZero = () => {
      setNum(0)
    }
  return (
    <div>
        {num}
        <button onClick={increaseNum}>Increase</button>
        <button onClick={decreaseNum}>Decrease</button>
        <button onClick={setToZero}>set to Zero</button>

    </div>
  )
}

export default Ex1