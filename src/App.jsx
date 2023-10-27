import { useState } from 'react'

import './App.css'
import Header from './Components/Header.jsx'
import { Card } from './Components/Card.jsx'

function App() {
  return (
    <>
      <div className='p-2 min-w-full bg-slate-900'>
        <Header />
        <Card />
      </div>
    </>
  )
}

export default App
