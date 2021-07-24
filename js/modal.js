/* Cliente */
const btnCliente = document.getElementById('btnCliente')
const modalCliente = document.getElementById('modalCliente')
const closeClient = document.getElementById('closeClient')


btnCliente.addEventListener('click', () => {
    modalCliente.classList.add('mostrar')
})

closeClient.addEventListener('click', () => {
    modalCliente.classList.remove('mostrar')

})

/*  Produto */
const btnProdutos = document.getElementById('btnProduto')
const modalProduto = document.getElementById('modalProduto')
const fecharProduto = document.getElementById('fecharProduto')

btnProduto.addEventListener('click', () => {
    modalProduto.classList.add('mostrar')
})

fecharProduto.addEventListener('click', () => {
    modalProduto.classList.remove('mostrar')
});

