function Produto(nome, preco, desconto = 0.5){
  this.nome = nome
  this.preco = preco
  this._desconto = desconto

  this.precoFinal = () => this.preco * (1-this._desconto)
}

Produto.prototype.log = function(){
  console.log(`Nome: ${this.nome} Preço: ${this.preco}`)
}

Object.defineProperty(Produto.prototype, 'desconto', {
  get: function(){
    return this._desconto
  },
    set: function(novoDesconto){
    if(novoDesconto >= 0 && novoDesconto <= 1){
      this._desconto = novoDesconto
    }
  }
})

Object.defineProperty(Produto.prototype, 'descontoString', {
  get: function(){
    return `${this._desconto * 100}%`
  }
})

const p1 = new Produto('Caneta', 10)
console.log(p1.nome)
p1.log()

const p2 = new Produto('Geladeira', 3000)
console.log(p2.preco)

console.log(p2.precoFinal())

p2.desconto = 0.99

console.log(p2.desconto)
console.log(p2.descontoString)