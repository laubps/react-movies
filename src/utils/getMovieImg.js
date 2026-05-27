const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'
const PLACEHOLDER = 'https://via.placeholder.com/500x750?text=Sin+imagen'

export function getMovieImg(posterPath) {
  if (!posterPath) return PLACEHOLDER
  return `${IMAGE_BASE_URL}${posterPath}`
}
