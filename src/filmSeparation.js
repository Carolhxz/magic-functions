const movies = require("../data/movies");

function filmSeparation(movies, details = true) {
  const filmes = {};
  const uniqueGenres = new Set();

  movies.forEach(movie => {
    movie.genero.forEach(genero => {
      uniqueGenres.add(genero);
      if (!filmes[genero]) {
        filmes[genero] = [];
      }
      if (details) {
        filmes[genero].push(movie.titulo);
      } else {
        filmes[genero].push(movie);
      }
    });
  });

  for (let key in filmes) {
    if (details) {
      filmes[key] = filmes[key].sort((a, b) => a.localeCompare(b.titulo));
    } else {
      filmes[key] = filmes[key].sort();
    }
  }

  return filmes;
}

console.log(filmSeparation(movies));
module.exports = {
  filmSeparation
}
