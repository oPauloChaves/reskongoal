import './App.css'

import React from 'react'
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import { Layout, Content, Header, Navigation, Drawer } from 'react-mdl'

import HomePage from './home/HomeContainer'
import MainPage from './main/MainContainer'
import ProjectPage from './project/ProjectContainer'
import AboutPage from './about/AboutContainer'
import NoMatch from './error404/NotFound'

const AppNavigation = () => (
  <Navigation>
    <Link to="/">Home</Link>
    <Link to="/main">Projects</Link>
    <Link to="/about">About</Link>
  </Navigation>
)

const AppHeader = ({ title, children }) => (
  <Header title={title}>
    {children}
  </Header>
)

const AppDrawer = ({ title, children }) => (
  <Drawer title={title}>
    {children}
  </Drawer>
)

const App = () => {
  const title = 'Reskongoal'

  return (
    <BrowserRouter>
      <Layout fixedHeader>
        <AppHeader title={title}>
          <AppNavigation />
        </AppHeader>
        <AppDrawer title={title}>
          <AppNavigation />
        </AppDrawer>
        <Content>
          <Match exactly pattern="/" component={HomePage} />
          <Match pattern="/main" component={MainPage} />
          <Match pattern="/projects/:id" component={ProjectPage} />
          <Match pattern="/about" component={AboutPage} />

          <Miss component={NoMatch} />
        </Content>
      </Layout>
    </BrowserRouter>
  )
}

export default App
