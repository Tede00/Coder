import React from 'react'

const PokeCard = ({pokedata}) => {
  return (
    <div>
        <img className='fotopoke' src={pokedata?.url} alt="pokemon" />
        <h3>{pokedata.name}</h3>
    </div>
  )
}

export default PokeCard
