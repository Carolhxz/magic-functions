const movies = require("../data/movies");

const findActorForTheMovie = (titulo) => {
  // Verificar se o título do filme é uma string válida
  if (!titulo || typeof titulo !== 'string' || titulo.trim() === '') {
      return "Filme não encontrado.";
  }

  // Buscar o filme pelo título
  const movie = movies.find(movie => movie.titulo === titulo);

  // Verificar se o filme foi encontrado
  if (!movie) {
      return "Filme não encontrado.";
  }

  // Verificar se o elenco do filme é definido e possui pelo menos dois atores
  if (!movie.elenco || movie.elenco.length < 2) {
      return "O elenco do filme é indefinido ou possui menos de dois atores.";
  }

  // Retornar os dois primeiros atores do elenco do filme
  return movie.elenco.slice(0, 2);
};

console.log(findActorForTheMovie("Interestelar"));

module.exports = {
  findActorForTheMovie
}