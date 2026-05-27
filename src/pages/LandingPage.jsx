import { useState, useEffect } from 'react'
import { getMovies } from '../services/httpClient'
import MovieGrid from '../components/MovieGrid'

function LandingPage() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getMovies()
      .then((data) => {
        setMovies(data)
        setLoading(false)
      })
      .catch(() => {
        setError('No se pudo cargar la lista de películas.')
        setLoading(false)
      })
  }, [])

  if (loading) return <p style={{ textAlign: 'center', marginTop: '3rem' }}>Cargando películas...</p>
  if (error) return <p style={{ textAlign: 'center', color: '#e50914', marginTop: '3rem' }}>{error}</p>

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem', color: '#ccc' }}>Películas populares</h2>
      <MovieGrid movies={movies} />
    </div>
  )
}

export default LandingPage
