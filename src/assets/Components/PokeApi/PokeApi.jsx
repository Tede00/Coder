import React, {useEffect, useState} from 'react'

const PokeApi = () => {

    const [pokedata,setPokedata] =useState([])
    const [id,setId]=useState(1)
    // console.log(pokedata.sprites.front_default)

    // const url='https://pokeapi.co/api/v2/pokemon/4'
    const url=`https://pokeapi.co/api/v2/pokemon/${id}`

    const handleSiguiente = () => {
        setId(id+1)
    }
    const handleAnterior = () => {
        if(id>0) {
            setId(id-1)
        }
    }

    

    useEffect(() =>{
        fetch(url)
     .then(res => res.json())
     .then(data=>setPokedata(data))
     .catch(error=>console.error(error))
    }, [id])



  return (
    <>
        {
            pokedata &&
            <div>
                <img className='fotopoke' src={pokedata?.sprites?.front_default} alt="pokemon" />
                <h3>{pokedata.name}</h3>
                <button onClick={()=>handleAnterior()}>ANTERIOR</button>
                <button onClick={()=>handleSiguiente()}>SIGUIENTE</button>
            </div>
        }
    </>
  )
}

export default PokeApi
