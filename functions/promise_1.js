let p = new Promise(resolve => resolve(['Ana', 'Bia', 'Carlos', 'Daniel']))

p.then(valor => valor[0])
  .then(primeiro => primeiro[0])
  .then(letra => letra.toLowerCase())
  .then(console.log)
