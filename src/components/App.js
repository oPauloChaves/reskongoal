import './App.css'

import React from 'react'
import { Link, IndexLink } from 'react-router'

import { Layout, Content, Header, Navigation, Drawer } from 'react-mdl'

//import Header from './header/Header'
import Footer from './footer/Footer'

const App = ({ children }) => (
  <Layout fixedHeader>
    <Header title="Reskongoal">
      <Navigation>
        <IndexLink to="/">Home</IndexLink>
        <Link to="/main">Main</Link>
        <Link to="/about">About</Link>
      </Navigation>
    </Header>
    <Drawer title="Reskongoal">
      <Navigation>
        <IndexLink to="/">Home</IndexLink>
        <Link to="/main">Main</Link>
        <Link to="/about">About</Link>
      </Navigation>
    </Drawer>
    <Content>
      {children}
    </Content>
    <Footer />
  </Layout>
)

export default App
