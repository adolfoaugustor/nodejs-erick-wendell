const util = require('util')
const getAddressAsync = util.promisify(getAddress)

function getUser() {
   return new Promise(function resolvePromise(resolve, reject) {
      setTimeout(function() {
         return resolve ({
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
         })
      },1000)
   })
}

function getPhone(idUser) {
   return new Promise(function resolverPromise(resolve, reject) {
      setTimeout(() => {
         return resolve({
            telefone: '1100987654321',
            ddd: 85
         })
      },2000);
   })
}

function getAddress(idUser, callback) {
   setTimeout(() => {
      return callback(null, {
         rua: 'Rua teste',
         numero: 69
      })
   },2000);
}
main()
async function main() {
   try {
      console.time("medida-promise")
      const user = await getUser()
      // const telefone = await getPhone(user.id)
      // const endereco = await getAddressAsync(user.id)
      const resultado = await Promise.all([
         getPhone(user.id),
         getAddressAsync(user.id)
      ])
      const endereco = resultado[1]
      const telefone = resultado[0]
      console.log(`
         Nome: ${user.nome},
         Telefone: (${telefone.ddd}) ${telefone.telefone},
         Endereço: ${endereco.rua}, ${endereco.numero}
      `)
      console.timeEnd("medida-promise")
   } catch (error) {
      console.error("DEU RUIM", error)
   }
}
// const userPromise = getUser()

// userPromise
//    .then(function (user) {
//       return getPhone(user.id)
//       .then(function resolverTelefone(result) {
//          return {
//             usuario: {
//                nome: user.nome,
//                id: user.id
//             },
//             telefone: result
//          }
//       })
//    })
//    .then(function (resultado) {
//       const endereco = getAddressAsync(resultado.usuario.id)
//       return endereco.then(function resolverEndereco(result) {
//          return {
//             usuario: resultado.usuario,
//             telefone: resultado.telefone,
//             endereco: result
//          }
//       })
//    })
//    .then(function(resultado) {
//       console.log(`
//          Nome: ${resultado.usuario.nome},
//          Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero},
//          Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
//       `)
//    })
//    .catch(function (error) {
//       console.log('Deu Ruim', error)
//    })

// getUser(function resolverUsuario(error, user) {
//    if(error) {
//       console.error('Deu ruim em usuário', error)
//       return;
//    }

//    getPhone(user.id, function resolverTelefone(error1, phone) {
//       if(error1) {
//          console.error('Deu ruim em Phone', error)
//          return;
//       }
//       getAddress(user.id, function resolverEndereco(error2, address) {
//          if(error2) {
//             console.error('Deu ruim em Endereço', error)
//             return;
//          }
//          console.log(`
//             Nome: ${user.nome},
//             Endereco: Rua ${address.rua}, ${address.numero}
//             Phone: (${phone.ddd}) ${phone.numero}
//          `)
//       })
//    })
// })


// const user = getUser()
// const phone = getPhone(user.id)

// console.log('Usuário: ', usuario)
// console.log('Telefone: ', phone)