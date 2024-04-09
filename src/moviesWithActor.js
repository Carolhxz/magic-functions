const movies = require("../data/movies");

function moviesWithActor(ator) {
  if (typeof ator !== 'string') {
    return [];
}

// Filtrar filmes que incluem o ator dado em seu elenco
const moviesWithActor = movies.filter(movie => movie.elenco.includes(ator));

// Retornar a lista de filmes encontrados ou um array vazio se nenhum filme correspondente for encontrado
return moviesWithActor;
}

module.exports = {
  moviesWithActor
}