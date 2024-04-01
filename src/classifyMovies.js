const movies = require("../data/movies");

function classifyMovies(movies) {
  const avaliacao = {
    "0-4.9": [],
    "5.0-7.9": [],
    "8.0-10.0": [],
   
  }
  //console.log("teste1", avaliacao);
  const disponibilidade = {
    disponiveis: [],
    naoDisponiveis: [],
  }
//console.log("teste2",disponibilidade);
  if (movies.length === 0) {
    return { avaliacao, disponibilidade }
  }

  for (const movie of movies) {
    const filme = {
      titulo: movie.titulo,
      diretor: movie.diretor,
      genero: movie.genero,
      anoLancamento: movie.anoLancamento,
      avaliacao: movie.avaliacao
    }
    //console.log("teste3",filme);

    if (filme.avaliacao >= 0 && filme.avaliacao < 5) {
      avaliacao["0-4.9"].push(filme)
    } else if (filme.avaliacao >= 5 && filme.avaliacao < 8.0) {
      avaliacao["5.0-7.9"].push(filme)
    } else if (filme.avaliacao >= 8 && filme.avaliacao <= 10){
      avaliacao["8.0-10.0"].push(filme)
    }
    //console.log(filme.avaliacao);

    if (movie.disponivel) {
      disponibilidade.disponiveis.push({ titulo: filme.titulo })
    } else {
      disponibilidade.naoDisponiveis.push({ titulo: filme.titulo })
    }      
  }

  avaliacao["0-4.9"].sort((a, b) => a.titulo.toUpperCase() > b.titulo.toUpperCase() ? 1 : -1)
  avaliacao["5.0-7.9"].sort((a, b) => a.titulo.toUpperCase() > b.titulo.toUpperCase() ? 1 : -1)
  avaliacao["8.0-10.0"].sort((a, b) => a.titulo.toUpperCase() > b.titulo.toUpperCase() ? 1 : -1)


  return [avaliacao,disponibilidade]
}
console.log(classifyMovies(movies)[1]);



module.exports = {
  classifyMovies
}