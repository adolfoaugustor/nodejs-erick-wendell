const axios = require('axios')
const URL = `https://swapi.py4e.com/api/people`

async function obterPessoas(nome) {
   const url = `${URL}/?search=${nome}&format=json`
   const response = await axios.get(url)
   return response.data
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