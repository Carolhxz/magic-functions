const movies = require("../data/movies");

function listOverdueLoans(movies) {
  const currentDate = new Date()
  const emprestimoAtrasados = []
  movies.forEach(({id, titulo, emprestimos})=> 
    emprestimos
      .forEach(({nomePessoa, dataEmprestimo, dataDevolucao})=> {
        if (new Date(dataDevolucao)<currentDate) {
          emprestimoAtrasados.push({dataDevolucao,dataEmprestimo,id,nomePessoa,titulo})
        }
      }))  
  return emprestimoAtrasados
}

module.exports = {
  listOverdueLoans
}