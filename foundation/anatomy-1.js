//Function declaration

function sayHello() {
  console.log('Hello World!')
}

sayHello()

function sayHelloTo(name) {
  console.log(`Hello ${name}`)
}

sayHelloTo('Marina')

function returnHi() {
  return 'Hi'
}

const greeting = returnHi()

console.log(greeting)
console.log(returnHi())

function returnHiTo(name) {
  return `Hi, ${name}!`
}

console.log(returnHiTo('Marina'))
