import { Link } from 'react-router-dom'
import './PokemonCard.styles.scss'
import { sanitizeName } from '../../helpers/text'

const PokemonCard = (props) => {
  const { name, index, thumb } = props

  return (
    <li className="PokemonCard">
      <Link to={`/${name}`} className="PokemonCard__link">
        <span className="PokemonCard__index">{index}</span>
        <figure className="PokemonCard__image">
          <img src={thumb} alt={sanitizeName(name)} loading="lazy" />
        </figure>
        <span className="PokemonCard__name">{sanitizeName(name)}</span>
      </Link>
    </li>
  )
}

export default PokemonCard
