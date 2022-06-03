import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import './PokemonSingle.styles.scss'
import { sanitizeName } from '../../helpers/text'

const PokemonSingle = () => {
  const params = useParams()
  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    if (pokemon.length) return

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
      .then((response) => {
        setPokemon(response.data)
      })
      .catch((err) => {
        throw err
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) return <p>carregando...</p>

  return (
    <main className="Pokemon">
      <section className="Pokemon__profile">
        <figure className="Pokemon__image">
          <img src={pokemon.sprites.front_default} alt="" />
          <img src={pokemon.sprites.front_shiny} alt="" />
        </figure>
        <h1 className="Pokemon__name">
          {pokemon.name} <span>{pokemon.id}</span>
        </h1>
        {pokemon.stats.map((stat) => {
          return (
            <div className="Pokemon-stat" key={stat.stat.name}>
              <div className="Pokemon-stat__bar">
                <div
                  style={{ width: `${stat.base_stat}%` }}
                  className="Pokemon-stat__base"
                ></div>
              </div>
              <p className="Pokemon-stat__name">
                {sanitizeName(stat.stat.name)}
              </p>
            </div>
          )
        })}
      </section>
      <section className="Pokemon__abilities">
        {pokemon.abilities.map((ability) => {
          return (
            <p className="Pokemon-ability__name" key={ability.ability.name}>
              {sanitizeName(ability.ability.name)}
            </p>
          )
        })}
      </section>
    </main>
  )
}

export default PokemonSingle
