const fecthData = require('../utils/fetch')
const API = 'https://rickandmortyapi.com/api/character/'

const getData = async (API) => {
  try {
    const data = await fecthData(API)
    const character = await fecthData(`${API}${data.results[3].id}`)
    const origin = await fecthData(character.origin.url)

    console.log(`Array Length: ${data.info.count}`)
    console.log(`name: ${character.name}, id: ${character.id}`)
    console.log(`Origin: ${origin.dimension}`)
  } catch (error) {
    console.error(error)
  }
}

getData(API)