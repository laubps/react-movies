import { useNavigate } from 'react-router-dom'
import { getMovieImg } from '../utils/getMovieImg'
import './MovieCard.css'

function MovieCard({ movie }) {
  const navigate = useNavigate()

  return (
    <div className="movie-card" onClick={() => navigate(`/movies/${movie.id}`)}>
      <img
        src={getMovieImg(movie.poster_path)}
        alt={movie.title}
        className="movie-card__poster"
      />
      <div className="movie-card__info">
        <h3 className="movie-card__title">{movie.title}</h3>
        <span className="movie-card__rating">⭐ {movie.vote_average?.toFixed(1)}</span>
      </div>
    </div>
  )
}

export default MovieCard
