const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')
//console.log(__dirname)

function showContent(_, content) {
  console.log(content.toString())
}

console.log('Inicio')
fs.readFile(caminho, showContent)
fs.readFile(caminho, (_, content) => console.log(content.toString()))
console.log('Fim')

console.log('Inicio Sync...')
const content = fs.readFileSync(caminho)
console.log(content.toString())
console.log('Fim Sync...')
