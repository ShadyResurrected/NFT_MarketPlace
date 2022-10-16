import React from 'react'
import Choose from './components/Choose'
import Clients from './components/clients'
import CreateAndSell from './components/CreateAndSell'
import Footer from './components/Footer'
import Home from './components/Home'
import MarketPlace from './components/MarketPlace'
import ScrollToTop from './components/ScrollToTop'
import Subscribe from './components/Subscribe'

const App = () => {
  return (
    <div>
      <Home/>
      <Clients/>
      <CreateAndSell/>
      <Choose/>
      <MarketPlace/>
      <Subscribe/>
      <Footer/>
      <ScrollToTop/>
    </div>
  )
}

export default App