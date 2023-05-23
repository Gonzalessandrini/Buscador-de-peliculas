import { Link } from "react-router-dom"

function ListOfMovies ({ movies }) {

    return (
      <div>
        
      <ul className='movies'>
        {
          movies.map(movie => (
            
            
            <li className='movie' key={movie.id}>
              <Link to={`/movies/${movie.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <img src={movie.poster} alt={movie.title} />
              
              </Link>

                      
            </li>
            
          ))
        }
      </ul>
      
      </div>
    )
  }
  
  function NoMoviesResults () {
    return (
      <p>No se encontraron películas para esta búsqueda</p>
    )
  }
  
  export function Movies ({ movies }) {
    const hasMovies = movies?.length > 0
  
    return (
      hasMovies
        ? <ListOfMovies movies={movies} />
        : <NoMoviesResults />
    )
  }