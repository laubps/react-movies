import './App.css'
import AppRouter from './routers/AppRouter'

function App() {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1 className="app-title">🎬 Películas</h1>
      </header>

      <main className="app-main">
        <AppRouter />
      </main>

      <footer className="app-footer">
        <p>Laura Pelagio &nbsp;|&nbsp; ZEUS EMANUEL GUTIERREZ COBIAN &nbsp;|&nbsp; Desarrollo de Aplicaciones Web en la Nube y Móviles</p>
        <p>2016A &nbsp;|&nbsp; Mayo 2026 &nbsp;|&nbsp; CUCEI – Universidad de Guadalajara</p>
      </footer>
    </div>
  )
}

export default App
