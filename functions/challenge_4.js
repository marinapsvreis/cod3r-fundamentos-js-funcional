const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function readFile(caminho){
  return new Promise(resolve => {
    fs.readFile(caminho, function(_, content){
    resolve(content.toString())
    })
  console.log('After read...')
  })
}

readFile(caminho)
.then(content => content.split('\n'))
.then(linhas => console.log(linhas[1]))


