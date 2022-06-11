const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.5 },
  { nome: 'Caderno', qtde: 4, preco: 27.1 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.2 }
]

const onlyNames = i => i.nome
const qtdMaiorQZero = i => i.qtde > 0
console.log(carrinho.filter(qtdMaiorQZero).map(onlyNames))

Array.prototype.meuFilter = function (fn) {
  const filtered = []

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      filtered.push(this[i])
    }
  }

  return filtered
}

console.log(carrinho.meuFilter(qtdMaiorQZero).map(onlyNames))
