import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { App } from './App'
import PokemonSingle from './pages/PokemonSingle/PokemonSingle'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:name" element={<PokemonSingle />} />
    </Routes>
  </BrowserRouter>
)
