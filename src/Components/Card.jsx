import React, { useState } from 'react'
import { MovieList } from './MovieList.jsx'
import { useMovie } from '../Features/Context.jsx'

export const Card = () => {
  const { data, error, isLoading } = useMovie()

  const [selectMovie, setSelectMovie] = useState({})
  const handleClick = (id) => {
    setSelectMovie(data.find((movie) => movie.imdbID === id))
  }
  console.log(selectMovie)

  return (
    <div className='flex mt-20 flex-row text-blue-50 text-xl scroll-smooth  font-sans   justify-between w-full h-full rounded-md shadow-2xl px-3 py-2 gap-2 md:flex-nowrap flex-wrap'>
      <div className='flex w-full h-full md:w-6/12 bg-slate-800 rounded-md  flex-col'>
        {isLoading ? (
          <h1 className='grid items-center place-items-center justify-center'>
            Loading....
          </h1>
        ) : data.length === 0 ? (
          <h1>{error}</h1>
        ) : (
          data.map((movie) => {
            return (
              <MovieList
                key={movie.imdbID}
                {...movie}
                handleClick={handleClick}
              />
            )
          })
        )}
      </div>
      <div className='flex w-full md:w-6/12 h-[500px] bg-slate-800 rounded-md flex-col'>
        <div className='bg-slate-700 rounded-md flex flex-row items-center'>
          <img
            src={selectMovie?.Poster}
            alt={selectMovie?.Title}
            className='w-56 h-60 rounded-md mr-5'
          />
          <div className='flex flex-col gap-x-5 gap-y-5'>
            <em>Name: {selectMovie?.Title}</em>
            <em>Year:{selectMovie?.Year}</em>
          </div>
        </div>
      </div>
    </div>
  )
}
