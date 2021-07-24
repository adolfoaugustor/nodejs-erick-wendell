const { obterPessoas } = require('./service')

Array.prototype.meuFilter = function (callback) {
   const list = []
   for( index in this ){
      const item = this[index]
      const result = callback(item, index, this)
      if (!result) continue;
      list.push(item)
   }
   return list;
}

async function main(){
   try {
      const {
         results
      } = await obterPessoas(`a`)

      // const familiaLars = results.filter(function(item) {
      //    const result = item.name.toLowerCase().indexOf(`lars`) !== -1
      //    return result
      // })
      const familiaLars = results.meuFilter((item, index, list) => {
         console.log(`index: ${index}`, list.length)
         return item.name.toLowerCase().indexOf('lars') !== -1
      })

      const names = familiaLars.map((pessoa) => pessoa.name)
      console.log(names)
   } catch
    (error) {
      console.error('DEU MAL', error)
   }
}
main()