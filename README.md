# Práctica 7 – App de Películas con React

## Integrantes
- Laura Pelagio

## Objetivo
Desarrollar una aplicación web SPA con React y Vite que consuma la API de TMDB para mostrar un catálogo de películas con listado y vista de detalle, gestionada con GitHub y publicada en Netlify.

## Tecnologías
- React 18
- Vite 5
- React Router DOM 6
- TMDB API (https://www.themoviedb.org)
- CSS
- Git / GitHub
- Netlify

## Estructura del proyecto
```
src/
  components/
    MovieCard.jsx       # Tarjeta individual de película
    MovieCard.css
    MovieGrid.jsx       # Cuadrícula con listado de películas
    MovieGrid.css
  pages/
    LandingPage.jsx     # Página principal
    MovieDetails.jsx    # Vista de detalle
    MovieDetails.css
  routers/
    AppRouter.jsx       # Configuración de rutas
  services/
    httpClient.js       # Cliente HTTP para TMDB API
  utils/
    getMovieImg.js      # Helper para URLs de imágenes
  App.jsx
  App.css
  main.jsx
  index.css
public/
  _redirects            # Necesario para Netlify + React Router
.env                    # Variables de entorno (no subir a GitHub)
```

## Instalación y ejecución local
```bash
git clone <URL_DEL_REPOSITORIO>
cd practica7-react-peliculas
npm install
```

Crear archivo `.env` en la raíz del proyecto:
```
VITE_TMDB_API_KEY=TU_API_KEY_DE_TMDB
```

Obtén tu API key en: https://www.themoviedb.org/settings/api

```bash
npm run dev
```

Abre http://localhost:5173 en el navegador.

## Rutas
- `/` – Página principal con listado de películas
- `/movies/:movieId` – Detalle de una película

## API utilizada
**TMDB (The Movie Database)**
- Sitio: https://www.themoviedb.org
- Documentación: https://developer.themoviedb.org/docs
- Endpoint principal: `GET /discover/movie`
- Endpoint de detalle: `GET /movie/{movie_id}`
- Idioma configurado: `es-MX`

## Despliegue
- **GitHub:** [PENDIENTE – pegar URL]
- **Netlify:** [PENDIENTE – pegar URL]

### Configuración en Netlify
| Elemento | Valor |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Variable de entorno | `VITE_TMDB_API_KEY` |

## Commits realizados
1. `feat: inicializa proyecto con Vite y React`
2. `feat: agrega consumo de API y listado de películas`

## Conclusiones
Integrar React Router con una API externa permitió entender cómo una SPA gestiona el estado y la navegación sin recargar la página. El archivo `_redirects` en Netlify fue indispensable para que las rutas del lado del cliente funcionaran correctamente en producción.
