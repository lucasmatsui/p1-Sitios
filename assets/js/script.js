const ClientesAdicionados = [];


adicionar = (e) => {
  e.preventDefault();
  const email = formCliente.email.value;
  const grau = formCliente.grau.value;
  const curso = formCliente.curso.value;
  const tipoTrabalho = formCliente.tipotrabalho.value;

  const titulo = formCliente.titulo.value;
  const subtitulo = formCliente.subtitulo.value;
  const ano = formCliente.ano.value;


  const palavra1 = formCliente.palavra1.value;
  const palavra2 = formCliente.palavra2.value;
  const palavra3 = formCliente.palavra3.value;
  const palavra4 = formCliente.palavra4.value;

  
  
  ClientesAdicionados.push({
    email:email, 
    grau:grau, 
    curso:curso, 
    tipoTrabalho:tipoTrabalho,
    titulo: titulo,
    subtitulo:subtitulo,
    ano: ano,
    palavra1: palavra1,
    palavra2:palavra2,
    palavra3: palavra3,
    palavra4: palavra4
  });

  document.getElementById("msg").innerHTML = "Adicionado com sucesso!";
  document.getElementById("msg").classList.add("success");
  document.getElementById("msg").style.display = "block";
  formCliente.email.value = '';
  formCliente.grau.value = '';
  formCliente.curso.value = '';
  formCliente.tipotrabalho.value = '';

  formCliente.titulo.value = '';
  formCliente.subtitulo.value = '';
  formCliente.ano.value = '';
  
  formCliente.palavra1.value = '';
  formCliente.palavra2.value = '';
  formCliente.palavra3.value = '';
  formCliente.palavra4.value = '';


console.log(ClientesAdicionados);

  

  setTimeout(() => {
    document.getElementById("msg").style.display = "none";
    document.getElementById("msg").classList.remove("success");
  }, 1000);

}

listar = (e) => {
  e.preventDefault();
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  if(ClientesAdicionados.length === 0) {
    tbody.innerHTML +=
    `
      <tr>
        <td colspan="4" class="td">Não tem nenhum cadastro no momento!</td>
      </tr>
    `;
    return false;
  }
  
  ClientesAdicionados.map(item => {
    tbody.innerHTML =
    `
      <tr><td><h1>Ficha Catalografica</h1></td></tr>

        <tr><td class="td"><br/><b>E-mail:</b><br/>${item.email}</td></tr>
        <tr><td class="td"><br/><b>Grau:</b><br/>${item.grau}</td></tr>
        <tr><td class="td"><br/><b>Curso:</b><br/>${item.curso}</td></tr>
        <tr><td class="td"><br/><b>Tipo de Trabalho</b><br/>${item.tipoTrabalho}</td></tr>

        <tr><td class="td"><br/><br/><b>Titulo do trabalho:</b><br/>${item.titulo}</td></tr>
        <tr><td class="td"><br/><b>Subtitulo:</b><br/>${item.subtitulo}</td></tr>
        <tr><td class="td"><br/><b>Ano:</b><br/>${item.ano}</td></tr>

        <tr><td class="td"><br/><br/><b>Palavra-chave 1:</b><br/>${item.palavra1}</td></tr>
        <tr><td class="td"><br/><b>Palavra-chave 2</b><br/>${item.palavra2}</td></tr>
        <tr><td class="td"><br/><b>Palavra-chave 3</b><br/>${item.palavra3}</td></tr>
        <tr><td class="td"><br/><b>Palavra-chave 4</b><br/>${item.palavra4}</td></tr>

    `;
  });  
}

