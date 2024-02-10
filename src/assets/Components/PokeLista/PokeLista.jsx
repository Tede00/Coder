import React, { useEffect, useState } from 'react';
import PokeCard from '../PokeCard/PokeCard';

const PokeLista = () => {
    const [pokemones, setPokemones] = useState([]);
    console.log(pokemones)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.json())
            .then(data => setPokemones(data.results))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            {pokemones.map(poke => <PokeCard poke={poke} key={poke.name} />)}
        </div>
    );
}

export default PokeLista;