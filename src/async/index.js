const promise = (time, condition = false) => {
  return new Promise((resolve, reject) => {
    (condition)
    ? setTimeout(() => resolve('Do something async'), time)
    : reject(new Error('Test error'))
  })
}

// Async
const asyncFunction = async (time = 0, condition) => {
  try {
    const futureValue = await promise(time, condition)
    console.log(futureValue)
  } catch (error) {
    console.error(error)
  }
}

console.log(`Before async function 1`)
asyncFunction(3000, true)
console.log(`After async function 1`)

console.log(`Before async function 2`)
asyncFunction(1000, true)
console.log(`After async function 2`)