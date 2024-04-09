const movies = require("../data/movies");

const bestRatedFilm = (movies) => {
  // Verificar se a lista de filmes está vazia
  if (movies.length === 0) {
    return undefined;
}

// Encontrar o filme com a classificação mais alta
let bestRatedMovie = movies[0]; // Inicialmente, consideramos o primeiro filme como o melhor classificado
for (let i = 1; i < movies.length; i++) {
    if (movies[i].avaliacao > bestRatedMovie.avaliacao) {
        bestRatedMovie = movies[i];
    }
}

return bestRatedMovie;
}

module.exports = {
  bestRatedFilm
}