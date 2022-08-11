import React, {useState} from 'react'
import Axios from 'axios'

function ExApi() {
    const [generateExcuse, setGenerateExcuse] = useState("")

    const fetchExcuse = (excuse) => {
        Axios
            .get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`)
            .then((response) => {
                setGenerateExcuse(response.data[0].excuse);
            })
    }
  return (
    <>
        <h1>Generate An Excuse</h1>
        <button onClick={() => fetchExcuse("party")}>Party</button>
        <button onClick={() => fetchExcuse("family")}>Family</button>
        <button onClick={() => fetchExcuse("office")}>Office</button>

        <p>{generateExcuse}</p>
    </>
  )
}

export default ExApi