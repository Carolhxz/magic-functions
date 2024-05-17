const movies = require("../data/movies");

function countGenres(movies) {
  if (movies.length === 0) return {};

  return movies.reduce((contGenero, movie) => {
    if (movie.genero && movie.genero.length > 0) {
      movie.genero.forEach(genero => {
        contGenero[genero] = (contGenero[genero] || 0) + 1;
      });
    }
    return contGenero;
  }, {});
}

module.exports = {
  countGenres
}
