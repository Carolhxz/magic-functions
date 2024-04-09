const movies = require("../data/movies");

const filmsAvailable = (movies) => {
  // Filtrar os filmes disponíveis
  const availableMovies = movies.filter(movie => movie.disponivel);

  // Extrair os títulos dos filmes disponíveis
  const titles = availableMovies.map(movie => movie.titulo);

  return titles;
};

module.exports = {
  filmsAvailable
}