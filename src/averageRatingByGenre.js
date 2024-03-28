const movies = require("../data/movies");

function averageRatingByGenre(genero) {
  if (genero === undefined) {
    return "O parâmetro é obrigatório.";
  }
  if (typeof genero !== "string") {
    return "O parâmetro tem que ser uma string.";
  }
  const genremovies = movies.filter(movie => movie.genero.includes(genero));
  //console.log(genremovies);
  const avaliações = movies.map(movie => movie.avaliacao);
  
  //console.log(avaliações); 
  if (genremovies.length === 0) {
    return `Não há filmes desse genero ${genero}`;
  }
  const avaliaçãototal = genremovies.reduce((sum, movie) => sum + movie.avaliacao, 0);

  //console.log(avaliaçãototal);
  
  const avaliação = avaliaçãototal / genremovies.length;

  //console.log(avaliação);
  return avaliação.toFixed(2);
}

const genero = "Ação"; 
const avaliação2 = averageRatingByGenre(genero);

console.log(`Média de avaliações para ${genero}: ${avaliação2}`);

module.exports = {
  averageRatingByGenre
}