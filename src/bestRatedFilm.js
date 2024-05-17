const movies = require("../data/movies");

const bestRatedFilm = (movies) => {
  let bestRated = movies[0];

  movies.forEach(movie => {
    if (movie.avaliacao > bestRated.avaliacao) {
      bestRated = movie;
    }
  });

  return bestRated;
}


module.exports = {
  bestRatedFilm
}