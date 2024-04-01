const movies = require("../data/movies");

function listOverdueLoans(movies) {

  const data = new Date(); 

  const vencidos = [];

  for (const movie of movies) {
    if (movie.emprestimos) { 
      for (const loan of movie.emprestimos) {
        const date = new Date(loan.dataDevolucao); 
        if (date < data) { 
          vencidos.push({
            id: movie.id,
            titulo: movie.titulo,
            dataEmprestimo: loan.dataEmprestimo,
            dataDevolucao: loan.dataDevolucao,
            nomePessoa: loan.nomePessoa,
          });
        }
      }
    }
  }

  return vencidos;
}

console.log(listOverdueLoans(movies));

module.exports = {
  listOverdueLoans
}