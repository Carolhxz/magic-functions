const movies = require("../data/movies");

function getAllTitles(movies) {
  // Se não houver filmes fornecidos, retornar array vazio
  if (movies.length === 0) {
      return [];
  }

  // Extrair os títulos de cada filme usando map()
  return movies.map(movie => movie.titulo);
}

module.exports = getAllTitles; // Exportar a função para uso externo

module.exports = {
  getAllTitles
}