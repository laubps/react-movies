import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMovieById } from '../services/httpClient'
import { getMovieImg } from '../utils/getMovieImg'
import './MovieDetails.css'

function MovieDetails() {
  const { movieId } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getMovieById(movieId)
      .then((data) => {
        setMovie(data)
        setLoading(false)
      })
      .catch(() => {
        setError('No se pudo cargar la información de la película.')
        setLoading(false)
      })
  }, [movieId])

  if (loading) return <p className="details-status">Cargando...</p>
  if (error) return <p className="details-status details-status--error">{error}</p>
  if (!movie) return null

  return (
    <div className="details">
      <button className="details__back" onClick={() => navigate(-1)}>← Volver</button>

      <div className="details__content">
        <img
          src={getMovieImg(movie.poster_path)}
          alt={movie.title}
          className="details__poster"
        />
        <div className="details__info">
          <h2 className="details__title">{movie.title}</h2>

          {movie.genres && movie.genres.length > 0 && (
            <div className="details__genres">
              {movie.genres.map((g) => (
                <span key={g.id} className="details__genre-tag">{g.name}</span>
              ))}
            </div>
          )}

          <p className="details__rating">⭐ {movie.vote_average?.toFixed(1)} / 10</p>
          <p className="details__year">📅 {movie.release_date?.slice(0, 4)}</p>

          {movie.runtime > 0 && (
            <p className="details__runtime">⏱ {movie.runtime} min</p>
          )}

          <p className="details__overview">{movie.overview || 'Sin descripción disponible.'}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
