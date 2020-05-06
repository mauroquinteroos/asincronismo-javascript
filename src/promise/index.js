// Promise
const promise1 = (condition = false) => {
  return new Promise((resolve, reject) => {
    if(condition)
      setTimeout(() => {
        resolve('Hey after three seconds!')
      }, 3000);
    else
      reject('Whoops!')
  })
}

promise1(true)
.then(result => console.log(result))
.catch(error => console.log(error))

// Promise
const promise2 = (condition = false) => {
  return new Promise((resolve, reject) => {
    if(condition) {
      setTimeout(() => {
        resolve('Hey after one second!')
      }, 1000);
    } else {
      const error = new Error('Whoops!')
      reject(error)
    }
  })
}

promise2(true)
.then(result => console.log(result))
.catch(error => console.log(error))

Promise.all([promise1(true), promise2(true)])
.then(response => console.log('Array of results', response))
.catch(error => console.log(error))