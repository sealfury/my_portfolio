import React from 'react'
import HeroSplash from './components/HeroSplash'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import CV from './components/CV'
import Projects from './components/Projects'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HeroSplash}></Route>
        <Route exact path='/projects' component={Projects}></Route>
        <Route exact path='/CV' component={CV}></Route>
        <Route exact path='/Contact' component={Contact}></Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App
