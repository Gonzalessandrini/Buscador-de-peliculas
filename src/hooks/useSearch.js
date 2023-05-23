import { useState, useEffect, useRef } from "react"

export function useSearch() {

    const [search,updateSearch]= useState('')
    const [error,setError]= useState(null)
    const firstInput= useRef(true)

    useEffect(()=>{

      if(firstInput.current){
        firstInput.current= search == ''
        return
      }  

      if (search=='') {
        setError('No se puede buscar una pelicula vacia')
        return
      }
      
      if (search.length< 3){
        setError('No se puede buscar una pelicula con menos de 3 caracteres')
        return
      }

      setError(null)
    },[search])
  
    return{search,updateSearch,error}
  }