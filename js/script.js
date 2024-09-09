const produtos = [
    {nome: "arroz", preço: 7, estoque: 102, quant: 1},
    {nome: "feijão", preço: 12, estoque: 232, quant: 2},
    {nome: "macarrão", preço: 7, estoque: 86, quant: 3},
    {nome: "lasanha", preço: 23, estoque: 102, quant: 5},
    {nome: "frango", preço: 30, estoque: 233, quant: 2},
    {nome: "peixe", preço: 85, estoque: 97, quant: 1},
    {nome: "milanesa", preço: 55, estoque: 1, quant: 2},
    {nome: "manteiga", preço: 3.50, estoque: 0, quant: 7},
    {nome: "alface", preço: 23, estoque: 23, quant: 8},
    {nome: "óleo", preço: 10, estoque: 3, quant: 9},
    {nome: "L.condensado", preço: 9.50, estoque: 5, quant: 6},
    {nome: "biscoito", preço: 2.80, estoque: 1, quant: 6}
];

produtos.push(
    {nome:"mamão", preço: 7, estoque: 2, quant:2}
);

const ListCarrinho = produtos.filter(item => item.preço <=20 & item.quant > 1);
console.log(ListCarrinho);

const quantidade = ListCarrinho.filter(item => item.quant > 1);

const todosProdutos = produtos.map((item)=> {
    return `
     <div class="tabela">
                <section class="produtos">
                    <div class="nome-produto">
                        <h2>produto:</h2>
                        <h2>${item.nome}</h2>
    
                    </div>
                    <div class="preço-produto">
                        <h2>Valor:</h2>
                        <h2>R$${item.preço}</h2>
                    </div>
                    <p class="quantidade"></p>
                </section>
    </div>
    `
}).join("")

document.querySelector(".todos-produtos").innerHTML = todosProdutos

const ListCarinhoVisualizar = ListCarrinho.map((item) =>{
    return `
            <section class="produtos">
                <div class="nome-produto">
                    <h2>Produto:
                    <h2>${item.nome}</h2>
                </div>
                <div class="preço-produto">
                    <h2>Valor:</h2>
                    <h2>R$${item.preço}</h2>
                </div>
                <p>${item.quant}x</p>
            </section>
    `
}).join("");    


document.querySelector(".tabela-preços").innerHTML = ListCarinhoVisualizar;

const valorTotal = ListCarrinho.reduce((acc, item) => {
    return acc + item.preço 
},0);

document.querySelector("#total").innerHTML = `Valor final: R$${valorTotal.toFixed(2)}`;

