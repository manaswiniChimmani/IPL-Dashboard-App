// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="img" />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
