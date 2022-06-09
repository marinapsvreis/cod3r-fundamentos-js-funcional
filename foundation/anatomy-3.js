//Arrow Function
const increment1 = function (n) {
  return n + 1
}

const increment2 = n => {
  return n + 1
}

const increment3 = n => n + 1

console.log(increment1(1))
console.log(increment2(5))
console.log(increment2(10))

const sum = (a, b) => a + b

console.log(sum(5, 4))
