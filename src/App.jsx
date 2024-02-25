import React from 'react'
import Header from './components/Header'
import Body from './components/Body'

const App = () => {
  return (
    <div className='min-h-screen bg-white dark:bg-slate-900'>
      <Header/>
      <Body/>
    </div>
  )
}

export default App