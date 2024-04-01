const movies = require("../data/movies");

function filmSeparation(movies, details = true) {
  return movies.reduce((acc, {anoLancamento, avaliacao, diretor, id, titulo, genero})=>{
    const movieDetails = details ? {anoLancamento, avaliacao, diretor, id, titulo} : titulo 
    genero.forEach((genero)=> {
      acc[genero] ? acc[genero].push(movieDetails) : acc[genero] = [movieDetails]
      
      details ? acc[genero].sort((a,b)=> a.titulo.localeCompare(b.titulo)) : acc[genero].sort()
    })
  return acc
  }, {})
}

module.exports = {
  filmSeparation
}
