const assert = require('assert')
const { obterPessoas } = require('./service')
const nock = require('nock')

// assert.ok(true)

describe('Star Wars Tests', function(){
   this.beforeAll(() => {
      const response = {
         "count": 1,
         "next": null,
         "previous": null,
         "results": [{
            "name": "R2-D2",
            "height": "96",
            "mass": "32",
            "hair_color": "n/a",
            "skin_color": "white, blue",
            "eye_color": "red",
            "birth_year": "33BBY",
            "gender": "n/a",
            "homeworld": "https://swapi.py4e.com/api/planets/8/",
            "films": [
               "https://swapi.py4e.com/api/films/1/",
               "https://swapi.py4e.com/api/films/2/",
               "https://swapi.py4e.com/api/films/3/",
               "https://swapi.py4e.com/api/films/4/",
               "https://swapi.py4e.com/api/films/5/",
               "https://swapi.py4e.com/api/films/6/",
               "https://swapi.py4e.com/api/films/7/"
            ],
            "species": [
               "https://swapi.py4e.com/api/species/2/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:11:50.376000Z",
            "edited": "2014-12-20T21:17:50.311000Z",
            "url": "https://swapi.py4e.com/api/people/3/"
         }]
      }

      nock('https://swapi.py4e.com/api/people')
         .get('/?search=r2-d2&format=json')
         .reply(200, response)
   })


   it('deve buscar o r2d2 com o formato correto', async () => {
      const expected = [{
         nome: "R2-D2",
         peso: "96"
      }]
      const nomeBase = `r2-d2`
      const resultado = await obterPessoas(nomeBase)
      assert.deepStrictEqual(resultado, expected)

   })
})