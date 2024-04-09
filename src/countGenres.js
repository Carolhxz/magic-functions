const movies = require("../data/movies");

function countGenres(movies){
  // Verificar se a lista de filmes está vazia
  if (movies.length === 0) {
      return {};
  }

  // Inicializar um objeto para armazenar a contagem de gêneros
  const genreCount = {};

  // Iterar sobre cada filme na lista
  movies.forEach((movie) => {
      // Verificar se o filme possui gêneros
      if (movie.genero && movie.genero.length > 0) {
          // Iterar sobre cada gênero do filme
          movie.genero.forEach((genre) => {
              // Incrementar a contagem de ocorrência do gênero no objeto genreCount
              if (genreCount[genre]) {
                  genreCount[genre]++;
              } else {
                  genreCount[genre] = 1;
              }
          });
      }
  });

  return genreCount;
};



module.exports = {
  countGenres
}
