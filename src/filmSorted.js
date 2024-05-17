const movies = require("../data/movies");

const filmSorted = (movies) => {
  return [...movies].sort((a, b) => a.anoLancamento - b.anoLancamento);
}

module.exports = {
  filmSorted
}