// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {matchesList: [], isLoading: true}

  componentDidMount() {
    this.getMatches()
  }

  getMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    // console.log(data)
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        id: data.latest_match_details.id,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(each => ({
        umpires: each.umpires,
        result: each.result,
        manOfTheMatch: each.man_of_the_match,
        id: each.id,
        date: each.date,
        venue: each.venue,
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        firstInnings: each.first_innings,
        secondInnings: each.second_innings,
        matchStatus: each.match_status,
      })),
    }
    this.setState({matchesList: formattedData, isLoading: false})
  }

  renderTeamMatchesDetails = () => {
    const {matchesList} = this.state
    const {teamBannerUrl, latestMatchDetails} = matchesList
    return (
      <div className="team-matches-container">
        <img src={teamBannerUrl} alt="team banner" className="img1" />
        <LatestMatch matchDetails={latestMatchDetails} />
        {this.renderRecentMatches()}
      </div>
    )
  }

  renderRecentMatches = () => {
    const {matchesList} = this.state
    const {recentMatches} = matchesList
    return (
      <ul>
        {recentMatches.map(each => (
          <MatchCard key={each.id} recentMatch={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {isLoading} = this.state

    return (
      <div className={`matches-container ${id}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatchesDetails()
        )}
      </div>
    )
  }
}
export default TeamMatches
