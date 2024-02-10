import { useState } from 'react'
import './App.css'
import NavBar from './assets/Components/NavBar/NavBar'
import PokeApi from './assets/Components/PokeApi/PokeApi'
import PokeLista from './assets/Components/PokeLista/PokeLista'



function App() {

  return (
    <>
    <div>
      <NavBar/>
      {/* <PokeApi/> */}
      <PokeLista/>
    </div>
    </>
  )
}

export default App
 