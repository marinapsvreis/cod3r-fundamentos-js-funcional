//Anonymous function
;(function (a, b, c) {
  return a + b + c
})

//Function expression
var sum = function (a, b) {
  return a + b
}

const result = sum(7, 59)

console.log(result)

const anotherSum = sum
console.log(anotherSum(4, 4))

let x = 3
console.log(x)
x = sum
//Dont work
console.log(x(5, 5))
