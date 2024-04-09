const movies = require("../data/movies");

const nolanFilms = (movies) => {
  // Filtrar os filmes dirigidos por Christopher Nolan
  const nolanMovies = movies.filter(movie => movie.diretor === 'Christopher Nolan');

  // Ordenar os filmes filtrados pela avaliação em ordem decrescente
  const sortedNolanMovies = nolanMovies.sort((a, b) => b.avaliacao - a.avaliacao);

  return sortedNolanMovies;
};


module.exports = {
  nolanFilms
}