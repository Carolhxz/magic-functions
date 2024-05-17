const movies = require("../data/movies");

const nolanFilms = (movies) => {
  const nolan = movies
  .filter(movie => movie.diretor === 'Christopher Nolan')
  .sort((a, b) => a - b);

  return nolan
 
}

module.exports = {
  nolanFilms
}