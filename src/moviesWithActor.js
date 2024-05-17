const movies = require("../data/movies");

function moviesWithActor(ator) {
 return movies.filter(movie => movie.elenco.includes(ator))
}

module.exports = {
  moviesWithActor
}