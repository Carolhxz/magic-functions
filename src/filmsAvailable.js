const movies = require("../data/movies");

const filmsAvailable = (movies) => {
 return movies.filter((element) => element.disponivel == true).map((element) => element.titulo)
 
}



module.exports = {
  filmsAvailable
}