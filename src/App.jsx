import { useCallback,  useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import debounce from 'just-debounce-it'

import {Movies} from './components/Movies'
import SingleMovie from './components/SingleMovie'

import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'




function App() {
const[sort,setSort]=useState(false)
const {search,updateSearch,error}= useSearch()
const {movies,getMovies,loading}= useMovies({search,sort})

const debouncedGetMovies = useCallback(
  debounce(search => {
    console.log('search', search)
    getMovies({ search })
  }, 300)
  , [getMovies]
)

const handleSubmit= (event) => {
  event.preventDefault()
  getMovies({search})
}

const handleChange= (event)=>{
  const newSearch= event.target.value
  updateSearch(newSearch)
  debouncedGetMovies(newSearch)
}

const handleSort=()=>{
  setSort(!sort)
}

  return (
  <div className='page'>
    <header>
      <h1>Buscador de peliculas</h1>
      <form className='form' onSubmit={handleSubmit}>
      <input onChange={handleChange} value={search} name='query' placeholder='Avengers, Star Wars, Dragon Ball' />
      <input type='checkbox' onChange={handleSort} name='sort ' checked={sort} value={sort}/>
      <button type='submit'>Search</button>
      </form>
    </header>
    <p>{error}</p>
    
    <main>
      {
        loading ? <p>Cargando...</p>
        :(
          <BrowserRouter>
          <Routes>
          <Route path='/movies/:id' element={<SingleMovie  />}/>
            <Route path='/' element={<Movies movies={movies} />} />
            
          </Routes>
        
        </BrowserRouter>
         )
      }
      
    </main>
  </div>
      
  )
}

export default App