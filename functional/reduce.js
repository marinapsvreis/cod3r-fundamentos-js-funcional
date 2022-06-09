const numbers = [1, 2, 3, 4, 5, 6]

const sum = (total, el) => total + el
const total = numbers.reduce(sum, 100)

console.log(total)

const avg = numbers.reduce(sum) / numbers.length

console.log(avg)

//const avg = (acc, el, i, array) => {
// if(i == array.length - 1){
//  return (acc + el) / array.length
//} else {
// return acc + el
//}
//}
