const movies = require("../data/movies");

const getAllTitles = (movies) => {
 if (!movies || movies.length === 0 ) {
  return []
 }

 return movies.map(movie => movie.titulo)
}

module.exports = {
  getAllTitles
}