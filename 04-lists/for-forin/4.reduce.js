const { obterPessoas } = require('./service')

Array.prototype.meuReduce = function (callback, valorInicial) {
   let valorInicial = typeof valorInicial !== undefined ? valorInicial : this[0]
   for(let index = 0; index <= this.length - 1; index++){
      valorFinal = callback(valorFinal, this[index], this)
   }
}
async function main(){
   try {
      const { results } = await obterPessoas(`a`)
      const pesos = results.map(item => parseInt(item.height))
      console.log('pesos', pesos)
      
      // const total = pesos.reduce((anterior, proximo) => {
      //    return anterior + proximo
      // })

      const minhaLista = [
         ['Erick', 'Wal'],
         ['Augusto', 'NodeBr']
      ]
      const total = minhaLista.reduce((anterior, proximo) => {
         return anterior.concat(proximo)
      }, []).join(', ')
      console.log('total', total)

   } catch (error) {
      console.error('DEU MAL', error)
   }
}
main()