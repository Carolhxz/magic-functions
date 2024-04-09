const movies = require("../data/movies");

function getMovieById(id) {
  if (typeof id !== 'number' || isNaN(id)) {
    return undefined;
}

// Procurar o filme com o ID correspondente
const movie = movies.find(movie => movie.id === id);

// Retornar o filme encontrado ou undefined se não encontrado
return movie !== undefined ? movie : undefined;
}

module.exports = {
  getMovieById
}