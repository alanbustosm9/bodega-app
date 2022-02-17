import React from 'react'
import AppRouter from './router/AppRouter'
import Navbar from './components/Navbar/index';

const App = () => {
  return (
    <div>
        <Navbar />
        <AppRouter />
    </div>
  )
}

export default App