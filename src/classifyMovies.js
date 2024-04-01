const movies = require("../data/movies");

function classifyMovies(movies) {
  const categorizedMovies = movies.reduce((acc, {avaliacao, disponivel, titulo, diretor, genero, anoLancamento})=> {
    let interval

    if (avaliacao >= 0 && avaliacao < 5.0) {
      interval = '0-4.9'
    } else if (avaliacao >= 5.0 && avaliacao < 8.0){
      interval = '5.0-7.9'
    } else {
      interval = '8.0-10.0'
    }

    acc.avaliacao[interval].push({titulo, diretor, genero, anoLancamento, avaliacao})
    disponivel ? acc.disponibilidade.disponiveis.push({titulo}) : acc.disponibilidade.naoDisponiveis.push({titulo})
    
    return acc
  }, {avaliacao: {'0-4.9': [], '5.0-7.9': [], '8.0-10.0': []}, disponibilidade: {disponiveis: [], naoDisponiveis: []}})

  for (const interval in categorizedMovies.avaliacao) {
    categorizedMovies.avaliacao[interval].sort((a,b)=> a.titulo.localeCompare(b.titulo))
  }

  return categorizedMovies
}

module.exports = {
  classifyMovies
}