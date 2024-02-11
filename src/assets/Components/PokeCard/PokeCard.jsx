import React,{useEffect,useState} from 'react'

const PokeCard = ({poke}) => {
  const [pokeData, setPokeData] =useState()
  const [types,setTypes]=useState([])

  const getPokeById = async() =>{
    try{
      const res=await fetch(poke.url)
      const data=await res.json()
      setPokeData(data)
      setTypes(data.types)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getPokeById()
  },[])


  return (
    <>
    {
      pokeData&&
      <div>
          {types.some((type)=>type.type.name==='fire') &&
            <>
              <img className='fotopoke' src={pokeData.sprites.front_default} alt="pokemon" />
              <h3>{poke.name}</h3>
            </>
          } 
      </div>
      }  
    </>
  )
}

export default PokeCard
