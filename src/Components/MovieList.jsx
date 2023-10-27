import React from 'react'
import { useMovie } from '../Features/Context.jsx'

export const MovieList = ({ Poster, Title, Year, imdbID, handleClick }) => {
  return (
    <div
      className='flex flex-row px-5 overflow-hidden  cursor-pointer h-36 gap-2 items-center border-b-2 border-slate-500 w-full mb-2'
      onClick={() => handleClick(imdbID)}
    >
      <img
        className='w-24 h-32 rounded-md'
        src={Poster}
        alt={Title}
        width={'100px'}
      />
      <div className='flex flex-col gap-y-3'>
        <h1>{Title}</h1>
        <h1>📅 {Year}</h1>
      </div>
    </div>
  )
}
