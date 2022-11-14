/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const form = document.querySelector('form')
const display = document.querySelector('#output')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const inputValue = parseInt(document.querySelector('#search').value)

  if (isNaN(inputValue)) {
    alert('Please type a valid input')
    return
  }

  clearChildrenOfNode(display)

  displayAndConvertWeight(inputValue, 'Pounds', kgToPounds)
  displayAndConvertWeight(inputValue, 'Grams', kgToGrams)
  displayAndConvertWeight(inputValue, 'Ounces', kgToOunces)
})

const displayAndConvertWeight = (kg, unitName, callback) => {
  const wrapper = document.createElement('div')

  const unitHeading = document.createElement('p')
  unitHeading.textContent = unitName
  const valueDisplay = document.createElement('p')
  valueDisplay.textContent = callback(kg)

  wrapper.append(unitHeading, valueDisplay)
  display.append(wrapper)
}

const clearChildrenOfNode = (node) => {
  while (node.firstChild) {
    node.removeChild(node.lastChild)
  }
}

const kgToPounds = (kg) => {
  return kg * 2.2046
}

const kgToGrams = (kg) => {
  return kg / 0.001
}

const kgToOunces = (kg) => {
  return kg * 35.274
}
