import React, { useEffect, useState } from 'react';
import PokeCard from '../PokeCard/PokeCard';

const PokeLista = () => {
    const [pokemones, setPokemones] = useState([])
    const [next,setNext] = useState()
    const [prev,setPrev] = useState()
    const [url,setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const handleSiguiente = () => {
        setUrl(next)
    }
    const handleAnterior = () => {
        
            setUrl(prev)
    }


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setNext(data.next)
                setPrev(data.previous)
                setPokemones(data.results)
            })
            .catch(err => console.error(err));
    }, [url]);

    return (
        <div>
            {pokemones.map(poke => <PokeCard poke={poke} key={poke.name} />)}
            {url !== 'https://pokeapi.co/api/v2/pokemon' ? (
                <button onClick={() => handleAnterior()}>ANTERIOR</button>
                ) : null}
            <button onClick={()=>handleSiguiente()}>SIGUIENTE</button>
        </div>
    );
}

export default PokeLista;