//fn -> 3 * 7  = 21
//fn -> 3 + 7 = 10
//fn -> 3 - 7 = -4
//calcular(3)(7)(fn)

const calc = n1 => n2 => fn => fn(n1, n2)

const sum = (n1, n2) => n1 + n2
const sub = (n1, n2) => n1 - n2
const mult = (n1, n2) => n1 * n2
const div = (n1, n2) => n1 / n2

console.log(calc(3)(7)(sum))
console.log(calc(3)(7)(sub))
console.log(calc(3)(7)(mult))
console.log(calc(3)(7)(div))
