function removeAccent(str) {
  // Add your solution here!
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

var textAccent = 'Olá, tudo bem?'

var textAccent = removeAccent(textAccent)
console.log(textAccent)

module.exports = removeAccent
