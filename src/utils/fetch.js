const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = () => {
      if(xhttp.readyState === 4) {
        (xhttp.status === 200)
        ? resolve(JSON.parse(xhttp.responseText))
        : reject(new Error(`Data not found: ${url}`))
        // : reject(new Error('Error', url))
      }
    }
    xhttp.open('GET', url, true)
    xhttp.send()
  })
}

module.exports = fetchData;