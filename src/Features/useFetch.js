



export const useFetch = async (query) => {

  const key = '4189fcd0'
  const url = `https://www.omdbapi.com/?apikey=${key}&s=${query}`

  const response = await fetch(url)
  const data = await response.json()
  // console.log(data);


  return data


}

