import React from 'react'
import { Switch, Route, Redirect } from "react-router";
import DcScreen from '../components/dc/DcScreen'
import HeroScreen from '../components/heroes/HeroScreen'
import MarvelScreen from '../components/marvel/MarvelScreen'
import NavBar from '../components/ui/NavBar'

const Dashboard = () => {
  return (
    <>
      <NavBar />

      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={ MarvelScreen } />
          <Route exact path="/heroe/:heroeId" component={ HeroScreen } />
          <Route exact path="/dc" component={ DcScreen } />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  )
}

export default Dashboard
