import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import TopRatedPage from './components/TopRatedPage'
import UpcomingPage from './components/UpcomingPage'
import PopularPage from './components/Home'
import SearchMoviePage from './components/SearchMoviePage'
import MovieDetailsPage from './components/MovieDetails'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/"  element={<PopularPage/>} />
      <Route path="/top-rated"  element={<TopRatedPage/>} />
      <Route path="/upcoming"  element={<UpcomingPage/>} />
      <Route exact path="/movie/:movieId" element={<MovieDetailsPage/>} />
      <Route exact path="/search/:query" element={<SearchMoviePage/>} />
    </Routes>
  </BrowserRouter>
)

export default App