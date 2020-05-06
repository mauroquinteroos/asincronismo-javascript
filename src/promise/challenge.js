const fecthData = require('../utils/fetch')
const API = 'https://rickandmortyapi.com/api/character/'

fecthData(API)
.then(data => {
  console.log(`array length: ${data.info.count}`)
  return fecthData(`${API}${data.results[4].id}`)
})
.then(data => {
  console.log(`id: ${data.id}, name: ${data.name}, species: ${data.species}`)
  return fecthData(`${data.origin.url}`)
})
.then(data => {
  console.log(`dimension: ${data.dimension}`)
})
.catch(error => console.error(error))