//Arrow function

const felizNatal = () => console.log('Feliz Natal!!!')
felizNatal()

const saudacao = nome => 'Fala ' + nome + '!!!'
console.log(saudacao('Marina'))

const sum = (...numeros) => {
  let total = 0
  for (let n of numeros) {
    total += n
  }
  return total
}

console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4, 5, 6))
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

//this
Array.prototype.logFirst = function () {
  console.log(this[0])
}
Array.prototype.logLast = function () {
  console.log(this[this.length - 1])
}
Array.prototype.logAll = function () {
  console.log(this)
}

const numeros = [1, 2, 3]
numeros.logFirst()
numeros.logLast()
numeros.logAll()
