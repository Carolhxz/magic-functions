const { movies } = require("../data/list1");

const titlesAndDirectors = (movies) => {
  return movies.forEach(({ titulo, diretor }) => {
    console.log(`Título: ${titulo} - Diretor: ${diretor}`);
  });
}

module.exports = {
  titlesAndDirectors
}