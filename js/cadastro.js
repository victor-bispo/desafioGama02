/*Cliente*/
const cadCliente = document.getElementById('cadCliente')

cadCliente.addEventListener('click', () => {

    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    let cpf = document.getElementById('cpf').value

    let dadosCliente = {

        nome,
        email,
        telefone,
        cpf

    }

    let convertDadosCliente = JSON.stringify(dadosCliente);

    if (localStorage.idClienteAtual) {
        localStorage.idClienteAtual = Number(localStorage.idClienteAtual) + 1;
        localStorage.setItem(`Cliente: ${localStorage.idClienteAtual}`, convertDadosCliente);
    } else {
        localStorage.idClienteAtual = 1;
        localStorage.setItem(`Cliente: ${localStorage.idClienteAtual}`, convertDadosCliente);
    }

    alert(`O cliente: ${dadosCliente.nome} foi cadastrado!`);
    document.getElementById('formCliente').reset();

});

/* Produto */
const cadProduto = document.getElementById('cadProduto')

cadProduto.addEventListener('click', () => {

    let produto = document.getElementById('produto').value
    let codigo = document.getElementById('codigo').value
    let categoria = document.getElementById('categoria').value
    let quantidade = document.getElementById('quantidade').value
    let descricao = document.getElementById('descricao').value

    let dadosProduto = {

        produto,
        codigo,
        categoria,
        quantidade,
        descricao

    }

    let convertDadosProduto = JSON.stringify(dadosProduto)

    if (localStorage.idProdutoAtual) {
        localStorage.idClienteAtual = Number(localStorage.idProdutoAtual) + 1;
        localStorage.setItem(`Produto: ${localStorage.idProdutoAtual}`, convertDadosProduto);
    } else {
        localStorage.idProdutoAtual = 1;
        localStorage.setItem(`Produto: ${localStorage.idProdutoAtual}`, convertDadosProduto);
    }

    alert(`Produto Cadastrado!`);
    document.getElementById('formProduto').reset();

});