const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://rickandmortyapi.com/api/character/'

function ajax(url, callback) {
  const xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function() {
    if(this.readyState === 4) {
      if(this.status === 200) {
        callback(JSON.parse(xhttp.responseText))
      } else {
        const error = new Error(`Data not found: ${url}`)
        return showError(error)
      }
    }
  }
  xhttp.open('GET', url, true)
  xhttp.send()
}

// When you catch error in the request
function showError(error) {
  return console.error(`API ${error}`)
}

ajax(API, function(data) {
  console.log(`Data array: ${data.info.count}`)

  ajax(`${API}${data.results[6].id}`, function(data) {
    console.log(`Data id: ${data.id}, Data name: ${data.name}`)

    ajax(`${data.origin.url}423432423`, function(data) {
      console.log(`Data dimension: ${data.dimension}`)
    })
  })
})