import axios from 'axios'
import { useState, useEffect } from 'react'

import PokemonCard from '../PokemonCard/PokemonCard'

import './PokemonList.styles.scss'

const PokemonList = () => {
  const [loading, setLoading] = useState(true)
  const [pokemons, setPokemons] = useState({})

  useEffect(() => {
    if (pokemons.length) return

    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then((response) => {
        setPokemons(response.data.results)
      })
      .catch((err) => {
        throw err
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <ul className="PokemonList">
      {pokemons.map((pokemon, p) => {
        const pokemonIndex = p + 1

        return (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            index={pokemonIndex}
          />
        )
      })}
    </ul>
  )
}

export default PokemonList
