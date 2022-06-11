const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.5 },
  { nome: 'Caderno', qtde: 4, preco: 27.1 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.2 }
]

const valorTotalPorProduto = i => i.qtde * i.preco
const somarTudo = (acumulador, elemento) => acumulador + elemento

console.log(carrinho.map(valorTotalPorProduto).reduce(somarTudo))

Array.prototype.meuReduce = function (fn, inicial) {
  let acc = inicial
  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i]
    } else {
      acc = fn(acc, this[i], i, this)
    }
  }

  return acc
}

console.log(carrinho.map(valorTotalPorProduto).meuReduce(somarTudo))
