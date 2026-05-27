const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export async function getMovies() {
  const response = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=es-MX&sort_by=popularity.desc`
  )
  const data = await response.json()
  return data.results
}

export async function getMovieById(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=es-MX`
  )
  const data = await response.json()
  return data
}
