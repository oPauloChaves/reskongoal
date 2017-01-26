import './App.css'

import React from 'react'

import Header from './header/Header'
import Footer from './footer/Footer'

const App = ({ children }) => (
  <div>
    <Header />
    <div className="AppContainer">
      {children}
    </div>
    <Footer />
  </div>
)

export default App
