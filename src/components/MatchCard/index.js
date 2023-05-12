// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatch} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = recentMatch

  return (
    <li className="card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-logo"
      />
      <p className="card-name">{competingTeam}</p>
      <p className="card-result">{result}</p>
      <p className={`status ${matchStatus}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
