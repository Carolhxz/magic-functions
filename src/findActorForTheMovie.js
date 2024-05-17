const movies = require("../data/movies");

const findActorForTheMovie = (titulo) => {
  if (!titulo) return "Filme não encontrado.";

  const filme = movies.find(item => item.titulo.toUpperCase() === titulo.toUpperCase());

  if (!filme) return "Filme não encontrado.";

  return filme.elenco.slice(0, 2);
}

module.exports = {
  findActorForTheMovie
}