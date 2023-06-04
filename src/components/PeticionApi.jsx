import React from 'react'
import { useState } from 'react'

const PeticionApi = () => {
    const [personajes, setPersonajes] = useState([]) 
    const [paginacion, setPaginacion] = useState(1)

    const traerPersonajes = async() => {
        try{
            const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${paginacion}`)
            const respuesta = await res.json()
            const auxPersonajes = respuesta.results
            setPersonajes(auxPersonajes)
        }catch(error){
            console.log(error)1
        }
    }

    const siguiente = () =>{
        setPaginacion(paginacion+1)
        traerPersonajes()
    }

    const atras = () =>{
        setPaginacion(paginacion-1)
        traerPersonajes()
    }

  return (
    <div>
        <h1>Peticion al api de rick and morty</h1>
        <button onClick={traerPersonajes}>traer Personajes</button>
        <button onClick={siguiente}>Siguiente</button>
        <button onClick={atras}>Atras</button>
        {
            personajes.map((aux)=> (
                <div key={aux.id}>
                <h4>{aux.name}</h4>
                <img src={aux.image} alt={aux.name} />
                </div>
            ))
            
        }
    </div>
  )
}

export default PeticionApi