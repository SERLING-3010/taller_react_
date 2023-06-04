import React from 'react'
import {useState} from 'react'

const Contador = () => {
    const [valor, setvalor] = useState(0)


    const aumentar = () => {
        setvalor(valor + 1)
    }

    const decrementar = () => {
        setvalor(valor - 1)
    }    

  return (
    <div>
        <h1>CONTADOR</h1>
        <button onClick={aumentar}>Aumentar</button><span> {valor} </span>
        <button onClick={decrementar}>Decrementar</button>
    </div>
  )
}

export default Contador