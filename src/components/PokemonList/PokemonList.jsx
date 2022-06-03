import axios from 'axios'
import { useState, useEffect } from 'react'

import PokemonCard from '../PokemonCard/PokemonCard'

import './PokemonList.styles.scss'

const PokemonList = () => {
  const [loading, setLoading] = useState(true)
  const [pokemons, setPokemons] = useState({})
  const [filtered, setFiltered] = useState({})

  useEffect(() => {
    if (pokemons.length) return

    const cachedPokemons = localStorage.getItem('pokemon-list')
    if (cachedPokemons) {
      setPokemons(JSON.parse(cachedPokemons))
      setLoading(false)
      return
    }

    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=765')
      .then((response) => {
        const results = response.data.results
        const treatedResults = results.map((item, i) => ({
          ...item,
          index: i + 1,
          thumb: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            i + 1
          }.png`,
        }))
        setPokemons(treatedResults)
        localStorage.setItem('pokemon-list', JSON.stringify(treatedResults))
      })
      .catch((err) => {
        throw err
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const filterPokemons = (term) => {
    if (term.length < 3) {
      setPokemons(JSON.parse(localStorage.getItem('pokemon-list')))
      return
    }

    const filteredList = pokemons.filter((item) => item.name.includes(term))
    setPokemons(filteredList)
  }

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <section className="PokemonList">
      <input
        className="PokemonList__filter"
        placeholder="Pesquise pelo nome"
        type="text"
        onChange={(e) => filterPokemons(e.target.value)}
      />
      <ul className="PokemonList__items">
        {pokemons.map((pokemon, p) => {
          return (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              index={pokemon.index}
              thumb={pokemon.thumb}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default PokemonList
