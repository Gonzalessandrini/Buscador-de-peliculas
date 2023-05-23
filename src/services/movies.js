const APIKEY=  '61601273'

export const searchMovies= async ({search})=>{
    
    if(search=='') return null
   
    try{
        const response= await fetch(`https://www.omdbapi.com/?apikey=${APIKEY}&s=${search}`)
        const json = await response.json()

        const movies= json.Search

        return movies?.map(movies =>(
            {
              title: movies.Title,
              year: movies.Year,
              id: movies.imdbID,
              poster: movies.Poster
            }))
            
    } catch(e){
        throw new Error('Error searching movies')
    }
}