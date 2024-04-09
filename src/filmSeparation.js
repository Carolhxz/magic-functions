const movies = require("../data/movies");

function filmSeparation(movies, details = true) {
  if (movies.length === 0) return {};

    const genres = {};

    movies.forEach(movie => {
        movie.genero.forEach(genre => {
            if (!genres[genre]) {
                genres[genre] = [];
            }
            const movieInfo = {
                titulo: movie.titulo,
                anoLancamento: movie.anoLancamento,
                id: movie.id
            };
            if (details) {
                movieInfo.diretor = movie.diretor;
                movieInfo.avaliacao = movie.avaliacao;
            }
            genres[genre].push(movieInfo);
            genres[genre].sort((a, b) => a.titulo.localeCompare(b.titulo));
        });
    });

    if (!details) {
        Object.keys(genres).forEach(genre => {
            genres[genre] = genres[genre].map(movie => movie.titulo);
        });
    }

    return genres;
}

module.exports = {
  filmSeparation
}
