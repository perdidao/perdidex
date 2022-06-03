import './PokemonCard.styles.scss'

const PokemonCard = (props) => {
  const { name, index, thumb } = props

  const sanitizeName = (name) => {
    return name.replace('-', ' ')
  }

  return (
    <li className="PokemonCard">
      <span className="PokemonCard__index">{index}</span>
      <figure className="PokemonCard__image">
        <img src={thumb} alt={sanitizeName(name)} loading="lazy" />
      </figure>
      <p className="PokemonCard__name">{sanitizeName(name)}</p>
    </li>
  )
}

export default PokemonCard
