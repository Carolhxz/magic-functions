const movies = require("../data/movies");

function filmSeparation(movies, details = true) {
  const generosEFilmes = {}

  for (const movie of movies) {
    if (movie.genero?.length > 0) {
      for (const genre of movie.genero) {
        generosEFilmes[genre] = generosEFilmes[genre] || []
        const itemDoArray = details ? {
          anoLancamento: movie.anoLancamento,
          avaliacao: movie.avaliacao,
          diretor: movie.diretor,
          id: movie.id,
          titulo: movie.titulo
        } : movie.titulo
        generosEFilmes[genre].push(itemDoArray)
      }
    }
  }

  const generosEFilmesOrdenados = {}
  for (const genero of Object.keys(generosEFilmes).sort()) {
    generosEFilmesOrdenados[genero] = details ?
      generosEFilmes[genero].sort((a, b) => a.titulo.localeCompare(b.titulo)) :
      generosEFilmes[genero].sort()
  }

  return generosEFilmesOrdenados


}

module.exports = {
  filmSeparation
}
