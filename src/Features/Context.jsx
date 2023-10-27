import React, { createContext, useContext, useEffect, useState } from 'react'
import { useFetch } from './useFetch.js'

const MovieProvider = createContext([])

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState('')
  let count = 0

  useEffect(() => {
    const interval = setTimeout(() => {
      count += 1
      setIsLoading(true)
      useFetch(query).then((data) => {
        if (data.Response === 'False') {
          setIsLoading(false)
          return setError(data.Error)
        }

        setData(data.Search)
        setIsLoading(false)
      })
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [query])

  return (
    <MovieProvider.Provider value={{ data, error, isLoading, setQuery }}>
      {children}
    </MovieProvider.Provider>
  )
}
export const useMovie = () => {
  return useContext(MovieProvider)
}
