function gerarNumerosEntre(min, max, time) {
  if (min > max) {
    [max, min] = [min, max]
  }

  return new Promise(resolve => {
    setTimeout(function(){
      const fator = max - min + 1
      const aleatorio = parseInt(Math.random() * fator) + min
      resolve(aleatorio)
    }, time)    
  })
}

function gerarVariosNumeros(){
  return Promise.all([
    gerarNumerosEntre(1,60,1000),
    gerarNumerosEntre(1,60,1000),
    gerarNumerosEntre(1,60,1000),
    gerarNumerosEntre(1,60,1000),
    gerarNumerosEntre(1,60,1000),
    gerarNumerosEntre(1,60,1000)
  ])
}

console.time('promise')
gerarVariosNumeros().then(numeros => numeros.sort((a,b)=>a-b)).then(numeros => console.log(numeros))
.then(()=>{
  console.timeEnd('promise')
})
