function removeAccent(str) {
  // Add your solution here!
  let helloWorldAccent = helloWorld
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  console.log(helloWorldAccent)
}

module.exports = removeAccent
