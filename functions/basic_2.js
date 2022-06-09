function bomDia() {
  console.log('Bom dia!')
}

const boaTarde = function () {
  console.log('Boa tarde!')
}

//Pass a function as a paramater to other function
function executeAnyThing(fn) {
  if (typeof fn === 'function') {
    fn()
  }
}

executeAnyThing(3)
executeAnyThing(bomDia)
executeAnyThing(boaTarde)

//Return a function from another function
function power(base) {
  return function (exp) {
    return Math.pow(base, exp)
  }
}

const pow2 = power(2)
console.log(pow2(8))
