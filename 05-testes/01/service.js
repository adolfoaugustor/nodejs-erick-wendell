const { get } = require('axios')

const URL = `https://swapi.py4e.com/api/people`

async function obterPessoas(nome) {
   const url = `${URL}/?search=${nome}&format=json`
   const result = await get(url)
   // console.log(result.data)
   return result.data.results.map(mapearPessoas)
}

function mapearPessoas(item){   
   return {
      nome: item.name,
      peso: item.height
   }
}

module.exports = {
   obterPessoas
}









// obterPessoas('r2')
//    .then(function (resultado){
//       console.log('resultado', resultado)
//    })
//    .catch(function(error) {
//       console.error('DEU ERROR', error)
//    }) 