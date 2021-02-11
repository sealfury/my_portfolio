import React from 'react'
import HeroSplash from './components/HeroSplash'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import CV from './components/CV'
import Projects from './components/Projects'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <HeroSplash />
      <Switch>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/projects' component={Projects}></Route>
        <Route exact path='/CV' component={CV}></Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App
