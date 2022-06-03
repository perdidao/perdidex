import './PokemonCard.styles.scss'

const PokemonCard = (props) => {
  const {name, index} = props

  const sanitizeName = (name) => {
    return name.replace('-', ' ')
  }

  return (
    <li className="PokemonCard">
      <span className="PokemonCard__index">{index}</span>
      <figure className="PokemonCard__image">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
          alt=""
        />
      </figure>
      <p className="PokemonCard__name">
        {sanitizeName(name)}
      </p>
    </li>
  )
}

export default PokemonCard
