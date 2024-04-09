const movies = require("../data/movies");

const filmSorted = (movies) => {
  // Criar uma cópia do array de filmes para evitar modificar o original
  const sortedMovies = movies.slice();
  
  // Ordenar os filmes com base no ano de lançamento
  sortedMovies.sort((a, b) => a.anoLancamento - b.anoLancamento);
  
  return sortedMovies;
};


module.exports = {
  filmSorted
}