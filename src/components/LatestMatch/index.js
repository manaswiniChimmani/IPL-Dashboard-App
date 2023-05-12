// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    manOfTheMatch,
    matchStatus,
    result,
    firstInnings,
    secondInnings,
    umpires,
    venue,
  } = matchDetails
  return (
    <div className="card-container">
      <h1 className="h1">Latest Match</h1>
      <div className="latest-card">
        <div className="logo-container">
          <div className="match-details">
            <p className="name">{competingTeam}</p>
            <p className="p1">{date}</p>
            <p className="p1">{venue}</p>
            <p className="p1">{result}</p>
          </div>
          <img
            className="logo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="line" />
        <div className="match-details-container">
          <div className="item1">
            <p className="match">First Innings</p>
            <p className="value">{firstInnings}</p>
          </div>
          <div className="item1">
            <p className="match">Second Innings</p>
            <p className="value">{secondInnings}</p>
          </div>
          <div className="item1">
            <p className="match">Man Of The Match</p>
            <p className="value">{manOfTheMatch}</p>
          </div>
          <div className="item1">
            <p className="match">Umpires</p>
            <p className="value">{umpires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
