const movies = require("../data/movies");

function averageRatingByGenre(genero) {
// Verificar se o parâmetro genre foi fornecido
if (!genero) {
  return "O parâmetro é obrigatório.";
}

// Verificar se o parâmetro genre é uma string vazia
if (typeof genero !== 'string') {
  return "O parâmetro tem que ser uma string.";
}

// Filtrar os filmes pelo gênero fornecido
const generoMovies = movies.filter(movie => movie.genero.includes(genero));

// Verificar se não há filmes para o gênero fornecido
if (generoMovies.length === 0) {
  return `Não há filmes do gênero ${genero}.`;
}

// Calcular a média de avaliação dos filmes do gênero fornecido
const totalRating = generoMovies.reduce((acc, movie) => acc + movie.avaliacao, 0);
const averageRating = totalRating / generoMovies.length;

// Formatar a média de avaliação com duas casas decimais
const formattedAverage = averageRating.toFixed(2);

return `A média de avaliação dos filmes do gênero ${genero} é ${formattedAverage}.`;

}

module.exports = { 
  averageRatingByGenre
}