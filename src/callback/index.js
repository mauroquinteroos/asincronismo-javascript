// Callback
function sum(num1, num2) {
  return num1 + num2
}

function calc(num1, num2, callback) {
  return callback(num1, num2)
}

console.log(`Sum: ${calc(2, 9, sum)}`)

// Callback
function printDate(date) {
  console.log(date)
}

function date(callback) {
  console.log(new Date)
  setTimeout(() => {
    let date = new Date
    callback(date)
  }, 3000)
}

date(printDate)