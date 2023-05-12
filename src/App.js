import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound} />
  </Switch>
)
// {
//   /* <h1>Remove this heading and write your code here</h1> */
// }

export default App
