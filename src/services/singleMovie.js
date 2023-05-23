import { useState } from "react"

const APIKEY=  '61601273'

export  const getSingleMovies=async(id) =>{

    const [data,setData]= useState(null)

    const singleResponse= await fetch(`https://www.omdbapi.com/?apikey=${APIKEY}&i=${id}`)
    const singleJson = await singleResponse.json()

    setData(singleJson.Search) 

    return data
}