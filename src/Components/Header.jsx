import React, { useState } from 'react'
import { useMovie } from '../Features/Context.jsx'

const Header = () => {
  const { setQuery, data } = useMovie()
  // console.log(setQuery)

  return (
    <div className='fixed flex flex-row text-blue-50 text-xl font-sans items-center bg-indigo-700 justify-between w-full h-16 rounded-md shadow-2xl px-5 '>
      <div className='logo'>
        <h1>🍿PopCorn</h1>
      </div>
      <input
        type='text'
        name=''
        id=''
        onChange={(e) => setQuery(e.target.value)}
        className='outline-none border-none bg-indigo-500 rounded-md  py-1.5 px-3 md:w-4/12'
        placeholder='Search Movies......'
      />
      <div>
        <h1>Result {data.length}</h1>
      </div>
    </div>
  )
}

export default Header
