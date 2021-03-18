import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Assets from './pages/assets'

export default function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Assets />
        </Route>
      </Switch>
    </Router>
  )
}